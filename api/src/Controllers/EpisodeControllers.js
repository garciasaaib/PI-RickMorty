const {Episodes} = require("../db.js")
const axios = require("axios");


async function preCharge(){
    try {
        let episodes = (await axios.get("https://rickandmortyapi.com/api/episode")).data.results
        episodes = episodes.map(e=>{
            return {name: e.name, episode: e.episode}
        })

        episodes=  await Promise.all(episodes.map(e=> Episodes.findOrCreate({where: e})))

        return "Episodios cargados exitosamente"

    } catch (error) {
        console.log(error)
    }
}

module.exports={
    preCharge
}