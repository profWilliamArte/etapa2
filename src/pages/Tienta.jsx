
import { useEffect, useState } from "react";
import Cardprod from "../components/Cardprod";
const API='https://dummyjson.com/products?limit=10&skip=';

const Tienda = () => {
  const [datos, setDatos] = useState([]);
  const [skip, setSkip] = useState(0);
  const [total , setTotal] = useState(0);
  const getDatos = async () => {
    try {
      const URI=API+skip
      const response = await fetch(URI);
      const data = await response.json();
      //console.log(data)
      setDatos(data.products);
      setTotal(data.total)
    } catch (error) {
      console.error(error)
    }
  };
  useEffect(() => {
    getDatos();
  }, [skip]);
  return (
    <>
      <div className="container">
      <h3 className="text-center py-4 fw-bold text-sombra">Laptops ({datos.length})</h3>
      <div className="card mb-2 p-1">
      <div className="d-flex justify-content-between align-content-center text-black">
          <p className="lead m-0 fw-bold text-sombra text-white">Pagina {Math.floor(skip / 10) + 1} de {Math.ceil(total / 10)}</p>
          <nav className="">
            <ul className="pagination m-0">
              <li className="page-item">
                <a className="page-link" href="#"
                  onClick={() => {
                    if (skip >= 10) {
                      setSkip(skip - 10);
                    }
                  }}
                >
                  &lt;&lt;
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  {Math.floor(skip / 10) + 1}
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#"
                  onClick={() => {
                    if (skip + 10 < total) {
                      setSkip(skip + 10);
                    }
                  }}
                >
                  &gt;&gt;
                </a>
              </li>
            </ul>
          </nav>

        </div>
      </div>
 
        
        <div className="row">
          {datos && datos.map((item) => (
            <Cardprod key={item.id} item={item} />
          ))}
        </div>
      </div>

    </>
  )
}

export default Tienda