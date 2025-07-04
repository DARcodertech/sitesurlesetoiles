Rapport final
✅ Résumé des résultats
Fonctionnalités livrées :

Affichage animé d’un ciel étoilé sur <canvas>.

Clic sur des étoiles nommées (ex. : Soleil, Sirius…) → fiche d'informations dynamique.

Géolocalisation utilisateur via le navigateur.

Appel à l’API ipgeolocation.io pour obtenir le lever et coucher du Soleil en fonction de la position.

Animation fluide du ciel.

Interface simple et fonctionnelle.

Objectifs atteints :

100 % des fonctionnalités principales sont en place.

Interface jugée claire et intuitive.

Tests fonctionnels réalisés sur plusieurs navigateurs (Chrome, Firefox).

Chiffres / Retours concrets :

Données célestes bien affichées selon la position.

Interaction confirmée via clics et fiches visibles.

Tests responsive en cours (partiellement adaptés).

🎓 Leçons apprises
Ce qui a bien fonctionné :

Le découpage en modules (JS classes) a grandement facilité l’organisation du code.

Le canvas animé offre un bon rendu visuel.

L’appel API + géolocalisation donne un aspect “temps réel” intéressant.

Ce qui a été difficile :

L’implémentation responsive (encore incomplète).

Le placement manuel des étoiles nommées dans le canvas.

La gestion d’erreurs API / refus de géolocalisation.

Conseils pour la suite :

Anticiper plus tôt les tests responsive.

Ajouter un fallback si l’API échoue (affichage d’une info par défaut).

Envisager une gestion de données serveur pour protéger la clé API.

🤝 Rétrospective d’équipe
Projet individuel, mais :

Auto-organisation importante.

Sprint Plan documenté dans sprint_plan.md.

Réflexion critique continue pour prioriser les tâches.

📽 Présentation (structure suggérée)
Introduction

Projet individuel : Carte du Ciel

Objectif : visualiser les étoiles + infos en temps réel.

Processus

Phase de recherche (API, géolocalisation).

Conception du ciel animé (canvas).

Intégration des modules et tests.

Partie technique

JS (modules : geoLocation.js, skyMap.js, api.js)

API ipgeolocation.io

Canvas 2D animé

Interaction DOM

Démo du MVP

Animation du ciel

Clic sur étoiles → fiches

Affichage automatique lever/coucher du Soleil

Résultats

Fonctionnel, fluide, simple

100 % des fonctionnalités prévues

Tests utilisateurs et retours visuels

Leçons

Ce qui a marché / ce qui reste à améliorer

Conclusion

Prochaine étape : adaptation mobile complète

Idée future : affichage dynamique basé sur date/heure réelle (nuit/jour)

🔴 Démo live
Pour la présentation orale :

Répète la démo de clics et d’animation.

Prépare une slide simple pour les résultats.

Anticipe les questions (ex : “Pourquoi ce choix d’API ?” ou “Est-ce responsive ?”).