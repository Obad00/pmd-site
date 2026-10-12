import { useLayoutEffect } from 'react'

// Titres de section, cartes et lignes de listes concernés par l'apparition au défilement.
const SELECTOR = '.heading, .split > div:first-child, .cells > *, .phase, .mod, .price-card, .person, .list > div, .cond, .steps li, .faq'
const DURATION = 500
const STEP = 70 // décalage entre deux éléments voisins
const MAX_DELAY = 280

// Apparition au défilement (fondu + translation, voir [data-reveal] dans styles.css).
// L'attribut est retiré une fois l'animation terminée : l'élément retrouve ses styles et son survol d'origine.
export function useReveal(ref) {
  useLayoutEffect(() => {
    const root = ref.current
    if (!root || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const timers = []
    const delays = new Map()
    const rank = new Map()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const el = entry.target
          observer.unobserve(el)
          el.dataset.reveal = 'in'
          timers.push(setTimeout(() => clear(el), DURATION + delays.get(el) + 60))
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    )
    const clear = (el) => {
      el.removeAttribute('data-reveal')
      el.style.removeProperty('--reveal-delay')
    }

    const items = [...root.querySelectorAll(SELECTOR)]
    for (const el of items) {
      const index = rank.get(el.parentElement) ?? 0
      rank.set(el.parentElement, index + 1)
      delays.set(el, Math.min(index * STEP, MAX_DELAY))
      el.style.setProperty('--reveal-delay', `${delays.get(el)}ms`)
      el.dataset.reveal = 'pending'
      observer.observe(el)
    }

    return () => {
      observer.disconnect()
      timers.forEach(clearTimeout)
      items.forEach(clear)
    }
  }, [ref])
}
