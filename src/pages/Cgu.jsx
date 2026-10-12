import { Link } from 'react-router-dom'
import LegalPage from '../components/LegalPage.jsx'
import { config, price } from '../config.js'

const { brand, contact } = config

export default function Cgu() {
  return (
    <LegalPage name="cgu" title="Conditions générales d’utilisation" intro="Les règles d’utilisation du site, du certificat PMD™ et des services en ligne, ainsi que les conditions de paiement, d’annulation et de remboursement." description="Règles d’utilisation du site et du certificat PMD™, prix, paiement, annulation et remboursement.">
      <div className="pmd-legal" lang="fr">
        <nav className="pmd-toc" aria-label="Sommaire">
          <p>SOMMAIRE</p>
          <ol>
            <li><a href="#objet-et-acceptation">1. Objet et acceptation</a></li>
            <li><a href="#definitions">2. Définitions</a></li>
            <li><a href="#acces-au-site">3. Accès au site</a></li>
            <li><a href="#compte-utilisateur">4. Compte utilisateur</a></li>
            <li><a href="#propriete-intellectuelle">5. Propriété intellectuelle</a></li>
            <li><a href="#usage-du-certificat-du-logo-et-du-pmd-id">6. Usage du certificat, du logo et du PMD ID</a></li>
            <li><a href="#verification-dun-certificat">7. Vérification d’un certificat</a></li>
            <li><a href="#comportement-des-utilisateurs">8. Comportement des utilisateurs</a></li>
            <li><a href="#remboursement">9. Prix, paiement, annulation et remboursement</a></li>
            <li><a href="#absence-de-garantie">10. Absence de garantie</a></li>
            <li><a href="#responsabilite">11. Responsabilité</a></li>
            <li><a href="#liens-vers-dautres-sites">12. Liens vers d’autres sites</a></li>
            <li><a href="#donnees-personnelles">13. Données personnelles</a></li>
            <li><a href="#plaintes-et-recours">14. Plaintes et recours</a></li>
            <li><a href="#modification-des-cgu">15. Modification des CGU</a></li>
            <li><a href="#dispositions-generales">16. Dispositions générales</a></li>
            <li><a href="#droit-applicable-et-litiges">17. Droit applicable et litiges</a></li>
          </ol>
        </nav>
        <h2 id="objet-et-acceptation">1. Objet et acceptation</h2>
        <p>Les présentes conditions générales d’utilisation (« CGU ») régissent l’accès et l’usage du site PMD™ et des services en ligne associés (espace candidat, plateforme de formation, vérification de certificat), édités par YELLO INC SAS sous la marque {brand}. En utilisant le site, vous acceptez les CGU. Si vous ne les acceptez pas, n’utilisez pas le site.</p>
        <p>L’inscription à la formation, à l’évaluation pré-examen ou à l’examen est en outre soumise au <strong>Règlement de certification PMD™</strong> (PMD™ BOOK, chapitre 12) et aux conditions particulières communiquées lors de la commande. En cas de contradiction, ces documents priment sur les CGU.</p>
        <h2 id="definitions">2. Définitions</h2>
        <div className="table-wrap"><table>
            <thead>
              <tr>
                <th>Terme</th>
                <th>Signification</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{brand}, « nous »</td>
                <td>YELLO INC SAS, éditeur du site et organisme qui délivre la certification PMD™</td>
              </tr>
              <tr>
                <td>Utilisateur, « vous »</td>
                <td>Toute personne qui consulte le site ou utilise ses services</td>
              </tr>
              <tr>
                <td>Candidat</td>
                <td>Utilisateur inscrit à la formation, à l’évaluation pré-examen ou à l’examen</td>
              </tr>
              <tr>
                <td>Titulaire</td>
                <td>Personne à qui la certification PMD™ a été délivrée</td>
              </tr>
              <tr>
                <td>PMD ID</td>
                <td>Numéro unique attribué à chaque certification (exemple : PMD-SN-2026-L1-0001)</td>
              </tr>
              <tr>
                <td>Contenus</td>
                <td>Textes, référentiel, PMD™ BOOK, modules, quiz, questions d’examen, vidéos, images, logos et marques présents sur le site ou remis aux candidats</td>
              </tr>
            </tbody>
        </table></div>
        <h2 id="acces-au-site">3. Accès au site</h2>
        <p>Le site est accessible gratuitement, hors coûts de connexion. Nous nous efforçons de le maintenir disponible, sans pouvoir le garantir : il peut être interrompu pour maintenance, mise à jour ou en cas de force majeure, sans indemnité.</p>
        <h2 id="compte-utilisateur">4. Compte utilisateur</h2>
        <p>Certains services nécessitent un compte. Vous vous engagez à fournir des informations exactes et à jour, à garder vos identifiants confidentiels et à ne pas créer de compte au nom d’un tiers. Toute action réalisée depuis votre compte est réputée faite par vous. Signalez sans délai toute utilisation non autorisée à <a href={`mailto:${contact.email}`}>{contact.email}</a>.</p>
        <p>Une fausse déclaration ou un faux justificatif (identité, permis, âge, attestation de premiers secours ou de mécanique) entraîne le rejet de la candidature ou, après délivrance, la révocation de la certification, sans préjudice de poursuites.</p>
        <h2 id="propriete-intellectuelle">5. Propriété intellectuelle</h2>
        <p>Les Contenus et les marques PMD™ et {brand} appartiennent à YELLO INC SAS ou à ses concédants. Vous bénéficiez d’un droit d’usage personnel, non exclusif et non cessible, limité à votre préparation et à votre information. Sont notamment interdits :</p>
        <ul>
          <li>la reproduction, la diffusion ou la revente du PMD™ BOOK, des modules ou des quiz ;</li>
          <li>la divulgation, sous quelque forme que ce soit, des questions et sujets d’examen ;</li>
          <li>l’utilisation des marques PMD™ ou {brand}, ou d’un signe semblable, pour proposer une formation ou une certification concurrente ou pour laisser croire à un partenariat.</li>
        </ul>
        <h2 id="usage-du-certificat-du-logo-et-du-pmd-id">6. Usage du certificat, du logo et du PMD ID</h2>
        <p>Le titulaire d’une certification <strong>active</strong> peut faire état de sa certification, de son PMD ID et du logo PMD™ dans le respect de la charte d’usage fournie avec le certificat. Il s’interdit :</p>
        <ul>
          <li>de s’en prévaloir lorsque la certification est suspendue, expirée ou révoquée ;</li>
          <li>de modifier le certificat ou d’utiliser le PMD ID d’une autre personne ;</li>
          <li>de présenter la certification comme un diplôme d’État, un permis de conduire, une autorisation administrative ou une garantie d’emploi.</li>
        </ul>
        <p>La certification est valable 5 ans. Au terme de ce délai, sans renouvellement, elle passe au statut « expiré ». {brand} peut suspendre ou révoquer une certification dans les cas prévus par le Règlement de certification, après une procédure contradictoire et avec une possibilité de recours.</p>
        <h2 id="verification-dun-certificat">7. Vérification d’un certificat</h2>
        <p>Le service de vérification permet à un employeur, un client ou un partenaire de contrôler le statut d’un PMD ID. Il est réservé à cet usage. Toute extraction massive, automatisée ou à des fins de prospection est interdite. Le résultat reflète le statut connu de {brand} à la date de la vérification.</p>
        <h2 id="comportement-des-utilisateurs">8. Comportement des utilisateurs</h2>
        <p>Vous vous engagez à ne pas :</p>
        <ul>
          <li>porter atteinte au fonctionnement ou à la sécurité du site (intrusion, virus, surcharge) ;</li>
          <li>publier ou transmettre des contenus illégaux, injurieux, diffamatoires, discriminatoires ou portant atteinte aux droits d’autrui ;</li>
          <li>envoyer des messages publicitaires non sollicités par nos formulaires ou numéros de contact ;</li>
          <li>usurper l’identité d’un tiers ou tenter de frauder à une évaluation.</li>
        </ul>
        <p>En cas de manquement, nous pouvons suspendre ou fermer votre compte, sans préjudice des autres mesures prévues par le Règlement de certification.</p>
        <h2 id="remboursement">9. Prix, paiement, annulation et remboursement</h2>
        <p>Les prix sont indiqués en francs CFA (FCFA), toutes taxes comprises. À la date de mise à jour :</p>
        <div className="table-wrap"><table>
            <thead>
              <tr>
                <th>Offre</th>
                <th>Prix</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Formation PMD™ (PMD™ BOOK inclus)</td>
                <td>{price.training} FCFA</td>
              </tr>
              <tr>
                <td>Examen de certification</td>
                <td>{price.exam} FCFA</td>
              </tr>
              <tr>
                <td>Pack formation et examen</td>
                <td>{price.pack} FCFA</td>
              </tr>
              <tr>
                <td>PMD™ BOOK seul</td>
                <td>{price.book} FCFA</td>
              </tr>
              <tr>
                <td>Entreprises partenaires</td>
                <td>{price.partnerPerEmployee} FCFA par collaborateur</td>
              </tr>
            </tbody>
        </table></div>
        <p>Le paiement peut être effectué en trois fois selon l’échéancier indiqué lors de l’inscription. L’accès aux épreuves suppose le règlement complet des frais. Une échéance impayée suspend l’accès à la formation et aux épreuves jusqu’à régularisation.</p>
        <p>Les prix peuvent évoluer ; le prix applicable est celui affiché au moment de l’inscription.</p>
        <p><strong>Délai de réflexion.</strong> Vous pouvez annuler votre inscription sans motif dans les <strong>7 jours</strong> suivant le paiement, à condition que la session n’ait pas commencé et que vous n’ayez pas commencé les modules en ligne. Vous êtes alors remboursé intégralement, déduction faite du prix du PMD™ BOOK ({price.book} FCFA) s’il vous a déjà été remis.</p>
        <p><strong>Annulation à votre initiative, après ce délai.</strong></p>
        <div className="table-wrap"><table>
            <thead>
              <tr>
                <th>Moment de l’annulation</th>
                <th>Formation ({price.training} FCFA)</th>
                <th>Examen ({price.exam} FCFA)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Plus de 14 jours avant le début de la session</td>
                <td>Remboursement intégral, déduction faite du PMD™ BOOK s’il a été remis</td>
                <td>Remboursement intégral</td>
              </tr>
              <tr>
                <td>De 14 jours à 72 heures avant</td>
                <td>Report gratuit sur la session suivante, ou remboursement de 50 %</td>
                <td>Report gratuit sur la session suivante, ou remboursement de 50 %</td>
              </tr>
              <tr>
                <td>Moins de 72 heures avant, ou absence sans justificatif</td>
                <td>Aucun remboursement ; un report sur la session suivante reste possible une fois</td>
                <td>Aucun remboursement ni report</td>
              </tr>
              <tr>
                <td>Après le début de la formation</td>
                <td>Aucun remboursement ; le parcours peut être repris lors d’une session suivante, dans les 12 mois</td>
                <td>Sans objet</td>
              </tr>
            </tbody>
        </table></div>
        <p><strong>Force majeure.</strong> En cas d’hospitalisation, de décès d’un proche parent ou de convocation administrative ou judiciaire, justifié dans les 7 jours, vous bénéficiez d’un report gratuit sur la session suivante, quel que soit le moment de l’empêchement.</p>
        <p><strong>Candidature non admissible.</strong> Si votre dossier ne remplit pas les conditions d’admission (âge, permis, prérequis obligatoires), vous êtes remboursé intégralement, déduction faite du PMD™ BOOK s’il a été remis. Le candidat libre qui ne réussit pas l’évaluation pré-examen choisit entre le remboursement des frais d’examen déjà versés et leur conservation pour une session ultérieure.</p>
        <p><strong>Ajournement.</strong> Les frais d’examen ne sont pas remboursés en cas d’ajournement. La reprise des épreuves échouées est soumise au tarif de reprise en vigueur.</p>
        <p><strong>Annulation par {brand}.</strong> Si nous annulons ou reportons une session, vous choisissez entre le report sans frais sur une autre session et le remboursement intégral des sommes versées.</p>
        <p><strong>PMD™ BOOK acheté seul.</strong> Il n’est ni repris ni remboursé après remise, sauf défaut d’impression ou de fichier, auquel cas il est remplacé.</p>
        <p><strong>Paiement en trois fois.</strong> Les montants ci-dessus sont calculés sur le prix total. Selon le cas, les sommes déjà versées au-delà du montant dû sont remboursées, ou les échéances restantes jusqu’à ce montant restent dues.</p>
        <p><strong>Comment demander un remboursement.</strong> Écrivez à <a href={`mailto:${contact.email}?subject=Demande%20de%20remboursement`}>{contact.email}</a> en indiquant votre nom et la référence de paiement. Le remboursement est effectué dans un délai de 30 jours, par le moyen de paiement utilisé (Wave, Orange Money ou virement).</p>
        <p><strong>Entreprises partenaires.</strong> Les conditions d’annulation et de remplacement d’un collaborateur sont fixées par le contrat de partenariat.</p>
        <h2 id="absence-de-garantie">10. Absence de garantie</h2>
        <p>Les informations du site sont fournies à titre général et peuvent évoluer. Nous veillons à leur exactitude sans garantir qu’elles soient complètes ou exemptes d’erreurs. Les contenus de formation ne remplacent ni le code de la route, ni la réglementation des transports en vigueur, ni les consignes des autorités.</p>
        <p>La certification PMD™ atteste de compétences évaluées à une date donnée. Elle ne garantit ni l’obtention d’un emploi, ni un niveau de revenu, ni le comportement futur du titulaire.</p>
        <h2 id="responsabilite">11. Responsabilité</h2>
        <p>Dans les limites permises par la loi, {brand} n’est pas responsable :</p>
        <ul>
          <li>des dommages indirects résultant de l’usage du site ou de l’impossibilité d’y accéder ;</li>
          <li>du contenu des sites et services tiers vers lesquels le site renvoie ;</li>
          <li>des décisions prises par un tiers sur la base d’une vérification de certificat ;</li>
          <li>de l’activité professionnelle exercée par le titulaire, qui reste seul responsable de sa conduite et du respect des règles applicables.</li>
        </ul>
        <p>Rien dans les CGU ne limite la responsabilité de {brand} en cas de faute lourde ou intentionnelle, ou lorsque la loi l’interdit.</p>
        <h2 id="liens-vers-dautres-sites">12. Liens vers d’autres sites</h2>
        <p>Les liens vers des sites tiers sont fournis pour votre commodité. Leur présence n’implique aucune approbation. Tout lien vers le site PMD™ doit renvoyer vers une page entière, sans cadrage, et ne pas laisser croire à un partenariat qui n’existe pas.</p>
        <h2 id="donnees-personnelles">13. Données personnelles</h2>
        <p>Les données collectées via le site sont traitées conformément à la <Link to="/confidentialite">Politique de confidentialité et cookies</Link>.</p>
        <h2 id="plaintes-et-recours">14. Plaintes et recours</h2>
        <p>Toute réclamation sur le site ou nos services peut être adressée à <a href={`mailto:${contact.email}`}>{contact.email}</a>. Les recours contre une décision du jury ou une mesure de suspension ou de révocation suivent la procédure du Règlement de certification, dans le délai indiqué sur la notification.</p>
        <h2 id="modification-des-cgu">15. Modification des CGU</h2>
        <p>Nous pouvons modifier les CGU à tout moment. La version applicable est celle en ligne lors de votre utilisation du site. Les inscriptions déjà confirmées restent régies par les conditions acceptées lors de l’inscription, sauf obligation légale.</p>
        <h2 id="dispositions-generales">16. Dispositions générales</h2>
        <ul>
          <li><strong>Divisibilité.</strong> Si une clause est jugée nulle, les autres restent en vigueur.</li>
          <li><strong>Non-renonciation.</strong> Le fait de ne pas se prévaloir d’une clause ne vaut pas renonciation à l’invoquer ultérieurement.</li>
          <li><strong>Cession.</strong> {brand} peut céder les droits et obligations issus des CGU à toute entité qui reprendrait l’activité de certification ; l’utilisateur ne peut pas céder les siens.</li>
          <li><strong>Intégralité.</strong> Les CGU, la Politique de confidentialité, le Règlement de certification et les conditions particulières communiquées lors de la commande forment l’ensemble des règles applicables à votre usage du site.</li>
        </ul>
        <h2 id="droit-applicable-et-litiges">17. Droit applicable et litiges</h2>
        <p>Les CGU sont régies par le droit sénégalais. En cas de litige, les parties recherchent d’abord une solution amiable. À défaut, le litige relève des juridictions compétentes de Dakar, sous réserve des règles protectrices dont le consommateur peut bénéficier.</p>
      </div>
    </LegalPage>
  )
}
