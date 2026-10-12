import { useEffect, useRef, useState } from 'react'
import { whatsappUrl } from '../config.js'
import { formsEnabled, submitForm } from '../lib/submitForm.js'

// Champs du formulaire sous forme d'objet ; les cases de même nom sont réunies (« Formation, Évaluation »).
function readFields(form) {
  const fields = {}
  for (const [name, value] of new FormData(form)) fields[name] = name in fields ? `${fields[name]}, ${value}` : value
  return fields
}

// Formulaire du site : mêmes vérifications que la maquette, puis envoi vers Apps Script.
// Sans VITE_FORMS_ENDPOINT (mode démo), il affiche la confirmation sans rien envoyer ni stocker.
export default function SiteForm({ id, errId, type, validate, success, submitLabel, children }) {
  const ref = useRef(null)
  const [error, setError] = useState('')
  const [failed, setFailed] = useState(false)
  const [sending, setSending] = useState(false)
  const [done, setDone] = useState(null)

  useEffect(() => {
    if (done) ref.current.scrollIntoView({ block: 'center' })
  }, [done])

  async function onSubmit(e) {
    e.preventDefault()
    if (sending) return
    setError('')
    setFailed(false)
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
    if (!formsEnabled) {
      setDone({ demo: true })
      return
    }
    setSending(true)
    try {
      setDone({ ref: await submitForm(type, readFields(f)) })
    } catch (err) {
      setError(err.message)
      setFailed(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <form id={id} ref={ref} noValidate onSubmit={onSubmit} aria-busy={sending}>
      {done ? (
        <div className="done" role="status">
          <h3>{success[0]}</h3>
          <p>{success[1]}</p>
          {done.ref && <p>Votre référence : <b>{done.ref}</b></p>}
          {done.demo && <p className="small">Aperçu du site : ce formulaire n’envoie encore rien. Une fois le site relié au serveur, la demande sera enregistrée et un e-mail de confirmation envoyé.</p>}
        </div>
      ) : (
        <>
          {children}
          <div className="hp" aria-hidden="true"><label>Site web<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label></div>
          <p className="err" id={errId} role="alert">{error}{failed && <> <a href={whatsappUrl()} target="_blank" rel="noopener">Écrivez-nous sur WhatsApp</a>.</>}</p>
          <div className="field full"><button className="button button-primary" type="submit" style={{ justifySelf: 'start' }} disabled={sending}>{sending ? 'Envoi…' : <>{submitLabel} <span aria-hidden="true">↗</span></>}</button></div>
        </>
      )}
    </form>
  )
}
