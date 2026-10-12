import Page from './Page.jsx'
import { config } from '../config.js'

// Gabarit commun des pages légales : même en-tête que l'ancienne page Mentions légales.
export default function LegalPage({ name, title, intro, description, dated = true, children }) {
  return (
    <Page name={name} title={`${title} — PMD™`} description={description}>
      <section className="section" style={{ paddingTop: 68 }}>
        <div className="container" style={{ maxWidth: 820, display: 'grid', gap: 36 }}>
          <div>
            <p className="eyebrow">Informations légales</p>
            <h1 style={{ fontSize: 'clamp(32px,4vw,48px)', marginBottom: 14 }}>{title}</h1>
            <p className="lead">{intro}</p>
            {dated && <p className="small" style={{ marginTop: 14 }}>Dernière mise à jour : {config.legalUpdated}</p>}
          </div>
          {children}
        </div>
      </section>
    </Page>
  )
}
