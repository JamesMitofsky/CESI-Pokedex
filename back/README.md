# INFAL26 – Introduction aux API avec Node.js, Express, et Prisma

Ce tutoriel est en lien avec le chapitre sur les API Node

Le tutoriel couvre la création de modèles avec Prisma, l'implémentation de contrôleurs pour la logique métier, l'utilisation de middleware pour la gestion des requêtes, et la configuration des routes pour exposer votre API.

## Prérequis
Avant de commencer, assurez-vous d'avoir installé Node.js sur votre machine. Node.js est requis pour exécuter le serveur, le gestionnaire de paquets, et les scripts de développement. Vous pouvez télécharger et installer Node.js depuis [le site officiel](https://nodejs.org/).

## Installation

Clonez ce dépôt sur votre machine et ouvrez un terminal dans le dossier du projet.

Installez les dépendances en exécutant la commande suivante :

```
pnpm install
```

Cette commande installera Express pour le serveur web, Prisma comme ORM, SQLite comme base de données, et d'autres dépendances nécessaires.

## Configuration du Projet

Suivez les étapes décrites dans le tutoriel pour configurer votre projet. Cela inclut :

- Initialisation du projet Node.js et installation des dépendances.
- Configuration de Prisma avec SQLite pour la gestion de la base de données.
- Création des modèles de données avec Prisma.
- Définition de la structure du projet, y compris les dossiers pour les contrôleurs, middleware, routes, etc.
- Implémentation de la logique métier dans les contrôleurs.
- Configuration des routes pour exposer les fonctionnalités de l'API.

## Démarrage du Serveur

Pour démarrer le serveur en mode développement et bénéficier du rechargement automatique avec Nodemon, utilisez la commande :

```
pnpm run dev
```

Votre serveur démarrera et écoutera sur le port par défaut 3000.

## Tests

Ce tutoriel ne comprend pas de tests automatisés. Cependant, vous pouvez tester votre API en utilisant des outils comme Postman ou Thunder Client pour envoyer des requêtes HTTP et valider les réponses de votre API.

Exécuter cette requête pour récupérer les users :

```
GET http://localhost:3000/api/users
```

Exécuter cette requête pour crée un users :

```
POST GET http://localhost:3000/api/users
```

avec dans le body : 

```
{
  "name": "...",
  "email": "..."
}
```




