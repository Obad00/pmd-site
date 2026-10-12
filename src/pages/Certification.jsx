import { Link } from 'react-router-dom'
import Page from '../components/Page.jsx'
import { ExamsFull } from '../components/Blocks.jsx'
import { config, price, whatsappUrl } from '../config.js'
import certificat from '../assets/certificat-specimen-yello-upskill.jpg'
import logo from '../assets/pmd-logo.png'

const { duration, thresholds, minAge, brand } = config

const row = { flexDirection: 'row', justifyContent: 'space-between' }

export default function Certification() {
  return (
    <Page name="certification" title="La certification PMD™ — épreuves, critères et tarifs" description={`Conditions d’éligibilité, ${duration.exams} épreuves, critères de réussite et tarifs de la certification PMD™, un programme ${brand}.`}>
      <section className="page-hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">La certification PMD™</p>
            <h1>Une certification qui se mérite. <span>Des règles connues à l’avance.</span></h1>
            <p className="lead">Le PMD™ atteste qu’un conducteur a démontré, lors d’évaluations encadrées, les compétences attendues d’un professionnel de la mobilité : sécurité, maîtrise du véhicule, qualité de service, fiabilité et comportement.</p>
            <div className="actions" style={{ marginTop: 28 }}><Link className="button button-primary" to="/candidature">Candidater <span aria-hidden="true">↗</span></Link><Link className="button button-secondary" to="/certification#tarifs">Voir les tarifs</Link></div>
          </div>
          <figure style={{ margin: 0 }}>
            <div className="specimen"><img src={certificat} alt="Spécimen du certificat de qualification professionnelle PMD niveau 1" /></div>
            <figcaption className="specimen-cap"><span>Spécimen du certificat PMD™ — Niveau 1</span><span>Numéro officiel vérifiable</span></figcaption>
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="heading"><div><p className="eyebrow">Conditions d’éligibilité</p><h2>Qui peut entrer dans le programme ?</h2></div><p>Deux séries de conditions : celles pour être admis en formation, puis celles pour accéder aux épreuves finales.</p></div>
          <div className="elig">
            <div className="stage">
              <div className="stage-top"><span>Pour être admis</span></div>
              <div className="list">
                <div><span><b>Avoir {minAge} ans révolus</b><p>À la date de début de la session.</p></span></div>
                <div><span><b>Être titulaire d’un permis de conduire valide</b><p>En cours de validité au moment de l’inscription.</p></span></div>
                <div><span><b>Déposer un dossier complet</b><p>Formulaire de candidature, copie de la pièce d’identité, copie du permis de conduire et extrait de casier judiciaire valide.</p></span></div>
                <div><span><b>Être retenu après étude du dossier</b><p>Chaque candidature est examinée, puis suivie d’un échange avec l’équipe PMD.</p></span></div>
                <div><span><b>Régler les frais d’inscription</b><p>Avant le premier jour de la session.</p></span></div>
                <div><span><b>S’engager à respecter le code de conduite PMD</b><p>Assiduité, ponctualité, respect des personnes et des consignes de sécurité.</p></span></div>
              </div>
            </div>
            <div className="stage">
              <div className="stage-top"><span>Pour accéder aux épreuves</span></div>
              <div className="list">
                <div><span><b>Parcours accompagné : suivre les {duration.modules} modules</b><p>Sur {duration.weeks} semaines et {duration.hours} heures, en validant chaque quiz de module avec au moins {thresholds.quiz} %.</p></span></div>
                <div><span><b>Candidat libre : s’inscrire directement à l’examen</b><p>Vous vous préparez seul, par exemple avec le PMD™ BOOK, puis vous passez les mêmes {duration.exams} épreuves, avec les mêmes critères de réussite.</p></span></div>
                <div><span><b>Être inscrit à l’examen de certification</b><p>Les frais d’examen ({price.exam} FCFA, inclus dans le pack complet) doivent être réglés avant la date des épreuves.</p></span></div>
              </div>
              <div className="callout" style={{ marginTop: 'auto' }}><span><b>Pourquoi {thresholds.quiz} % aux quiz ?</b> Dans le parcours accompagné, les quiz vérifient que les bases sont acquises avant les épreuves pratiques. Ce seuil ne compte pas dans la note finale.</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="heading"><div><p className="eyebrow">Les {duration.exams} épreuves</p><h2>Démontrer, pas seulement réciter.</h2></div><p>Chaque épreuve vérifie une facette du métier, avec un format adapté.</p></div>
          <ExamsFull />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="heading"><div><p className="eyebrow">Critères de certification</p><h2>Comment la décision est prise.</h2></div><p>Aux épreuves finales, trois conditions doivent être réunies en même temps. Si une seule manque, le candidat est ajourné.</p></div>
          <div className="decide">
            <div className="stage">
              <div className="stage-top"><span>Les 3 conditions de réussite</span></div>
              <div className="cond"><strong>{thresholds.global}/100</strong><span><b>Une note globale d’au moins {thresholds.global} sur 100</b><p>Elle combine les résultats des cinq épreuves.</p></span></div>
              <div className="cond"><strong>{thresholds.domain} %</strong><span><b>Au moins {thresholds.domain} % dans chacun des {duration.domains} domaines</b><p>Sécurité, conduite, service, fiabilité, professionnalisme. Un bon score global ne compense pas un domaine trop faible.</p></span></div>
              <div className="cond"><strong>0</strong><span><b>Aucune faute critique de sécurité</b><p>Un comportement qui met gravement en danger les passagers ou les autres usagers entraîne l’ajournement, quelle que soit la note.</p></span></div>
            </div>
            <div className="stage">
              <div className="stage-top"><span>Trois exemples</span></div>
              <div className="cases-wrap" style={{ marginTop: 0 }}>
                <table className="cases">
                  <thead><tr><th>Candidat</th><th>Note globale</th><th>Domaine le plus faible</th><th>Faute critique</th><th>Décision</th></tr></thead>
                  <tbody>
                    <tr><td data-label="Candidat">A</td><td className="num-c" data-label="Note globale">82/100</td><td className="num-c" data-label="Domaine le plus faible">Service 71 %</td><td data-label="Faute critique">Aucune</td><td data-label="Décision"><span className="verdict v-ok">Certifié</span></td></tr>
                    <tr><td data-label="Candidat">B</td><td className="num-c" data-label="Note globale">81/100</td><td className="num-c" data-label="Domaine le plus faible">Service 55 %</td><td data-label="Faute critique">Aucune</td><td data-label="Décision"><span className="verdict v-no">Ajourné</span></td></tr>
                    <tr><td data-label="Candidat">C</td><td className="num-c" data-label="Note globale">88/100</td><td className="num-c" data-label="Domaine le plus faible">Conduite 74 %</td><td data-label="Faute critique">Oui</td><td data-label="Décision"><span className="verdict v-no">Ajourné</span></td></tr>
                  </tbody>
                </table>
              </div>
              <p className="small">B a une bonne note globale mais un domaine sous {thresholds.domain} %. C a la meilleure note mais a commis une faute critique. Seul A remplit les trois conditions.</p>
              <div className="callout" style={{ marginTop: 'auto' }}><span><b>En cas d’ajournement</b>, votre profil indique les points à renforcer. Vous pouvez repasser la certification {thresholds.retakeMonths} mois après, avec la session suivante.</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container split">
          <div>
            <p className="eyebrow">Le profil de compétences</p>
            <h2>Bien plus qu’un «{'\u00A0'}réussi / échoué{'\u00A0'}».</h2>
            <p className="lead" style={{ marginTop: 20 }}>Chaque candidat reçoit son profil détaillé sur les cinq domaines évalués. Il sait précisément où il excelle et ce qu’il doit renforcer.</p>
          </div>
          <figure className="scorecard" aria-label="Exemple de profil de compétences" style={{ margin: 0, justifySelf: 'end' }}>
            <div className="band"><span>Profil de compétences</span></div>
            <div className="body">
              <div className="sc-top"><div><b>Candidat A</b><div className="small">Dossier PMD-2026-0042</div></div><div className="sc-score">82<small>/100</small></div></div>
              <div className="bar"><span>Sécurité</span><span className="t"><i style={{ width: '88%' }}></i></span><b>88</b></div>
              <div className="bar"><span>Conduite</span><span className="t"><i style={{ width: '84%' }}></i></span><b>84</b></div>
              <div className="bar"><span>Service</span><span className="t"><i style={{ width: '71%' }}></i></span><b>71</b></div>
              <div className="bar"><span>Fiabilité</span><span className="t"><i style={{ width: '86%' }}></i></span><b>86</b></div>
              <div className="bar"><span>Professionnalisme</span><span className="t"><i style={{ width: '81%' }}></i></span><b>81</b></div>
              <div className="sc-foot"><span>Trait rouge : seuil de {thresholds.domain} % par domaine</span><span className="ok">● Aucune faute critique</span></div>
            </div>
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="heading"><div><p className="eyebrow">Le processus</p><h2>De la candidature au certificat.</h2></div><p>La formation prépare. L’évaluation vérifie. Le certificat n’est délivré qu’après la décision du jury.</p></div>
          <ol className="steps">
            <li><b>Candidature</b><span>Dépôt du dossier en ligne.</span></li>
            <li><b>Admission</b><span>Étude du dossier et échange.</span></li>
            <li><b>Préparation</b><span>Formation de {duration.weeks} semaines ou en autodidacte.</span></li>
            <li><b>Épreuves</b><span>Les {duration.exams} évaluations finales.</span></li>
            <li><b>Décision</b><span>Par le jury, selon les 3 conditions.</span></li>
            <li><b>Certificat</b><span>Délivré avec un numéro officiel.</span></li>
          </ol>
        </div>
      </section>

      <section className="section soft" id="tarifs">
        <div className="container">
          <div className="heading"><div><p className="eyebrow">Tarifs</p><h2>Ce que vous payez, poste par poste.</h2></div><p>Choisissez votre formule : accompagné par nos formateurs, ou en autodidacte avec le PMD™ BOOK. Les critères de certification sont les mêmes pour tous.</p></div>
          <div className="offers">
            <div className="price-card main">
              <div className="offer-top"><span className="kick">Pack complet</span><span className="badge">Recommandé</span></div>
              <div className="price-big">{price.pack} <small>FCFA</small></div>
              <p className="muted">La formation accompagnée et l’examen de certification.</p>
              <div className="lines">
                <div><span><b>Formation PMD</b><span>PMD™ BOOK inclus</span></span><span className="amt">{price.training}</span></div>
                <div><span><b>Examen de certification</b><span>{duration.exams} épreuves</span></span><span className="amt">{price.exam}</span></div>
              </div>
              <Link className="button button-primary" to="/candidature" style={{ marginTop: 22 }}>Choisir le pack</Link>
            </div>
            <div className="price-card">
              <span className="kick">Formation seule</span>
              <div className="price-big">{price.training} <small>FCFA</small></div>
              <p className="muted">Pour se former maintenant et passer l’examen plus tard.</p>
              <ul className="incl"><li>{duration.weeks} semaines · {duration.hours} heures · {duration.modules} modules</li><li>Quiz de validation et accompagnement pédagogique</li><li>PMD™ BOOK inclus</li></ul>
              <p className="small" style={{ marginTop: 'auto', paddingTop: 16 }}>Examen à ajouter ensuite : {price.exam} FCFA.</p>
            </div>
            <div className="price-card">
              <span className="kick">Examen seul</span>
              <div className="price-big">{price.exam} <small>FCFA</small></div>
              <p className="muted">Pour les candidats libres qui se sont préparés seuls.</p>
              <ul className="incl"><li>Les {duration.exams} épreuves encadrées</li><li>Décision du jury et profil de compétences</li><li>Certificat numéroté en cas de réussite</li></ul>
              <p className="small" style={{ marginTop: 'auto', paddingTop: 16 }}>Mêmes conditions de réussite que le parcours accompagné.</p>
            </div>
          </div>
          <div className="price-card book-wide">
            <div className="book" aria-hidden="true">
              <div className="book-inner">
                <div className="book-cover">
                  <div className="book-logo"><img src={logo} alt="" /></div>
                  <div className="book-title">PMD™ BOOK</div>
                  <div className="book-rule"></div>
                  <div className="book-sub">Référentiel du conducteur professionnel</div>
                  <div className="book-foot"><span>{brand}</span><span>v1.0</span></div>
                </div>
                <div className="book-edge"></div>
              </div>
            </div>
            <div>
              <span className="kick">En autodidacte</span>
              <h3 style={{ fontSize: 24, letterSpacing: '-.03em', marginTop: 8 }}>Le manuel PMD™ BOOK</h3>
              <div className="book-price">{price.book} FCFA</div>
              <p className="muted" style={{ maxWidth: 520 }}>Vous préférez apprendre seul, à votre rythme ? Le PMD™ BOOK contient tout le programme à maîtriser pour réussir l’examen. Il est déjà inclus dans la formation.</p>
              <ul className="book-toc">
                <li>Les {duration.modules} chapitres du programme, un par module</li>
                <li>Le programme de formation de référence ({duration.hours} heures)</li>
                <li>Les grilles d’évaluation des épreuves</li>
                <li>Modèles : ordre de mission, passage de relais, rapport d’incident</li>
                <li>Un glossaire des termes du métier</li>
              </ul>
              <div className="total" style={{ maxWidth: 520 }}><span>Parcours autodidacte : manuel + examen</span><b>{price.selfTaught} FCFA</b></div>
              <div className="actions" style={{ marginTop: 22 }}><a className="button button-primary" href={whatsappUrl('Bonjour, je souhaite acheter le PMD™ BOOK')} target="_blank" rel="noopener">Acheter le manuel <span aria-hidden="true">↗</span></a></div>
            </div>
          </div>
          <div className="callout" style={{ marginTop: 28 }}><span><b>Notre engagement.</b> Chaque candidat connaît à l’avance les objectifs, les compétences visées, les modalités d’évaluation et les conditions de délivrance. Aucun résultat ni emploi n’est garanti.</span></div>
        </div>
      </section>

      <section className="section dark">
        <div className="container split">
          <div>
            <p className="eyebrow light">Progression</p>
            <h2>Le début d’une carrière dans la mobilité.</h2>
            <p className="lead" style={{ margin: '20px 0 28px' }}>PMD Certified est le premier niveau. Les critères d’accès aux niveaux supérieurs seront publiés ultérieurement.</p>
            <div className="actions"><Link className="button button-light" to="/candidature">Candidater <span aria-hidden="true">↗</span></Link><Link className="button button-ghost" to="/contact">Poser une question</Link></div>
          </div>
          <div className="cells" style={{ gridTemplateColumns: '1fr' }}>
            <div style={row}><b>PMD Trainer</b><p>Former les conducteurs</p></div>
            <div style={row}><b>PMD Executive</b><p>Transport de dirigeants</p></div>
            <div style={row}><b>PMD Gold</b><p>Excellence de service</p></div>
            <div style={row}><b>PMD Professional</b><p>Expérience confirmée</p></div>
            <div style={{ ...row, background: 'var(--red)' }}><b>PMD Certified · Niveau 1</b><p style={{ color: '#fff' }}>Point de départ</p></div>
          </div>
        </div>
      </section>
    </Page>
  )
}
