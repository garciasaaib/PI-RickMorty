// types
import types from "../types"
// url
import { CHARACTER_URL } from "../../utils/constants"



// esto es lo que pasa cuando se llama al reducer
// como se muestra, solo se declara que pasa con determinado action pero no se importa
const reducer = async (state = {
  characters: [],
  characterById: {},
  episodes: [],
}, { type, payload }) => {
  switch (type) {

    case types.CHARACTER_LIST:
      const response = await fetch(payload.url)
      const data = await response.json()
      return {
        ...state,
        characters: data
      }


    default: {
      return state;
    }
  }
}

export default reducer;