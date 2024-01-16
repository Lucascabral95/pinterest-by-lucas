import BodyAbout from "../BodyAbout";

export default function ModoNoche() {

    return (
        <div>

            <BodyAbout
                titulo={"Modo noche"}
                cuerpo={
                    <div>

                        <p className="cuerpo-texto">Si usas Pinterest de noche o prefieres un tema más oscuro, puedes usar el modo noche.</p>
                        <p className="cuerpo-texto">El modo noche está disponible para Pinterest en dispositivos móviles. La aplicación de Pinterest se adaptará a la configuración de tu dispositivo para este modo. Si este está activado en tu dispositivo, la aplicación de Pinterest pasará automáticamente al modo noche.</p>
                        <h2 className="titulo-pinterest">Activa o desactiva el modo noche</h2>
                        <div className="d-flex web-android-ios">
                            <a href="#" style={{ textDecoration: "underline" }}>WEB</a>
                            <a href="#" style={{ textDecoration: "underline" }}>ANDROID</a>
                            <a href="#" style={{ textDecoration: "underline" }}>IOS</a>
                        </div>
                        <p className="cuerpo-texto">En este momento, el modo noche solo está disponible para teléfonos móviles y tablets.</p>

                    </div>
                }
            />

        </div>
    )
}