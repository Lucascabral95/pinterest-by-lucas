import BodyAbout from "../BodyAbout";
import { FaEllipsisH, FaLink, FaShareAlt, FaTag, FaHeart } from 'react-icons/fa';


export default function InterPint() {

    return (
        <div>

            <BodyAbout
                titulo={"Interactúa con los Interactúa con los Pines "}
                cuerpo={
                    <div>

                        <p className="cuerpo-texto">Hay varia cosas que pudes hacer cuando ves un Pin.</p>
                        <div className="d-flex web-android-ios">
                            <a href="#" style={{ textDecoration: "underline" }}>WEB</a>
                            <a href="#" style={{ textDecoration: "underline" }}>ANDROID</a>
                            <a href="#" style={{ textDecoration: "underline" }}>IOS</a>
                        </div>
                        <p className="cuerpo-texto" style={{ marginLeft: '3%' }}>1) Haz click en un Pin para ver mas de cerca:</p>
                        <ul style={{ marginLeft: '4%' }}>
                            <li>Haz clic en <a href="#" style={{ fontWeight: 600 }}>Guardar</a> para guardar el Pin en el tablero recomendado o selecciona otro tablero del menú desplegable.</li>
                            <li>Haz clic en el <FaLink size={20} color="#004BA9" />, en el lado derecho del Pin para copiar un enlace al portapapeles y compartirlo.</li>
                            <li>Haz clic en el <FaShareAlt size={20} color="#004BA9" />, en el lado derecho del Pin para enviarlo.</li>
                            <li>Si ves el <FaTag size={20} color="#004BA9" /> , toca la etiqueta para comprar productos que aparecen en el Pin.</li>
                            <li>En <a href="#" style={{ fontWeight: 600 }}>Comentarios</a>, agrega un comentario al Pin en el campo de comentario. Obtén más información sobre <a href="#" style={{ textDecoration:'underline' }}>como agregar comentarios</a>.
                                Haz clic en el <FaHeart size={20} color="#004BA9" /> , en el lado derecho del Pin para reaccionar a este. Haz clic en el <FaHeart size={20} color="#004BA9" /> nuevamente para ver más reacciones. Obtén más información sobre cómo reaccionar a un Pin .</li>
                        </ul>
                        <h2 className="titulo-pinterest"> Comenta en los Pines </h2>
                        <p className="cuerpo-texto">También puedes dejar comentarios en los Pines. En función de tu dispositivo, busca un globo de diálogo con un corazón o un campo de comentario.</p>
                        <p className="cuerpo-texto">Siéntete libre de interactuar con otros comentarios mientras estás en esa sección. Puedes marcarlos como útiles o seleccionar el <FaHeart size={20} color="#004BA9" />  para mostrar tu aprecio en los comentarios que te gustan mucho.</p>
                        <p className="cuerpo-texto">Algunos Pines incluyen stickers de preguntas. Si respondes a un sticker de pregunta, la respuesta se podrá ver en la sección de comentarios del Pin.</p>
                        <p className="cuerpo-texto">Y, a la hora de dejar un comentario, recuerda seguir nuestras <a href="#" style={{ textDecoration:'underline' }}>Directrices para la comunidad</a>. Si crees que un comentario no cumple nuestras directrices, aprende a <a href="#" style={{ fontWeight: 600 }}>denunciar o eliminar comentarios en un pin</a>.</p>
                        <h2 className="cuerpo-titulo">Ver los subtitulos opciones en los Pines de video</h2>
                        <p className="cuerpo-texto">Los subtítulos opcionales son líneas de texto que describen el audio de un video. Los visitantes pueden optar por habilitar o deshabilitar los subtítulos opcionales. Los subtítulos se generan automáticamente y el creador no puede editarlos ni personalizarlos.</p>
                        <p className="cuerpo-texto">Ten en cuenta que las variaciones en el ruido de fondo, la pronunciación, los acentos y los dialectos pueden hacer que el discurso se distorsione en los subtítulos generados automáticamente.</p>
                        <div className="d-flex web-android-ios">
                            <a href="#" style={{ textDecoration: "underline" }}>WEB</a>
                            <a href="#" style={{ textDecoration: "underline" }}>ANDROID</a>
                            <a href="#" style={{ textDecoration: "underline" }}>IOS</a>
                        </div>
                        <p className="cuerpo-texto">Por el momento, los subtítulos opcionales solo están disponibles para ciertos usuarios en Android.</p>
                        <div className="d-flex web-android-ios">
                            <a href="#" style={{ textDecoration: "underline" }}>WEB</a>
                            <a href="#" style={{ textDecoration: "underline" }}>ANDROID</a>
                            <a href="#" style={{ textDecoration: "underline" }}>IOS</a>
                        </div>
                        <p className="cuerpo-texto"> 1) Haz clic en el Pin que quieres guardar</p>
                        <p className="cuerpo-texto"> 2) Haz clic en <FaEllipsisH size={20} color="#004BA9" /> que está junto a la imagen.</p>
                        <p className="cuerpo-texto"> 3) Haz click en <a href="#" style={{ fontWeight: 600 }}>Descargar imagen</a> </p>
                        <p className="cuerpo-texto"> También puedes descargar un Pin directamente desde el feed de inicio de tu computadora si haces clic en <FaEllipsisH /> en la parte inferior derecha de la imagen y seleccionas Descargar imagen en el menú </p>
                        <h2 className="titulo-pinterest"> Como compartir un Pin </h2>
                        <div className="d-flex web-android-ios">
                            <a href="#" style={{ textDecoration: "underline" }}>WEB</a>
                            <a href="#" style={{ textDecoration: "underline" }}>ANDROID</a>
                            <a href="#" style={{ textDecoration: "underline" }}>IOS</a>
                        </div>
                        <p className="cuerpo-texto"> Haz clic en un Pin </p>
                        <p className="cuerpo-texto"> Haz clic en <FaShareAlt size={20} color="#004BA9" /> en el lado derecho del Pin </p>
                        <p className="cuerpo-texto"> Selecciona dónde quieres compartir el Pin </p>
                        <p className="cuerpo-texto"> Estas son algunas cosas que pudes hacer desde aqui: </p>
                        <ul style={{ marginLeft:'3%' }}>
                            <li>Comparte el Pin con otras personas en Pinterest</li>
                            <li>Publícalo en tus redes sociales (incluidas Facebook, Instagram, Twitter y más)</li>
                            <li>Envía un enlace al Pin por mensaje de texto o por correo electrónico</li>
                            <li>Copia un enlace directo al Pin</li>
                        </ul>


                    </div>
                }
            />

        </div>
    )
}