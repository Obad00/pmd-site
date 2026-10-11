import { useEffect } from 'react'

// Enveloppe d'une page : reprend le conteneur .page de la maquette et pose <title> + meta description.
export default function Page({ name, title, description, children }) {
  useEffect(() => {
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  }, [title, description])

  return <div className="page" data-page={name}>{children}</div>
}
