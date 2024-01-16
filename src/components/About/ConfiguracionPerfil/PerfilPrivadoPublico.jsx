import BodyAbout from "../BodyAbout";

export default function PerfilPrivadoPublico() {

    return (
        <div>
            <BodyAbout
                titulo={"Haz que tu perfil sea privado o público."}
                cuerpo={
                    <div>

                        <p className="cuerpo-texto">Para controlar quiénes pueden ver tu perfil, tus tableros y tus Pines, puedes configurar tu perfil como privado o público. Los perfiles privados no aparecerán en los resultados de búsqueda de Pinterest ni <a href="#" style={{ textDecoration: 'underline' }}>motores de busqueda</a>, pero puedes <a href="#" style={{ textDecoration: 'underline' }}>Invitar a personas a que te sigan.</a></p>
                        <h2 className="titulo-pinterest">Antes de comenzar</h2>
                        <ul style={{ marginLeft: "3%" }}>
                            <li>Debes tener al menos 16 años para editar la visibilidad de tu perfil. Obtén más información sobre la <a href="#" style={{ textDecoration: 'underline' }}>seguridad de los adolescentes en Pinterest </a>.</li>
                            <li>Si tienes una cuenta para empresa, deberás <a href="#" style={{ textDecoration: 'underline' }}>cambiarla a una cuenta personal</a> para que tu perfil sea privado.</li>
                        </ul>
                        <h2 className="titulo-pinterest">Administrar la visitabilidad de tu pefil</h2>
                        <div className="d-flex web-android-ios">
                            <a href="#" style={{ textDecoration: "underline" }}>WEB</a>
                            <a href="#" style={{ textDecoration: "underline" }}>ANDROID</a>
                            <a href="#" style={{ textDecoration: "underline" }}>IOS</a>
                        </div>
                        <p className="cuerpo-texto"> 1) <a href="#" style={{ textDecoration:'underline' }}>Inicia sesión en tu cuenta de Pinterest.</a>  </p>
                        <p className="cuerpo-texto">2) En la esquina superior derecha, haz clic en  el icono de la flecha hacia abajo  para abrir el menú.</p>
                        <p className="cuerpo-texto">3) Haz clic en <a href="#" style={{ fontWeight: 600 }}>Configuración</a> .</p>
                        <p className="cuerpo-texto">4) Haz clic en <a href="#" style={{ fontWeight: 600 }}>Visibilidad del perfil</a>  en la parte izquierda de la pantalla.</p>
                        <p className="cuerpo-texto">5) Haz clic sobre el interruptor situado junto a <a href="#" style={{ fontWeight: 600 }}>Perfil privado</a> . </p>

                    </div>
                }
            />
        </div>
    )
}