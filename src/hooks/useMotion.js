import { useLayoutEffect } from 'react'
import { initMotion } from '../lib/motion.js'

// Lance les animations de la page (hero au chargement, reste au défilement) et les démonte proprement.
export function useMotion(ref) {
  useLayoutEffect(() => initMotion(ref.current), [ref])
}
