const { Router } = require('express');
const { getCharacters, getCharactersById, createCharacter} =require("../Controllers/CharacterControllers")
const router = Router();

router.get("/", getCharacters) 
router.get("/:id", getCharactersById ) 
router.post("/add", createCharacter) 
router.get("/searchCharacter/:name", ) 




module.exports = router;