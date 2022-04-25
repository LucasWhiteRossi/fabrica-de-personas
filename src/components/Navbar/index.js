import { Link } from "react-router-dom";
import './style.modules.css'
import logoImg from "./../../assets/img/logo.png"
export function Navbar() {
return (
    <nav className="navbar navbar-dark bg-dark">
    <h1>
    <Link to="/" style={{ textDecoration: "none" }}>
      <div style={{color:"white"}}>
        <img src={logoImg} alt="Fábrica de Personas" style={{width:"100px",height:"auto"}}/>
        Home
      </div>
      </Link>
    </h1>
    <div className="nav-items">
        <Link className="btn btn-outline-success m-2" to="/cadastro">CADASTRO</Link>
        <Link className="btn btn-outline-success m-2" to="/personas">PEDIDOS</Link>
    </div>
  </nav>
);
}