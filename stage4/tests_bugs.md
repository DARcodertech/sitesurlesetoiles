Liste des Tests et Bugs – Projet Carte du Ciel

Tests effectués

- Le canvas s'affiche correctement au chargement
- Génération d'environ 200 étoiles avec position aléatoire
- Scintillement fluide et non agressif des étoiles
- Affichage des noms sur les étoiles nommées (Soleil, Sirius, etc.)
- Clic sur les étoiles nommées affiche une fiche d'information
- Appel API ipgeolocation.io fonctionne (lever / coucher du Soleil)
- Responsive testé sur écran desktop et tablette

Bugs rencontrés

- Clé API visible dans le code → à déplacer dans .env (prévu)
- Scintillement trop rapide au début → corrigé avec baseAlpha + phase
- Titre coupé sur certains écrans → corrigé avec padding-top et min-height
- Clic imprécis sur les petites étoiles → tolérance augmentée
