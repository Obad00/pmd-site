import { Link } from 'react-router-dom'
import Page from '../components/Page.jsx'
import { Modules, Phases } from '../components/Blocks.jsx'
import { config, sessionLabel, sessionShort } from '../config.js'
import photoPolo from '../assets/photo-polo-pmd.jpg'

const { duration, thresholds } = config

export default function Parcours() {
  return (
    <Page name="parcours" title={`Le parcours PMD™ — ${duration.modules} modules en ${duration.weeks} semaines`} description={`Le programme PMD™ en détail : ${duration.phases} phases de ${duration.weeksPerPhase} semaines, ${duration.modules} modules et ${duration.hours} heures pour devenir conducteur professionnel.`}>
      <section className="page-hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Le parcours PMD™</p>
            <h1>{duration.modules} modules pour devenir conducteur professionnel.</h1>
            <p className="lead">De la sécurité routière à la qualité de service, un parcours structuré pour acquérir les compétences du métier, les pratiquer et les démontrer.</p>
            <div className="stats" style={{ marginTop: 28 }}>
              <div><strong>{duration.phases}</strong><span>phases</span></div>
              <div><strong>{duration.weeksPerPhase}</strong><span>semaines par phase</span></div>
              <div><strong>{duration.hours} h</strong><span>au total</span></div>
            </div>
            <div className="actions"><Link className="button button-primary" to="/candidature">Candidater au programme <span aria-hidden="true">↗</span></Link><Link className="button button-secondary" to="/certification">Règles de certification</Link></div>
          </div>
          <figure className="photo" style={{ margin: 0 }}><img src={photoPolo} alt="Conducteur en polo officiel PMD" style={{ objectPosition: 'center 15%' }} /><figcaption className="photo-tag"><span className="dot"></span>Tenue, posture, image : des compétences qui se travaillent</figcaption></figure>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="heading"><div><p className="eyebrow">La méthode</p><h2>Apprendre, pratiquer, évaluer, certifier.</h2></div><p>Leçons, supports écrits ou vidéo, études de cas et mises en situation. Les activités sont précisées au démarrage de chaque session.</p></div>
          <div className="cells c4">
            <div><span className="num">01</span><h3>Apprendre</h3><p>Découvrir les notions et les bonnes pratiques du métier.</p></div>
            <div><span className="num">02</span><h3>Pratiquer</h3><p>Exercices, études de cas et mises en situation réelles.</p></div>
            <div><span className="num">03</span><h3>Évaluer</h3><p>Un quiz par module, à valider avec au moins {thresholds.quiz} %.</p></div>
            <div><span className="num">04</span><h3>Certifier</h3><p>Les {duration.exams} épreuves finales et la décision du jury.</p></div>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="heading"><div><p className="eyebrow">Les {duration.phases} phases</p><h2>Trois semaines et trois modules par phase.</h2></div><p>Chaque phase s’appuie sur la précédente.</p></div>
          <Phases />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="heading"><div><p className="eyebrow">Les {duration.modules} modules</p><h2>Le programme en détail.</h2></div><p>Chaque module correspond à un chapitre du PMD™ BOOK, le référentiel du conducteur professionnel.</p></div>
          <Modules />
          <div className="callout" style={{ marginTop: 36 }}><span>Valider les modules ne délivre pas automatiquement la certification : elle dépend des épreuves finales. <Link className="text-link" style={{ fontSize: 13 }} to="/certification#tarifs">Découvrir le PMD™ BOOK →</Link></span></div>
        </div>
      </section>

      <section className="section dark" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <p className="eyebrow light" style={{ justifyContent: 'center' }}>Prochaine session</p>
          <h2 style={{ marginBottom: 16 }}>La prochaine session commence le {sessionLabel}.</h2>
          <p className="muted" style={{ marginBottom: 26 }}>Vérifiez les conditions d’éligibilité, puis déposez votre candidature.</p>
          <div className="actions" style={{ justifyContent: 'center' }}><Link className="button button-light" to="/candidature">Candidater pour le {sessionShort} <span aria-hidden="true">↗</span></Link><Link className="button button-ghost" to="/certification">Conditions d’éligibilité</Link></div>
        </div>
      </section>
    </Page>
  )
}
