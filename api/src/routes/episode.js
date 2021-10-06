const { Router } = require('express');
const { getEpisodes  } = require('../Controllers/EpisodeControllers');

const router = Router();
router.get("/", getEpisodes);




module.exports = router;