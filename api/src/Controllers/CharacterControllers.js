const axios = require("axios");
const {Characters, Episodes} = require("../db.js")
const URL = "https://rickandmortyapi.com/api/character/";


async function getCharacters(req, res, next){
    try {
       let apiCharacters =(await axios.get(URL)).data.results 
       apiCharacters= apiCharacters.map(e=>{
        return {
            id:e.id,
            name: e.name,
            status: e.status,
            image: e.image,
            location: e.location.name
        }
       })

       let dbCharacters = await Characters.findAll({include: Episodes})
       
       let allCharacters = dbCharacters.concat(apiCharacters)

       res.json(allCharacters)
       
        
    } catch (error) {
        next(error)
        
    }
}

async function getCharactersById(req, res, next){
    try {
        let {id} = req.params
        if(id<2000){
        let apiCharacter= (await axios.get(URL+id)).data
        var character={
            id: apiCharacter.id,
            name: apiCharacter.name,
            status: apiCharacter.status,
            location: apiCharacter.location.name,
            image: apiCharacter.image
        }
    }else{
        var character= await Characters.findByPk(id)
    }   
    res.json(character)

    } catch (error) {
        next(error)
    }
}

function createCharacter(req, res, next){
    try {
        let {image, name, status, epId} = req.body
        let newCharacter ={            
            image,
            name,
            status
        }

        Characters.create(newCharacter)
        .then(character=>{
          character.addEpisode(epId) 
          res.json({...character, epId}) 
        } )



    } catch (error) {
        next(error)
    }
}

module.exports={
    getCharacters,
    getCharactersById,
    createCharacter
}


