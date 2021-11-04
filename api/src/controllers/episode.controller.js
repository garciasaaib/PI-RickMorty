
const axios = require('axios')
const { Episodes } = require('../db.js')
const URL = "https://rickandmortyapi.com/api"

async function preChargeEpisodes(req, res) {
  try {
    // initializate
    let nextUrl = URL + "/episode"
    let episodes = []
    // all episodes data
    while (nextUrl) {
      let { results, info } = (await axios.get(nextUrl)).data
      nextUrl = info.next
      episodes = [...episodes, ...results.map(({ id, name, episode }) => ({ id, name, episode }))]
    }
    // save on db
    episodes = Promise.all(
      episodes.map(
        episode => Episodes.findOrCreate({ where: episode })
      )
    ).then(_ => console.log("episodios cargados exitosamente"))
  } catch (error) { console.log(error) }
}

async function getEpisodes() {
  return await Episodes.findAll()
}

module.exports = {
  preChargeEpisodes,
  getEpisodes
}