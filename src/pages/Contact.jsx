import { Link } from 'react-router-dom'
import Page from '../components/Page.jsx'
import SiteForm from '../components/SiteForm.jsx'
import { config } from '../config.js'

const { contact, brand } = config

export default function Contact() {
  return (
    <Page name="contact" title="Contacter PMD™" description={`Une question sur le programme PMD™, la certification ou un partenariat ? Contactez l’équipe ${brand} par formulaire, téléphone ou WhatsApp.`}>
      <section className="section" style={{ paddingTop: 68 }}>
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1 style={{ fontSize: 'clamp(32px,4vw,48px)', marginBottom: 14 }}>Contacter PMD.</h1>
          <p className="lead" style={{ marginBottom: 44 }}>Une question sur le programme, la certification ou un partenariat ? Choisissez le bon chemin.</p>
          <div className="cells c3" style={{ marginBottom: 64 }}>
            <Link to="/candidature"><span className="kick">Je veux candidater</span><h3>Déposer ma candidature →</h3><p>Formulaire en trois minutes.</p></Link>
            <Link to="/entreprises#demande"><span className="kick">Je représente une entreprise</span><h3>Faire une demande →</h3><p>Formation, évaluation, certification.</p></Link>
            <Link to="/faq"><span className="kick">J’ai une question</span><h3>Lire la FAQ →</h3><p>Ou écrivez-nous ci-dessous.</p></Link>
          </div>
          <div className="formwrap">
            <SiteForm type="contact" id="f-contact" errId="k-err" submitLabel="Envoyer le message" success={['Merci, votre message est bien envoyé.', 'Nous vous répondons dans les meilleurs délais.']}>
              <div className="field"><label htmlFor="k-nom">Nom</label><input id="k-nom" name="nom" required autoComplete="name" /></div>
              <div className="field"><label htmlFor="k-mail">E-mail</label><input id="k-mail" name="email" type="email" required autoComplete="email" /></div>
              <div className="field"><label htmlFor="k-tel">Téléphone <span className="opt">(facultatif)</span></label><input id="k-tel" name="telephone" type="tel" placeholder="+221" autoComplete="tel" /></div>
              <div className="field"><label htmlFor="k-obj">Objet</label><select id="k-obj" name="objet" required><option value="">Sélectionner</option><option>Programme</option><option>Certification</option><option>Paiement</option><option>PMD™ BOOK</option><option>Partenariat</option><option>Presse</option><option>Autre</option></select></div>
              <div className="field full"><label htmlFor="k-msg">Message</label><textarea id="k-msg" name="message" maxLength={3000} required></textarea></div>
              <div className="field full"><label className="chk"><input type="checkbox" id="k-rgpd" name="consentement" value="oui" required /> J’accepte que mes données soient utilisées pour répondre à mon message.</label></div>
            </SiteForm>
            <aside className="panel">
              <div className="band">Coordonnées</div>
              <dl>
                <div><dt>Programme</dt><dd>PMD™ · {brand}</dd></div>
                <div><dt>Ville</dt><dd>{contact.city}</dd></div>
                {contact.phones.map((phone) => (
                  <div key={phone}><dt>Téléphone / WhatsApp</dt><dd>{phone}</dd></div>
                ))}
                <div><dt>E-mail</dt><dd>{contact.email}</dd></div>
              </dl>
              <div className="pad contact-lines"><a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener">Écrire sur WhatsApp →</a></div>
            </aside>
          </div>
        </div>
      </section>
    </Page>
  )
}
