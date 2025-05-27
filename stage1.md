Stage 1 Report – Développement d'une Idée de Projet (Travail Individuel)

0. Présentation personnelle et organisation du travail

Nom : Ewan Darney
Rôle unique : Développeur·se full-stack solo


Compétences principales :
	•	Frontend : HTML, CSS, JavaScript
	•	Design UX : structuration d'interface, responsive
	•	APIs : compréhension des appels REST et JSON
	•	Autonomie, planification, rigueur

Outils utilisés pour m'organiser :
	•	GitHub : gestion de version, dépôt du code


⸻

1. Idées Explorées

Méthode utilisée : brainstorming personnel +  avantages/inconvénients

Idée 1 :

Nom : Journal climatique personnel
Description : Un journal interactif où les utilisateurs saisissent leurs ressentis météo pour les comparer à des données climatiques sur 5 ans.
Avantages : sensibilisation à l'écologie, original
Pourquoi rejetée : nécessite une base de données fiable et complexe, dépendance à des APIs météo avec historique (souvent payantes)

Idée 2 :

Nom : Assistant vocal pour chanteurs débutants
Description : Application d'entraînement vocal qui corrige la justesse en temps réel.
Avantages : fun, innovant
Pourquoi rejetée : traitement audio complexe, reconnaissance vocale et analyse de fréquence trop lourde techniquement pour un MVP simple

Idée 3 :

Nom : Carte interactive du ciel
Description : Une carte interactive affichant les objets célestes visibles en temps réel, depuis la position GPS de l'utilisateur.
✅ Projet retenu

⸻

2. MVP Sélectionné : Carte interactive du ciel

Description simple

Un site web qui permet de visualiser en temps réel les étoiles, constellations et planètes visibles dans le ciel depuis la position de l'utilisateur. Chaque objet cliquable donne accès à une fiche informative (nom, distance, histoire, images).

Raisons du choix
	•	Faisable seul avec mes compétences actuelles en JS, HTML/CSS
	•	Pédagogique et visuellement attractif
	•	Enrichissant : implique des appels API, des animations, de l'UX
	•	Souple : le projet peut évoluer vers des versions plus complexes plus tard (WebGL, AR, etc.)

Problème résolu

L'observation du ciel est souvent intimidante pour les débutants. Cette carte permet une découverte simple et intuitive, sans télescope, en offrant des informations directement accessibles.

Public cible
	•	Curieux de l'espace et débutants en astronomie
	•	Enseignants et élèves
	•	Parents et enfants (activité éducative)
	•	Grand public passionné d'observation du ciel

Fonctionnalités du MVP
	1.	Affichage en temps réel du ciel, basé sur la position GPS de l'utilisateur
	2.	Fiches informatives pour chaque objet cliquable (nom, distance, mythologie, visuels NASA)
	3.	Filtres pour n'afficher que les objets visibles à l'œil nu ou certaines catégories (planètes, étoiles, constellations)

⸻

3. Évaluation et Difficultés Anticipées

Critères d'évaluation utilisés

Critère	Score (1-5)
Faisabilité technique	4
Intérêt pédagogique	5
Temps de développement	4
Originalité	3

Difficultés techniques anticipées
	•	Récupération des données astronomiques : il faudra choisir une API fiable (ex : Stellarium, NASA Open APIs)
	•	Utilisation de la position GPS : gestion des permissions navigateur, fallback si refus
	•	Représentation du ciel : affichage fluide et intuitif, avec repères visuels

Stratégies prévues en cas de blocage
	•	Étudier des tutoriels ciblés sur l'API choisie
	•	Rechercher des projets similaires open-source sur GitHub
	•	Simplifier l'interface temporairement pour valider le fond avant la forme
	•	Poser des questions sur StackOverflow ou forums spécialisés

⸻

4. Organisation du projet

Mon rôle

Tout est développé et géré par moi :
	•	Design UI / UX
	•	Développement frontend
	•	Recherche et intégration API
	•	Planification et documentation

Méthodologie
	•	Découpage en user stories simples
	•	Commits Git réguliers avec messages clairs
	•	Version MVP prioritaire, puis ajout progressif de fonctionnalités secondaires

⸻

5. Technologies utilisées

Technologie	Rôle
HTML	Structure de la page
CSS	Mise en forme, responsive design, animations
JavaScript	Logique interactive, appels API, DOM dynamique
API (NASA / Stellarium / Wikidata)	Données astronomiques en temps réel
Geolocation API	Récupération de la position de l'utilisateur


⸻

6. Ce que j'ai appris pendant cette étape
	•	Structurer une idée de manière réaliste et faisable
	•	Prioriser les fonctionnalités essentielles
	•	Évaluer les contraintes techniques d'un projet seul
	•	M'organiser efficacement en autonomie, avec des outils adaptés
	•	Rédiger une documentation claire, utile pour le suivi et les évaluateurs

⸻