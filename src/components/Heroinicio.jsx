
import heroinicio1 from "../assets/heroinicio01.jpg"
import heroinicio2 from "../assets/heroinicio02.jpg"
import heroinicio3 from "../assets/heroinicio03.jpg"
const Heroinicio = () => {
  return (
    <div className="container">
        <h3 className="text-center py-4">Herramientas utilizadas</h3>
        <div className="row mt-5">
            <div className="col-md-6 d-flex flex-column align-items-center justify-content-center ">
            <p><span className="fw-bold h4">React es una biblioteca de JavaScript utilizada para construir interfaces de usuario tanto en la web como en aplicaciones nativas. </span>Fue desarrollada por Facebook en 2013 y se ha convertido en una de las bibliotecas más populares para el desarrollo de interfaces de usuario.</p>
            <p>Es importante destacar que React no es un framework completo de JavaScript, sino una biblioteca enfocada en la capa de vista de una aplicación. Esto significa que React se puede utilizar junto con otras bibliotecas o frameworks para construir aplicaciones completas.</p>
            <div className="text-center py-3">
                <a href="https://es.react.dev/" target="_blank" className="btn btn-outline-success">Ir a la web oficial de React </a>
            </div>
            </div>
            <div className="col-md-6">
            <img src={heroinicio1} alt="React" className="img-fluid img-thumbnail" />  
            </div>
        </div>
        <hr className="my-5" />
        <div className="row">
            <div className="col-md-6 order-2 d-flex flex-column align-items-center justify-content-center ">
            <p><span className="fw-bold h4">DummyJSON es una herramienta que proporciona una API REST falsa de datos JSON</span> para el desarrollo, pruebas y prototipos. Con DummyJSON, puedes obtener rápidamente datos realistas para tus proyectos de front-end sin tener que configurar un servidor complicado. Es perfecto para el desarrollo de front-end, la enseñanza, las pruebas y la creación de prototipos. Puedes explorar la documentación detallada en DummyJSON/Docs para obtener ejemplos rápidos.</p>
            <p><b>DummyJSON </b>también ofrece endpoints específicos para diferentes recursos, como productos, publicaciones, usuarios, imágenes, autenticación, entre otros. Estos endpoints te permiten obtener datos específicos para tus necesidades de desarrollo.</p>
            <div className="text-center py-3">
                <a href="https://dummyjson.com/" target="_blank" className="btn btn-outline-info">Ir a la web oficial de DummyJSON </a>
            </div>
            </div>
            <div className="col-md-6">
            <img src={heroinicio2} alt="DummyJSON" className="img-fluid img-thumbnail" />  
            </div>
        </div>
        <hr className="my-5" />
        <div className="row">
            <div className="col-md-6 d-flex flex-column align-items-center justify-content-center ">
            <p><span className="fw-bold h4">Bootstrap es un framework de desarrollo web gratuito y de código abierto que facilita el proceso de creación de sitios web responsivos y orientados a dispositivos móviles. </span> Proporciona una colección de sintaxis para diseños de plantillas y estilos para una amplia variedad de componentes y elementos de interfaz. Bootstrap es ampliamente utilizado debido a su facilidad de uso, su estructura de archivos sencilla y su capacidad para adaptarse a diferentes tamaños de pantalla. Permite a los desarrolladores y diseñadores web crear sitios web de manera eficiente y garantiza que los elementos de la interfaz funcionen de manera óptima en todos los dispositivos.</p>
            <div className="text-center py-3">
                <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/" target="_blank" className="btn btn-outline-warning">Ir a la web oficial de Bootstrap </a>
            </div>
            </div>
            <div className="col-md-6">
            <img src={heroinicio3} alt="Bootstrap" className="img-fluid img-thumbnail" />  
            </div>
        </div>
    </div>

  )
}

export default Heroinicio