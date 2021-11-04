import { useState, useEffect } from 'react'
import { CHARACTER_URL } from '../../../utils/constants'
import CharacterCard from '../CharacterCard'

const CharacterCards = () => {

  const [characters, setCharacters] = useState([])

  async function getCharacters() {
    const response = await fetch(CHARACTER_URL)
    const data = await response.json()
    setCharacters(data)
    return data
  }

  useEffect(() => getCharacters(), [])

  return (
    <div>
      {
        characters.map((character, id) =>
          <CharacterCard key={id} {...character} />)
      }
    </div>
  );
}

export default CharacterCards;
