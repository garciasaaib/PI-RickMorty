const { Router } = require('express');
const { getEpisodes  } = require('../controllers/episodeController');

const router = Router();
router.get("/", getEpisodes);


module.exports = router;