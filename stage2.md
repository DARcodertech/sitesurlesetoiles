Stage 2 -  Project Charter – Carte interactive du ciel

⸻

1. 🎯 Project Objectives

📌 Purpose (But du projet)
Ce projet vise à rendre l'observation du ciel nocturne accessible à tous, en permettant à toute personne — sans télescope ni connaissance technique — de visualiser en temps réel les étoiles, planètes et constellations visibles depuis sa position.

🎯 Objectifs (SMART)
	1.	Afficher dynamiquement une carte du ciel en fonction de la position GPS de l'utilisateur, avec une précision minimale de ±1° dans la position des objets (livrable semaine 4).
	2.	Intégrer au moins 50 objets célestes interactifs (étoiles, planètes, constellations) avec fiche descriptive (nom, distance, mythologie, image) issue d'une API tierce (livrable semaine 6).
	3.	Proposer au moins deux filtres actifs (ex : objets visibles à l'œil nu, constellations uniquement) pour améliorer l'expérience utilisateur (livrable semaine 7).

⸻

2. 👥 Stakeholders and Roles

🧍 Stakeholders (Parties prenantes)

Catégorie	Nom / Description	Rôle ou impact
Interne	Moi-même (développeur solo)	Conception, développement, test, documentation
Externe	Utilisateurs finaux (grand public curieux d'astronomie)	Bénéficiaires du projet
Externe	Instructeurs / Correcteurs	Évaluateurs du projet, apport de feedback
Externe	Fournisseurs d'API (NASA, Stellarium, Wikidata)	Sources de données astronomiques

🛠️ Rôles individuels

Rôle	Description
Chef de projet	Planification des étapes, priorisation, respect des délais
Développeur frontend	Mise en place de l'interface HTML/CSS, responsive design
Développeur JavaScript	Gestion de la logique, intégration API, interactivité
UX Designer	Organisation des informations à l'écran, expérience utilisateur
Testeur	Vérification manuelle des fonctionnalités développées
Documentaliste	Rédaction de la documentation utilisateur et technique


⸻

3. 🧭 Project Scope

✅ In-scope (inclus dans le périmètre)
	•	Carte du ciel en temps réel basée sur la géolocalisation.
	•	Objets célestes interactifs avec données issues d'une API.
	•	Filtres par type d'objet ou visibilité à l'œil nu.
	•	Version responsive compatible desktop et mobile.
	•	Documentation de l'utilisateur.

❌ Out-of-scope (hors périmètre)
	•	Réalité augmentée ou 3D immersive.
	•	Données météo locales ou calcul de visibilité réelle (nuages).
	•	Connexion utilisateur ou stockage personnalisé.
	•	Traductions multilingues au-delà du français/anglais.
	•	Mode offline (hors connexion Internet).

⸻

4. ⚠️ Risks and Mitigation Strategies

Risque identifié	Description	Stratégie de mitigation
API non fiable ou inaccessible	API publique désactivée ou lente	Prévoir une alternative (API Stellarium ou NASA), et simuler les données en local si besoin
Difficultés de positionnement GPS	L'utilisateur refuse l'accès ou le navigateur bloque	Ajouter un mode manuel pour entrer sa localisation
Complexité technique de l'affichage du ciel	Calcul de position trop complexe ou non maîtrisé	Démarrer par un affichage statique ou simplifié basé sur date + lieu
Charge de travail excessive pour un seul développeur	Projet trop ambitieux seul	Se concentrer strictement sur les objectifs du MVP
Retards ou perte de motivation	Problèmes d'organisation personnelle	Utilisation d'un tableau Kanban clair + mini-milestones hebdomadaires


⸻

5. 📆 High-Level Plan (Timeline)

Phase	Détail	Semaine(s)
1. Idea Development	Brainstorming, analyse de faisabilité, choix MVP	1-2 ✅
2. Project Charter	Rédaction du présent document, clarification du périmètre	3 ✅
3. Technical Documentation	Liste des composants, choix API, architecture fichier	4
4. MVP Development	Intégration GPS + affichage ciel simple	5
	Intégration API + objets interactifs	6
	Ajout de filtres et responsivité	7
5. Finalisation	Tests, correctifs, documentation finale	8
6. Présentation	Préparation d'une démo, présentation orale ou vidéo	9