const { Router } = require('express');
const character = require('./character');
const episode= require("./episode")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use("/characters", character)
router.use("/episode", episode)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
