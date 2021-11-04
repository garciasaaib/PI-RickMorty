import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div>
      <h1>This is the landing page</h1>
      <Link to="/home">Go Home</Link>
    </div> 
  )
}

export default Landing;