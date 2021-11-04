import types from '../types'

/** funciones que se llaman desde el front
 * retorna el tipo y la info que necesita para correr
 * */

const characterList = (payload) => ({
  type: types.CHARACTER_LIST,
  payload
})

export default {
  characterList
}