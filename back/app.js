const express = require("express");
const userRoutes = require("./routes/userRoutes");
const app = express();

app.use(express.json()); // pour parser les corps de requetes en JSON

app.use("/api/users", userRoutes); // Route pour les utilisateurs

module.exports = app;
