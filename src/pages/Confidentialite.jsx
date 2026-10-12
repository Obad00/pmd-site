import LegalPage from '../components/LegalPage.jsx'
import { config, whatsappUrl } from '../config.js'

const { brand, contact, minAge } = config

export default function Confidentialite() {
  return (
    <LegalPage name="confidentialite" title="Politique de confidentialité et cookies" intro={`Comment ${brand} collecte, utilise et protège vos données personnelles, conformément à la loi sénégalaise n° 2008-12.`} description="Données collectées, finalités, durées de conservation, cookies et droits des personnes sur le site PMD™.">
      <div className="pmd-legal" lang="fr">
        <nav className="pmd-toc" aria-label="Sommaire">
          <p>SOMMAIRE</p>
          <ol>
            <li><a href="#responsable-du-traitement">1. Responsable du traitement</a></li>
            <li><a href="#donnees-collectees">2. Données que nous collectons</a></li>
            <li><a href="#finalites-et-bases">3. Pourquoi nous utilisons vos données et sur quelle base</a></li>
            <li><a href="#verification-pmd-id">4. Vérification publique du PMD ID</a></li>
            <li><a href="#entreprises-partenaires">5. Entreprises partenaires</a></li>
            <li><a href="#destinataires">6. Destinataires de vos données</a></li>
            <li><a href="#transferts">7. Transferts hors du Sénégal</a></li>
            <li><a href="#conservation">8. Durée de conservation</a></li>
            <li><a href="#securite">9. Sécurité</a></li>
            <li><a href="#cookies">10. Cookies</a></li>
            <li><a href="#services-tiers">11. Liens et services tiers</a></li>
            <li><a href="#mineurs">12. Mineurs</a></li>
            <li><a href="#vos-droits">13. Vos droits</a></li>
            <li><a href="#modifications">14. Modifications</a></li>
            <li><a href="#nous-contacter">15. Nous contacter</a></li>
          </ol>
        </nav>
        <p>{brand} respecte votre vie privée. Cette politique explique quelles données nous collectons quand vous visitez ce site, vous formez, passez la certification PMD™ ou nous contactez ; pourquoi nous les utilisons ; à qui elles sont communiquées ; combien de temps elles sont conservées ; et comment exercer vos droits. Elle s’applique conformément à la loi n° 2008-12 du 25 janvier 2008 sur la protection des données à caractère personnel et à ses textes d’application.</p>
        <h2 id="responsable-du-traitement">1. Responsable du traitement</h2>
        <p>Le responsable du traitement est <strong>YELLO INC SAS</strong> (marque {brand}), Ouakam, Cité Comico, Villa n° 213, Dakar, Sénégal ; NINEA 010799510 ; RCCM SN DKR 2023 B 50444. Contact pour toute question relative à vos données : <a href={`mailto:${contact.email}?subject=Donn%C3%A9es%20personnelles`}>{contact.email}</a>, objet « Données personnelles ».</p>
        <h2 id="donnees-collectees">2. Données que nous collectons</h2>
        <p>Nous collectons uniquement les données nécessaires à chaque démarche. Les champs obligatoires sont signalés dans nos formulaires.</p>
        <div className="table-wrap"><table>
            <thead><tr><th>Votre démarche</th><th>Données collectées</th><th>Pourquoi</th><th>Si vous refusez</th></tr></thead>
            <tbody>
              <tr><td>Demande d’information, contact, WhatsApp</td><td>Nom, téléphone, courriel, contenu du message</td><td>Répondre à votre demande</td><td>Nous ne pouvons pas vous répondre</td></tr>
              <tr><td>Candidature à la formation ou à l’examen</td><td>Identité, date de naissance, coordonnées, copie de la pièce d’identité et du permis de conduire, expérience de conduite, photo, justificatifs de formation aux premiers secours et de mécanique de base, voie choisie (accompagnée ou candidat libre), langue d’examen</td><td>Vérifier votre admissibilité ({minAge} ans révolus, permis valide, prérequis) et constituer votre dossier</td><td>Votre candidature ne peut pas être instruite</td></tr>
              <tr><td>Formation en ligne et présentiel</td><td>Identifiants de compte, progression, résultats aux quiz et à l’évaluation pré-examen, présence</td><td>Suivre votre parcours et vérifier l’accès aux épreuves</td><td>Vous ne pouvez pas suivre le parcours</td></tr>
              <tr><td>Examen de certification</td><td>Résultats par épreuve et par domaine, observations du jury, fautes critiques éventuelles, enregistrements audio ou vidéo de certaines épreuves pratiques (avec information préalable), profil de compétences</td><td>Évaluer vos compétences, garantir l’équité de l’examen, traiter un recours</td><td>Vous ne pouvez pas passer l’examen</td></tr>
              <tr><td>Certification délivrée</td><td>Nom, PMD ID, date de délivrance, date d’expiration, statut (actif, suspendu, expiré, révoqué)</td><td>Délivrer le certificat et permettre sa vérification</td><td>La certification ne peut pas être délivrée</td></tr>
              <tr><td>Paiement</td><td>Montant, mode de paiement, référence de transaction, échéancier (paiement en 3 fois)</td><td>Encaisser, facturer, respecter nos obligations comptables</td><td>La commande ne peut pas être finalisée</td></tr>
              <tr><td>Entreprises et partenaires</td><td>Raison sociale, NINEA, nom et fonction de l’interlocuteur, coordonnées, liste des collaborateurs inscrits</td><td>Gérer le contrat et les inscriptions</td><td>Le partenariat ne peut pas être mis en place</td></tr>
              <tr><td>Plainte ou recours</td><td>Identité, PMD ID, description des faits, pièces jointes</td><td>Instruire la plainte ou le recours</td><td>La demande ne peut pas être instruite</td></tr>
              <tr><td>Lettre d’information</td><td>Courriel ou numéro WhatsApp, préférences</td><td>Vous informer des sessions et nouveautés</td><td>Aucune conséquence</td></tr>
              <tr><td>Navigation sur le site</td><td>Adresse IP, type d’appareil et de navigateur, pages consultées, cookies (article 10)</td><td>Faire fonctionner le site, le sécuriser, mesurer son audience</td><td>Certaines fonctions peuvent être limitées</td></tr>
            </tbody>
        </table></div>
        <p>Nous ne collectons pas de données sur vos opinions politiques, religieuses ou syndicales. Lorsqu’une information de santé est nécessaire (par exemple une demande d’aménagement d’épreuve), elle n’est collectée qu’avec votre consentement exprès et n’est vue que par les personnes qui en ont besoin.</p>
        <h2 id="finalites-et-bases">3. Pourquoi nous utilisons vos données et sur quelle base</h2>
        <div className="table-wrap"><table>
            <thead><tr><th>Finalité</th><th>Base du traitement</th></tr></thead>
            <tbody>
              <tr><td>Instruire les candidatures, organiser la formation et l’examen, délivrer la certification</td><td>Exécution du contrat que vous concluez avec nous</td></tr>
              <tr><td>Permettre à un tiers de vérifier un PMD ID</td><td>Intérêt légitime de {brand} et du titulaire à la fiabilité du certificat, annoncé lors de l’inscription</td></tr>
              <tr><td>Enregistrer certaines épreuves pratiques</td><td>Intérêt légitime à l’équité de l’évaluation et au traitement des recours, après information préalable</td></tr>
              <tr><td>Facturer et tenir la comptabilité</td><td>Obligation légale</td></tr>
              <tr><td>Prévenir la fraude à l’examen et l’usage abusif du certificat</td><td>Intérêt légitime</td></tr>
              <tr><td>Envoyer la lettre d’information et les offres</td><td>Votre consentement, retirable à tout moment</td></tr>
              <tr><td>Mesurer l’audience du site et améliorer nos services</td><td>Votre consentement (cookies non essentiels)</td></tr>
              <tr><td>Améliorer le référentiel et les épreuves</td><td>Intérêt légitime, à partir de statistiques anonymisées</td></tr>
            </tbody>
        </table></div>
        <p>Nous ne prenons aucune décision de certification sur le seul fondement d’un traitement automatisé. Les résultats sont validés par un jury.</p>
        <h2 id="verification-pmd-id">4. Vérification publique du PMD ID</h2>
        <p>Toute personne qui dispose d’un PMD ID peut vérifier auprès de {brand} la validité du certificat correspondant. La vérification indique uniquement le nom du titulaire, le PMD ID, les dates de délivrance et d’expiration et le statut. Les notes, le profil de compétences et les observations du jury ne sont jamais communiqués à un tiers sans votre accord.</p>
        <h2 id="entreprises-partenaires">5. Entreprises partenaires</h2>
        <p>Lorsque votre inscription est financée par une entreprise partenaire, celle-ci reçoit les informations nécessaires au suivi de son contrat : votre présence, votre progression, votre résultat final (admis ou ajourné) et, le cas échéant, votre PMD ID. Le détail de vos notes et de votre profil ne lui est communiqué qu’avec votre accord.</p>
        <h2 id="destinataires">6. Destinataires de vos données</h2>
        <p>Vos données sont accessibles aux seules personnes habilitées de {brand} (équipe pédagogique, jury, administration) dans la limite de leurs fonctions. La plateforme de formation en ligne (<a href="https://www.yelloapp.co">www.yelloapp.co</a>) est exploitée par {brand}. Vos données peuvent être communiquées :</p>
        <ul>
          <li>à nos prestataires techniques, qui agissent sur nos instructions et sont tenus à la confidentialité : hébergement du site et des données (o2switch, France), paiement (Wave, Orange Money et notre banque), messagerie (WhatsApp, service de Meta), mesure d’audience (Amplitude) et outil de formulaires en ligne ;</li>
          <li>à l’entreprise partenaire qui finance votre parcours, dans les limites de l’article 5 ;</li>
          <li>aux autorités administratives ou judiciaires, lorsque la loi l’impose.</li>
        </ul>
        <p><strong>Nous ne vendons ni ne louons vos données personnelles.</strong></p>
        <h2 id="transferts">7. Transferts hors du Sénégal</h2>
        <p>Vos données sont hébergées en <strong>France</strong> par o2switch. Les données de mesure d’audience sont traitées par Amplitude, qui peut les héberger aux États-Unis. Les messages échangés par WhatsApp transitent par les serveurs de Meta, hors du Sénégal.</p>
        <p>Ces transferts ne sont effectués que vers des pays ou des prestataires offrant un niveau de protection suffisant (la France applique le Règlement général sur la protection des données de l’Union européenne), ou avec les garanties et autorisations prévues par la loi n° 2008-12, notamment l’autorisation de la CDP lorsqu’elle est requise.</p>
        <h2 id="conservation">8. Durée de conservation</h2>
        <div className="table-wrap"><table>
            <thead><tr><th>Données</th><th>Durée de conservation</th></tr></thead>
            <tbody>
              <tr><td>Demande de contact sans suite</td><td>12 mois après le dernier échange</td></tr>
              <tr><td>Candidature non retenue ou abandonnée</td><td>12 mois après la décision ou le dernier contact</td></tr>
              <tr><td>Dossier de formation et quiz</td><td>Durée du parcours, puis 3 ans</td></tr>
              <tr><td>Enregistrements des épreuves pratiques</td><td>6 mois après la notification des résultats, prolongés jusqu’à la fin d’un recours en cours</td></tr>
              <tr><td>Résultats d’examen et décision du jury</td><td>Durée de validité de la certification (5 ans), puis 5 ans</td></tr>
              <tr><td>Registre des certifications (nom, PMD ID, dates, statut)</td><td>Pendant toute la durée de l’activité de certification de {brand}, afin de pouvoir attester à tout moment de l’historique d’un certificat</td></tr>
              <tr><td>Pièces comptables et factures</td><td>10 ans</td></tr>
              <tr><td>Lettre d’information</td><td>Jusqu’au retrait de votre consentement</td></tr>
              <tr><td>Cookies de mesure d’audience</td><td>13 mois au plus</td></tr>
            </tbody>
        </table></div>
        <p>À l’issue de ces délais, les données sont supprimées ou rendues anonymes.</p>
        <h2 id="securite">9. Sécurité</h2>
        <p>Nous prenons des mesures techniques et organisationnelles adaptées pour protéger vos données contre la perte, l’accès non autorisé, la modification ou la divulgation : accès limité aux personnes habilitées, mots de passe personnels, connexions chiffrées (HTTPS), sauvegardes, engagement de confidentialité du jury et des prestataires. Aucun système n’étant infaillible, nous vous informerons, ainsi que la CDP lorsque la loi l’exige, de toute violation de données susceptible de vous porter atteinte.</p>
        <p>Vous êtes responsable de la confidentialité de vos identifiants. Signalez-nous sans délai toute utilisation suspecte de votre compte.</p>
        <h2 id="cookies">10. Cookies</h2>
        <p>Un cookie est un petit fichier déposé sur votre appareil lors de la visite d’un site. Nous utilisons :</p>
        <div className="table-wrap"><table>
            <thead><tr><th>Type</th><th>Rôle</th><th>Votre accord</th></tr></thead>
            <tbody>
              <tr><td>Cookies essentiels</td><td>Faire fonctionner le site, mémoriser vos choix, sécuriser les formulaires et l’espace candidat</td><td>Non requis : sans eux, le site ne fonctionne pas</td></tr>
              <tr><td>Cookies de mesure d’audience</td><td>Compter les visites et comprendre l’usage des pages, de façon statistique (outil : Amplitude)</td><td>Requis</td></tr>
              <tr><td>Cookies de tiers (vidéos intégrées, réseaux sociaux, WhatsApp)</td><td>Afficher des contenus ou des boutons de partage</td><td>Requis</td></tr>
            </tbody>
        </table></div>
        <p>Lors de votre première visite, un bandeau vous permet d’accepter, de refuser ou de paramétrer les cookies non essentiels. Refuser n’empêche pas de naviguer. Vous pouvez modifier votre choix à tout moment via le lien « Gérer les cookies » en bas de page, ou dans les réglages de votre navigateur.</p>
        <h2 id="services-tiers">11. Liens et services tiers</h2>
        <p>Le site peut contenir des liens vers d’autres sites ou services (WhatsApp, réseaux sociaux, prestataires de paiement). Ces services appliquent leurs propres politiques de confidentialité, que nous vous invitons à consulter. {brand} n’est pas responsable de leurs pratiques.</p>
        <h2 id="mineurs">12. Mineurs</h2>
        <p>La certification PMD™ est réservée aux personnes âgées de {minAge} ans révolus. Nos services ne s’adressent pas aux mineurs et nous ne collectons pas sciemment leurs données. Si vous constatez qu’un mineur nous a transmis des données, écrivez-nous : nous les supprimerons.</p>
        <h2 id="vos-droits">13. Vos droits</h2>
        <p>Conformément à la loi n° 2008-12, vous disposez des droits suivants sur vos données :</p>
        <ul>
          <li><strong>droit d’information</strong> sur les traitements vous concernant ;</li>
          <li><strong>droit d’accès</strong> : obtenir la confirmation que nous traitons vos données et en recevoir une copie ;</li>
          <li><strong>droit de rectification</strong> : faire corriger ou compléter des données inexactes ou incomplètes ;</li>
          <li><strong>droit de suppression</strong> : faire effacer des données inexactes, incomplètes, périmées ou dont le traitement n’est pas ou plus justifié ;</li>
          <li><strong>droit d’opposition</strong> : vous opposer, pour des motifs légitimes, à un traitement, et à tout moment, sans motif, à la prospection ;</li>
          <li><strong>retrait du consentement</strong> : pour la lettre d’information et les cookies non essentiels, sans effet sur les traitements déjà réalisés.</li>
        </ul>
        <p>Certaines données ne peuvent pas être supprimées tant qu’une obligation légale ou la vérification d’un certificat en cours de validité l’exige. La suppression des données d’un certificat valide entraîne l’impossibilité de le vérifier.</p>
        <p><strong>Comment exercer vos droits.</strong> Écrivez à <a href={`mailto:${contact.email}?subject=Donn%C3%A9es%20personnelles`}>{contact.email}</a> (objet « Données personnelles ») ou par courrier à YELLO INC SAS, Ouakam, Cité Comico, Villa n° 213, Dakar. Pour protéger vos données, nous pouvons vous demander de justifier de votre identité. Nous répondons dans un délai d’un mois.</p>
        <p><strong>Réclamation.</strong> Si vous estimez que vos droits ne sont pas respectés, vous pouvez saisir la <strong>Commission de Protection des Données Personnelles (CDP)</strong>, Dakar, Sénégal — <a href="https://www.cdp.sn">www.cdp.sn</a>. Texte de la loi : <a href="https://senlii.org/en/akn/sn/act/2008/12/fra%402008-05-03">loi n° 2008-12 du 25 janvier 2008</a>.</p>
        <h2 id="modifications">14. Modifications</h2>
        <p>Nous pouvons modifier cette politique pour tenir compte de l’évolution de nos services ou de la loi, notamment de la révision annoncée de la loi n° 2008-12. La date de mise à jour figure en tête de page. En cas de changement important, nous vous en informerons par courriel ou par un message visible sur le site.</p>
        <h2 id="nous-contacter">15. Nous contacter</h2>
        <p>YELLO INC SAS — {brand} · Ouakam, Cité Comico, Villa n° 213, Dakar, Sénégal · <a href={`mailto:${contact.email}`}>{contact.email}</a> · WhatsApp <a href={whatsappUrl(null, contact.phones[0])}>{contact.phones[0]}</a> / <a href={whatsappUrl(null, contact.phones[1])}>{contact.phones[1]}</a></p>
      </div>
    </LegalPage>
  )
}
