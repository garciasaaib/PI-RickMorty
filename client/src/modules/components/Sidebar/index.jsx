import { Link } from "react-router-dom"
import { BsSearch } from 'react-icons/bs';

const Sidebar = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>

      <Link to="/" >
        Logo
      </Link>

      <div>
        <BsSearch />
        <form action="">
          <input type="search" placeholder="Find by name" />
        </form>
      </div>


      <ul style={{
        listStyle: "none",
        textAlign: "left",
        display: "flex",
        gap: ".5rem"

      }}>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/add">Add character</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
        <li>🌚</li>
      </ul>
    </div>
  );
}

export default Sidebar;