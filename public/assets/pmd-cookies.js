/*!
 * Bandeau de consentement aux cookies — certificationpmd.com (Yello Upskill)
 * Sans dépendance. À inclure sur TOUTES les pages du site :
 *   <script src="/assets/pmd-cookies.js" defer></script>
 *
 * Catégories :
 *   - essentiels : toujours actifs (aucun accord requis)
 *   - audience   : Amplitude, chargé UNIQUEMENT après accord
 *   - tiers      : vidéos intégrées, boutons réseaux sociaux, widget WhatsApp
 *
 * Pour vos propres scripts tiers, utilisez :
 *   PMDConsent.onConsent('tiers', function () { ... });
 * Tout lien portant l'attribut data-cookie-settings rouvre le bandeau.
 */
(function () {
  'use strict';

  /* ===== RÉGLAGES ===== */
  var AMPLITUDE_API_KEY = 'VOTRE_CLE_API_AMPLITUDE'; // à remplacer (Amplitude > Settings > Projects)
  var AMPLITUDE_ZONE = 'US';    // 'EU' si votre projet Amplitude est hébergé en Europe (recommandé)
  var COOKIE_NAME = 'pmd_consent';
  var COOKIE_DAYS = 180;      // le choix est redemandé après 6 mois
  var POLICY_URL = '/confidentialite#cookies';
  var VERSION = 1;            // augmenter pour redemander l'accord à tous

  /* ===== Stockage du choix ===== */
  function read() {
    var m = document.cookie.match(new RegExp('(?:^|; )' + COOKIE_NAME + '=([^;]*)'));
    if (!m) return null;
    try {
      var v = JSON.parse(decodeURIComponent(m[1]));
      return v && v.v === VERSION ? v : null;
    } catch (e) { return null; }
  }
  function write(c) {
    var v = { v: VERSION, audience: !!c.audience, tiers: !!c.tiers, date: new Date().toISOString() };
    var exp = new Date(Date.now() + COOKIE_DAYS * 864e5).toUTCString();
    document.cookie = COOKIE_NAME + '=' + encodeURIComponent(JSON.stringify(v)) +
      '; expires=' + exp + '; path=/; SameSite=Lax' + (location.protocol === 'https:' ? '; Secure' : '');
    return v;
  }
  function eraseAnalyticsCookies() {
    document.cookie.split('; ').forEach(function (c) {
      var name = c.split('=')[0];
      if (/^(AMP_|amp_|amplitude)/.test(name)) {
        var host = location.hostname.replace(/^www\./, '');
        ['', '; domain=' + location.hostname, '; domain=.' + host].forEach(function (d) {
          document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/' + d;
        });
      }
    });
    try { Object.keys(localStorage).forEach(function (k) { if (/^(AMP_|amp_)/.test(k)) localStorage.removeItem(k); }); } catch (e) {}
  }

  /* ===== Chargement conditionnel ===== */
  var listeners = { audience: [], tiers: [] };
  var state = read();
  var loaded = {};

  function fire(cat) {
    if (loaded[cat]) return;
    loaded[cat] = true;
    listeners[cat].forEach(function (fn) { try { fn(); } catch (e) {} });
  }
  function apply() {
    if (!state) return;
    if (state.audience) fire('audience');
    if (state.tiers) fire('tiers');
    document.dispatchEvent(new CustomEvent('pmd-consent', { detail: state }));
  }

  // Amplitude : chargé seulement si la catégorie « audience » est acceptée.
  // Vérifiez l'extrait d'installation fourni par Amplitude pour votre projet.
  listeners.audience.push(function () {
    if (!AMPLITUDE_API_KEY || AMPLITUDE_API_KEY.indexOf('VOTRE_') === 0) return;
    var s = document.createElement('script');
    s.src = 'https://cdn.amplitude.com/script/' + AMPLITUDE_API_KEY + '.js';
    s.async = true;
    s.onload = function () {
      if (window.amplitude && window.amplitude.init) {
        window.amplitude.init(AMPLITUDE_API_KEY, { autocapture: { elementInteractions: false }, serverZone: AMPLITUDE_ZONE });
      }
    };
    document.head.appendChild(s);
  });

  /* ===== Interface ===== */
  var css = '' +
    '#pmd-cc{position:fixed;left:16px;right:16px;bottom:16px;z-index:2147483000;max-width:620px;margin:0 auto;' +
    'background:#fff;color:#424242;border:1px solid #e4e4e4;border-top:3px solid #A91518;border-radius:4px;box-shadow:0 18px 40px rgba(0,0,0,.14);' +
    'font:400 14px/1.6 Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;padding:22px 24px;max-height:calc(100vh - 32px);overflow:auto;-webkit-font-smoothing:antialiased}' +
    '#pmd-cc .pmd-cc-eyebrow{color:#A91518;font-size:11px;letter-spacing:.13em;font-weight:750;margin:0 0 8px;text-transform:uppercase}' +
    '#pmd-cc h2{font-size:19px;line-height:1.3;letter-spacing:-.02em;font-weight:720;color:#171717;margin:0 0 8px}' +
    '#pmd-cc p{margin:0 0 16px}' +
    '#pmd-cc a{color:#A91518;font-weight:600;text-decoration:none}#pmd-cc a:hover{text-decoration:underline;text-underline-offset:3px}' +
    '#pmd-cc .pmd-cc-btns{display:flex;flex-wrap:wrap;gap:10px}' +
    '#pmd-cc button{flex:1 1 150px;min-height:46px;font:inherit;font-size:13px;font-weight:700;border-radius:4px;padding:11px 16px;cursor:pointer;' +
    'border:1px solid #d6d6d6;background:#fff;color:#222;transition:background .18s,border-color .18s}' +
    '#pmd-cc button:hover{border-color:#777}' +
    '#pmd-cc button.pmd-cc-main{background:#A91518;border-color:#A91518;color:#fff}#pmd-cc button.pmd-cc-main:hover{background:#851114;border-color:#851114}' +
    '#pmd-cc button:focus-visible{outline:3px solid #d77c7e;outline-offset:3px}' +
    '#pmd-cc fieldset{border:0;padding:0;margin:0 0 16px}' +
    '#pmd-cc label{display:flex;gap:12px;align-items:flex-start;padding:12px 0;border-top:1px solid #eee;cursor:pointer}' +
    '#pmd-cc label strong{color:#171717;font-weight:650}' +
    '#pmd-cc label input{margin-top:3px;width:18px;height:18px;flex:none;accent-color:#A91518}' +
    '#pmd-cc label small{display:block;color:#626262;font-size:13px}' +
    '#pmd-cc[hidden],#pmd-cc .pmd-cc-prefs[hidden]{display:none}';

  var box;
  function build() {
    if (box) return box;
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    box = document.createElement('div');
    box.id = 'pmd-cc';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-labelledby', 'pmd-cc-title');
    box.setAttribute('lang', 'fr');
    box.innerHTML =
      '<p class="pmd-cc-eyebrow">Cookies</p><h2 id="pmd-cc-title">Vos choix en matière de cookies</h2>' +
      '<p>Nous utilisons des cookies essentiels au fonctionnement du site. Avec votre accord, nous utilisons aussi ' +
      'des cookies de mesure d\'audience (Amplitude) et des contenus de services tiers (vidéos, WhatsApp). ' +
      'Vous pouvez changer d\'avis à tout moment. <a href="' + POLICY_URL + '">En savoir plus</a></p>' +
      '<fieldset class="pmd-cc-prefs" hidden><legend class="pmd-sr" style="position:absolute;left:-9999px">Catégories de cookies</legend>' +
      '<label><input type="checkbox" checked disabled><span><strong>Essentiels</strong><small>Toujours actifs : fonctionnement, sécurité, mémorisation de vos choix.</small></span></label>' +
      '<label><input type="checkbox" data-cat="audience"><span><strong>Mesure d\'audience</strong><small>Statistiques de visite anonymisées (Amplitude).</small></span></label>' +
      '<label><input type="checkbox" data-cat="tiers"><span><strong>Contenus tiers</strong><small>Vidéos intégrées, boutons de réseaux sociaux, WhatsApp.</small></span></label>' +
      '</fieldset>' +
      '<div class="pmd-cc-btns">' +
      '<button type="button" data-act="refuse">Tout refuser</button>' +
      '<button type="button" data-act="custom">Personnaliser</button>' +
      '<button type="button" data-act="accept" class="pmd-cc-main">Tout accepter</button>' +
      '</div>';
    document.body.appendChild(box);
    box.addEventListener('click', function (e) {
      var act = e.target.getAttribute && e.target.getAttribute('data-act');
      if (!act) return;
      if (act === 'accept') save({ audience: true, tiers: true });
      else if (act === 'refuse') save({ audience: false, tiers: false });
      else if (act === 'custom') {
        var prefs = box.querySelector('.pmd-cc-prefs');
        if (prefs.hidden) {
          prefs.hidden = false;
          e.target.textContent = 'Enregistrer mes choix';
        } else {
          save({
            audience: box.querySelector('[data-cat="audience"]').checked,
            tiers: box.querySelector('[data-cat="tiers"]').checked
          });
        }
      }
    });
    box.addEventListener('keydown', function (e) { if (e.key === 'Escape' && state) hide(); });
    return box;
  }
  function show(withPrefs) {
    build();
    box.querySelector('[data-cat="audience"]').checked = !!(state && state.audience);
    box.querySelector('[data-cat="tiers"]').checked = !!(state && state.tiers);
    var prefs = box.querySelector('.pmd-cc-prefs');
    prefs.hidden = !withPrefs;
    box.querySelector('[data-act="custom"]').textContent = withPrefs ? 'Enregistrer mes choix' : 'Personnaliser';
    box.hidden = false;
    var first = box.querySelector('button'); if (first) first.focus({ preventScroll: true });
  }
  function hide() { if (box) box.hidden = true; }
  function save(c) {
    var before = state;
    state = write(c);
    hide();
    // Retrait d'un accord déjà donné : on efface les traces et on recharge la page
    if (before && ((before.audience && !state.audience) || (before.tiers && !state.tiers))) {
      eraseAnalyticsCookies();
      location.reload();
      return;
    }
    apply();
  }

  /* ===== API publique ===== */
  window.PMDConsent = {
    has: function (cat) { return cat === 'essentiels' || !!(state && state[cat]); },
    onConsent: function (cat, fn) {
      if (!listeners[cat]) return;
      if (loaded[cat]) { try { fn(); } catch (e) {} } else listeners[cat].push(fn);
    },
    open: function () { show(true); }
  };

  function init() {
    document.addEventListener('click', function (e) {
      var el = e.target.closest && e.target.closest('[data-cookie-settings]');
      if (el) { e.preventDefault(); show(true); }
    });
    if (state) apply(); else show(false);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
