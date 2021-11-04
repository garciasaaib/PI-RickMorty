const { Router } = require('express');
const router = Router();
const characterController = require("../controllers/character.controller")

// list of characters
router.get("/", async (req, res, next) => {
  const { name } = req.query
  try {
    const response = await characterController.getCharacters(name)
    res.json(response)
  } catch (error) { next(error) }
})

// character detail
router.get("/:id", async (req, res, next) => {
  const { id } = req.params
  try {
    const response = await characterController.getCharacterById(id)
    res.json(response)
  } catch (error) { next(error) }
})

// create character
router.post("/", async (req, res, next) => {
  const { image, name, status, location, epId } = req.body
  const newCharacter = { image, name, status, location }
  try {
    const variable = await characterController.createCharacter(newCharacter, epId)
    res.json(variable)
  } catch (error) { next(error) }
})
// router.get("/", searchCharacter)


module.exports = router;