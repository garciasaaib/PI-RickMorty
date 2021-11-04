import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <div>
      <p>404</p>
      <p>This page doesnt exist</p>
      <Link to="/home">Go Home</Link>
      <Link to="/add">Create Character</Link>
    </div>
  );
}

export default NotFound;