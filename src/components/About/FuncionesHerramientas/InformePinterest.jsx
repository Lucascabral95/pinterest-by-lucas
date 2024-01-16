import BodyAbout from "../BodyAbout";
import { RiFileCopyLine } from 'react-icons/ri';
import { FiShare } from "react-icons/fi";
import { IoIosArrowDown, IoIosMore  } from 'react-icons/io';
import { FaPlus } from "react-icons/fa6";

export default function InformePinterest() {

    return (
        <div>

            <BodyAbout
                titulo={"Tu informe Pinterest Predicts"}
                cuerpo={
                    <div>

                        <p className="cuerpo-texto">Tu informe Pinterest Predicts es un Pin personalizado que sugiere predicciones de tendencias que podrían gustarte el año entrante, basadas en tu actividad en Pinterest.</p>
                        <p className="cuerpo-texto">Tu informe Pinterest Predicts también puede incluir un resumen de las ideas que te inspiraron a lo largo del año pasado.</p>
                        <p className="cuerpo-texto">Las tendencias que te recomendamos proceden del <a href="#" style={{ textDecoration: 'underline' }}>informe Pinterest Predicts 2022</a> , en el que anticipamos lo que será tendencia el año entrante.</p>
                        <h2 className="titulo-pinterest"> Mira tu informe Pinterest Predicts</h2>
                        <p className="cuerpo-texto">El informe Pinterest Predicts aparece en tu feed de inicio . Después de verlo por primera vez, se guarda automáticamente en tu perfil en la pestaña Creados en el equipo de escritorio.
                            En dispositivos móviles, se puede encontrar en la pestaña de Pines. Para las cuentas para empresa , puedes encontrar tu informe Pinterest Predicts en la pestaña Creados. Es privado para ti a menos que lo muevas a un tablero público o lo compartas directamente con otras personas.
                            Puedes eliminarlo en cualquier momento.</p>
                        <p className="cuerpo-texto">Ten en cuenta que tu informe Pinterest Predicts solo está disponible en una determinada época del año y desaparecerá de tu perfil después de un tiempo. Es posible que tengas que actualizar a la versión más reciente de la aplicación en tu teléfono para verlo.</p>
                        <div className="d-flex web-android-ios">
                            <a href="#" style={{ textDecoration: "underline" }}>WEB</a>
                            <a href="#" style={{ textDecoration: "underline" }}>ANDROID</a>
                            <a href="#" style={{ textDecoration: "underline" }}>IOS</a>
                        </div>
                        <p className="cuerpo-texto" style={{ marginLeft:"3%" }} >1) Inicia sesión en tu <a href="#" style={{ textDecoration:'underline' }}>cuenta de Pinterest</a> .</p>
                        <p className="cuerpo-texto" style={{ marginLeft:"3%" }} >2) Haz clic en <a href="#" style={{ fontWeight: 600 }}>Inicio</a> para ir a tu feed de inicio.
                            Tu informe Pinterest Predicts aparece como un Pin en la parte superior izquierda de tu feed de inicio. </p>
                        <p className="cuerpo-texto" style={{ marginLeft:"3%" }} > 3) Haz clic en <a href="#" style={{ fontWeight: 600 }}>Obtener resultados</a> para ver tu informe Pinterest Predicts.</p>
                        <p className="cuerpo-texto" style={{ marginLeft:"3%" }} >4) Haz clic en <a href="#" style={{ fontWeight: 600 }}>Ver el tuyo</a> para dirigirte a tu informe Pinterest Predicts.</p>
                        <h2 className="cuerpo-titulo">Comparte tu informe Pinterest Predicts</h2>
                        <div className="d-flex web-android-ios">
                            <a href="#" style={{ textDecoration: "underline" }}>WEB</a>
                            <a href="#" style={{ textDecoration: "underline" }}>ANDROID</a>
                            <a href="#" style={{ textDecoration: "underline" }}>IOS</a>
                        </div>
                        <p className="cuerpo-texto" style={{ marginLeft:"3%" }} >1) Inicia sesión en tu <a href="#" style={{ textDecoration:'underline' }}>cuenta de Pinterest</a> .</p>
                        <p className="cuerpo-texto" style={{ marginLeft:"3%" }} >2) Haz clic en el informe Pinterest Predicts para verlo. </p>
                        <p className="cuerpo-texto" style={{ marginLeft:"3%" }} > 3) Haz clic en  el <FiShare size={20} color="#004BA9" />  en la parte derecha de la pantalla.</p>
                        <p className="cuerpo-texto" style={{ marginLeft:"3%" }} >4) Puedes hacer lo siguiente para compartir tu informe Pinterest Predicts: </p>
                         <ul style={{ marginLeft:"5%" }}>
                            <li>Seleccionar una de las redes sociales que aparecen</li>
                            <li>Hacer clic en <a href="#" style={{ fontWeight: 600 }}>Correo electrónico</a> para enviar tu informe Pinterest Predicts por correo electrónico</li>
                            <li>Hacer clic en <RiFileCopyLine size={20} color="#004BA9" /> <a href="#" style={{ fontWeight: 600 }}>Copiar enlace</a> para copiarlo</li>
                            <li>Buscar a una persona en la barra de búsqueda de Pinterest</li>
                            <li>Escribir el correo electrónico de una persona en la barra de búsqueda</li>
                            <li>Seleccionar a una de las personas sugeridas que aparecen y, a continuación, hacer clic en <a href="#" style={{ fontWeight: 600 }}>Enviar</a></li>
                         </ul>
                         <h2 className="cuerpo-titulo">Guarda tu informe Pinterest Predicts en un tablero</h2>
                        <p className="cuerpo-texto"> Una vez que veas tu informe Pinterest Predicts por primera vez, se guardará automáticamente en tu perfil. Puedes guardarlo en un tablero siguiendo los pasos que se indican a continuación. </p>
                        <div className="d-flex web-android-ios">
                            <a href="#" style={{ textDecoration: "underline" }}>WEB</a>
                            <a href="#" style={{ textDecoration: "underline" }}>ANDROID</a>
                            <a href="#" style={{ textDecoration: "underline" }}>IOS</a>
                        </div>
                        <p className="cuerpo-texto"> Nota: Si guardas tu informe Pinterest Predicts en un tablero público o grupal, otros usuarios podrán verlo. </p>
                        <p className="cuerpo-texto" style={{ marginLeft:"3%" }}> 1) Inicia sesión en tu <a href="#" style={{ textDecoration:'underline' }}>cuenta de Pinterest</a> . </p>
                        <p className="cuerpo-texto" style={{ marginLeft:"3%" }}> 2) Haz clic en tu foto de perfil en la parte superior derecha de la pantalla. </p>
                        <p className="cuerpo-texto" style={{ marginLeft:"3%" }}> 3) Haz clic en <a href="#" style={{ fontWeight: 600 }}>Creados</a>. </p>
                        <p className="cuerpo-texto" style={{ marginLeft:"3%" }}> 4) Haz clic en el informe Pinterest Predicts para verlo. </p>
                        <p className="cuerpo-texto" style={{ marginLeft:"3%" }}> 5) Haz clic en <IoIosArrowDown size={20} color="#004BA9" /> en la parte derecha de la pantalla. </p>
                        <p className="cuerpo-texto" style={{ marginLeft:"3%" }}> 6) Busca o desplázate entre tus tableros o haz clic en <FaPlus size={20} color="#004BA9" /> más para crear un tablero nuevo. </p>
                        <p className="cuerpo-texto" style={{ marginLeft:"3%" }}> 7) Haz clic en Guardar junto al tablero seleccionado.</p>
                        <div className="cuerpo-titulo"> Elimina tu informe Pinterest Predicts </div>
                        <div className="d-flex web-android-ios">
                            <a href="#" style={{ textDecoration: "underline" }}>WEB</a>
                            <a href="#" style={{ textDecoration: "underline" }}>ANDROID</a>
                            <a href="#" style={{ textDecoration: "underline" }}>IOS</a>
                        </div>
                        <p className="cuerpo-texto" style={{ marginLeft:"3%" }}> 1) Inicia sesión en tu <a href="#" style={{ textDecoration:'underline' }}>cuenta de Pinterest</a> . </p>
                        <p className="cuerpo-texto" style={{ marginLeft:"3%" }}> 2) Haz clic en tu foto de perfil en la parte superior derecha de la pantalla. </p>
                        <p className="cuerpo-texto" style={{ marginLeft:"3%" }}> 3) Haz clic en <a href="#" style={{ fontWeight: 600 }}>Creados</a>. </p>
                        <p className="cuerpo-texto" style={{ marginLeft:"3%" }}> 4) Haz clic en el informe Pinterest Predicts para verlo. </p>
                        <p className="cuerpo-texto" style={{ marginLeft:"3%" }}> 5) Haz clic en <IoIosMore  size={20} color="#004BA9" /> . </p>
                        <p className="cuerpo-texto" style={{ marginLeft:"3%" }}> 6) Haz clic en <a href="#" style={{ fontWeight: 600 }}>Editar Pin</a>. </p>
                        <p className="cuerpo-texto" style={{ marginLeft:"3%" }}> 7) Haz clic en <a href="#" style={{ fontWeight: 600 }}>Eliminar</a>. </p>
                        <p className="cuerpo-texto" style={{ marginLeft:"3%" }}> 8) Haz clic en <a href="#" style={{ fontWeight: 600 }}>Eliminar Pin</a>.</p>


                    </div>
                }
            />

        </div>
    )
}