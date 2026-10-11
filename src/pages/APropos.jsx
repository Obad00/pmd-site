import { Link } from 'react-router-dom'
import Page from '../components/Page.jsx'
import { config } from '../config.js'
import photoEcusson from '../assets/photo-ecusson-pmd.jpg'

const { brand } = config

export default function APropos() {
  return (
    <Page name="apropos" title={`À propos — ${brand} × PMD™`} description={`${brand} conçoit le programme PMD™ : une approche de l’apprentissage orientée vers les compétences, la pratique et la progression.`}>
      <section className="page-hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">{brand} × PMD™</p>
            <h1>L’apprentissage au service du métier.</h1>
            <p className="lead">Un apprentissage efficace ne se limite pas à transmettre des informations. Il aide chaque apprenant à comprendre, pratiquer, mémoriser et progresser.</p>
          </div>
          <figure className="photo" style={{ margin: 0, height: 380 }}><img src={photoEcusson} alt="Écusson PMD brodé" style={{ objectPosition: 'center 55%' }} /></figure>
        </div>
      </section>

      <section className="section">
        <div className="container split top">
          <div><p className="eyebrow">Notre approche</p><h2>Des contenus transformés en parcours.</h2></div>
          <div style={{ display: 'grid', gap: 16 }}>
            <p className="lead">{brand} transforme des contenus de formation en parcours structurés, interactifs et orientés vers les compétences.</p>
            <p className="muted">La formation ne s’arrête pas à la fin du cours. L’apprenant revient sur les notions difficiles, s’exerce, vérifie sa compréhension et sait comment poursuivre. Avec PMD™, cette approche s’applique à un métier où les connaissances doivent se traduire en comportements observables.</p>
            <p className="quote" style={{ marginTop: 12 }}>Le professionnalisme se construit dans la pratique, la responsabilité et la <em>progression continue.</em></p>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="heading"><div><p className="eyebrow">Apprendre autrement</p><h2>Six leviers pédagogiques.</h2></div><p>Les apprenants n’avancent pas tous au même rythme. Certaines fonctionnalités numériques sont encore en développement.</p></div>
          <div className="cells c3">
            <div><span className="kick">Sciences de l’apprentissage</span><p>Segmenter les contenus, solliciter le rappel actif, espacer les révisions, revenir sur les erreurs.</p></div>
            <div><span className="kick">Microlearning</span><p>Travailler une notion ciblée, répondre à quelques questions, reprendre à son rythme.</p></div>
            <div><span className="kick">Apprentissage adaptatif</span><p>Utiliser la progression pour orienter les révisions et les activités complémentaires.</p></div>
            <div><span className="kick">Coach IA</span><p>Expliquer, reformuler, proposer des révisions et aider à comprendre une erreur.</p></div>
            <div><span className="kick">Activités pédagogiques</span><p>Cours, quiz, flashcards, études de cas et mises en situation.</p></div>
            <div><span className="kick">Accompagnement</span><p>Savoir quoi apprendre, comment s’exercer, où trouver de l’aide et quelle étape suivre.</p></div>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <div className="heading"><div><p className="eyebrow light">Ce qui guide notre action</p><h2>Cinq valeurs.</h2></div></div>
          <div className="cells c5">
            <div><span className="kick">Prévention</span><p>Protéger les personnes, préparer le véhicule, anticiper les risques.</p></div>
            <div><span className="kick">Service</span><p>Ponctualité, courtoisie et fiabilité se travaillent.</p></div>
            <div><span className="kick">Évaluation</span><p>Relier connaissances, exercices et critères explicites.</p></div>
            <div><span className="kick">Responsabilité</span><p>Respecter les procédures, les personnes et le métier.</p></div>
            <div><span className="kick">Progression</span><p>Faire des difficultés un point de départ.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="heading"><div><p className="eyebrow">L’équipe</p><h2>Les personnes derrière le programme.</h2></div><p>Conception de solutions d’apprentissage, coordination opérationnelle et développement de partenariats.</p></div>
          <div className="team">
            <div className="person"><div className="avatar" aria-hidden="true">SM</div><div><h3>Stéphane Mancabo</h3><p className="role">Fondateur · EdTech, produit, apprentissage</p><p>Travaille à l’intersection de l’éducation, du numérique et de la conception de parcours : produits EdTech, déploiement de solutions numériques, IA appliquée à la pédagogie.</p></div></div>
            <div className="person"><div className="avatar" aria-hidden="true">AM</div><div><h3>Aminata Mendes</h3><p className="role">Business Operations &amp; Partnerships</p><p>Coordination opérationnelle, gestion de projet, relations professionnelles et structuration des processus de développement des offres.</p></div></div>
          </div>
          <div className="actions" style={{ marginTop: 40 }}><Link className="button button-primary" to="/parcours">Découvrir le parcours</Link><Link className="button button-secondary" to="/contact">Contacter PMD</Link></div>
        </div>
      </section>
    </Page>
  )
}
