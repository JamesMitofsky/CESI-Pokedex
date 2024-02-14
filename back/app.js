import express from "express";
import cors from "cors";
import helmet from "helmet";

import userRoutes from "./routes/userRoutes";
import palRoutes from "./routes/palRoutes";

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

const helmetOptions = {
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false,
  crossOriginResourcePolicy: false,
};

const app = express();

app.use(express.json()); // Pour parser les corps de requêtes en JSON

app.use(cors(corsOptions));
app.use(helmet(helmetOptions));

app.use("/api/users", userRoutes); // Route pour les utilisateurs
app.use("/api/pals", palRoutes); // Route pour les utilisateurs

module.exports = app;
