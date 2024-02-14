// Exemple d'un middleware d'authentification basique
exports.verifyToken = (req, res, next) => {
    const token = req.cookies["authToken"];

    if (token === "secretToken") {
        next();
    } else {
        res.status(401).send("Accès refusé");
    }
};
