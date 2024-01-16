import BodyAbout from "../BodyAbout";

export default function ActualizarAplicacion() {

    return (
        <div>
            <BodyAbout
                titulo={"Actualizar la aplicación de Pinterest"}
                cuerpo={
                    <div>

                        <h2 className="cuerpo-titulo">En este articulo</h2>
                        <ul style={{ marginLeft: '3%' }}>
                            <li><a href="#" style={{ textDecoration: 'underline' }}>Actualiza la app de Pinterest</a></li>
                            <li><a href="#" style={{ textDecoration: 'underline' }}>No se puede actualizar la aplicación de Pinterest</a></li>
                            <li><a href="#" style={{ textDecoration: 'underline' }}>Usar una versión anterior de iOS o Android</a></li>
                            <li><a href="#" style={{ textDecoration: 'underline' }}>Agregar Pinterest.com a la pantalla de inicio del dispositivo móvil</a></li>
                        </ul>
                        <p className="cuerpo-texto"> Para disfrutar de una experiencia óptima en tu móvil, te recomendamos que uses la aplicación de Pinterest de <a href="#" style={{ textDecoration: 'underline' }}>App Store ,  Google Play o Amazon Appstore</a>  .
                            Si usas una versión de la aplicación para iOS anterior a 14.0 o una versión de la aplicación para Android anterior a 7.0, deberás actualizar a la versión más reciente o usar el dispositivo móvil web para seguir usando Pinterest. </p>
                        <h2 className="titulo-pinterest">Qué debes hacer si tu aplicación no está actualizada</h2>
                        <h2 className="cuerpo-titulo"> Actualiza la aplicación de Pinterest </h2>
                        <div className="d-flex web-android-ios">
                            <a href="#" style={{ textDecoration: "underline" }}>WEB</a>
                            <a href="#" style={{ textDecoration: "underline" }}>ANDROID</a>
                            <a href="#" style={{ textDecoration: "underline" }}>IOS</a>
                        </div>
                        <h2 className="titulo-pinterest">Dispositivos Android</h2>
                        <p className="cuerpo-texto">Si usas un dispositivo Android con un sistema operativo 7.0 o uno anterior o un dispositivo iOS con un sistema operativo anterior al 14.0, no podrás actualizar la aplicación de Pinterest.</p>
                        <p className="cuerpo-texto">Si el dispositivo móvil o la tableta que usas tiene una versión anterior de Android o iOS, puedes ver si hay una actualización disponible. </p>
                        <ul>
                            <li> <a href="#" style={{ textDecoration: 'underline' }}>Ver cómo actualizar los dispositivos iOS</a> </li>
                            <li> <a href="#" style={{ textDecoration: 'underline' }}>Ver cómo actualizar los dispositivos Android</a> </li>
                        </ul>
                        <p className="cuerpo-texto">Si logras actualizar tu dispositivo a una versión de Android posterior a la 7.0 o a una versión de iOS posterior a la 14.0, podrás actualizar la aplicación de Pinterest. </p>
                        <h2 className="cuerpo-titulo">Usar una version anterior de iOS o Androdi</h2>
                        <p className="cuerpo-texto">Si usas un dispositivo Android con el sistema operativo 7.0 o uno anterior o un dispositivo iOS con un sistema operativo anterior al 14.0 y no puedes actualizarlo, puedes usar la versión web de Pinterest. </p>
                        <p className="cuerpo-texto"> Si tienes instalada la aplicación, algunos enlaces de Pinterest intentarán abrirse con ella.  Si desinstalas la aplicación de este dispositivo, podrás ver esos enlaces en el navegador de tu dispositivo móvil.</p>
                        <h2 className="cuerpo-titulo">Agregar Pinterest.com a la pantalla de inicio del dispositivo movil</h2>
                        <p className="cuerpo-texto"> Si usas un navegador web (Chrome o Safari) para acceder a Pinterest desde tu dispositivo móvil, puedes agregar Pinterest.com a la pantalla de inicio.</p>
                        <div className="d-flex web-android-ios">
                            <a href="#" style={{ textDecoration: "underline" }}>WEB</a>
                            <a href="#" style={{ textDecoration: "underline" }}>ANDROID</a>
                            <a href="#" style={{ textDecoration: "underline" }}>IOS</a>
                        </div>
                        <h2 className="cuerpo-titulo">Agregar Pinterest.com a tu pantalla de inicio con ChromeÑ</h2>
                        <p className="cuerpo-texto"> 1) Ingresa en Pinterest.com desde el navegador móvil Chrome. </p>
                        <p className="cuerpo-texto"> 2) Toca el botón de tres puntos. </p>
                        <p className="cuerpo-texto"> 3) Toca Agregar a la pantalla principal. </p>
                        <p className="cuerpo-texto"> 4) Toca <a href="#" style={{ fontWeight: 600 }}>Agregar</a> cuando veas el mensaje <a href="#" style={{ fontWeight: 600 }}>Agregar a la pantalla principal</a>. </p>
                        <h2 className="cuerpo-titulo">Agregar Pinterest.com a tu pantalla de inicio con Safari:</h2>
                        <p className="cuerpo-texto"> 1) Ingresa en Pinterest.com desde el navegador móvil Safari. </p>
                        <p className="cuerpo-texto"> 2) Toca el icono de compartir. </p>
                        <p className="cuerpo-texto"> 3) En la fila inferior, busca y toca <a href="#" style={{ fontWeight: 600 }}>Agregar a Inicio</a>. </p>

                    </div>
                }
            />
        </div>
    )
}