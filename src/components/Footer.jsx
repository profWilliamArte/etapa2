import { Link } from "react-router-dom"


const Footer = () => {
  return (
   <footer className="bg-black m-0 p-0">
    <div className="container">
        <footer className="py-3">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><Link to={"/"} href="#" className="nav-link px-2 ">Inicio</Link></li>
            <li className="nav-item"><Link to={"/movil"} href="#" className="nav-link px-2 ">Movil</Link></li>
            <li className="nav-item"><Link to={"/laptop"} href="#" className="nav-link px-2 ">Laptop</Link></li>
            <li className="nav-item"><Link to={"/tienda"} href="#" className="nav-link px-2 ">Tienda</Link></li>
            <li className="nav-item"><Link to={"/contactos"} href="#" className="nav-link px-2 ">Contactos</Link></li>
            </ul>
            <p className="text-center "><a href="https://arsistema.com/" className="nav-link px-2 " target="_blank">© 2024 Arsistema, curso de Frontend</a></p>
            <p className="text-center ">Etapa2 cubre el buscador, el paginador y un nuevo tema de bootstrap con mas diseño</p>
        </footer>
        </div>
    </footer>
  )
}

export default Footer