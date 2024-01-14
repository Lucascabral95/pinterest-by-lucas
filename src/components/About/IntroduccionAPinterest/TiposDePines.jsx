import About from "../About.jsx";
import AboutTitulo from "../AboutTitulo";

export default function TiposDePines() {

    return (
        <div className="about">

            <AboutTitulo titulo={'Tipos de Pines en Pinterest'} />

            <div className="cuerpo-about">
                <div className="cuerpo-about-info">

                    <p className="cuerpo-texto"> Los Pines son marcadores visuales que las personas usan para guardar el contenido que les gusta.
                        Puedes crear <a href="#" style={{ textDecoration: "underline", fontWeight: 600 }}>Pines de imágenes</a> y <a href="#" style={{ textDecoration: "underline", fontWeight: 600 }}>Pines de video</a> en Pinterest, así como otros tipos de Pines, incluidos los <a href="#" style={{ textDecoration: "underline", fontWeight: 600 }}>Pines detallados</a> y los <a href="#" style={{ textDecoration: "underline", fontWeight: 600 }}>Pines de producto</a>. </p>
                    <h2 className="cuerpo-titulo">Pines de imagen</h2>
                    <p className="cuerpo-texto">Los Pines de imagen incluyen una sola imagen. Hay dos formas diferentes de crear Pines de imagen en Pinterest. Puedes hacer lo siguiente: </p>
                    <ul>
                        <li>Sube una foto desde tu equipo de escritorio o dispositivo móvil. Si agregas elementos de movimiento a la imagen (como un GIF o una pista de música), se convertirá en un <a href="#" style={{ textDecoration: "underline", fontWeight: 600 }}>Pin de video</a>.</li>
                        <li><a href="#" style={{ textDecoration: "underline", fontWeight: 600 }}>Guarda una imagen que encuentres en internet como un Pin</a>. Incluiremos un enlace al sitio web para que los usuarios de Pinterest sepan dónde encontrar la imagen original. </li>
                    </ul>
                    <div className="cuerpo-texto"><a href="#" style={{ textDecoration: "underline", fontWeight: 600 }}>Si configuras una cuenta para une empresa</a>, también puedes crear y promocionar un Pin de imagen como un anuncio.</div>

                    <h2 className="cuerpo-titulo">Pines de video </h2>
                    <p className="cuerpo-texto"> Los Pines de video incluyen un solo video o varios videos e imágenes en un solo Pin. Puedes agregar efectos como la superposición de texto, música, recortes y más para que sean interactivos.</p>
                    <p className="cuerpo-texto"> Los Pines de video se reproducen automáticamente cuando aparecen en tu feed de inicio y tienen imágenes de portada para llamar la atención.</p>

                    <h2 className="cuerpo-titulo">Pines detallados</h2>
                    <p className="cuerpo-texto">Un <a href="#" style={{ textDecoration: "underline", fontWeight: 600 }}>Pin detallado</a> es un tipo de Pin que sincroniza automáticamente la información de tu sitio web con tus Pines. Existen tres tipos de Pines detallados:</p>
                    <ul>
                        <li>Los Pines de recetas incluyen un título, el tamaño de las porciones, el tiempo de preparación, las valoraciones, el tipo de dieta y una lista de ingredientes en las recetas que guardas desde tu sitio.</li>
                        <li>Los Pines de artículo incluyen la descripción, el autor y el encabezado o el título de un artículo o publicación de blog de tu sitio.</li>
                        <li>Los Pines de producto muestran la información más actualizada sobre el precio, la disponibilidad y el producto en tu Pin. Puedes obtener más información sobre los Pines de lugares aquí .</li>
                    </ul>

                    <h2 className="cuerpo-titulo">Pines de producto</h2>
                    <p className="cuerpo-texto"><a href="#" style={{ textDecoration: "underline", fontWeight: 600 }}>Los Pines de productos</a> incluyen productos que están disponibles para comprar. Algunos Pines de producto te dirigen a un sitio web y otros te permiten comprar productos de los comerciantes sin salir de Pinterest.</p>
                    <ul>
                        <li>Los Pines de productos de <a href="#" style={{ textDecoration: "underline", fontWeight: 600 }}>prueba</a> permiten a las personas probar virtualmente los productos que encuentren en la aplicación de Pinterest con Lens de Pinterest. Por el momento, solo está disponible para los dispositivos móviles y en ciertas regiones.</li>
                        <li><a href="#" style={{ textDecoration: "underline", fontWeight: 600 }}>Los Pines de colecciones</a> son Pines de producto que se agrupan en una colección. Al hacer clic en un Pin de una colección, es fácil comprar productos similares o relacionados de un comerciante. Solo puedes crear un Pin de colecciones si configuras una cuenta para empresa .</li>
                        <li><a href="#" style={{ textDecoration: "underline", fontWeight: 600 }}>Los Pines de carrusel</a> son Pines de producto con varias imágenes. Cuando ves un Pin de carrusel, puedes hojear las imágenes para obtener más información sobre un producto específico o productos relacionados de un comerciante. Solo puedes crear un Pin de carrusel si <a href="#" style={{ textDecoration: "underline", fontWeight: 600 }}>Configuras una cuenta para empresa</a>.</li>
                    </ul>

                    <p className="cuerpo-texto">Si no eres comerciante, la mejor forma de compartir productos con los usuarios de Pinterest es <a style={{ textDecoration: "underline", fontWeight: 600 }}>agregar una etiqueta de porducto</a>.</p>
                </div>
                <div className="otros-articulos">
                    <About />
                </div>

            </div>
        </div>
    )
}