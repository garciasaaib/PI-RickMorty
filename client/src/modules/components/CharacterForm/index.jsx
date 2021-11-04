import { useState } from "react";

const CharacterForm = () => {
  const [data, setData] = useState({
    name: "",
    status: "",
    image: "",
    location: "",
    episode: []
  })

  const handleSendData = (event) => {
    event.preventDefault()
    console.log(data)
  }

  const handleChangeData = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }
  return (
    <div>
      <form onSubmit={handleSendData}>
        <div>
          <label htmlFor="">Name: </label>
          <input type="text" name="name" placeholder="Rick Perez, other..." onChange={handleChangeData}/>
        </div>
        <div>
          <label htmlFor="">Status: </label>
          <input type="text" name="status" placeholder="alive, dead, other..." onChange={handleChangeData}/>
        </div>
        <div>
          <label htmlFor="">Image: </label>
          <input type="text" name="image" placeholder="from google..." onChange={handleChangeData} />
        </div>
        <div>
          <label htmlFor="">Location: </label>
          <input type="text" name="location" placeholder="earth, mars, other..." onChange={handleChangeData} />
        </div>
        <div>
          <label htmlFor="">Episodes: </label>
          <input type="text" name="episode" placeholder="take the episodes" onChange={handleChangeData}/>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CharacterForm;