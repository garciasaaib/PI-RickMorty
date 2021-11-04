const axios = require('axios');
const { Characters, Episodes, Op } = require('../db.js')
const URL = "https://rickandmortyapi.com/api"

async function getCharacters(name) {
  try {
    // VERIFYING REQ.QUERIES
    const api = `${URL}/character${name ? `?name=${name}` : ''}`
    const dbQuery = name && {
      where: {
        name: {
          [Op.iLike]: `%${name}%`
        }
      }
    }
    // API CHARACTERS
    const apiCharacters = (await axios.get(api)).data.results
      .map((char) => ({
        id: char.id,
        name: char.name,
        status: char.status,
        image: char.image,
        location: char.location.name,
      })) || []
    // DB CHARACTERS
    const dbCharacters = await Characters.findAll(dbQuery)
    // ALL CHARACTERS
    return dbCharacters.concat(apiCharacters)


  } catch (error) { return error }
}

async function getCharacterById(id) {
  try {
    let character
    let episodesData = []
    // IF IT IS A NUMBER SEARCH IN API
    if (!isNaN(id)) {
      const { name, location, status, image, episode } = (await axios.get(`${URL}/character/${id}`)).data
      const promisesEpisode = episode.map(epId => axios.get(epId))
      await Promise.all(promisesEpisode)
        .then(response => response.forEach(({ data }) => {
          episodesData.push({
            id: data.id,
            name: data.name,
            episode: data.episode
          })
        }))
        character = {
            id, name, status, image,
            location: location.name,
            episode: episodesData
            // .map(epId => epId.match(/\d+/)[0] * 1),
          }
      // IF IT IS NOT A NUMBER SEARCH IN DB
    } else {

      character = await Characters.findOne({
        where: {
          id: id
        },
        include: {
          model: Episodes,
          through: { attributes: [] }
        },
      })
    }
    // RESPONSE
    return character
  } catch (error) { return error }
}

async function createCharacter(newCharacter, epId) {
  try {
    const character = await Characters.create(newCharacter)
      .then(character => {
        character.addEpisode(epId)
        return character
      })
    return character
  } catch (error) { return error }
}

module.exports = {
  getCharacters,
  getCharacterById,
  createCharacter,
}