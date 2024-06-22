import { Link } from "react-router-dom"
import logo from '../assets/logo.png'
import FiltroCategorias from "./Filtrocategorias"
import { useNavigate} from 'react-router-dom';
import { useState } from "react";

const Header = () => {


const [txtbuscar, setTxtbuscar] = useState('');

const menejoTxt = (event) => {
    setTxtbuscar(event.target.value);
};

const navigate = useNavigate();
const manejoEnvio = (event) => {
    event.preventDefault();
    navigate('/busquedas', {
      state: txtbuscar,
    });	
    
  };

  return (
    <header>
    <nav className="navbar navbar-expand-lg bg-primary fixed-top" data-bs-theme="dark">
    <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src={logo} alt="" width={250} className="img-fluid" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link to={"/inicio"} className="nav-link  fs-5 fw-bold text-sombra" aria-current="page" href="#">Inicio</Link>
            </li>
            <li className="nav-item">
                <Link to={"/movil"} className="nav-link fs-5 fw-bold text-sombra" href="#">Movil</Link>
            </li>
            <li className="nav-item">
                <Link to={"/laptop"} className="nav-link fs-5 fw-bold text-sombra" href="#">Laptop</Link>
            </li>
            <li className="nav-item">
                <Link to={"/tienda"} className="nav-link fs-5 fw-bold text-sombra" href="#">Tienda</Link>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle fs-5 fw-bold text-sombra" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorias
            </a>
            <ul className="dropdown-menu">
               <FiltroCategorias/>
               
            </ul>
            </li>
            <li className="nav-item">
                <Link to={"/habilidades"} className="nav-link fs-5 fw-bold text-sombra" href="#">Habilidades</Link>
            </li>
        </ul>
        <form className="d-flex" role="search" onSubmit={manejoEnvio}>
            <input value={txtbuscar} onChange={menejoTxt} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Ok</button>
        </form>
        </div>
    </div>
    </nav>
    </header>
  )
}

export default Header