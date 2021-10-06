import axios from 'axios'
export const GET_ALL_CHARACTERS = "GET_ALL_CHARACTERS"


export function getCharacters(name, order, page){
return (dispatch)=>{
    axios.get(`http://localhost:3001/characters?name=${name||""}&order=${order|| ""}&page=${page||1}`)
    .then(characters=>{
        return dispatch({
            type: GET_ALL_CHARACTERS,
            payload: characters.data
        })
    })
    .catch((err)=>{
        console.log(err)
    })
}

}