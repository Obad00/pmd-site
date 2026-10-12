import { useEffect, useRef } from 'react'
import { useReveal } from '../hooks/useReveal.js'

// Enveloppe d'une page : reprend le conteneur .page de la maquette et pose <title> + meta description.
export default function Page({ name, title, description, children }) {
  const ref = useRef(null)
  useReveal(ref)

  useEffect(() => {
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  }, [title, description])

  return <div className="page" data-page={name} ref={ref}>{children}</div>
}
