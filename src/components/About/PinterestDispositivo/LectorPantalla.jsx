import BodyAbout from "../BodyAbout";

export default function LectorPantalla() {

    return (
        <div>

            <BodyAbout
                titulo={"Activar un lector de pantalla para Pinterest"}
                cuerpo={
                    <div>

                  <p className="cuerpo-texto">Algunos Pines de Pinterest tienen texto alternativo para proporcionar descripciones audibles de lo que las personas pueden ver en el Pin. Activa un lector de pantalla en tu equipo de escritorio o dispositivo móvil para usar texto alternativo.</p>
                  <div className="d-flex web-android-ios">
                            <a href="#" style={{ textDecoration: "underline" }}>WEB</a>
                            <a href="#" style={{ textDecoration: "underline" }}>ANDROID</a>
                            <a href="#" style={{ textDecoration: "underline" }}>IOS</a>
                        </div>
                  <p className="cuerpo-texto"><a href="#" style={{ fontWeight: 600 }}>En un Mac:</a></p>
                  <p className="cuerpo-texto" style={{ marginLeft:"3%" }}>1) Haz clic en el ícono de la manzana en la esquina superior izquierda.</p>
                  <p className="cuerpo-texto" style={{ marginLeft:"3%" }}>2) Selecciona <a href="#" style={{ fontWeight: 600 }}>Preferencias del sistema</a>.</p>
                  <p className="cuerpo-texto" style={{ marginLeft:"3%" }}>3) Haz clic en <a href="#" style={{ fontWeight: 600 }}>Accesibilidad</a>.</p>
                  <p className="cuerpo-texto" style={{ marginLeft:"3%" }}>4) En el panel de navegación de la izquierda, haz clic en <a href="#" style={{ fontWeight: 600 }}>Voz en off</a>.</p>
                  <p className="cuerpo-texto" style={{ marginLeft:"3%" }}>5) Marca la casilla junto a <a href="#" style={{ fontWeight: 600 }}>Activar voz en off</a>.</p>
                  <p className="cuerpo-texto"><a href="#" style={{ fontWeight: 600 }}>En Windows 10:</a></p>
                  <p className="cuerpo-texto" style={{ marginLeft:"3%" }}>1) En el teclado, mantén pulsadas juntas la tecla del logotipo de Windows, la tecla Ctrl y la tecla Intro.</p>
                  <p className="cuerpo-texto" style={{ marginLeft:"3%" }}>2) Haz clic en <a href="#" style={{ fontWeight: 600 }}>Facilidad de acceso</a> en la esquina inferior derecha, y luego activa <a href="#" style={{ fontWeight: 600 }}>Narrador</a> .</p>
                  <p className="cuerpo-texto" style={{ marginLeft:"3%" }}>3) Haz clic en <a href="#" style={{ fontWeight: 600 }}>Accesibilidad</a>.</p>
                  <p className="cuerpo-texto" style={{ marginLeft:"3%" }}>4) Dirígete a la <a href="#" style={{ fontWeight: 600 }}>Configuración de Windows</a>.</p>
                  <p className="cuerpo-texto" style={{ marginLeft:"3%" }}>5) Haz clic en <a href="#" style={{ fontWeight: 600 }}>Facilidad de acceso</a> y luego activa <a href="#" style={{ fontWeight: 600 }}>Usar narrador</a>.</p>


                    </div>
                }
            />

        </div>
    )
}