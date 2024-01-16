import BodyAbout from "../BodyAbout";

export default function TablerosSecretosDos() {

    return (
        <div>

            <BodyAbout
                titulo={"Tableros secretos"}
                cuerpo={
                    <div>

                        <p className="cuerpo-texto">Solo tú puedes ver tus tableros secretos ( <a href="#" style={{ textDecoration: 'underline' }}>y las personas a las que invites</a> ). Los Pines y tableros secretos no aparecen en el feed de inicio, las búsquedas ni ninguna otra parte de Pinterest.</p>
                        <p className="cuerpo-texto">Si quieres crear un tablero secreto nuevo, crea un tablero y activa la opción <a href="#" style={{ fontWeight: 600 }}>Mantener este tablero en secreto</a> cuando indiques el nombre del tablero.</p>
                        <h2 className="cuerpo-titulo"> Convierte en secreto un tablero existente </h2>
                        <div className="d-flex web-android-ios">
                            <a href="#" style={{ textDecoration: "underline" }}>WEB</a>
                            <a href="#" style={{ textDecoration: "underline" }}>ANDROID</a>
                            <a href="#" style={{ textDecoration: "underline" }}>IOS</a>
                        </div>
                        <p className="cuerpo-texto" style={{ marginLeft: "3%" }}> 1) Inicia sesión en tu cuenta de Pinterest, luego haz clic en tu foto de perfil en la esquina superior derecha de la pantalla para abrir tu perfil </p>
                        <p className="cuerpo-texto" style={{ marginLeft: "3%" }}> 2) Haz clic en el tablero que quieres hacer secreto </p>
                        <p className="cuerpo-texto" style={{ marginLeft: "3%" }}> 3) Haz clic en los tres puntos situados junto al nombre del tablero </p>
                        <p className="cuerpo-texto" style={{ marginLeft: "3%" }}> 4) Haz clic en <a href="#" style={{ fontWeight: 600 }}>Editar tablero</a> </p>
                        <p className="cuerpo-texto" style={{ marginLeft: "3%" }}> 5) Desplázate hacia abajo y activa <a href="#" style={{ fontWeight: 600 }}>Mantener este tablero en secreto</a>. </p>
                        <p className="cuerpo-texto" style={{ marginLeft: "3%" }}> 6) Haz clic en <a href="#" style={{ fontWeight: 600 }}>Hecho</a>. </p>
                        <p className="cuerpo-texto"> Cuando guardas Pines en un tablero secreto, la persona de la que guardaste el Pin no recibirá una notificación ni aumentará el recuento de Pines . </p>
                        <p className="cuerpo-texto"> Cuando guardas Pines de un tablero secreto, no aparecerá el nombre de la persona de quien lo guardaste en tu nuevo Pin. </p>
                        <p className="cuerpo-texto"> Si quieres compartir un tablero secreto, puedes <a href="#" style={{ textDecoration: 'underline' }}>invitar a amigos para colaborar</a> o hacer público el tablero.  </p>
                        <h2 className="cuerpo-titulo"> Cómo hacer público un tablero secreto </h2>
                        <p className="cuerpo-texto"> Para hacer público un tablero secreto, desactiva la opción <a href="#" style={{ fontWeight: 600 }}>Mantener este tablero en secreto</a> en la configuración del tablero.  </p>
                        <p className="cuerpo-texto"> <a href="#" style={{ fontWeight: 600 }}>Nota:</a> Los tableros secretos y los Pines no se pueden promocionar a través de la Publicidad en Pinterest .  </p>

                    </div>
                }
            />

        </div>
    )
}