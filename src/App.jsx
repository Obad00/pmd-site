import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Accueil from './pages/Accueil.jsx'
import Certification from './pages/Certification.jsx'
import Parcours from './pages/Parcours.jsx'
import Entreprises from './pages/Entreprises.jsx'
import APropos from './pages/APropos.jsx'
import Candidature from './pages/Candidature.jsx'
import Contact from './pages/Contact.jsx'
import Faq from './pages/Faq.jsx'
import MentionsLegales from './pages/MentionsLegales.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Accueil />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="/parcours" element={<Parcours />} />
        <Route path="/entreprises" element={<Entreprises />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/candidature" element={<Candidature />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
