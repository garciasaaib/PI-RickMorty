const axios = require('axios');
const { Op } = require('sequelize');
const { Characters, Episodes } = require('../db.js')
const URL = "https://rickandmortyapi.com/api"

async function getCharacters(req, res, next) {
  try {
    // VERIFYING REQ.QUERIES
    const { name } = req.query
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
    const allCharacters = dbCharacters.concat(apiCharacters)

    // RESPONSE
    res.json({ length: allCharacters.length, characters: allCharacters })

    } catch (error) { next(error) }
  }

async function getCharacterById(req, res, next) {
    try {
      const { id } = req.params
      let character

      // IF IT IS A NUMBER SEARCH IN API
      if (!isNaN(id * 1)) {
        const { name, location, status, image } = (await axios.get(`${URL}/character/${id}`)).data
        character = {
          id, name, status, image,
          location: location.name
        }

        // IF IT IS NOT A NUMBER SEARCH IN DB
      } else {
        character = await Characters.findOne({
          where: {
            id: id
          },
        })

      }

      // RESPONSE
      res.json({ data: character })
    } catch (error) { next(error.message) }
  }

  async function createCharacter(req, res, next) {
    try {
      const { image, name, status, location, epId } = req.body
      const newCharacter = { image, name, status, location }
      console.log(newCharacter)
      await Characters.create(newCharacter)
        .then(character => {
          character.addEpisode(epId)
          res.json({ character: character, id: epId })
        })
    } catch (error) { next(error) }
  }

  module.exports = {
    getCharacters,
    getCharacterById,
    createCharacter,
  }