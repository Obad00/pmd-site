import { Link } from 'react-router-dom'
import Page from '../components/Page.jsx'
import { FAQ } from '../data/content.js'

export default function Faq() {
  return (
    <Page name="faq" title="Questions fréquentes — PMD™" description="Durée, admission, tarifs, certification, offres entreprises : les réponses aux questions fréquentes sur le programme PMD™.">
      <section className="section" style={{ paddingTop: 68 }}>
        <div className="container" style={{ maxWidth: 880 }}>
          <p className="eyebrow">Questions fréquentes</p>
          <h1 style={{ fontSize: 'clamp(32px,4vw,48px)', marginBottom: 44 }}>Tout savoir sur PMD™.</h1>
          <div>
            {FAQ.map(([group, questions]) => (
              <div className="faq-group" key={group}>
                <h2>{group}</h2>
                {questions.map(([q, a]) => (
                  <details className="faq" key={q}><summary>{q}</summary><p>{a}</p></details>
                ))}
              </div>
            ))}
          </div>
          <div className="callout"><span>Vous ne trouvez pas votre réponse ? <Link className="text-link" style={{ fontSize: 14 }} to="/contact">Écrivez-nous →</Link></span></div>
        </div>
      </section>
    </Page>
  )
}
