// Envoi des formulaires vers l'application web Google Apps Script (integrations/google-apps-script).
// Sans VITE_FORMS_ENDPOINT, le site reste en mode démo : rien n'est envoyé.
const ENDPOINT = (import.meta.env.VITE_FORMS_ENDPOINT || '').trim()
const TIMEOUT_MS = 15000

export const formsEnabled = Boolean(ENDPOINT)

// Erreur dont le message peut être affiché tel quel à l'utilisateur.
export class FormError extends Error {}

export async function submitForm(type, fields) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)
  try {
    // Pas d'en-tête Content-Type : le corps part en text/plain, ce qui évite la requête préalable CORS
    // qu'Apps Script ne sait pas traiter.
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      body: JSON.stringify({ ...fields, type, page: window.location.pathname }),
      signal: controller.signal,
    })
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    const data = await response.json()
    if (!data.ok) throw new FormError(data.error || 'Votre demande n’a pas pu être enregistrée.')
    return data.ref || ''
  } catch (error) {
    if (error instanceof FormError) throw error
    throw new FormError(
      error.name === 'AbortError'
        ? 'L’envoi a pris trop de temps. Vérifiez votre connexion, puis réessayez.'
        : 'L’envoi n’a pas abouti. Vérifiez votre connexion, puis réessayez.',
      { cause: error },
    )
  } finally {
    clearTimeout(timer)
  }
}
