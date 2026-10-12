import { Link } from 'react-router-dom'
import Page from '../components/Page.jsx'
import SiteForm from '../components/SiteForm.jsx'
import { config, nextSessionLabel, price, sessionDate, sessionLabel } from '../config.js'

const { duration, minAge, session } = config

function validate(f) {
  const d = f.querySelector('#c-dob').value
  if (d) {
    const b = new Date(d)
    const s = sessionDate
    const a = s.getFullYear() - b.getFullYear() - (s.getMonth() < b.getMonth() || (s.getMonth() === b.getMonth() && s.getDate() < b.getDate()) ? 1 : 0)
    if (a < minAge) return `Le programme est ouvert aux candidats de ${minAge} ans révolus à la date de début de session.`
  }
  if (f.querySelector('#c-permis').value === 'non') return 'Un permis de conduire valide est requis pour suivre le programme PMD.'
}

export default function Candidature() {
  return (
    <Page name="candidature" title={`Candidater au programme PMD™ — session du ${sessionLabel}`} description={`Déposez votre candidature au programme PMD™ pour la session du ${sessionLabel}. Places limitées, trois minutes suffisent.`}>
      <section className="section" style={{ paddingTop: 68 }}>
        <div className="container formwrap">
          <div>
            <p className="eyebrow">Candidature · session du {sessionLabel}</p>
            <h1 style={{ fontSize: 'clamp(32px,4vw,48px)', marginBottom: 14 }}>Candidater au programme PMD™.</h1>
            <p className="lead" style={{ marginBottom: 36 }}>Chaque candidature est étudiée. Le dépôt ne vaut pas admission. Comptez trois minutes.</p>
            <SiteForm type="candidature" id="f-cand" errId="c-err" validate={validate} submitLabel="Envoyer ma candidature" success={['Merci, votre candidature est bien enregistrée.', 'Vous allez recevoir un accusé de réception par e-mail. Notre équipe étudie votre dossier et vous contacte pour la suite.']}>
              <div className="field"><label htmlFor="c-pre">Prénom</label><input id="c-pre" name="prenom" required autoComplete="given-name" /></div>
              <div className="field"><label htmlFor="c-nom">Nom</label><input id="c-nom" name="nom" required autoComplete="family-name" /></div>
              <div className="field"><label htmlFor="c-dob">Date de naissance</label><input id="c-dob" name="dateNaissance" type="date" required autoComplete="bday" /></div>
              <div className="field"><label htmlFor="c-tel">Téléphone (WhatsApp)</label><input id="c-tel" name="telephone" type="tel" required placeholder="+221" autoComplete="tel" /></div>
              <div className="field"><label htmlFor="c-mail">E-mail</label><input id="c-mail" name="email" type="email" required autoComplete="email" /></div>
              <div className="field"><label htmlFor="c-ville">Ville / quartier</label><input id="c-ville" name="ville" required autoComplete="address-level2" /></div>
              <div className="field"><label htmlFor="c-permis">Permis de conduire valide</label><select id="c-permis" name="permisValide" required><option value="">Sélectionner</option><option value="oui">Oui</option><option value="non">Non</option></select></div>
              <div className="field"><label htmlFor="c-an">Année d’obtention du permis</label><input id="c-an" name="anneePermis" type="number" inputMode="numeric" min="1960" max={session.year} required /></div>
              <div className="field"><label htmlFor="c-exp">Expérience de conduite professionnelle</label><select id="c-exp" name="experience" required><option value="">Sélectionner</option><option>Aucune</option><option>Moins d’un an</option><option>1 à 3 ans</option><option>Plus de 3 ans</option></select></div>
              <div className="field"><label htmlFor="c-ses">Session souhaitée</label><select id="c-ses" name="session" required><option>{sessionLabel}</option><option>Session suivante ({nextSessionLabel})</option></select></div>
              <div className="field"><label htmlFor="c-act">Activité actuelle <span className="opt">(facultatif)</span></label><select id="c-act" name="activite"><option value="">Sélectionner</option><option>Conducteur VTC</option><option>Chauffeur d’entreprise</option><option>Taxi</option><option>Autre emploi</option><option>Sans emploi</option><option>Étudiant</option></select></div>
              <div className="field"><label htmlFor="c-form">Formule</label><select id="c-form" name="formule" required><option>Pack complet · {price.pack} FCFA</option><option>Formation seule · {price.training} FCFA</option><option>Examen seul (candidat libre) · {price.exam} FCFA</option></select></div>
              <div className="field full"><label htmlFor="c-mot">Motivation</label><textarea id="c-mot" name="motivation" required maxLength={1500} placeholder="Pourquoi voulez-vous devenir conducteur professionnel ? Quelle est votre expérience ?"></textarea></div>
              <div className="field full"><label className="chk"><input type="checkbox" id="c-rgpd" name="consentement" value="oui" required /> J’accepte que mes données soient utilisées pour traiter ma candidature, conformément à la <Link to="/confidentialite">politique de confidentialité</Link>.</label></div>
            </SiteForm>
          </div>
          <aside className="panel">
            <div className="band">Session du {sessionLabel}</div>
            <dl>
              <div><dt>Durée</dt><dd>{duration.weeks} semaines · {duration.hours} h</dd></div>
              <div><dt>Pack complet</dt><dd>{price.pack} FCFA</dd></div>
              <div><dt>Formation seule</dt><dd>{price.training} FCFA</dd></div>
              <div><dt>Examen seul</dt><dd>{price.exam} FCFA</dd></div>
              <div><dt>Places</dt><dd>Limitées</dd></div>
              <div><dt>Âge minimum</dt><dd>{minAge} ans</dd></div>
              <div><dt>Permis</dt><dd>Valide</dd></div>
            </dl>
            <div className="pad">
              <p className="lbl" style={{ marginBottom: 8 }}>Après votre candidature</p>
              <ol style={{ margin: 0, paddingLeft: 20, color: '#666', fontSize: 14, display: 'grid', gap: 5 }}>
                <li>Accusé de réception par e-mail</li>
                <li>Étude de votre dossier</li>
                <li>Échange avec l’équipe PMD</li>
                <li>Réponse et inscription</li>
              </ol>
              <p className="small" style={{ marginTop: 12 }}>Pièce d’identité et permis vous seront demandés à l’étude du dossier.</p>
            </div>
          </aside>
        </div>
      </section>
    </Page>
  )
}
