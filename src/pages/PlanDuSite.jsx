import { Link } from 'react-router-dom'
import LegalPage from '../components/LegalPage.jsx'
import { ROUTES } from '../routes.js'

const GROUPS = [...new Set(ROUTES.map((r) => r.group))]

export default function PlanDuSite() {
  return (
    <LegalPage name="plan" title="Plan du site" dated={false} intro="Toutes les pages du site PMD™, classées par rubrique." description="Plan du site PMD™ : toutes les pages, classées par rubrique.">
      <div className="pmd-legal pmd-plan" lang="fr">
        {GROUPS.map((group) => (
          <section key={group}>
            <h2>{group}</h2>
            <ul>
              {ROUTES.filter((r) => r.group === group).map((r) => (
                <li key={r.path}><Link to={r.path}>{r.label}</Link></li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </LegalPage>
  )
}
