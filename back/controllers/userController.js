// Import des modules nécessaires
import { PrismaClient } from "@prisma/client"; // Import de PrismaClient pour interagir avec la base de données
import bcrypt from "bcrypt"; // Import de bcrypt pour le hashage des mots de passe

// Initialisation de PrismaClient pour interagir avec la base de données
const prisma = new PrismaClient();

// Import de jsonwebtoken pour la gestion des tokens JWT
const jwt = require("jsonwebtoken");
// Clé secrète pour la création des tokens JWT
const secretKey = "moncodesecret";

// Fonction pour récupérer tous les utilisateurs
exports.getUsers = async (req, res) => {
  // Récupération de tous les utilisateurs depuis la base de données
  const users = await prisma.user.findMany();
  // Envoi des utilisateurs au format JSON en réponse
  res.json(users);
};

// Fonction pour authentifier un utilisateur
exports.loginUser = async (req, res) => {
  const { Email, Password } = req.body; // Récupération des informations d'identification depuis la requête

  try {
    // Recherche de l'utilisateur dans la base de données par son email
    const user = await prisma.user.findFirst({ where: { Email } });

    // Vérification de l'existence de l'utilisateur
    if (!user) {
      // En cas d'absence, retourne une erreur d'identification incorrecte
      return res.status(401).json({ error: "Identifiant incorrect" });
    }

    // Vérification de la correspondance du mot de passe hashé
    const passwordMatch = await bcrypt.compare(Password, user.Password);

    // Si les mots de passe ne correspondent pas, retourne une erreur d'identification incorrecte
    if (!passwordMatch) {
      return res.status(401).json({ error: "Identifiant incorrect" });
    }

    // Création du token JWT avec l'ID de l'utilisateur
    const token = jwt.sign({ userId: user.ID }, secretKey, {
      expiresIn: "12h", // Durée de validité du token
    });

    // Envoi du token dans un cookie
    res.cookie("token", token, {
      maxAge: 12 * 60 * 60 * 1000, // Durée de validité du cookie en millisecondes (12 heures)
      httpOnly: true, // Empêche JavaScript client d'accéder au cookie
    });

    // Envoi du token au client
    res.json({ token });
  } catch (error) {
    // En cas d'erreur lors de l'authentification, renvoie une erreur serveur
    console.error("Impossible de connecter l'utilisateur :", error);
    res.status(500).json({ error: "Impossible de connecter l'utilisateur" });
  }
};

// Fonction pour enregistrer un nouvel utilisateur
exports.registerUser = async (req, res) => {
  const { Name, Email, Password } = req.body; // Récupération des informations de l'utilisateur depuis la requête
  try {
    // Hashage du mot de passe
    const hashedPassword = await bcrypt.hash(Password, 10);
    // Création de l'utilisateur dans la base de données avec le mot de passe hashé
    const user = await prisma.user.create({
      data: { Name, Email, Password: hashedPassword },
    });
    // Envoi de l'utilisateur créé en réponse
    res.json(user);
  } catch (error) {
    // En cas d'erreur lors de la création de l'utilisateur, renvoie une erreur serveur
    console.error("Impossible de créer l'utilisateur :", error);
    res.status(500).json({ error: "Impossible de créer l'utilisateur" });
  }
};

// Fonction pour mettre à jour les informations d'un utilisateur
exports.updateUser = async (req, res) => {
  const { ID, Name, Email } = req.body; // Récupération des informations de l'utilisateur depuis la requête

  try {
    // Mise à jour des informations de l'utilisateur dans la base de données
    const updatedUser = await prisma.user.update({
      where: { ID: ID },
      data: { Name, Email },
    });
    // Envoi de l'utilisateur mis à jour en réponse
    res.json(updatedUser);
  } catch (error) {
    // En cas d'erreur lors de la mise à jour de l'utilisateur, renvoie une erreur serveur
    console.error("Impossible de modifier l'utilisateur :", error);
    res.status(500).json({ error: "Impossible de modifier l'utilisateur" });
  }
};

// Fonction pour supprimer un utilisateur
exports.deleteUser = async (req, res) => {
  const { ID } = req.body; // Récupération de l'ID de l'utilisateur depuis la requête

  try {
    // Suppression de l'utilisateur de la base de données
    await prisma.user.delete({
      where: { ID: ID },
    });
    // Envoi d'un message de succès en réponse
    res.json({ message: "L'utilisateur a été supprimé avec succès" });
  } catch (error) {
    // En cas d'erreur lors de la suppression de l'utilisateur, renvoie une erreur serveur
    console.error("Impossible de supprimer l'utilisateur :", error);
    res.status(500).json({ error: "Impossible de supprimer l'utilisateur" });
  }
};
