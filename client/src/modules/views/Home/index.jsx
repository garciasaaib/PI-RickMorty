import CharacterCards from "../../components/CharacterCards";
import { Link } from "react-router-dom";
const Home = () => {
  
  return (
    <div>
      <div className="Hero">
        <h2>Encabezzado</h2>
        <h4>Pequeña descripcion</h4>
        <Link to="/add">Crear Personake</Link>
      </div>
      <div>
        <div>Filtrar por episodio</div>
      </div>
      <CharacterCards />
    </div>
  );
}

export default Home;