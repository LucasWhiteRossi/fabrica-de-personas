import { Link } from "react-router-dom";
import './style.modules.css'
import logoImg from "./../../assets/img/logo-nome.png"
export function Navbar() {
return (
    <nav className="navbar navbar-dark bg-warning">
    <h1>
    <Link to="/" style={{ textDecoration: "none" }}>
      <div style={{color:"#713e9b"}}>
        <img src={logoImg} alt="Fábrica de Personas" style={{width:"400px",height:"auto"}}/>
      </div>
      </Link>
    </h1>
    <div className="nav-items">
        <Link className="btn btn-outline-danger m-2" to="/cadastro">CRIAR PERSONA</Link>
        <Link className="btn btn-outline-danger m-2" to="/personas">PERSONAS</Link>
        <Link className="btn btn-outline-danger m-2" to="/como-utilizar">COMO UTILIZAR</Link>
    </div>
  </nav>
);
}