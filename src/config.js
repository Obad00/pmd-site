// Paramètres validés par le client (LISEZMOI-DEVELOPPEUR.md, section 1). Ils font foi :
// toute valeur de prix, durée, session ou contact affichée sur le site doit venir d'ici.

export const config = {
  brand: 'Yello UPSKILL', // jamais « Yello Academy » ni « Yello Mobility »
  duration: { weeks: 12, hours: 72, phases: 4, weeksPerPhase: 3, modulesPerPhase: 3, modules: 12, exams: 5, domains: 5 },
  session: { year: 2026, month: 12, day: 5, everyMonths: 3 },
  minAge: 21,
  prices: { pack: 120000, training: 72000, exam: 48000, book: 14900 },
  thresholds: { quiz: 80, global: 75, domain: 60, retakeMonths: 3 },
  contact: {
    phones: ['+221 78 431 95 95', '+221 78 156 01 56'],
    whatsapp: '221784319595',
    email: 'support@yelloapp.co',
    city: 'Dakar, Sénégal',
  },
  // Tant que ce mode est actif, les formulaires valident les champs mais n'envoient et ne stockent rien.
  forms: { demo: true },
}

const MONTHS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']

// Espace simple comme séparateur de milliers, comme dans la maquette.
export const fcfa = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

const { session, prices } = config
const nextIndex = session.month - 1 + session.everyMonths

export const sessionShort = `${session.day} ${MONTHS[session.month - 1]}`
export const sessionLabel = `${sessionShort} ${session.year}`
export const nextSessionLabel = `${MONTHS[nextIndex % 12]} ${session.year + Math.floor(nextIndex / 12)}`
export const sessionDate = new Date(session.year, session.month - 1, session.day)

export function sessionCountdown() {
  const days = Math.ceil((Date.UTC(session.year, session.month - 1, session.day) - Date.now()) / 864e5)
  return days > 0 ? `J-${days}` : 'session en cours'
}

// Lien WhatsApp vers le numéro principal, avec un message prérempli facultatif.
export const whatsappUrl = (text, number = config.contact.whatsapp) =>
  `https://wa.me/${String(number).replace(/\D/g, '')}` + (text ? `?text=${encodeURIComponent(text)}` : '')

export const price = {
  pack: fcfa(prices.pack),
  training: fcfa(prices.training),
  exam: fcfa(prices.exam),
  book: fcfa(prices.book),
  selfTaught: fcfa(prices.book + prices.exam),
}
