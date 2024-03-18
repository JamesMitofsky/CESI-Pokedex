import express from 'express';

const app = express();

app.use(express.json()); // pour parser les corps de requetes en JSON

app.use('/api/users', require('./routes/userRoutes')); // Route pour les utilisateurs

app.use('/api/pokemons', require('./routes/pokemonRoutes')); // Route pour les pokemons

exports.createThing = (req, res, next) => {
    const thingObject = JSON.parse(req.body.thing);
    const thing = new Thing({
        ...thingObject,
        imageUrl: `${req.protocol}://img/${req.file.filename}`
    });
  
    thing.save()
    .then(() => { res.status(201).json({message: 'Objet enregistré !'})})
    .catch(error => { res.status(400).json( { error })})
 };



module.exports = app;

// the below code fragment can be found in: