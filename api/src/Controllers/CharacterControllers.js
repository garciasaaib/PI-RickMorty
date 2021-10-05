const axios = require("axios");
const {Characters, Episodes} = require("../db.js")
const URL = "https://rickandmortyapi.com/api/character";
const { v4: uuidv4 } = require("uuid")

async function getCharacters(req, res, next){
    try {
       let characters =(await axios.get(URL)).data.results 
       characters= characters.map(e=>{
        return {
            id:e.id,
            name: e.name,
            status: e.status,
            image: e.image,
            location: e.location.name
        }
       })

       res.json(characters)
       
        
    } catch (error) {
        next(error)
        
    }
}

async function getCharactersById(req, res, next){

}

module.exports={
    getCharacters,
    getCharactersById
}
