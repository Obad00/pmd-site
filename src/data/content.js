import { config, price, sessionLabel } from '../config.js'

const { duration, thresholds, minAge } = config

export const MODULES = [
  ['Le métier de conducteur professionnel', 'Comprendre les responsabilités et les standards du métier.', ['Environnements d’exercice : VTC, corporate, hôtellerie, tourisme', 'Tenue et posture attendues', 'Le rôle du conducteur pour l’entreprise']],
  ['Sécurité routière et conduite préventive', 'Anticiper les risques et adopter une conduite sûre.', ['Repérer les dangers', 'Distances et vitesse', 'Nuit, pluie, trafic dense', 'Réagir à un incident']],
  ['Maîtrise du véhicule, contrôle et maintenance', 'Contrôler, entretenir et détecter les anomalies.', ['Contrôles avant départ', 'Détection des anomalies', 'Suivi de l’entretien', 'Propreté et présentation']],
  ['Expérience client et excellence de service', 'Accueillir, accompagner et fidéliser.', ['Accueil et bagages', 'Clients d’affaires, touristes, VIP, mobilité réduite', 'Discrétion', 'Excellence de service']],
  ['Communication, stress et gestion des conflits', 'Communiquer avec justesse et rester professionnel.', ['Informer et rendre compte', 'Téléphone et messagerie', 'Retards et clients mécontents', 'Fatigue et stress']],
  ['Navigation, technologie et outils numériques', 'Maîtriser GPS, applications et outils de mobilité.', ['Planifier un itinéraire', 'Applications VTC et navigation', 'Paiements numériques', 'Données des clients']],
  ['Réglementation, éthique et responsabilité', 'Connaître ses obligations et le code de conduite PMD.', ['Code de la route et transport de personnes', 'Documents et assurance', 'Confidentialité et intégrité', 'Code de conduite PMD']],
  ['Organisation des missions et coordination', 'Préparer, exécuter et rendre compte d’une mission.', ['Lire un ordre de mission', 'Horaires et itinéraires', 'Coordination avec le dispatch', 'Passage de relais']],
  ['Véhicule, flotte, coûts et rentabilité', 'Comprendre l’économie du véhicule et de l’activité.', ['Carburant, entretien, assurance', 'Éco-conduite', 'Rentabilité d’une journée', 'Valeur du véhicule']],
  ['Performance, qualité et amélioration continue', 'Mesurer et améliorer ses performances.', ['Ponctualité, notes, incidents', 'Analyser un retour client', 'Plan de progression']],
  ['Travail en équipe, incidents majeurs et continuité', 'Agir en équipe et assurer la continuité du service.', ['Travailler en équipe', 'Accident, panne, agression, urgence médicale', 'Rapport d’incident', 'Remplacement et relais']],
  ['Préparation finale, examen et certification PMD™', 'Se préparer aux épreuves et à la décision du jury.', ['Simulations de missions', 'Évaluations blanches', 'Préparation à l’entretien', 'Critères de réussite']],
]

export const PHASES = [
  ['Phase 1 · Semaines 1 à 3', 'Les fondamentaux', 'Le métier, la sécurité routière et la maîtrise du véhicule.', 'Modules 01 · 02 · 03'],
  ['Phase 2 · Semaines 4 à 6', 'La relation client', 'Le service, la communication et les outils numériques.', 'Modules 04 · 05 · 06'],
  ['Phase 3 · Semaines 7 à 9', 'Le cadre professionnel', 'La réglementation, l’organisation des missions et l’économie du véhicule.', 'Modules 07 · 08 · 09'],
  ['Phase 4 · Semaines 10 à 12', 'Excellence et certification', 'La qualité, le travail en équipe, la préparation et les épreuves.', 'Modules 10 · 11 · 12'],
]

export const EXAMS = [
  ['Test de connaissances', 'Knowledge Test', 'Sécurité, réglementation, véhicule et service.', 'Questionnaire'],
  ['Évaluation de conduite', 'Driving Assessment', 'Anticipation, souplesse et respect des règles, sur route.', 'Épreuve pratique'],
  ['Expérience client', 'Customer Experience', 'Accueillir, prendre en charge et accompagner un client.', 'Mise en situation'],
  ['Comportement professionnel', 'Professional Behavior', 'Posture, présentation, ponctualité, gestion d’une situation difficile.', 'Observation continue'],
  ['Entretien professionnel', 'Professional Interview', 'Votre capacité à exercer le métier, devant un jury.', 'Entretien individuel'],
]

export const FAQ = [
  ['Programme', [
    ['Combien de temps dure le programme ?', `${duration.weeks} semaines, réparties en ${duration.phases} phases de ${duration.weeksPerPhase} semaines, pour ${duration.hours} heures de formation, de pratique et d’évaluation.`],
    ['Quand commence la prochaine session ?', `Le ${sessionLabel}. Une nouvelle session démarre ensuite tous les trois mois, avec un nombre de places limité.`],
    ['Faut-il déjà être conducteur VTC ?', 'Non. Le programme s’adresse aux titulaires du permis qui veulent devenir conducteurs professionnels comme aux conducteurs déjà en activité.'],
  ]],
  ['Admission', [
    ['Quelles sont les conditions d’accès ?', `Avoir ${minAge} ans révolus, être titulaire d’un permis valide, déposer un dossier complet et être retenu après étude du dossier. La liste complète figure sur la page Certification.`],
    ['Quels documents fournir ?', 'Une pièce d’identité et votre permis de conduire, demandés lors de l’étude du dossier.'],
  ]],
  ['Tarifs', [
    ['Combien coûte le programme ?', `Le pack complet coûte ${price.pack} FCFA : ${price.training} FCFA pour la formation (PMD™ BOOK inclus) et ${price.exam} FCFA pour l’examen. Chaque élément peut aussi être pris séparément.`],
    ['Peut-on se préparer seul ?', `Oui. Achetez le PMD™ BOOK (${price.book} FCFA), préparez-vous à votre rythme, puis inscrivez-vous à l’examen en candidat libre (${price.exam} FCFA).`],
    ['Le PMD™ BOOK est-il inclus dans la formation ?', `Oui. Les participants à la formation le reçoivent. Il est vendu seul à ${price.book} FCFA pour les candidats qui se préparent en autodidacte.`],
    ['Peut-on payer en plusieurs fois ?', 'Les modalités de paiement sont présentées lors de l’échange d’admission. Contactez-nous pour en savoir plus.'],
  ]],
  ['Certification', [
    ['Que se passe-t-il si j’échoue ?', `Vous recevez votre profil de compétences avec les points à renforcer, et vous pouvez repasser la certification ${thresholds.retakeMonths} mois après.`],
    ['Qu’est-ce qu’une faute critique ?', 'Un comportement qui met gravement en danger les passagers ou les autres usagers. Une seule faute critique entraîne l’ajournement.'],
    ['PMD garantit-il un emploi ?', 'Non. La certification atteste de compétences recherchées par les employeurs de la mobilité, mais aucun emploi n’est garanti.'],
  ]],
  ['Entreprises', [
    ['Peut-on former un groupe de conducteurs ?', 'Oui, en session dédiée. Présentez votre besoin via le formulaire entreprise.'],
    ['Peut-on évaluer des conducteurs déjà en poste ?', 'Oui. Le diagnostic produit un profil par conducteur et une synthèse pour votre équipe.'],
  ]],
]
