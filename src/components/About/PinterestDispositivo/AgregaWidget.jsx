import BodyAbout from "../BodyAbout";

export default function AgregarWidget() {

    return (
        <div>
            <BodyAbout
                titulo={"Agrega un widget de Pinterest"}
                cuerpo={
                    <div>

                        <div className="disponibilidad-ios">
                            <p className="cuerpo-texto">Actualmente, el widget de Pinterest está disponible para dispositivos iOS. Para agregar un widget de Pinterest, tu dispositivo debe estar actualizado a iOS 14 o una versión posterior.</p>
                        </div>
                        <p className="cuerpo-texto">Agrega un widget de Pinterest a tu dispositivo iOS para inspirarte y obtener una vista previa de tus Pines favoritos, sin tener que abrir la aplicación. </p>
                        <p className="cuerpo-texto">Puedes agregar dos tipos diferentes de widgets de Pinterest a tu pantalla de inicio: </p>
                        <ul style={{ marginLeft: "3%" }}>
                            <li> Un <a href="#" style={{ fontWeight: 600 }}>widget de tablero</a> muestra los Pines guardados en un tablero específico. Puedes mostrar Pines de tu propio tablero o de un tablero creado por un usuario que sigues. </li>
                            <li> Un <a href="#" style={{ fontWeight: 600 }}>widget de intereses</a> muestra Pines que se basan en un tema que te interesa. Puedes elegir entre intereses como decoración del hogar, frases inspiradoras, belleza, comida y moda. </li>
                        </ul>
                        <h2 className="titulo-pinterest"> Agregar un widget de Pinterest </h2>
                        <div className="d-flex web-android-ios">
                            <a href="#" style={{ textDecoration: "underline" }}>WEB</a>
                            <a href="#" style={{ textDecoration: "underline" }}>ANDROID</a>
                            <a href="#" style={{ textDecoration: "underline" }}>IOS</a>
                        </div>
                        <p className="cuerpo-texto">Nota: Por el momento, el widget de Pinterest solo está disponible en iOS 14 o una versión posterior. </p>
                        <h2 className="titulo-pinterest">Editar o eliminar el widget de Pinterest </h2>
                        <p className="cuerpo-texto">Puedes actualizar el tablero de Pinterest o el interés que seleccionaste manteniendo presionado el widget hasta que aparezca un menú. A continuación, selecciona <a href="#" style={{ fontWeight: 600 }}>Editar widget o Eliminar widget.</a> </p>
                        <div className="d-flex web-android-ios">
                            <a href="#" style={{ textDecoration: "underline" }}>WEB</a>
                            <a href="#" style={{ textDecoration: "underline" }}>ANDROID</a>
                            <a href="#" style={{ textDecoration: "underline" }}>IOS</a>
                        </div>
                        <h2 className="titulo-pinterest">Solución de problemas de los widgets </h2>
                        <p className="cuerpo-texto">Si el widget no se muestra correctamente, prueba con las siguientes sugerencias para la solución de problemas: </p>
                        <ul>
                            <li>Abre la aplicación de Pinterest y asegúrate de haber iniciado sesión.</li>
                            <li> <a href="#" style={{ textDecoration: 'underline' }}>Actualiza la aplicación de Pinterest</a> a la versión más reciente.</li>
                            <li>Asegúrate de <a href="#" style={{ textDecoration: 'underline' }}>habilitar la actualización de la aplicación en segundo plano</a> para Pinterest. </li>
                            <li>Reinicia el dispositivo y verifica que se está utilizando el software más reciente para iOS.</li>
                            <li>Elimina el widget y crea uno nuevo siguiendo los pasos anteriores.</li>
                            <li>Elimina la aplicación de Pinterest en tu dispositivo y vuelve a instalarla.</li>
                        </ul>
                        <ul style={{ marginLeft: "5%" }}>
                            <li>Tendrás que volver a iniciar sesión, pero tus datos se guardarán, a excepción de los borradores de Pines almacenados localmente en tu dispositivo.</li>
                        </ul>

                    </div>
                }
            />
        </div>
    )
}