import "./About.scss"
import { MdOutlineFileUpload } from "react-icons/md";
import { IoChatbubbleEllipses } from "react-icons/io5";
import Categorias from "../../JSON/Busqueda.json"
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";
import { useState, useEffect } from "react";

export default function About() {
    const [categoriaActual, setCategoriaActual] = useState(null)

    const handleAnterior = () => {
        setCategoriaActual(categoriaActual - 1)
    }
    const handleSiguiente = () => {
        setCategoriaActual(categoriaActual + 1)
    }

    // useEffect(() => {
    //     function handleResize() {
    //         if (window.innerWidth < 468) {
    //             setCategoriaActual(1);
    //         } else if (window.innerWidth < 600) {
    //             setCategoriaActual(2);
    //         } else if (window.innerWidth < 900) {
    //             setCategoriaActual(3);
    //         } else {
    //             setCategoriaActual(4);
    //         }
    //     }
    //     window.addEventListener('resize', handleResize);
    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, []);
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 468) {
                setCategoriaActual(1);
            } else if (window.innerWidth < 600) {
                setCategoriaActual(2);
            } else if (window.innerWidth < 900) {
                setCategoriaActual(3);
            } else {
                setCategoriaActual(4);
            }
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div className="about">

            <div className="contenedor-titlo">
                <div className="contenedor">
                    <h1 className="titulo-pinterest"> Todo acerca de Pinterest </h1>
                </div>
            </div>

            <div className="contenedor-informacion">
                <div className="secciones">
                    <div className="contenedor-icon">
                        {(categoriaActual - categoriaActual) === 0 ? (
                            null
                        ) : (
                            <GrFormPreviousLink onClick={handleAnterior} size={30} color="#d7edff" />
                        )
                        }
                    </div>
                    {Categorias.slice((categoriaActual - categoriaActual), categoriaActual).map((item, index) => (
                        <div key={index} className="seccion">
                            <a href={`#${item.key}`} className="seccion-texto" style={{ textDecoration: "none" }}>
                                {item.titulo}
                            </a>
                        </div>
                    ))}
                    <div className="contenedor-icon">
                        {categoriaActual === 7 ? (
                            null
                        ) : (
                            <GrFormNextLink onClick={handleSiguiente} size={30} color="#d7edff" />
                        )}
                    </div>
                </div>
            </div>

            <div className="cuerpo-about">
                <h2 className="cuerpo-titulo" id="que-es-pinterest"> ¿Qué es Pinterest? </h2>
                <p className="cuerpo-texto"> Pinterest es un motor de descubrimiento visual para encontrar ideas como recetas, inspiración para el hogar y de estilo, y mucho más. </p>
                <p className="cuerpo-texto"> Con miles de millones de Pines en Pinterest, siempre encontrarás ideas que despierten tu inspiración. Cuando descubras Pines que te gusten,
                    guárdalos en tableros para que tus ideas estén organizadas
                    y sean fáciles de encontrar. También puedes crear Pines para compartir tus ideas con otras personas en Pinterest. </p>
                <p className="cuerpo-texto"> Tienes que cumplir con <a style={{ textDecoration: "underline", fontWeight: 600 }}>los requisitos de edad mínima</a> para registrarte, y tenemos ciertas protecciones para los adolescentes.
                    Obtén más información sobre la <a style={{ textDecoration: "underline", fontWeight: 600 }}> seguridad de los adolescentes en Pinterest </a> .</p>

                <h2 className="cuerpo-titulo" id="feed"> Explorar el feed de inicio </h2>
                <p className="cuerpo-texto"> En tu <span style={{ textDecoration: "underline", fontWeight: 600 }}>feed de inicio</span> encontrarás Pines, personas y empresas que pensamos que te van a gustar basándonos en tu actividad reciente.
                    Además, te mostraremos Pines de las personas y los tableros que sigues. </p>
                <p className="cuerpo-texto"> También puedes escribir palabras clave en la barra de búsqueda para buscar Pines. Intenta escribir "fiesta de cumpleaños" en la barra de búsqueda para ver ideas de decoración para fiestas de cumpleaños,
                    recetas de comida para fiestas e ideas de regalos para fiestas.</p>

                <h2 className="cuerpo-titulo" id="ideas"> Descubre ideas </h2>
                <p className="cuerpo-texto"><span style={{ textDecoration: "underline", fontWeight: 600 }}>Usa la barra de búsqueda</span> para descubrir ideas, personas y tendencias. Explora temas sugeridos o busca tus propios temas.
                    Toca <span style={{ fontWeight: "600" }}>Perfiles</span> en la página de búsqueda para descubrir creadores, personas y marcas en función de tu búsqueda.
                    Usa tu cámara para encontrar ideas relevantes para tus fotos y limitar los resultados de belleza por gama de tonos de piel o tipo de cabello. </p>

                <h2 className="cuerpo-titulo" id="comprar-pines">Guardar, compartir y comprar Pines </h2>
                <p className="cuerpo-texto"> Los Pines son marcadores que las personas usan para guardar contenido que les gusta en Pinterest. Los Pines pueden ser imágenes, vídeos o productos. </p>
                <div className="contenedor-img">
                    <img className="img-pines" src="https://help.pinterest.com/sites/pinhelp/files/field_chapter_content/Spanish%20Standard%20Pin%20Reps.png" alt="Explicaciones de Pines" />
                </div>
                <p className="cuerpo-texto">Si haces clic en el Pin, puedes visitar el sitio web para obtener información sobre cómo hacerlo o dónde comprarlo. A medida que descubras Pines que te gustan, haz clic en el botón Guardar de color rojo para guardarlos en tus tableros.
                    ¿Probaste la receta perfecta para hacer un pastel de cumpleaños? Añade un comentario para contarle a las personas cómo te fue o añade consejos útiles.</p>
                <p className="cuerpo-texto">A veces, encontrarás un Pin que sabes que le encantará a un amigo. Haz clic en<span className="icono"><MdOutlineFileUpload size={20} color="#225CAD" /></span>para enviar Pines directamente a un amigo o grupo en un mensaje para compartir la inspiración.
                    También puedes usar los mensajes para chatear con tus amigos. Para ver tus mensajes, haz clic en <span className="icono"><IoChatbubbleEllipses size={20} color="#225CAD" /></span>
                    en tu computadora o toca <span className="icono"><IoChatbubbleEllipses size={20} color="#225CAD" /></span>seguido por <span style={{ fontWeight: 600 }}>Mensajes</span> en tu dispositivo móvil.</p>
                <p className="cuerpo-texto"> En Pinterest puedes buscar productos para comprar. <span style={{ fontWeight: 600, textDecoration: "underline" }} >Encuentra un Pin de producto</span> y haz clic en él para visitar el sitio web del minorista. </p>

                <h2 className="cuerpo-titulo" id="pines"> Crear pines </h2>
                <p className="cuerpo-texto"> Sube una imagen desde tu equipo de escritorio o dispositivo móvil para <span style={{ textDecoration: "underline", fontWeight: 600 }}>crear un Pin en Pinterest.</span> </p>
                <p className="cuerpo-texto"> También puedes crear y guardar Pines de las imágenes que encuentras en internet instalando una <span style={{ textDecoration: "underline", fontWeight: 600 }}>extensión para guardar contenido en Pinterest</span> en tu navegador. Agrega un título y una descripción a cada Pin que crees y un enlace al sitio web si tienes uno.</p>
                <p className="cuerpo-texto"> Puedes <span style={{ textDecoration: "underline", fontWeight: 600 }}>editar la información de un Pin</span> en cualquier momento y mover el Pin a cualquier tablero. </p>

                <h2 className="cuerpo-titulo" id="tableros"> Crear tableros </h2>
                <p className="cuerpo-texto"> Los Pines que guardas se conservan en tus tableros. Indica un nombre para los tableros y <span style={{ textDecoration: "underline", fontWeight: 600 }}>organízalos en tu perfil</span> como desees. Invita a otras personas que estén en Pinterest a colaborar en los <span style={{ textDecoration: "underline", fontWeight: 600 }}>tableros grupales</span> para encontrar aún más ideas.</p>
                <p className="cuerpo-texto"> Para organizar tus Pines en tableros, <span style={{ textDecoration: "underline", fontWeight: 600 }}>crea subtableros</span>. Agrega un subtablero llamado "Decoraciones" o "Juegos para fiestas" al tablero "Fiesta de cumpleaños" para guardar las ideas similares en el mismo lugar. Organiza tus Pines de forma que te sea fácil localizarlos.</p>
                <p className="cuerpo-texto"> Si prefieres que tus Pines sean privados o estás organizando una fiesta de cumpleaños sorpresa, puedes convertir el tablero en <span style={{ textDecoration: "underline", fontWeight: 600 }}>secreto</span>. Solo tú y las personas a las que invites podrán ver tus tableros secretos.</p>

                <h2 className="cuerpo-titulo" id="perfil"> Ver tu perfil </h2>
                <p className="cuerpo-texto"> En <span style={{ textDecoration: "underline", fontWeight: 600 }}>tu perfil</span> se encuentran todos los Pines que guardas, los tableros que creas y los Pines que pruebas. También puedes ver <span style={{ textDecoration: "underline", fontWeight: 600 }}>quién te sigue</span> y los tableros y las personas que sigues. Solo tú puedes ver tus tableros secretos cuando ves tu propio perfil.</p>

            </div>
        </div >
    )
}