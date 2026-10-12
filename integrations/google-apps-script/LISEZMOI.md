# Formulaires PMD™ — Google Sheet + e-mails

`Code.gs` reçoit les trois formulaires du site (candidature, contact, entreprise). Pour chaque envoi, il :

1. valide les champs (obligatoires, e-mail, téléphone, longueurs) ;
2. ajoute une ligne dans la feuille du type concerné (`Candidatures`, `Contacts`, `Entreprises`), créée au premier envoi ;
3. envoie une notification à `NOTIFY_EMAIL` et un accusé de réception à la personne.

Le fichier ne contient aucun identifiant ni secret. Les e-mails partent du compte Google qui déploie le script.

## 1. Installer le script

1. Créez un Google Sheet (par exemple « PMD — Formulaires du site ») avec le compte Google qui enverra les e-mails.
2. Menu **Extensions > Apps Script**.
3. Supprimez le contenu de `Code.gs` dans l'éditeur, collez celui de ce dossier, puis enregistrez.
4. En haut du fichier, vérifiez les réglages : `NOTIFY_EMAIL`, `WHATSAPP_NUMBER`, et `FROM_ALIAS` si vous utilisez un alias (voir plus bas).

## 2. Autoriser et tester

1. Dans la liste des fonctions de l'éditeur, choisissez `testCandidature`, puis cliquez sur **Exécuter**.
2. Google demande les autorisations (accès au Sheet et envoi d'e-mails) : acceptez-les.
3. Vérifiez : une ligne dans la feuille `Candidatures`, une notification sur `NOTIFY_EMAIL`, un accusé de réception sur votre propre adresse. Supprimez ensuite la ligne de test.

## 3. Déployer

1. **Déployer > Nouveau déploiement**.
2. Type : **Application web**.
3. **Exécuter en tant que : moi**.
4. **Accès : tout le monde**.
5. **Déployer**, autorisez si Google le redemande, puis **copiez l'URL de l'application web** (elle se termine par `/exec`).

Ouvrir cette URL dans un navigateur doit afficher `{"ok":true,"service":"Formulaires PMD"}`.

## 4. Relier le site

Le site lit l'URL dans la variable `VITE_FORMS_ENDPOINT`, **au moment du build** :

```bash
# fichier .env.local à la racine du site (jamais commité)
VITE_FORMS_ENDPOINT=https://script.google.com/macros/s/XXXXXXXX/exec
```

Puis `npm run build`. Sans cette variable, les formulaires restent en mode démo : ils vérifient les champs mais n'envoient rien.

## Mettre le script à jour

Après toute modification de `Code.gs` : **Déployer > Gérer les déploiements > icône crayon > Version : Nouvelle version > Déployer**. L'URL ne change pas. Un « Nouveau déploiement » créerait une autre URL, qu'il faudrait remettre dans le site.

## Bon à savoir

- **Colonnes** : date/heure (fuseau Africa/Dakar), référence, champs du formulaire, consentement, page d'origine, statut (`Nouveau` par défaut). Ne renommez pas les feuilles et n'insérez pas de colonne avant « Statut » : le script écrit dans l'ordre des colonnes.
- **Référence** : `PMD-CAND-AAAAMMJJ-XXXX` (`CONT` pour un contact, `ENT` pour une entreprise).
- **Anti-spam** : un champ caché (`website`) piège les robots ; s'il est rempli, le script répond « ok » sans rien enregistrer. Un second envoi avec le même e-mail et le même type en moins de 2 minutes renvoie la référence déjà créée, sans nouvelle ligne ni nouvel e-mail.
- **Alias d'expédition** : pour envoyer depuis `contact@certificationpmd.com`, ajoutez d'abord cette adresse dans Gmail (Paramètres > Comptes > « Envoyer des e-mails en tant que »), puis renseignez `FROM_ALIAS`. S'il est vide, les e-mails partent de l'adresse du compte, avec `NOTIFY_EMAIL` en adresse de réponse.
- **Quotas** : un compte Gmail gratuit envoie environ 100 e-mails par jour par Apps Script (un compte Google Workspace, environ 1 500). Chaque formulaire en consomme deux.
- **E-mail non envoyé** : la ligne est toujours écrite dans le Sheet avant les e-mails. Si le quota du jour est épuisé ou si un envoi échoue, le statut de la ligne devient « Nouveau — e-mail non envoyé » et le site affiche quand même la référence : filtrez ce statut pour recontacter ces personnes à la main. Le détail de l'erreur est dans **Exécutions**, dans l'éditeur Apps Script.
- **Données personnelles** : le Sheet contient des données de candidats. Limitez son partage aux personnes habilitées.
