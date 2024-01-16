import BodyAbout from "../BodyAbout";

export default function Reacciones() {

    return(
        <div>

            <BodyAbout 
            titulo={'Reacciones'}
            cuerpo={
                <div>
                    <p className="cuerpo-texto"> Puedes reaccionar a los Pines o compartir tu opinión y enviar comentarios a las personas que los crearon. No puedes reaccionar a anuncios de video ni a contenido de video promocionado.</p>
                    <p className="cuerpo-texto"> Puedes reacciones a un Pin de diferntes maneras: </p>
                    <div className="contenedor-img" style={{ marginTop: "8%", marginBottom: "8%" }}>
                        <img className="img-pines" src="https://help.pinterest.com/sites/pinhelp/files/field_article_content/ES-video-reactions.png" alt="Reacciones" />
                    </div>
                    <p className="cuerpo-texto"> Cuando reaccionas a un Pin, compartes tu opinión al respecto, pero no guardas el Pin. Si quieres ver el Pin más tarde, tienes que <a href="#" style={{ textDecoration: "underline" }}>guardarlo en un Tablero</a>. También puedes hacer clic en el número de reacciones de un Pin para ver quién reaccionó.</p>
                    <h2 className="cuerpo-titulo"> Reaccionar a un Pin </h2>
                    <div className="d-flex web-android-ios">
                            <a href="#" style={{ textDecoration: "underline" }}>WEB</a>
                            <a href="#" style={{ textDecoration: "underline" }}>ANDROID</a>
                            <a href="#" style={{ textDecoration: "underline" }}>IOS</a>
                        </div>
                    <p className="cuerpo-texto"> <a href="#" style={{ textDecoration: "underline", marginLeft: "3%" }}>1) Inicia sesion en tu cuenta de Pinterest</a></p>
                    <p className="cuerpo-texto" style={{ marginLeft: "3%" }}> 2) Haz click en el Pin al que quieras reaccionar.</p>
                    <p className="cuerpo-texto" style={{ marginLeft: "3%" }}> 3) Pasa el cursor sobre el y seleccionar una de las reacciones que aparecen. </p>
                    <p className="cuerpo-texto" style={{ marginLeft: "3%" }}> 4) Para eliminar al reacciones, vuelve a hacer click en la reaccion.</p>

                </div>
            }
            />
            
        </div>
    )
}