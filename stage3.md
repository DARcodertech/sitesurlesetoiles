# 🌠 Projet Ewan – Stage 3: Technical Documentation

## 1. ✅ User Stories and Mockups

### 🎯 User Stories (Priorisation MoSCoW)

| Priorité | User Story |
|----------|------------|
| **Must Have** | En tant qu'utilisateur curieux, je veux consulter des fiches détaillées sur les étoiles, pour en apprendre davantage sur l'astronomie. |
| **Must Have** | En tant qu'utilisateur débutant, je veux filtrer les étoiles par constellation, pour explorer plus facilement le ciel nocturne. |
| **Should Have** | En tant qu'utilisateur, je veux pouvoir enregistrer mes étoiles préférées, pour les retrouver facilement plus tard. |
| **Could Have** | En tant qu'utilisateur passionné, je veux pouvoir commenter ou noter les fiches, pour partager mes impressions avec la communauté. |
| **Won't Have (MVP)** | En tant qu'utilisateur, je veux visualiser les étoiles en réalité augmentée, pour une expérience immersive. |

### 🖼️ Mockups (si applicables)
Les écrans principaux imaginés :
- Page d'accueil avec carte du ciel interactive (si intégrée)
- Liste des étoiles filtrables
- Fiche détaillée d'une étoile
- Formulaire de suggestion ou de contact

## 2. 🏗️ System Architecture

```
                 +---------------------+
                 |     Utilisateur     |
                 +----------+----------+
                            |
                            v
                  +---------+---------+
                  |     Front-End     |
                  |   (React / Vite)  |
                  +---------+---------+
                            |
                            v
                  +---------+---------+
                  |    API REST Node  |
                  | (Express + TypeScript) |
                  +---------+---------+
                            |
                            v
                  +---------+---------+
                  |    Base de Données |
                  |     (MongoDB)      |
                  +-------------------+
```

## 3. 🧩 Components, Classes, and Database Design

### 🧱 Front-End (React)

| Composant | Rôle |
|-----------|------|
| `StarList` | Affiche la liste des étoiles |
| `StarCard` | Affiche un aperçu cliquable d'une étoile |
| `StarDetails` | Affiche les informations complètes d'une étoile |
| `FilterPanel` | Permet de filtrer par constellation, magnitude, etc. |
| `Navbar`, `Footer` | UI standard |

### 🧰 Back-End (Express)

| Classe / Service | Rôle |
|------------------|------|
| `StarController` | Gère les requêtes liées aux étoiles |
| `StarService` | Contient la logique métier pour filtrer/trier les étoiles |
| `StarModel` | Modèle Mongoose de l'étoile |
| `DatabaseConnector` | Connexion à MongoDB |

### 🧬 MongoDB – Collection `stars`

```json
{
  "_id": "star001",
  "name": "Sirius",
  "constellation": "Canis Major",
  "magnitude": -1.46,
  "spectralType": "A1V",
  "distance": 8.6,
  "description": "Sirius est l'étoile la plus brillante du ciel nocturne.",
  "imageUrl": "https://ewan.app/img/sirius.jpg"
}
```

## 4. 🔁 High-Level Sequence Diagrams

### 💫 Use Case 1: Affichage de la fiche étoile

```
User → Front-End: Clique sur une étoile
Front-End → API: GET /stars/:id
API → DB (MongoDB): Cherche par ID
DB → API: Retourne l'étoile
API → Front-End: Donne les données de l'étoile
Front-End: Affiche les détails à l'utilisateur
```

### 🔭 Use Case 2: Filtrage par constellation

```
User → Front-End: Choisit "Orion" dans le filtre
Front-End → API: GET /stars?constellation=Orion
API → DB: Filtre les étoiles par champ "constellation"
DB → API: Liste d'étoiles
API → Front-End: JSON de la liste filtrée
Front-End: Met à jour la liste à l'écran
```

## 5. 🌐 API Specifications

### 🔌 API REST interne

| Méthode | Endpoint | Description | Entrée | Sortie |
|--------|----------|-------------|--------|--------|
| GET | `/stars` | Liste les étoiles (filtrable) | `?constellation=...` | `[{...}, {...}]` |
| GET | `/stars/:id` | Détails d'une étoile | `id` | `{...}` |
| POST | `/contact` | Envoie un message via formulaire | `{ name, email, message }` | `{ success: true }` |

### 🔗 API Externe (future intégration potentielle)

| API | Usage prévu | Commentaire |
|-----|-------------|-------------|
| NASA API / Skyfield | Compléter des données scientifiques (optionnel MVP) | Pas intégré dans MVP |
| OpenStreetMap / Stellarium API | Localisation céleste en temps réel | Pour plus tard si expérience interactive |

## 6. 🔁 SCM and QA Strategies

### 📁 SCM (Git)

- 📂 Branches : `main`, `dev`, `feature/*`
- 🔀 Processus : PR avec review obligatoire
- ⏱️ Commits fréquents et message clair
- 🧪 GitHub Actions (test lint + build)

### 🧪 QA

| Type de test | Outil | Cible |
|--------------|-------|--------|
| Test unitaire | Jest | Composants React / Fonctions back-end |
| Test d'intégration | Supertest | Routes Express |
| Test manuel | Checklist MVP | Navigation, affichage, responsive |
| Linter / Format | ESLint + Prettier | Cohérence code front et back |

## 7. 🧠 Technical Justifications

| Élément | Justification |
|---------|---------------|
| **React + Vite** | Chargement ultra rapide, structure moderne, dev-friendly |
| **MongoDB** | Souple pour des fiches étoile structurées mais non relationnelles |
| **Express (Node.js)** | Léger, simple, et maîtrisé par l'équipe |
| **TypeScript** | Robustesse et lisibilité accrue côté serveur |
| **Mongoose** | ORM efficace pour gérer les modèles Mongo |
| **SCM + CI/CD** | Bonne hygiène de code, facilitation des tests et du travail collaboratif |