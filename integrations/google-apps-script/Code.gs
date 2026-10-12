/**
 * PMD™ — Réception des formulaires du site (candidature, contact, entreprise).
 *
 * Script lié à un Google Sheet (Extensions > Apps Script), déployé comme application web.
 * Le site envoie un JSON en POST ; le script valide, enregistre une ligne dans la feuille
 * du type concerné, puis envoie un e-mail de notification et un accusé de réception.
 * Voir LISEZMOI.md pour le déploiement. Ce fichier ne contient aucun identifiant ni secret.
 */

/* ===== RÉGLAGES ===== */
const NOTIFY_EMAIL = 'contact@certificationpmd.com'; // reçoit les notifications, adresse de réponse des accusés
const FROM_ALIAS = ''; // facultatif : alias « Envoyer en tant que » du compte Gmail. Vide = envoi par MailApp.
const SENDER_NAME = 'PMD™ — Yello UPSKILL';
const TIMEZONE = 'Africa/Dakar';
const DEFAULT_STATUS = 'Nouveau';
const MAIL_FAILED_STATUS = 'Nouveau — e-mail non envoyé'; // quota épuisé ou envoi en échec : à traiter à la main
const MAILS_PER_SUBMISSION = 2; // notification + accusé de réception
const DUPLICATE_WINDOW_SECONDS = 120; // même e-mail + même type dans ce délai = doublon
const BRAND_RED = '#A91518';
const WHATSAPP_NUMBER = '+221 78 431 95 95';
const WHATSAPP_URL = 'https://wa.me/221784319595';
const DOSSIER_PIECES = [
  'Formulaire de candidature (reçu)',
  'Copie de la pièce d’identité',
  'Copie du permis de conduire',
  'Extrait de casier judiciaire valide',
];
const NEXT_STEPS = [
  'Étude de votre dossier par l’équipe PMD.',
  'Échange avec l’équipe PMD.',
  'Règlement des frais avant le début de la session.',
];

// Un formulaire = une feuille. `kind` : text (défaut), email, phone. `max` : longueur maximale.
const FORMS = {
  candidature: {
    sheet: 'Candidatures',
    prefix: 'CAND',
    fields: [
      { key: 'prenom', label: 'Prénom', required: true, max: 80 },
      { key: 'nom', label: 'Nom', required: true, max: 80 },
      { key: 'dateNaissance', label: 'Date de naissance', required: true, max: 10 },
      { key: 'telephone', label: 'Téléphone (WhatsApp)', required: true, max: 30, kind: 'phone' },
      { key: 'email', label: 'E-mail', required: true, max: 120, kind: 'email' },
      { key: 'ville', label: 'Ville / quartier', required: true, max: 120 },
      { key: 'permisValide', label: 'Permis de conduire valide', required: true, max: 10 },
      { key: 'anneePermis', label: 'Année d’obtention du permis', required: true, max: 4 },
      { key: 'experience', label: 'Expérience de conduite professionnelle', required: true, max: 60 },
      { key: 'session', label: 'Session souhaitée', required: true, max: 80 },
      { key: 'activite', label: 'Activité actuelle', max: 60 },
      { key: 'formule', label: 'Formule', required: true, max: 80 },
      { key: 'motivation', label: 'Motivation', required: true, max: 1500, multiline: true },
    ],
  },
  contact: {
    sheet: 'Contacts',
    prefix: 'CONT',
    fields: [
      { key: 'nom', label: 'Nom', required: true, max: 120 },
      { key: 'email', label: 'E-mail', required: true, max: 120, kind: 'email' },
      { key: 'telephone', label: 'Téléphone', max: 30, kind: 'phone' },
      { key: 'objet', label: 'Objet', required: true, max: 60 },
      { key: 'message', label: 'Message', required: true, max: 3000, multiline: true },
    ],
  },
  entreprise: {
    sheet: 'Entreprises',
    prefix: 'ENT',
    fields: [
      { key: 'entreprise', label: 'Entreprise', required: true, max: 120 },
      { key: 'secteur', label: 'Secteur', required: true, max: 60 },
      { key: 'nom', label: 'Nom et prénom', required: true, max: 120 },
      { key: 'fonction', label: 'Fonction', required: true, max: 120 },
      { key: 'email', label: 'E-mail professionnel', required: true, max: 120, kind: 'email' },
      { key: 'telephone', label: 'Téléphone', required: true, max: 30, kind: 'phone' },
      { key: 'conducteurs', label: 'Conducteurs concernés', required: true, max: 30 },
      { key: 'delai', label: 'Délai souhaité', max: 30 },
      { key: 'besoins', label: 'Besoin', max: 120 },
      { key: 'message', label: 'Message', max: 3000, multiline: true },
    ],
  },
};

/* ===== POINTS D'ENTRÉE ===== */

// Ouvrir l'URL du déploiement dans un navigateur doit afficher ce message.
function doGet() {
  return json_({ ok: true, service: 'Formulaires PMD' });
}

function doPost(e) {
  try {
    const data = parseBody_(e);
    const form = FORMS[data.type];
    if (!form) return json_({ ok: false, error: 'Type de formulaire inconnu.' });

    // Pot de miel : un robot a rempli le champ caché. On répond « ok » sans rien enregistrer.
    if (clean_(data.website)) return json_({ ok: true, ref: '' });

    const checked = validate_(form, data);
    if (checked.error) return json_({ ok: false, error: checked.error, field: checked.field });
    const values = checked.values;

    const cache = CacheService.getScriptCache();
    const duplicateKey = 'dup:' + data.type + ':' + values.email.toLowerCase();
    const now = new Date();
    let ref;
    let sheet;
    let rowIndex;

    const lock = LockService.getScriptLock();
    lock.waitLock(20000);
    try {
      // Anti-doublon : même e-mail et même type il y a moins de 2 minutes. On renvoie la référence déjà créée.
      const previous = cache.get(duplicateKey);
      if (previous) return json_({ ok: true, ref: previous, duplicate: true });

      sheet = getSheet_(form);
      ref = newReference_(sheet, form.prefix, now);
      const row = [Utilities.formatDate(now, TIMEZONE, 'yyyy-MM-dd HH:mm:ss'), ref]
        .concat(form.fields.map(function (f) { return values[f.key]; }))
        .concat(['Oui', clean_(data.page).slice(0, 200), DEFAULT_STATUS]);
      sheet.appendRow(row.map(cell_));
      rowIndex = sheet.getLastRow();
      cache.put(duplicateKey, ref, DUPLICATE_WINDOW_SECONDS);
    } finally {
      lock.releaseLock();
    }

    // La ligne est déjà enregistrée : un quota épuisé ou un e-mail en échec ne fait pas échouer la réponse,
    // il est seulement signalé dans la colonne « Statut ».
    let mailsSent = true;
    try {
      if (MailApp.getRemainingDailyQuota() < MAILS_PER_SUBMISSION) {
        mailsSent = false;
        console.error('Quota d’e-mails du jour épuisé : aucun e-mail envoyé pour ' + ref);
      }
    } catch (err) {
      console.error('Quota : ' + err);
    }
    if (mailsSent) {
      try { sendNotification_(data.type, form, values, ref, sheet); } catch (err) { mailsSent = false; console.error('Notification : ' + err); }
      try { sendAcknowledgement_(data.type, values, ref); } catch (err) { mailsSent = false; console.error('Accusé de réception : ' + err); }
    }
    if (!mailsSent) {
      try { sheet.getRange(rowIndex, sheet.getLastColumn()).setValue(MAIL_FAILED_STATUS); } catch (err) { console.error('Statut : ' + err); }
    }

    return json_({ ok: true, ref: ref });
  } catch (err) {
    console.error(err);
    return json_({ ok: false, error: 'Une erreur est survenue. Merci de réessayer ou de nous écrire sur WhatsApp.' });
  }
}

/* ===== VALIDATION ===== */

function parseBody_(e) {
  const raw = e && e.postData && e.postData.contents;
  if (!raw || raw.length > 20000) throw new Error('Corps de requête vide ou trop long.');
  const data = JSON.parse(raw);
  if (!data || typeof data !== 'object' || Array.isArray(data)) throw new Error('JSON inattendu.');
  return data;
}

// Texte sur une ligne, sans caractères de contrôle (protège aussi les objets d'e-mail).
function clean_(value) {
  return String(value === undefined || value === null ? '' : value).replace(/[\u0000-\u001F\u007F]+/g, ' ').replace(/\s+/g, ' ').trim();
}

function cleanMultiline_(value) {
  return String(value === undefined || value === null ? '' : value)
    .replace(/\r\n?/g, '\n').replace(/[\u0000-\u0009\u000B-\u001F\u007F]+/g, ' ').replace(/\n{3,}/g, '\n\n').trim();
}

function validate_(form, data) {
  const values = {};
  for (let i = 0; i < form.fields.length; i++) {
    const f = form.fields[i];
    const value = f.multiline ? cleanMultiline_(data[f.key]) : clean_(data[f.key]);
    if (f.required && !value) return { error: 'Le champ « ' + f.label + ' » est obligatoire.', field: f.key };
    if (value.length > f.max) return { error: 'Le champ « ' + f.label + ' » est trop long (' + f.max + ' caractères au maximum).', field: f.key };
    if (value && f.kind === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) return { error: 'L’adresse e-mail n’est pas valide.', field: f.key };
    if (value && f.kind === 'phone' && !/^\+?[0-9][0-9 ().-]{6,24}$/.test(value)) return { error: 'Le numéro de téléphone n’est pas valide.', field: f.key };
    values[f.key] = value;
  }
  if (clean_(data.consentement).toLowerCase() !== 'oui') return { error: 'Votre accord pour le traitement de vos données est nécessaire.', field: 'consentement' };
  return { values: values };
}

/* ===== FEUILLE ===== */

function getSheet_(form) {
  const book = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = book.getSheetByName(form.sheet);
  if (!sheet) sheet = book.insertSheet(form.sheet);
  if (sheet.getLastRow() === 0) {
    const headers = ['Date/heure (Dakar)', 'Référence']
      .concat(form.fields.map(function (f) { return f.label; }))
      .concat(['Consentement', 'Page d’origine', 'Statut']);
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

// PMD-CAND-AAAAMMJJ-XXXX : XXXX est tiré au hasard, sans caractères ambigus, et vérifié contre la feuille.
function newReference_(sheet, prefix, now) {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  const day = Utilities.formatDate(now, TIMEZONE, 'yyyyMMdd');
  const last = sheet.getLastRow();
  const existing = last > 1 ? sheet.getRange(2, 2, last - 1, 1).getValues().map(function (r) { return r[0]; }) : [];
  for (let attempt = 0; attempt < 50; attempt++) {
    let suffix = '';
    for (let i = 0; i < 4; i++) suffix += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    const ref = 'PMD-' + prefix + '-' + day + '-' + suffix;
    if (existing.indexOf(ref) === -1) return ref;
  }
  throw new Error('Impossible de générer une référence unique.');
}

// Empêche Sheets d'interpréter une saisie comme une formule ou un nombre (« =… », « +221… »).
function cell_(value) {
  const text = String(value);
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

/* ===== E-MAILS ===== */

function sendMail_(to, subject, body, htmlBody, replyTo) {
  const options = { name: SENDER_NAME, replyTo: replyTo };
  if (htmlBody) options.htmlBody = htmlBody;
  if (FROM_ALIAS) {
    options.from = FROM_ALIAS;
    GmailApp.sendEmail(to, subject, body, options);
  } else {
    MailApp.sendEmail(Object.assign({ to: to, subject: subject, body: body }, options));
  }
}

function sendNotification_(type, form, values, ref, sheet) {
  let subject;
  if (type === 'candidature') subject = 'Nouvelle candidature PMD — ' + values.nom + ' ' + values.prenom + ' — ' + values.formule;
  else if (type === 'entreprise') subject = 'Nouvelle demande entreprise PMD — ' + values.entreprise + ' — ' + values.nom;
  else subject = 'Nouveau message PMD — ' + values.nom + ' — ' + values.objet;

  const lines = ['Référence : ' + ref, ''];
  form.fields.forEach(function (f) {
    const value = values[f.key] || '—';
    lines.push(f.multiline ? f.label + ' :\n' + value + '\n' : f.label + ' : ' + value);
  });
  lines.push('', 'Statut : ' + DEFAULT_STATUS);
  lines.push('Ouvrir le Google Sheet : ' + SpreadsheetApp.getActiveSpreadsheet().getUrl() + '#gid=' + sheet.getSheetId());
  // Répondre à la notification écrit directement à la personne.
  sendMail_(NOTIFY_EMAIL, subject, lines.join('\n'), null, values.email);
}

function sendAcknowledgement_(type, values, ref) {
  if (type === 'candidature') {
    const subject = 'PMD™ — Nous avons bien reçu votre candidature';
    const text = [
      'Bonjour ' + values.prenom + ',',
      '',
      'Nous avons bien reçu votre candidature au programme PMD™.',
      'Référence : ' + ref,
      'Formule choisie : ' + values.formule,
      'Session souhaitée : ' + values.session,
      '',
      'Prochaines étapes :',
    ].concat(NEXT_STEPS.map(function (s, i) { return (i + 1) + '. ' + s; }))
      .concat(['', 'Pièces du dossier :'])
      .concat(DOSSIER_PIECES.map(function (p) { return '- ' + p; }))
      .concat(['', 'Le dépôt de candidature ne vaut pas admission.', 'Une question ? WhatsApp : ' + WHATSAPP_NUMBER + ' (' + WHATSAPP_URL + ')', '', 'L’équipe PMD™ — Yello UPSKILL'])
      .join('\n');
    const html = layout_(
      'Nous avons bien reçu votre candidature',
      '<p style="margin:0 0 16px">Bonjour ' + esc_(values.prenom) + ',</p>' +
      '<p style="margin:0 0 16px">Nous avons bien reçu votre candidature au programme PMD™. Conservez votre référence : elle vous sera demandée lors de nos échanges.</p>' +
      facts_([['Référence', ref], ['Formule choisie', values.formule], ['Session souhaitée', values.session]]) +
      heading_('Prochaines étapes') + list_(NEXT_STEPS, true) +
      heading_('Pièces du dossier') + list_(DOSSIER_PIECES, false) +
      '<p style="margin:0 0 16px;color:#626262;font-size:13px">Le dépôt de candidature ne vaut pas admission.</p>'
    );
    sendMail_(values.email, subject, text, html, NOTIFY_EMAIL);
    return;
  }

  const isCompany = type === 'entreprise';
  const subject = isCompany ? 'PMD™ — Nous avons bien reçu votre demande' : 'PMD™ — Nous avons bien reçu votre message';
  const intro = isCompany
    ? 'Nous avons bien reçu votre demande pour ' + values.entreprise + '. Nous revenons vers vous sous deux jours ouvrés.'
    : 'Nous avons bien reçu votre message et nous vous répondons dans les meilleurs délais.';
  const text = ['Bonjour ' + values.nom + ',', '', intro, 'Référence : ' + ref, '', 'Une question urgente ? WhatsApp : ' + WHATSAPP_NUMBER + ' (' + WHATSAPP_URL + ')', '', 'L’équipe PMD™ — Yello UPSKILL'].join('\n');
  const html = layout_(
    isCompany ? 'Nous avons bien reçu votre demande' : 'Nous avons bien reçu votre message',
    '<p style="margin:0 0 16px">Bonjour ' + esc_(values.nom) + ',</p><p style="margin:0 0 16px">' + esc_(intro) + '</p>' + facts_([['Référence', ref]])
  );
  sendMail_(values.email, subject, text, html, NOTIFY_EMAIL);
}

// Gabarit HTML sobre : couleurs du site, aucune image externe.
function layout_(title, content) {
  return '<div style="margin:0;padding:24px 12px;background:#f6f6f5;font-family:Arial,Helvetica,sans-serif;color:#424242;font-size:15px;line-height:1.6">' +
    '<div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e4e4e4;border-top:4px solid ' + BRAND_RED + '">' +
    '<div style="padding:28px 28px 8px">' +
    '<p style="margin:0 0 10px;color:' + BRAND_RED + ';font-size:11px;font-weight:bold;letter-spacing:1.5px;text-transform:uppercase">PMD™ — Professional Mobility Driver</p>' +
    '<h1 style="margin:0 0 20px;color:#171717;font-size:22px;line-height:1.3">' + esc_(title) + '</h1>' + content + '</div>' +
    '<div style="padding:18px 28px 24px;border-top:1px solid #e4e4e4;font-size:13px;color:#626262">' +
    'Une question ? Écrivez-nous sur WhatsApp : <a href="' + WHATSAPP_URL + '" style="color:' + BRAND_RED + ';font-weight:bold;text-decoration:none">' + WHATSAPP_NUMBER + '</a><br>' +
    'L’équipe PMD™ — Yello UPSKILL</div></div></div>';
}

function heading_(text) {
  return '<p style="margin:22px 0 8px;color:#171717;font-weight:bold">' + esc_(text) + '</p>';
}

function list_(items, ordered) {
  const tag = ordered ? 'ol' : 'ul';
  return '<' + tag + ' style="margin:0 0 16px;padding-left:22px">' + items.map(function (i) { return '<li style="margin:0 0 4px">' + esc_(i) + '</li>'; }).join('') + '</' + tag + '>';
}

function facts_(pairs) {
  return '<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;margin:0 0 8px;border-collapse:collapse">' + pairs.map(function (p) {
    return '<tr><td style="padding:9px 0;border-bottom:1px solid #eeeeee;color:#626262;font-size:13px">' + esc_(p[0]) + '</td>' +
      '<td style="padding:9px 0;border-bottom:1px solid #eeeeee;color:#171717;font-weight:bold;text-align:right">' + esc_(p[1]) + '</td></tr>';
  }).join('') + '</table>';
}

function esc_(value) {
  return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function json_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(ContentService.MimeType.JSON);
}

/* ===== TEST ===== */

// À lancer une fois depuis l'éditeur (bouton « Exécuter ») : demande les autorisations, écrit une ligne de test
// dans la feuille « Candidatures » et envoie les deux e-mails (l'accusé de réception arrive sur votre propre adresse).
function testCandidature() {
  const result = doPost({ postData: { contents: JSON.stringify({
    type: 'candidature', prenom: 'Test', nom: 'PMD', dateNaissance: '1995-01-01', telephone: '+221 70 000 00 00',
    email: Session.getActiveUser().getEmail(), ville: 'Dakar', permisValide: 'oui', anneePermis: '2018', experience: '1 à 3 ans',
    session: '5 décembre 2026', activite: '', formule: 'Pack complet · 120 000 FCFA', motivation: 'Ligne de test, à supprimer.',
    consentement: 'oui', page: '/candidature', website: '',
  }) } });
  console.log(result.getContent());
}
