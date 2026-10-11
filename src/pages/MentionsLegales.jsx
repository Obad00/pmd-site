import Page from '../components/Page.jsx'
import { config } from '../config.js'

const { brand, contact } = config

const block = { display: 'grid', gap: 10 }
const h2 = { fontSize: 24 }
const Tbd = () => <span className="tbd">à compléter</span>

export default function MentionsLegales() {
  return (
    <Page name="legal" title="Mentions légales et confidentialité — PMD™" description={`Mentions légales, protection des données personnelles et cookies du site PMD™, un programme ${brand}.`}>
      <section className="section" style={{ paddingTop: 68 }}>
        <div className="container" style={{ maxWidth: 820, display: 'grid', gap: 36 }}>
          <div><p className="eyebrow">Informations légales</p><h1 style={{ fontSize: 'clamp(32px,4vw,48px)' }}>Mentions légales et confidentialité.</h1></div>
          <div style={block}><h2 style={h2}>Éditeur</h2><p className="muted">{brand} — raison sociale <Tbd />, NINEA <Tbd />, RCCM <Tbd />, siège <Tbd />. Directeur de la publication <Tbd />. Contact : {contact.email}. Hébergeur <Tbd />. PMD™ est une marque de {brand}.</p></div>
          <div style={block}><h2 style={h2}>Données personnelles</h2><p className="muted">Les données saisies dans les formulaires servent uniquement à traiter votre candidature, votre demande ou votre message. Elles ne sont ni vendues ni cédées. Conformément à la loi sénégalaise n° 2008-12 sur la protection des données à caractère personnel, vous disposez d’un droit d’accès, de rectification, d’opposition et de suppression, que vous pouvez exercer en nous contactant.</p></div>
          <div style={block}><h2 style={h2}>Cookies</h2><p className="muted">Aucun outil de mesure d’audience n’est chargé sans votre consentement.</p></div>
        </div>
      </section>
    </Page>
  )
}
