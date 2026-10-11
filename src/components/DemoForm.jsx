import { useEffect, useRef, useState } from 'react'

// Formulaire en mode démo : mêmes vérifications que la maquette, puis message de confirmation.
// Rien n'est envoyé ni stocké (voir config.forms.demo).
export default function DemoForm({ id, errId, validate, success, submitLabel, children }) {
  const ref = useRef(null)
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (done) ref.current.scrollIntoView({ block: 'center' })
  }, [done])

  function onSubmit(e) {
    e.preventDefault()
    setError('')
    const f = ref.current
    const bad = [...f.querySelectorAll('[required]')].filter((x) => (x.type === 'checkbox' ? !x.checked : !x.checkValidity() || !x.value.trim()))
    if (bad.length) {
      const l = bad[0].labels && bad[0].labels[0]
      setError('Merci de compléter les champs obligatoires' + (l && bad[0].type !== 'checkbox' ? ' (dont « ' + l.textContent.trim().slice(0, 50) + ' »)' : '') + '.')
      bad[0].focus()
      return
    }
    const x = validate && validate(f)
    if (x) {
      setError(x)
      return
    }
    setDone(true)
  }

  return (
    <form id={id} ref={ref} noValidate onSubmit={onSubmit}>
      {done ? (
        <div className="done"><h3>{success[0]}</h3><p>{success[1]}</p><p className="small">Aperçu du site : ce formulaire n’envoie encore rien. Une fois le site relié au serveur, la demande sera enregistrée et un e-mail de confirmation envoyé.</p></div>
      ) : (
        <>
          {children}
          <p className="err" id={errId} role="alert">{error}</p>
          <div className="field full"><button className="button button-primary" type="submit" style={{ justifySelf: 'start' }}>{submitLabel} <span aria-hidden="true">↗</span></button></div>
        </>
      )}
    </form>
  )
}
