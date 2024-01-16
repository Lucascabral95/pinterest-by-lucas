import BodyAbout from "../BodyAbout";
import { FaComment } from 'react-icons/fa';
import { FaEllipsisH } from "react-icons/fa";

export default function AgregarAdministrar() {
    
    return (
        <div>

            <BodyAbout
                titulo={"Agregar o administrar comentarios en un Pin"}
                cuerpo={
                    <div>
                        <div className="disponibilidad-ios">
                            <p className="cuerpo-texto">Por el momento, los comentarios con foto solo están disponibles en ciertas regiones. Si no los ves, vuelve a consultar más adelante para ver si están disponibles en tu zona.</p>
                        </div>
                            <p className="cuerpo-texto">Si tienes algo bueno que decir sobre un Pin, escribe un comentario o menciona a alguien para compartirle el Pin. Antes de añadir un comentario, revisa y acepta nuestro Código de comentario para dejar comentarios que sigan nuestras Directrices para la comunidad.
                                Solo tendrás que aceptar el código de comentario una vez.</p>
                            <p className="cuerpo-texto">Solo puedes agregar enlaces a Pinterest en tu comentario. Los comentarios pueden tener hasta 500 caracteres.</p>
                            <p className="cuerpo-texto">Nota: Es posible que la opción para escribir comentarios esté deshabilitada en algunos Pines.</p>
                            <h2 className="titulo-pinterest">Responder a un comentario </h2>
                            <p className="cuerpo-texto">Para responder a un comentario en un Pin, busca el comentario al que quieres responder y toca <a href="#" style={{ fontWeight: 600 }}>Responder</a>.
                                Agrega tu comentario y toca <a href="#" style={{ fontWeight: 600 }}>Publicar</a> cuando estes lista para publicarlo.</p>
                            <div className="d-flex web-android-ios">
                                <a href="#" style={{ textDecoration: "underline" }}>WEB</a>
                                <a href="#" style={{ textDecoration: "underline" }}>ANDROID</a>
                                <a href="#" style={{ textDecoration: "underline" }}>IOS</a>
                            </div>
                            <h2 className="cuerpo-titulo"> Responder con un comentario </h2>
                            <p className="cuerpo-texto" style={{ marginLeft:"3%" }}> 1) Haz clic en el Pin </p>
                            <p className="cuerpo-texto" style={{ marginLeft:"3%" }}> 2) Haz clic en el icono de <FaComment size={20} color="#004BA9" /> . </p>
                            <p className="cuerpo-texto" style={{ marginLeft:"3%" }}> 3) Agrega tu respuesta en el campo <a href="#" style={{ fontWeight: 600 }}>Agregar un comentario</a>. </p>
                            <p className="cuerpo-texto" style={{ marginLeft:"3%" }}> 4) Haz clic en <a href="#" style={{ fontWeight: 600 }}>Listo</a>. </p>
                            <h2 className="titulo pinterest"> Editar tu comentario </h2>
                            <p className="cuerpo-texto">Puedes editar un comentario que publiques.</p>
                            <div className="d-flex web-android-ios">
                                <a href="#" style={{ textDecoration: "underline" }}>WEB</a>
                                <a href="#" style={{ textDecoration: "underline" }}>ANDROID</a>
                                <a href="#" style={{ textDecoration: "underline" }}>IOS</a>
                            </div>
                            <p className="cuerpo-texto" style={{ marginLeft:"3%" }}> 1) Haz clic en el Pin </p>
                            <p className="cuerpo-texto" style={{ marginLeft:"3%" }}> 2) En el Pin, haz clic en <a href="#" style={{ fontWeight: 600 }}>Comentarios</a>. </p>
                            <p className="cuerpo-texto" style={{ marginLeft:"3%" }}> 3) Haz clic en el <FaEllipsisH size={20} color="#004BA9" /> debajo del comentario que deseas editar. </p>
                            <p className="cuerpo-texto" style={{ marginLeft:"3%" }}> 4) Haz clic en <a href="#" style={{ fontWeight: 600 }}>Editar</a>. </p>
                            <p className="cuerpo-texto" style={{ marginLeft:"3%" }}> 5) Actualiza el comentario y haz clic en <a href="#" style={{ fontWeight: 600 }}>Guardar</a> para guardar los cambios. </p>
                            <h2 className="titulo-pinterest">Agregar un filtro de comentarios</h2>
                            <p className="cuerpo-texto">Puedes crear un filtro de comentarios para bloquear un término para tus Pines publicados, así como para los comentarios que ves en los Pines de otros usuarios. Los comentarios que contengan el término no aparecerán en tu Pin, pero las palabras o frases que lo contengan seguirán apareciendo en los comentarios.
                                Si quieres bloquear varias palabras o frases, usa una coma entre cada término para agregar cada caso de uso específico al filtro.</p>
                            <p className="cuerpo-texto"> Por ejemplo, si creas un filtro para la palabra “pastel de manzana”, se bloqueará cualquier comentario que contenga la frase exacta. En este caso, se bloquearía “Me gusta el pastel de manzana” o “pastel de manzana”. No se bloqueará ningún uso modificado de la palabra o frase. En este caso, no se bloquearían las palabras “manzana” o “los pasteles de manzana están riquísimos”. </p>
                            <div className="d-flex web-android-ios">
                                <a href="#" style={{ textDecoration: "underline" }}>WEB</a>
                                <a href="#" style={{ textDecoration: "underline" }}>ANDROID</a>
                                <a href="#" style={{ textDecoration: "underline" }}>IOS</a>
                            </div>
                            <p className="cuerpo-texto" style={{ marginLeft:"3%" }}> 1) Inicia sesión en <a href="#" style={{ textDecoration:'underline' }}>tu cuenta de Pinterest</a>. </p>
                            <p className="cuerpo-texto" style={{ marginLeft:"3%" }}> 2) Haz clic junto a tu foto de perfil en la parte superior derecha y luego en <a href="#" style={{ fontWeight: 600 }}>Configuracion</a>. </p>
                            <p className="cuerpo-texto" style={{ marginLeft:"3%" }}> 3) En la navegación del lado izquierdo, haz clic en <a href="#" style={{ fontWeight: 600 }}>Permisos sociales.</a> </p>
                            <p className="cuerpo-texto" style={{ marginLeft:"3%" }}> 4) Mueve el control situado junto a <a href="#" style={{ fontWeight: 600 }}>Filtrar comentarios en mis Pines.</a> </p>
                            <p className="cuerpo-texto" style={{ marginLeft:"3%" }}> 5) En <a href="#" style={{ fontWeight: 600 }}>Palabras Bloqueadas</a>, agrega las palabras o frases que no deseas que aparezcan en los comentarios. Utiliza comas entre cada palabra o frase. </p>
                            <p className="cuerpo-texto" style={{ marginLeft:"3%" }}> 6) Haz clic en <a href="#" style={{ fontWeight: 600 }}>Guardar</a>. </p>
                            <p className="cuerpo-texto">También puedes crear un filtro para los comentarios que ves en los Pines de otros usuarios. Mueve el control situado junto a <a href="#" style={{ fontWeight: 600 }}>Filtrar comentarios en los Pines de los demas</a> y sigue los pasos anteriores. </p>
                            <h2 className="titulo-pinterest">Activa o desactiva los comentarios</h2>
                            <p className="cuerpo-texto">Puedes activar o desactivar los comentarios en Pines concretos o activar o desactivar los comentarios para todos tus Pines nuevos y existentes en la configuración de tu cuenta.</p>
                            <h2 className="cuerpo-titulo">Acitcar o desactivar los comentarios para algunos Pines</h2>
                            <p className="cuerpo-texto">Puedes administrar si otros usuarios pueden agregar comentarios en algunos Pines concretos que publicaste.</p>
                            <div className="d-flex web-android-ios">
                                <a href="#" style={{ textDecoration: "underline" }}>WEB</a>
                                <a href="#" style={{ textDecoration: "underline" }}>ANDROID</a>
                                <a href="#" style={{ textDecoration: "underline" }}>IOS</a>
                            </div>
                            <p className="cuerpo-texto" style={{ marginLeft:"3%" }}> 1) Inicia sesión en <a href="#" style={{ textDecoration:'underline' }}>tu cuenta de Pinterest</a>  </p>
                            <p className="cuerpo-texto" style={{ marginLeft:"3%" }}> 2) Haz clic en un Pin</p>
                            <p className="cuerpo-texto" style={{ marginLeft:"3%" }}> 3) Haz clic en <FaEllipsisH size={20} color="#004BA9" />. </p>
                            <p className="cuerpo-texto" style={{ marginLeft:"3%" }}> 4) Haz clic en Guardar. </p>
                            <p className="cuerpo-texto" style={{ marginLeft:"3%" }}> 5) Haz clic en Guardar </p>
                            <h2 className="cuerpo-titulo">Activar o desactivar los comentarios en todos los Pines </h2>
                            <p className="cuerpo-texto"> Puedes optar si otros usuarios pueden agregar comentarios en todos los Pines que publicaste. Actualmente solo está disponible para iOS. </p>
                            <div className="d-flex web-android-ios">
                                <a href="#" style={{ textDecoration: "underline" }}>WEB</a>
                                <a href="#" style={{ textDecoration: "underline" }}>ANDROID</a>
                                <a href="#" style={{ textDecoration: "underline" }}>IOS</a>
                            </div>
                            <p className="cuerpo-texto"> Parece que estás leyendo esto desde un navegador web. Por el momento, deberás usar tu dispositivo iOS para activar o desactivar los comentarios en la configuración de tu cuenta. Puedes ver las instrucciones haciendo clic en la sección iOS. </p>
                            <h2 className="titulo-pinterest"> Reportar o eliminar un comentario o un comnetario con foto </h2>
                            <p className="cuerpo-texto"> Si un comentario infringe nuestras <a href="#" style={{ fontWeight: 600 }}>Directrices para la comunidad</a>, puedes reportarlo. También puedes eliminar un comentario o un comentario con foto que hayas publicado o uno que alguien haya hecho en un Pin que hayas publicado. </p>
                            <p className="cuerpo-texto"> Si tienes una <a href="#" style={{ textDecoration:'underline' }}>Cuenta para empresa de Pinterest</a>, puedes usar la <a href="#" style={{ fontWeight: 600 }}>pestana Engagement</a> para responder a los comentarios, desactivarlos o eliminarlos; todo en un solo lugar. </p>
                            <div className="d-flex web-android-ios">
                                <a href="#" style={{ textDecoration: "underline" }}>WEB</a>
                                <a href="#" style={{ textDecoration: "underline" }}>ANDROID</a>
                                <a href="#" style={{ textDecoration: "underline" }}>IOS</a>
                            </div>
                            <p className="cuerpo-texto" style={{ marginLeft:"3%" }}> 1) Haz clic en el Pin. </p>
                            <p className="cuerpo-texto" style={{ marginLeft:"3%" }}> 2) Haz lick en <FaEllipsisH size={20} color="#004BA9" /> debajo del comentario que quieras eliminar o reportar. </p>
                            <p className="cuerpo-texto" style={{ marginLeft:"3%" }}> 3) Haz click en <a href="#" style={{ fontWeight: 600 }}>Eliminar</a> o en <a href="#" style={{ fontWeight: 600 }}>Denunciar este contenido</a>. </p>
                            <ul style={{ marginLeft:"4%" }}>
                                <li>Si vas a eliminar un comentario, haz clic en Eliminar para confirmar.</li>
                                <li>Si vas a reportar un comentario, selecciona el motivo de tu denuncia y haz clic en <a href="#" style={{ fontWeight: 600 }}>Siguente</a>. Haz clic en <a href="#" style={{ fontWeight: 600 }}>Reportar</a> para confirmar.</li>
                            </ul>
                            <p className="cuerpo-texto"> Solo se pueden crear comentarios con fotos desde dispositivos Android e iOS. </p>
                            <p className="cuerpo-texto"> Para reportar un comentario con foto, haz clic en <FaEllipsisH size={20} color="#004BA9" /> debajo del comentario con foto que quieres denunciar. A continuación, selecciona <a href="#" style={{ fontWeight: 600 }}>Reportar</a>. Selecciona la razón por la que denuncias y haz clic en <a href="#" style={{ fontWeight: 600 }}>Siguiente</a>. Por último, haz clic en <a href="#" style={{ fontWeight: 600 }}>Reportart</a>. </p>
                            <p className="cuerpo-texto"> Para reportar un comentario con foto por derechos de propiedad intelectual, <a href="#" style={{ textDecoration:'underline' }}>ponte en contacto con nosotros</a>. Incluye la URL del Pin y el nombre de usuario de la persona que publicó el comentario en tu mensaje. </p>
                    </div>
                }
            />

        </div>
    )
}