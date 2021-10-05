const { Router } = require('express');
const { getCharacters} =require("../Controllers/CharacterControllers")
const router = Router();

router.get("/", getCharacters) 
router.get("/one/:id", ) 
router.post("/add", ) 
router.get("/searchCharacter/:name", ) 




module.exports = router;