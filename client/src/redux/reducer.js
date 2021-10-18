import {GET_ALL_CHARACTERS} from "./actions"

const initialState={
    characters= [],
    characterById= {},
    episodes=[]
}

function reducer(state = initialState, {type, payload}) {
    switch (type) {
    
        case GET_ALL_CHARACTERS:
            return {
                ...state,
                characters: payload
            }

        
      default: {
        return state;
      }
    }
  }
  
  export default reducer;