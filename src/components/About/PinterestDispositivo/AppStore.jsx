import BodyAbout from "../BodyAbout";

export default function AppStore() {

    return (
        <div>

            <BodyAbout
                titulo={"Dirigido a App Store, Play Store o Amazon"}
                cuerpo={
                    <div>

                        <p className="cuerpo-texto">Para disfrutar de una experiencia óptima en tu móvil, debes descargar la aplicación de Pinterest de App Store ,  Google Play  o  Amazon Appstore .</p>
                        <p className="cuerpo-texto">Si quieres usar Pinterest en un navegador móvil, pero se te sigue redirigiendo a App Store o Google Play, tendrás que borrar la memoria caché y las cookies que haya en el navegador móvil.</p>
                        <h2 className="cuerpo-titulo">Cómo borrar la memoria caché y las cookies del navegador móvil.</h2>
                        <ul style={{ marginLeft: "3%" }}>
                            <li>iOS:  <a href="#" style={{ textDecoration: 'underline' }}>Instrucciones en el centro de soporte de Apple</a></li>
                            <li>Android: <a href="#" style={{ textDecoration: 'underline' }}>Instrucciones en el centro de asistencia de Google</a></li>
                        </ul>

                    </div>
                }
            />

        </div>
    )
}