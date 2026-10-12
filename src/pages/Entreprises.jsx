import { Link } from 'react-router-dom'
import Page from '../components/Page.jsx'
import DemoForm from '../components/DemoForm.jsx'
import photoVolant from '../assets/photo-conducteur-volant.jpg'

export default function Entreprises() {
  return (
    <Page name="entreprises" title="PMD™ pour les entreprises — former et évaluer vos conducteurs" description="Formation, évaluation et certification PMD™ de vos conducteurs : flottes VTC, hôtellerie, tourisme, transport de dirigeants et mobilité d’entreprise.">
      <section className="page-hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Pour les organisations</p>
            <h1>Des conducteurs formés, évalués et à la hauteur de votre image.</h1>
            <p className="lead">Vos conducteurs sont souvent le premier et le dernier contact de vos clients. PMD vous aide à structurer leur formation, à mesurer leurs compétences et à suivre leur progression.</p>
            <div className="actions" style={{ marginTop: 28 }}><Link className="button button-primary" to="/entreprises#demande">Présenter vos besoins <span aria-hidden="true">↗</span></Link></div>
          </div>
          <figure className="photo" style={{ margin: 0 }}><img src={photoVolant} alt="Conducteur PMD en mission" style={{ objectPosition: 'center 20%' }} /><figcaption className="photo-tag"><span className="dot"></span>Un standard commun pour toute votre équipe</figcaption></figure>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="heading"><div><p className="eyebrow">Les enjeux</p><h2>Ce qu’un conducteur professionnel change pour vous.</h2></div></div>
          <div className="cells c4">
            <div><span className="kick">Sécurité</span><p>Des passagers et des véhicules mieux protégés.</p></div>
            <div><span className="kick">Image</span><p>Un service qui représente votre marque.</p></div>
            <div><span className="kick">Satisfaction</span><p>Des clients mieux accueillis et fidélisés.</p></div>
            <div><span className="kick">Coûts</span><p>Moins d’incidents, de sinistres et d’usure.</p></div>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="heading"><div><p className="eyebrow">Nos offres</p><h2>Quatre façons de travailler ensemble.</h2></div><p>Modalités, tarifs et calendrier définis selon vos besoins, après un premier échange.</p></div>
          <div className="cells c2">
            <div><h3>Formation de vos équipes</h3><p>Le parcours PMD pour vos conducteurs, en session dédiée.</p></div>
            <div><h3>Évaluation de vos conducteurs</h3><p>Un diagnostic des compétences de vos conducteurs en poste, avec profil individuel et synthèse d’équipe.</p></div>
            <div><h3>Certification PMD</h3><p>Vos conducteurs passent les cinq épreuves de certification.</p></div>
            <div><h3>Parcours sur mesure</h3><p>Des modules adaptés à votre secteur : hôtellerie, transport de dirigeants, tourisme.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="heading"><div><p className="eyebrow">Notre démarche</p><h2>Du premier échange au bilan.</h2></div><p>Vous recevez un profil de compétences par conducteur, une synthèse d’équipe et un plan de progression.</p></div>
          <ol className="steps s5">
            <li><b>Échange</b><span>Vos besoins et vos contraintes.</span></li>
            <li><b>Diagnostic</b><span>Le niveau actuel de vos équipes.</span></li>
            <li><b>Proposition</b><span>Une offre adaptée et chiffrée.</span></li>
            <li><b>Déploiement</b><span>Formation et évaluations.</span></li>
            <li><b>Bilan</b><span>Résultats et recommandations.</span></li>
          </ol>
        </div>
      </section>

      <section className="section soft" id="demande">
        <div className="container formwrap">
          <div>
            <p className="eyebrow">Demande entreprise</p>
            <h2 style={{ marginBottom: 10 }}>Parlons de vos besoins.</h2>
            <p className="muted" style={{ marginBottom: 30 }}>Réponse sous deux jours ouvrés.</p>
            <DemoForm id="f-ent" errId="e-err" submitLabel="Envoyer la demande" success={['Merci, votre demande est bien reçue.', 'Nous revenons vers vous sous deux jours ouvrés pour échanger sur vos besoins.']}>
              <div className="field"><label htmlFor="e-co">Entreprise</label><input id="e-co" required autoComplete="organization" /></div>
              <div className="field"><label htmlFor="e-sec">Secteur</label><select id="e-sec" required><option value="">Sélectionner</option><option>VTC / flotte</option><option>Hôtellerie</option><option>Tourisme</option><option>Transport de personnel</option><option>Services premium</option><option>Autre</option></select></div>
              <div className="field"><label htmlFor="e-nom">Nom et prénom</label><input id="e-nom" required autoComplete="name" /></div>
              <div className="field"><label htmlFor="e-fn">Fonction</label><input id="e-fn" required autoComplete="organization-title" /></div>
              <div className="field"><label htmlFor="e-mail">E-mail professionnel</label><input id="e-mail" type="email" required autoComplete="email" /></div>
              <div className="field"><label htmlFor="e-tel">Téléphone</label><input id="e-tel" type="tel" required placeholder="+221" autoComplete="tel" /></div>
              <div className="field"><label htmlFor="e-nb">Conducteurs concernés</label><select id="e-nb" required><option value="">Sélectionner</option><option>1 à 5</option><option>6 à 20</option><option>21 à 50</option><option>Plus de 50</option></select></div>
              <div className="field"><label htmlFor="e-del">Délai souhaité <span className="opt">(facultatif)</span></label><select id="e-del"><option>À définir</option><option>Moins d’un mois</option><option>1 à 3 mois</option><option>Plus de 3 mois</option></select></div>
              <div className="field full"><span className="lbl">Besoin</span><div className="chips"><label><input type="checkbox" id="b1" /> Formation</label><label><input type="checkbox" id="b2" /> Évaluation</label><label><input type="checkbox" id="b3" /> Certification</label><label><input type="checkbox" id="b4" /> Sur mesure</label></div></div>
              <div className="field full"><label htmlFor="e-msg">Message <span className="opt">(facultatif)</span></label><textarea id="e-msg" placeholder="Votre contexte, vos objectifs, vos contraintes…"></textarea></div>
              <div className="field full"><label className="chk"><input type="checkbox" id="e-rgpd" required /> J’accepte que mes données soient utilisées pour traiter ma demande, conformément à la <Link to="/confidentialite">politique de confidentialité</Link>.</label></div>
            </DemoForm>
          </div>
          <aside className="panel">
            <div className="band">Secteurs accompagnés</div>
            <dl>
              <div><dt>Flottes VTC</dt><dd>✓</dd></div>
              <div><dt>Hôtels et resorts</dt><dd>✓</dd></div>
              <div><dt>Agences de tourisme</dt><dd>✓</dd></div>
              <div><dt>Transport de dirigeants</dt><dd>✓</dd></div>
              <div><dt>Services VIP</dt><dd>✓</dd></div>
              <div><dt>Mobilité d’entreprise</dt><dd>✓</dd></div>
            </dl>
          </aside>
        </div>
      </section>
    </Page>
  )
}
