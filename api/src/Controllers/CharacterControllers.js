const axios = require("axios");
const {Characters, Episodes, Op} = require("../db.js")
const URL = "https://rickandmortyapi.com/api/character/";
 


async function getCharacters(req, res, next){
    try {
        let {
            name,
            order,
            page
        } = req.query
        //orden pag /filtrado name
        //name
        //orden
        //pag
        //https://rickandmortyapi.com/api/character/?name=
        let apiCharacters
        let dbCharacters
        let allChars=[]
        page = page || 1 
        const charXPage = 5;
        //#region NAME
        if(name && name !== ""){
            apiCharacters = (await axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`)).data.results
            dbCharacters= await Characters.findAll({
                where:{
                    name:{
                        [Op.iLike]: `%${name}%`  
                    }
                }
            })
            allChars= dbCharacters.concat(apiCharacters)
        }
        else{
            
            apiCharacters = (await axios.get("https://rickandmortyapi.com/api/character")).data.results
            dbCharacters= await Characters.findAll({include: Episodes})

            allChars= dbCharacters.concat(apiCharacters)
        }
        //#endregion
        
        //#region ORDER
        if(order === "asc" || !order || order === ""){
            allChars = allChars.sort((a,b) =>{
                return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
            })
        }else{
            allChars = allChars.sort((a,b) =>{
                return b.name.toLowerCase().localeCompare(a.name.toLowerCase())
            })
        }
        //#endregion

        //#region PAGE
            let result = allChars.slice((charXPage * (page -  1)) , (charXPage * (page -  1)) + charXPage ) 
        //#endregion
        
        return res.send({
            result: result, 
            count: allChars.length
        })
      

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


