const { Router } = require('express');
const { 
  getCharacters, 
  getCharacterById,
  createCharacter,
} = require("../controllers/character.controller")
const router = Router();

// list of characters
router.get("/", getCharacters)
 
// character detail
router.get("/:id", getCharacterById)

// create character
router.post("/", createCharacter)
// router.get("/", searchCharacter)


module.exports = router;