const { Router } = require('express');
const router = Router();
const episodeController = require('../controllers/episode.controller');

router.get("/", async (req, res, next) => {
  try {
    const episodeList = await episodeController.getEpisodes()
    res.json(episodeList)
  } catch (error) {
    next(error)
  }
})




module.exports = router;