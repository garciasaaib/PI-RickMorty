const { Router } = require('express');
const {getCharacters, addCharacter, getOneCharacter, searchCharacter } =require("../controllers/characterController")
const router = Router();

router.get("/", getCharacters)
router.get("/one/:id", getOneCharacter)
router.post("/add", addCharacter)
router.get("/searchCharacter/:name", searchCharacter)


module.exports = router;