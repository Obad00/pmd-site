// Animations du site, sans dépendance. Les états de départ ne sont posés que par ce module, juste avant de les
// animer : si le script échoue ou si l'observateur ne se déclenche pas, le contenu reste ou redevient visible.
// Les styles associés sont dans styles.css (section « Animations »).

const LINE_STEP = 60 // décalage entre deux lignes d'un titre
const STAGGER = 60 // décalage entre deux éléments voisins
const MAX_STAGGER = 300
const HERO_STEP = 90 // cascade du hero au chargement
const COUNT_MS = 900

const HERO_ITEMS = '.eyebrow, h1, .lead, .stats, .actions, .hero-note, .updated, .photo, .specimen, .specimen-cap'
const SCROLL_ITEMS = {
  eyebrow: '.eyebrow',
  title: 'h2',
  fade: '.heading > p, .split > div:first-child > :not(.eyebrow):not(h2), .cells > *, .phase, .mod, .price-card, .person, .faq, .cond, .faq-group h2',
  rule: '.list > div, .steps li',
  line: '.list',
  image: '.photo, .specimen',
  count: '.stats strong, .price-big, .book-price',
}
const DURATION = { eyebrow: 700, title: 800, fade: 700, rule: 700, line: 700, image: 900, count: COUNT_MS, hero: 700 }

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
const group = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

// --- Titres : une ligne = un masque -------------------------------------------------------------------------
// Les lignes sont mesurées sur le texte d'origine (API Range), puis reconstruites dans des éléments neutres
// <m-line><m-in>. restore() remet les nœuds d'origine, ceux que React connaît.
function splitLines(el) {
  const original = [...el.childNodes]
  const tokens = []
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT)
  const range = document.createRange()
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    let wrapper = node.parentNode
    while (wrapper !== el && wrapper.parentNode !== el) wrapper = wrapper.parentNode
    const re = /[ \n\t]+|[^ \n\t]+/g
    for (let m = re.exec(node.data); m; m = re.exec(node.data)) {
      const space = /^[ \n\t]/.test(m[0])
      let top = null
      if (!space) {
        range.setStart(node, m.index)
        range.setEnd(node, m.index + m[0].length)
        const rect = range.getClientRects()[0]
        top = rect ? rect.top + rect.height / 2 : null
      }
      tokens.push({ text: space ? ' ' : m[0], space, top, wrapper: wrapper === el ? null : wrapper })
    }
  }
  const lineHeight = parseFloat(getComputedStyle(el).lineHeight) || parseFloat(getComputedStyle(el).fontSize) * 1.2
  const lines = []
  let current = null
  let lastTop = null
  for (const token of tokens) {
    if (!token.space && token.top !== null && (lastTop === null || Math.abs(token.top - lastTop) > lineHeight / 2)) {
      current = []
      lines.push(current)
      lastTop = token.top
    }
    if (current) current.push(token)
  }
  if (!lines.length) return null

  const built = lines.map((line, i) => {
    while (line.length && line[line.length - 1].space) line.pop()
    const outer = document.createElement('m-line')
    const inner = document.createElement('m-in')
    inner.style.setProperty('--m-i', i)
    let target = inner
    let wrapper = null
    for (const token of line) {
      if (token.wrapper !== wrapper) {
        wrapper = token.wrapper
        target = wrapper ? inner.appendChild(wrapper.cloneNode(false)) : inner
      }
      target.append(token.text)
    }
    if (i < lines.length - 1) inner.append(' ') // garde l'espace entre deux lignes pour la lecture d'écran et la copie
    outer.append(inner)
    return outer
  })
  el.replaceChildren(...built)
  return { lines: built.length, restore: () => el.replaceChildren(...original) }
}

// --- Chiffres : comptent jusqu'à leur valeur ------------------------------------------------------------------
function prepareCount(el) {
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT)
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    const m = /^(\D*?)(\d[\d ]*\d|\d)(\D*)$/.exec(node.data)
    if (!m) continue
    const original = node.data
    const value = Number(m[2].replace(/ /g, ''))
    const format = (n) => m[1] + (m[2].includes(' ') ? group(n) : String(n)) + m[3]
    el.style.minWidth = `${el.getBoundingClientRect().width}px` // évite que la mise en page bouge pendant le décompte
    node.data = format(0)
    let frame = 0
    return {
      run() {
        const start = performance.now()
        const tick = (now) => {
          const t = Math.min((now - start) / COUNT_MS, 1)
          node.data = t < 1 ? format(Math.round(value * (1 - Math.pow(1 - t, 4)))) : original
          if (t < 1) frame = requestAnimationFrame(tick)
          else el.style.removeProperty('min-width')
        }
        frame = requestAnimationFrame(tick)
      },
      reset() {
        cancelAnimationFrame(frame)
        node.data = original
        el.style.removeProperty('min-width')
      },
    }
  }
  return null
}

function prepareRule(el, side) {
  const style = getComputedStyle(el)
  el.style.setProperty('--m-rule-w', side === 'top' ? style.borderTopWidth : style.borderBottomWidth)
  el.style.setProperty('--m-rule-c', side === 'top' ? style.borderTopColor : style.borderBottomColor)
  el.dataset.mSide = side
}

export function initMotion(root) {
  if (!root || reducedMotion()) return () => {}

  const items = [] // { el, kind, delay, state, extra }
  const timers = new Set()
  const later = (fn, ms) => {
    const t = setTimeout(() => {
      timers.delete(t)
      fn()
    }, ms)
    timers.add(t)
  }
  let observer = null
  let onScroll = null
  let disposed = false

  const clean = (item) => {
    const { el, extra } = item
    extra?.restore?.()
    extra?.reset?.()
    for (const name of ['m', 'mState', 'mSide']) delete el.dataset[name]
    for (const name of ['--m-delay', '--m-rule-w', '--m-rule-c']) el.style.removeProperty(name)
    item.state = 'done'
  }

  const reveal = (item) => {
    if (item.state !== 'pending') return
    item.state = 'running'
    observer?.unobserve(item.el)
    let total = DURATION[item.kind] + item.delay
    if (item.kind === 'title') {
      const split = splitLines(item.el)
      if (split) {
        item.extra = split
        total += split.lines * LINE_STEP
      }
    } else if (item.kind === 'count') {
      later(() => item.extra.run(), item.delay)
    }
    item.el.dataset.mState = 'in'
    later(() => clean(item), total + 80)
  }

  const add = (el, kind, delay) => {
    const item = { el, kind, delay, state: 'pending', extra: null }
    if (kind === 'count') {
      item.extra = prepareCount(el)
      if (!item.extra) return null
    }
    if (kind === 'rule') prepareRule(el, el.matches('.steps li') ? 'top' : 'bottom')
    if (kind === 'line') prepareRule(el, 'top')
    el.dataset.m = kind
    el.dataset.mState = 'pending'
    el.style.setProperty('--m-delay', `${delay}ms`)
    items.push(item)
    return item
  }

  const dispose = () => {
    if (disposed) return
    disposed = true
    observer?.disconnect()
    if (onScroll) {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
    timers.forEach(clearTimeout)
    items.forEach((item) => item.state !== 'done' && clean(item))
  }

  try {
    const taken = new Set()
    const inLegal = (el) => el.closest('.pmd-legal')

    // 1. Hero : cascade au chargement, sans attendre le défilement.
    const hero = root.querySelector('.hero, .page-hero') || root.querySelector('section')
    const heroItems = hero ? [...hero.querySelectorAll(HERO_ITEMS)].filter((el) => !inLegal(el) && !el.closest('form, .panel, .cells')) : []
    const heroRun = []
    heroItems.forEach((el, i) => {
      if (heroItems.some((other) => other !== el && other.contains(el))) return
      taken.add(el)
      const delay = Math.min(i, 8) * HERO_STEP
      const kind = el.matches('h1') ? 'title' : el.matches('.eyebrow') ? 'eyebrow' : el.matches('.photo, .specimen') ? 'image' : 'fade'
      heroRun.push(add(el, kind, delay))
      if (el.matches('.stats')) el.querySelectorAll('strong').forEach((n) => heroRun.push(add(n, 'count', delay + 200)))
    })
    // Les lignes du titre dépendent de la police : on attend qu'elle soit prête, 400 ms au plus.
    const start = () => !disposed && heroRun.forEach((item) => item && reveal(item))
    if (document.fonts?.status === 'loaded' || !document.fonts) start()
    else Promise.race([document.fonts.ready, new Promise((r) => later(r, 400))]).then(start)

    // 2. Reste de la page : au défilement. Pages légales : statiques.
    if ('IntersectionObserver' in window) {
      const rank = new Map()
      const isTaken = (el) => taken.has(el) || [...taken].some((t) => t.contains(el))
      for (const [kind, selector] of Object.entries(SCROLL_ITEMS)) {
        for (const el of root.querySelectorAll(selector)) {
          if (inLegal(el) || el.dataset.m || (kind !== 'count' && isTaken(el)) || (kind === 'count' && taken.has(el))) continue
          if (kind === 'title' && el.matches('.faq-group h2')) continue
          const index = rank.get(el.parentElement) ?? 0
          rank.set(el.parentElement, index + 1)
          add(el, kind, kind === 'count' ? 0 : Math.min(index * STAGGER, MAX_STAGGER))
        }
      }
      const byElement = new Map(items.map((item) => [item.el, item]))
      observer = new IntersectionObserver(
        (entries) => entries.forEach((entry) => entry.isIntersecting && reveal(byElement.get(entry.target))),
        { rootMargin: '0px 0px -6% 0px', threshold: 0.01 },
      )
      const scrollItems = items.filter((item) => !heroRun.includes(item))
      scrollItems.forEach((item) => observer.observe(item.el))

      // Repli si l'observateur ne se déclenche pas : même contrôle, fait à la main au défilement.
      let queued = false
      const check = () => {
        queued = false
        for (const item of scrollItems) {
          if (item.state !== 'pending') continue
          // Tout ce qui est à l'écran ou déjà dépassé (saut vers une ancre, défilement rapide) est révélé.
          if (item.el.getBoundingClientRect().top < window.innerHeight * 0.94) reveal(item)
        }
      }
      onScroll = () => {
        if (queued) return
        queued = true
        requestAnimationFrame(check)
      }
      window.addEventListener('scroll', onScroll, { passive: true })
      window.addEventListener('resize', onScroll, { passive: true })
      later(check, 300)
      later(check, 1200)
    }
  } catch (error) {
    console.error('Animations désactivées :', error)
    dispose()
  }

  return dispose
}
