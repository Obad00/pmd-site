import { Link } from 'react-router-dom'
import LegalPage from '../components/LegalPage.jsx'
import { config, whatsappUrl } from '../config.js'

const { brand, contact } = config

export default function MentionsLegales() {
  return (
    <LegalPage name="legal" title="Mentions légales" intro="Informations sur l’éditeur, l’hébergeur et la propriété du site certificationpmd.com." description="Éditeur, hébergeur, propriété intellectuelle et nature de la certification PMD™.">
      <div className="pmd-legal" lang="fr">
        <h2 id="editeur-du-site">Éditeur du site</h2>
        <p>Le présent site est édité par <strong>YELLO INC SAS</strong>, société par actions simplifiée de droit sénégalais, exploitant la marque <strong>{brand}</strong>.</p>
        <div className="table-wrap"><table>
            <tbody>
              <tr><td>Siège social</td><td>Ouakam, Cité Comico, Villa n° 213, Dakar, Sénégal</td></tr>
              <tr><td>NINEA</td><td>010799510</td></tr>
              <tr><td>RCCM</td><td>SN DKR 2023 B 50444</td></tr>
              <tr><td>Directeur de la publication</td><td>Stéphane Mancabo, cofondateur de YELLO INC SAS</td></tr>
              <tr><td>Courriel</td><td><a href={`mailto:${contact.email}`}>{contact.email}</a></td></tr>
              <tr><td>WhatsApp</td><td><a href={whatsappUrl(null, contact.phones[0])}>{contact.phones[0]}</a> · <a href={whatsappUrl(null, contact.phones[1])}>{contact.phones[1]}</a></td></tr>
            </tbody>
        </table></div>
        <h2 id="hebergement">Hébergement</h2>
        <p>Le site est hébergé par <strong>o2switch</strong>, Chemin des Pardiaux, 63000 Clermont-Ferrand, France (<a href="https://www.o2switch.fr">www.o2switch.fr</a>).</p>
        <h2 id="propriete-intellectuelle">Propriété intellectuelle</h2>
        <p>PMD™ (<em>Professional Mobility Driver</em>) est une marque de YELLO INC SAS, exploitée sous le nom {brand}. Le nom, les logos, le référentiel PMD™, le PMD™ BOOK, les contenus de formation, les questions d’examen, les textes, images et vidéos du site sont protégés par le droit de la propriété intellectuelle, notamment l’Accord de Bangui révisé (OAPI) et la loi n° 2008-09 du 25 janvier 2008 sur le droit d’auteur et les droits voisins.</p>
        <p>Toute reproduction, représentation, adaptation ou diffusion, totale ou partielle, sans autorisation écrite préalable de YELLO INC SAS est interdite et peut donner lieu à des poursuites.</p>
        <h2 id="nature-de-la-certification">Nature de la certification</h2>
        <p>La certification PMD™ est une certification professionnelle privée délivrée par {brand}. Elle atteste de compétences évaluées selon le référentiel PMD™. Elle ne constitue ni un diplôme d’État, ni un permis de conduire, ni une autorisation administrative d’exercer une activité de transport. Elle ne garantit ni un emploi, ni un niveau de revenu.</p>
        <h2 id="donnees-personnelles-et-cookies">Données personnelles et cookies</h2>
        <p>Le traitement des données personnelles et l’usage des cookies sont décrits dans la <Link to="/confidentialite">Politique de confidentialité et cookies</Link>.</p>
        <h2 id="conditions-dutilisation">Conditions d’utilisation</h2>
        <p>L’utilisation du site est régie par les <Link to="/cgu">Conditions générales d’utilisation</Link>.</p>
        <h2 id="droit-applicable">Droit applicable</h2>
        <p>Les présentes mentions sont régies par le droit sénégalais. Tout litige relève des juridictions compétentes de Dakar, sous réserve des règles d’ordre public applicables.</p>
      </div>
    </LegalPage>
  )
}
