import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { config } from '../config.js'
import logo from '../assets/pmd-logo.png'

const NAV = [
  ['/', 'Accueil'],
  ['/certification', 'Certification'],
  ['/parcours', 'Parcours'],
  ['/entreprises', 'Entreprises'],
  ['/a-propos', 'À propos'],
  ['/contact', 'Contact'],
]

const YEAR = new Date().getFullYear()

export default function Layout() {
  const location = useLocation()
  // Le menu mobile est lié à la navigation en cours : il se referme de lui-même à chaque changement de page.
  const [openKey, setOpenKey] = useState(null)
  const open = openKey === location.key
  const setOpen = (next) => setOpenKey(next ? location.key : null)

  // En-tête compact (hauteur réduite + ombre) au-delà de 24 px de défilement.
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Même comportement que la maquette : haut de page à chaque navigation, sauf ancre (#tarifs, #demande).
  useEffect(() => {
    const id = location.hash.slice(1)
    if (id === 'contenu') return
    const el = id ? document.getElementById(id) : null
    if (!el) {
      window.scrollTo(0, 0)
      return
    }
    const t = setTimeout(() => el.scrollIntoView({ block: 'start' }), 10)
    return () => clearTimeout(t)
  }, [location])

  return (
    <>
      <a className="skip" href="#contenu">Aller au contenu</a>
      <header className={scrolled ? 'site-header is-scrolled' : 'site-header'}>
        <div className="container nav-wrap">
          <Link className="brand" to="/" aria-label="PMD, accueil"><img src={logo} alt="PMD — Professional Mobility Driver Certification" /></Link>
          <button className="menu-toggle" id="burger" type="button" aria-expanded={open} aria-controls="nav" aria-label="Ouvrir le menu" onClick={() => setOpen(!open)}><span></span><span></span></button>
          <nav className={open ? 'main-nav open' : 'main-nav'} id="nav" aria-label="Navigation principale">
            {NAV.map(([to, label]) => (
              <NavLink key={to} to={to} end onClick={() => setOpen(false)}>{label}</NavLink>
            ))}
            <NavLink className="nav-cta" to="/candidature" onClick={() => setOpen(false)}>Candidater</NavLink>
          </nav>
        </div>
      </header>

      <main id="contenu">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand"><img src={logo} alt="PMD — Professional Mobility Driver Certification" /><p>Un programme porté par {config.brand}, consacré au développement et à l’évaluation des compétences des conducteurs professionnels de mobilité.</p><p>WhatsApp : {config.contact.phones.join(' · ')}<br />{config.contact.email}</p></div>
          <div><h4>Explorer</h4><nav aria-label="Explorer"><Link to="/certification">Certification</Link><Link to="/parcours">Parcours</Link><Link to="/entreprises">Entreprises</Link><Link to="/a-propos">À propos</Link></nav></div>
          <div><h4>Candidats</h4><nav aria-label="Candidats"><Link to="/candidature">Candidater</Link><Link to="/certification#tarifs">Tarifs</Link><Link to="/faq">Questions fréquentes</Link><Link to="/contact">Contact</Link></nav></div>
          <div><h4>Informations</h4><nav aria-label="Informations"><Link to="/mentions-legales">Mentions légales</Link><Link to="/confidentialite">Confidentialité et cookies</Link><Link to="/cgu">Conditions d’utilisation</Link><Link to="/plan-du-site">Plan du site</Link><a href="/confidentialite#cookies" data-cookie-settings>Gérer les cookies</a></nav></div>
        </div>
        <div className="container footer-bottom"><span>© <span id="yr">{YEAR}</span> PMD™ — Professional Mobility Driver Certification</span><span>Conduire est une compétence. Être conducteur professionnel est un métier.</span></div>
      </footer>
    </>
  )
}
