
import { useEffect, useState } from "react";
import Cardprod from "../components/Cardprod";
const API='https://dummyjson.com/products/category/smartphones';

const Movil = () => {
  const [datos, setDatos] = useState([])
  const getDatos = async () =>{
      try {
        const response = await fetch(API);
        const data = await response.json();
        //console.log(data)
        setDatos(data.products);
      } catch (error) {
        console.error(error)
      }
    };
    useEffect(()=>{
      getDatos();
    },[]);
  return (
    <>
        <div className="container">
        <h3 className="text-center py-4 fw-bold text-sombra">Movil ({datos.length})</h3>
            <div className="row d-flex  align-items-center justify-content-center ">
                {datos && datos.map((item)=>(
                  <Cardprod key={item.id} item={item}/>
                ))}
            </div>
        </div>

    </>
  )
}

export default Movil