# 🌌 Carte du Ciel – Projet individuel

## 📛 Nom et description courte
Carte du Ciel est une application web interactive qui affiche une carte d’étoiles générées dynamiquement, avec fiches d'informations cliquables, géolocalisation et horaires célestes en temps réel.

---

## 🎯 Objectifs / fonctionnalités principales

- Affichage d’un ciel étoilé animé (canvas)
- Étoiles nommées cliquables (Soleil, Sirius, etc.)
- Fiches d'information affichées au clic
- Géolocalisation utilisateur via navigateur
- Appel d’une API pour obtenir les horaires du lever/coucher du Soleil
- Responsive (en cours d’adaptation)

---

## 🛠 Stack technique

| Frontend               | Backend / API              |
|------------------------|----------------------------|
| HTML, CSS, JS (ES6)    | API ipgeolocation.io       |
| Canvas 2D              |                            |
| Modules JS (import/export) |                        |

---

## 🎥 Démonstration

Des captures d’écran sont disponibles dans le dossier captures/ pour démontrer que le site est fonctionnel :
- Interface
- Ciel étoilé
- Fiches étoile
- Appel API

---

## 🧪 Tests QA

- Testé sur desktop (Chrome, Firefox)
- Fonctionnement vérifié du canvas
- Clic sur les étoiles testé (zone + fiche)
- Appel API validé
- Responsive en cours de validation

---

## 📋 Sprint Plan

Ce projet a été réalisé seul, avec un sprint_plan.md détaillé :
- Tâches priorisées
- Délais estimés / réels
- Commentaires en cas d’imprévus

---

## 🔐 Sécurité

- Pour cette version locale, la clé API est visible dans le code JavaScript.
- Dans un projet final ou public, elle serait déplacée dans un fichier `.env` ou gérée côté serveur.

---

## 📁 Structure du projet

```plaintext
Carte/
├── css/
│   └── style.css
├── js/
│   ├── api.js
│   ├── app.js
│   ├── geoLocation.js
│   └── skyMap.js
├── index.html
```

---

## 👤 Auteur

Projet réalisé par Ewan
Contact : 9840@holbertonstudents.com
