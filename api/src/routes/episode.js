const { Router } = require('express');
const { getEpisodes } = require('../controllers/episode.controller');
const router = Router();

router.get("/", getEpisodes)


module.exports = router;