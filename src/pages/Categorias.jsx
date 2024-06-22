
import { useEffect, useState } from "react";
import Cardprod from "../components/Cardprod";
import { useParams } from "react-router-dom"
const API='https://dummyjson.com/products/category/';

const Categorias = () => {
  const params = useParams()
  const [datos, setDatos] = useState([])
  let URI=API+params.id
  const getDatos = async () =>{
      try {
        const response = await fetch(URI);
        const data = await response.json();
        //console.log(data)
        setDatos(data.products);
      } catch (error) {
        console.error(error)
      }
    };
    useEffect(()=>{
      getDatos();
    },[params.id]);
  return (
    <>
        <div className="container">
        <h3 className="text-center py-4 fw-bold text-sombra">Categoria {params.id} ({datos.length})</h3>
            <div className="row">
                {datos && datos.map((item)=>(
                  <Cardprod key={item.id} item={item}/>
                ))}
            </div>
        </div>

    </>
  )
}

export default Categorias
