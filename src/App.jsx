import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import { ROUTES } from './routes.js'
import Accueil from './pages/Accueil.jsx'
import Certification from './pages/Certification.jsx'
import Parcours from './pages/Parcours.jsx'
import Entreprises from './pages/Entreprises.jsx'
import APropos from './pages/APropos.jsx'
import Candidature from './pages/Candidature.jsx'
import Contact from './pages/Contact.jsx'
import Faq from './pages/Faq.jsx'
import MentionsLegales from './pages/MentionsLegales.jsx'
import Confidentialite from './pages/Confidentialite.jsx'
import Cgu from './pages/Cgu.jsx'
import PlanDuSite from './pages/PlanDuSite.jsx'

const PAGES = {
  '/': Accueil,
  '/certification': Certification,
  '/parcours': Parcours,
  '/entreprises': Entreprises,
  '/a-propos': APropos,
  '/candidature': Candidature,
  '/contact': Contact,
  '/faq': Faq,
  '/mentions-legales': MentionsLegales,
  '/confidentialite': Confidentialite,
  '/cgu': Cgu,
  '/plan-du-site': PlanDuSite,
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {ROUTES.map(({ path }) => {
          const PageComponent = PAGES[path]
          return <Route key={path} path={path} element={<PageComponent />} />
        })}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
