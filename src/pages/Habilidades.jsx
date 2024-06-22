import iconoreact from "../assets/react.svg"
import iconovite from "..//assets/vite.svg"
import iconobootstrap from "../assets/bootstrap.svg"
import iconoreacrouterdom from "../assets/react-router-dom.svg"
import iconocomponets from "../assets/componets.svg"
import iconohooks from "../assets/hooks.svg"
import iconoapis from "../assets/apis.svg"
const Habilidades = () => {
  return (
    <div className="container ">

      <h5 className="text-center py-4 lead fs-1">Etapa 2</h5>
      <div className="col-lg-7 mx-auto">
        <p className="lead text-center fs-5 fs-bold">
¡Eleva tu proyecto al siguiente nivel con React!
¿Estás listo para llevar tu página web al siguiente nivel? En la segunda etapa de nuestro curso, te sumergirás en el apasionante mundo de React y descubrirás cómo crear interfaces atractivas y funcionales con las herramientas más populares de desarrollo web. Aprende a implementar un buscador potente, diseñar con Bootstrap y paginar resultados. Aprovecha el poder de DummyJSON para enfocarte en aprender las habilidades prácticas que necesitas para crear aplicaciones React reales y funcionales. </p>
      </div>

      <div className="row">
        <h5 className="py-4 lead fs-4 text-center fst-italic text-decoration-underline">Habilidades que dominaras</h5>
        <div className="col-md-8 mx-auto text-center">

        <div className="my-3">
            <img src={iconobootstrap} alt="" width={40} />
          </div>
          <p className="mb-3"><b className="fs-5">Temas de Bootstrap y nuevas clases<br /></b>
            <small>En esta segunda etapa del proyecto, utilizamos un nuevo tema de Bootstrap que obtuvimos de la página oficial bootswatch.com. El tema que seleccionamos fue Quartz. Además, agregamos varias clases de Bootstrap, como fixed-top, lead, fw-bold, entre otras, para dar estilo a nuestros elementos. También agregamos clases personalizadas en el archivo index.css, como las clases para aplicar sombras a ciertos elementos.</small><br/>
            <small>Para implementar el nuevo tema de Bootstrap, descargamos el archivo CSS correspondiente desde bootswatch.com y lo vinculamos en nuestro proyecto. Luego, utilizamos las clases proporcionadas por Bootstrap para aplicar los estilos deseados a nuestros componentes. Por ejemplo, agregamos la clase fixed-top a una barra de navegación para mantenerla fija en la parte superior de la página. También utilizamos las clases lead y fw-bold para estilizar el texto y hacerlo resaltar.</small><br /><small>Además de las clases de Bootstrap, creamos nuestras propias clases personalizadas en el archivo index.css. Estas clases nos permiten agregar estilos específicos que no se encuentran en Bootstrap. Por ejemplo, definimos clases de sombra para aplicar a ciertos elementos y agregarles un aspecto más visualmente atractivo.</small><br />
            
          </p>
          <hr />
          <div className="my-3">
              <img src={iconoreact} alt="" />
          </div>
     
          <p className="mb-3"><b className="fs-5">Buscador:<br /></b>
            <small>En esta segunda etapa del proyecto de React, vamos a agregar un buscador utilizando un campo de texto y un formulario. El objetivo es permitir al usuario ingresar un término de búsqueda y enviarlo para obtener resultados relevantes. Para lograr esto, utilizaremos eventos como onChange y onSubmit para controlar el valor del campo de búsqueda y enviarlo a la página de búsqueda correspondiente.</small><br />
            <small>En el componente de encabezado (Header), implementaremos el campo de texto y el formulario que contendrá el buscador. Utilizaremos el evento onChange para capturar los cambios en el campo de búsqueda y actualizar su valor en el estado del componente. Luego, utilizaremos el evento onSubmit en el formulario para manejar el envío del término de búsqueda.</small><br />
            <small>Una vez que el término de búsqueda sea enviado, navegaremos a la página de búsqueda utilizando el hook useNavigate de React Router. En la página de búsqueda, utilizaremos el hook useLocation para obtener el término de búsqueda de la URL. Con este valor, construiremos un URI que combina la URL de la API con el término de búsqueda para realizar la búsqueda correspondiente.</small><br />
           

          </p>
          <hr />
          
          <div className="my-3">
            <img src={iconoreacrouterdom} alt="" width={70}  />
          </div>
          <p className="mb-3"><b className="fs-5">Paginador<br /></b><small>Implementamos un paginador en la página de tienda utilizando los valores de "skip" y "total" proporcionados por la página dummyjson. Para ello, utilizamos el hook useState de React para gestionar el estado de la página actual y el URI de la API. Con estos elementos, creamos una interfaz vistosa y funcional que permite la navegación entre páginas directamente desde el backend.</small><br/>
            <small>Además de la lógica de paginación, utilizamos el diseño de paginador de Bootstrap para mejorar la apariencia del componente. Esto nos permitió agregar estilos predefinidos y hacer que el paginador se vea más profesional y coherente con el resto de la página de tienda.</small><br />
            <small>En resumen, con la combinación de los valores de "skip" y "total", el uso de useState y el URI de la API, pudimos implementar un paginador en la página de tienda que ofrece una experiencia visualmente atractiva y funcional para los usuarios. El diseño de paginador de Bootstrap nos permitió mejorar la apariencia del componente y hacer que se integre de manera fluida con el resto de la interfaz.</small>
          </p>
          
         
         
          




        </div>

      </div>

    </div>
  )
}

export default Habilidades