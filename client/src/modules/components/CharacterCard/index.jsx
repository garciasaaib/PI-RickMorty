import { Link } from "react-router-dom";
const CharacterCard = ({ id, name, image }) => {
  return (
    <div key={id} style={{ background: "grey" }}>

      <Link to={`/detail/${id}`}>
        <img src={image} alt="profile character" />
      </Link>
      <p>{name}</p>

    </div>
  );
}

export default CharacterCard;