import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/pedidos">Pedidos</Link>
      
    </div>
  );
};

export default Home;
