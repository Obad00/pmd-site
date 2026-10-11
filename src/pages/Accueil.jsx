import { Link } from 'react-router-dom'
import Page from '../components/Page.jsx'
import { ExamsShort, Phases } from '../components/Blocks.jsx'
import { config, sessionCountdown, sessionLabel, sessionShort } from '../config.js'
import photoVolant from '../assets/photo-conducteur-volant.jpg'
import photoEcusson from '../assets/photo-ecusson-pmd.jpg'

const { duration, brand, session } = config

export default function Accueil() {
  return (
    <Page name="accueil" title="PMD™ Professional Mobility Driver" description={`PMD™ — Professional Mobility Driver Certification. Un programme ${brand} de ${duration.hours} heures sur ${duration.weeks} semaines pour devenir conducteur professionnel.`}>
      <Link className="session-band" to="/candidature">
        <span className="container">
          <span className="sb-l"><span className="sb-tag">Inscriptions ouvertes</span><span>Prochaine session le <b>{sessionLabel}</b> · places limitées · <span className="js-countdown">{sessionCountdown()}</span></span></span>
          <span className="sb-cta">Candidater à la session du {sessionShort} →</span>
        </span>
      </Link>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Professional Mobility Driver Certification</p>
            <h1>Transformez votre permis en compétence professionnelle. <span>Devenez conducteur certifié PMD™.</span></h1>
            <p className="lead">PMD™ vous prépare à exercer comme conducteur professionnel dans le VTC, le transport d’entreprise, l’hôtellerie, le tourisme et les services de mobilité.</p>
            <div className="stats">
              <div><strong>{duration.weeks}</strong><span>semaines</span></div>
              <div><strong>{duration.hours} h</strong><span>de formation</span></div>
              <div><strong>{duration.modules}</strong><span>modules</span></div>
              <div><strong>{duration.exams}</strong><span>épreuves</span></div>
            </div>
            <div className="actions">
              <Link className="button button-primary" to="/candidature">Candidater pour le {sessionShort} <span aria-hidden="true">↗</span></Link>
              <Link className="button button-secondary" to="/parcours">Voir le programme</Link>
            </div>
            <p className="hero-note"><span className="dot"></span>Un programme porté par {brand} · une nouvelle session tous les {session.everyMonths} mois</p>
          </div>
          <figure className="photo" style={{ margin: 0 }}>
            <img src={photoVolant} alt="Conducteur PMD en tenue officielle au volant, ceinture attachée" style={{ objectPosition: 'center 30%' }} />
            <figcaption className="photo-tag"><span className="dot"></span>Sécurité, posture, service : le standard PMD</figcaption>
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="heading"><div><p className="eyebrow">Le métier</p><h2>Un conducteur professionnel doit savoir bien plus que conduire.</h2></div><p>Six savoir-faire distinguent un professionnel de la mobilité. Le parcours PMD les développe, puis les évalue.</p></div>
          <div className="cells c3">
            <div><span className="kick">Sécuriser</span><p>Anticiper les risques et protéger ses passagers.</p></div>
            <div><span className="kick">Servir</span><p>Offrir une expérience client professionnelle.</p></div>
            <div><span className="kick">Gérer</span><p>Rester calme face aux imprévus et aux situations difficiles.</p></div>
            <div><span className="kick">Maîtriser</span><p>Son véhicule, son environnement et ses outils.</p></div>
            <div><span className="kick">Performer</span><p>Respecter des standards professionnels mesurables.</p></div>
            <div><span className="kick">Représenter</span><p>Une entreprise, une marque et un métier.</p></div>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="heading"><div><p className="eyebrow">Le programme</p><h2>{duration.phases} phases de {duration.weeksPerPhase} semaines.</h2></div><p>Chaque phase regroupe trois modules. On progresse des fondamentaux jusqu’aux épreuves de certification.</p></div>
          <Phases />
          <p style={{ marginTop: 26 }}><Link className="text-link" to="/parcours">Voir le détail des {duration.modules} modules →</Link></p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">La certification</p>
            <h2>Suivre les cours ne suffit pas. Il faut démontrer ses compétences.</h2>
            <p className="lead" style={{ margin: '20px 0 26px' }}>Cinq épreuves encadrées, des critères publiés à l’avance et un profil de compétences remis à chaque candidat.</p>
            <Link className="text-link" to="/certification">Comprendre la certification →</Link>
          </div>
          <ExamsShort />
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="heading"><div><p className="eyebrow">Débouchés</p><h2>Où exercent les conducteurs PMD.</h2></div><p>La certification atteste de compétences recherchées dans six environnements. Elle ne garantit pas un emploi.</p></div>
          <div className="cells c3">
            <div><span className="kick">VTC</span><p>Plateformes et flottes de mobilité.</p></div>
            <div><span className="kick">Corporate</span><p>Transport de collaborateurs et de dirigeants.</p></div>
            <div><span className="kick">Hôtellerie</span><p>Hôtels, resorts et services clients.</p></div>
            <div><span className="kick">Tourisme</span><p>Transferts, excursions et mobilité touristique.</p></div>
            <div><span className="kick">Premium</span><p>Services VIP et clientèle haut de gamme.</p></div>
            <div><span className="kick">Entreprises</span><p>Services de mobilité professionnelle.</p></div>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container split">
          <div>
            <p className="eyebrow light">Pour les organisations</p>
            <h2>Faites du professionnalisme une compétence à développer.</h2>
            <p className="lead" style={{ margin: '20px 0 24px' }}>Formez vos conducteurs, mesurez leurs compétences et suivez leur progression.</p>
            <ul className="checks"><li>Formation de vos équipes au parcours PMD</li><li>Évaluation de vos conducteurs en poste</li><li>Parcours adaptés à votre secteur</li></ul>
            <Link className="button button-light" to="/entreprises">Présenter vos besoins <span aria-hidden="true">↗</span></Link>
          </div>
          <figure className="photo" style={{ margin: 0, height: 420, maxWidth: 380, justifySelf: 'end' }}><img src={photoEcusson} alt="Écusson PMD brodé sur le polo officiel" /></figure>
        </div>
      </section>

      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Session du {sessionLabel}</p>
          <h2 style={{ marginBottom: 16 }}>Vous ne cherchez pas simplement à conduire. Vous voulez devenir un professionnel de la mobilité.</h2>
          <p className="muted" style={{ marginBottom: 26 }}>Les places sont limitées. Déposez votre candidature en trois minutes.</p>
          <div className="actions" style={{ justifyContent: 'center' }}><Link className="button button-primary" to="/candidature">Candidater pour le {sessionShort} <span aria-hidden="true">↗</span></Link><Link className="button button-secondary" to="/faq">Questions fréquentes</Link></div>
        </div>
      </section>
    </Page>
  )
}
