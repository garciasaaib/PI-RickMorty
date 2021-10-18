
const axios = require('axios')
const { Episodes } = require('../db.js')
const URL = "https://rickandmortyapi.com/api"

async function preChargeEpisodes(req, res, next) {
  try {
    let episodes = (await axios.get(URL + "/episode")).data.results
    episodes = await episodes.map(episode => {
      return {
        id: episode.id,
        name: episode.name,
        episode: episode.episode
      }
    })
    episodes = Promise.all(
      episodes.map(
        episode => Episodes.findOrCreate({
          where: episode
        })
      )
    ).then(_ => {
      console.log("episodios cargados exitosamente");
    })
  } catch (error) { console.log(error) }
}

async function getEpisodes(req, res, next) {
  try {
    let dbEpisodes = await Episodes.findAll()
    res.json({ episodes: dbEpisodes })
  } catch (error) { console.log(error) }
}

module.exports = {
  preChargeEpisodes,
  getEpisodes
}