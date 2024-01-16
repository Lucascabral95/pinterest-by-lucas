import BodyAbout from "../BodyAbout";
import { FaArrowDown } from 'react-icons/fa';

export default function ConfiguracionesAutomaticas() {

    return (
        <div>

            <BodyAbout
                titulo={"Administra la configuración de reproducción automática"}
                cuerpo={
                    <div>

                        <p className="cuerpo-texto"> Los Pines de video aparecen en tu feed de inicio y en los resultados de búsqueda. Cuando los Pines de video se configuran para que se reproduzcan automáticamente, el sonido puede reproducirse en tu equipo de escritorio o dispositivo móvil. Para evitar que los Pines de video se reproduzcan automáticamente, administra la configuración de reproducción automática.  </p>
                        <h2 className="cuerpo-titulo"> Administrar la configuración de la reproducción automática </h2>
                        <div className="d-flex web-android-ios">
                            <a href="#" style={{ textDecoration: "underline" }}>WEB</a>
                            <a href="#" style={{ textDecoration: "underline" }}>ANDROID</a>
                            <a href="#" style={{ textDecoration: "underline" }}>IOS</a>
                        </div>
                        <p className="cuerpo-texto"> Los Pines de video se reproducirán en tu equipo de escritorio cuando al menos el 50% aparezca en pantalla. Es posible que se reproduzca el sonido cuando abras un Pin de video según la configuración del navegador.  </p>
                        <p className="cuerpo-texto"> Para evitar que los videos se reproduzcan automáticamente en tu computadora, puedes editar la configuración:  </p>
                        <p className="cuerpo-texto" style={{ marginLeft: "3%" }} > 1) Inicia sesión en tu cuenta de Pinterest.  </p>
                        <p className="cuerpo-texto" style={{ marginLeft: "3%" }} > 2) En la esquina superior derecha de la pantalla, haz clic en <FaArrowDown size={20} color="#004BA9" />.  </p>
                        <p className="cuerpo-texto" style={{ marginLeft: "3%" }} > 3) Haz clic en <a href="#" style={{ fontWeight: 600 }}>Configuración</a>. </p>
                        <p className="cuerpo-texto" style={{ marginLeft: "3%" }} > 4) Haz clic en <a href="#" style={{ fontWeight: 600 }}>Permisos sociales</a> en el panel de navegación de la izquierda. </p>
                        <p className="cuerpo-texto" style={{ marginLeft: "3%" }} > 5) En <a href="#" style={{ fontWeight: 600 }}></a>Reproducir los videos automáticamente, mueve el control ubicado junto a <a href="#" style={{ fontWeight: 600 }}>Reproducir videos automáticamente en el equipo de escritorio</a> para activar o desactivar esta opción.  </p>
                        <p className="cuerpo-texto" style={{ marginLeft: "3%" }} > 6) Haz clic en <a href="#" style={{ fontWeight: 600 }}>Guardar</a> en la parte inferior de la página. </p>

                    </div>
                }
            />

        </div>
    )
}