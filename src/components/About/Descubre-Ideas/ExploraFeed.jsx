import BodyAbout from "../BodyAbout";

export default function ExploraFeed() {

    return (
        <div >
            <BodyAbout titulo={"Descubre ideas en Pinterest"}
                cuerpo={
                    <div>

                        <div className="d-flex web-android-ios">
                            <a href="#" style={{ textDecoration: "underline" }}>WEB</a>
                            <a href="#" style={{ textDecoration: "underline" }}>ANDROID</a>
                            <a href="#" style={{ textDecoration: "underline" }}>IOS</a>
                        </div>
                        <p className="cuerpo-texto"> Hay dos pestañas que puedes usar para navegar por Pinterest en tu equipo de escritorio: <a href="#" style={{ textDecoration: "underline", fontWeight: 600 }}>Inicio</a> y <a href="#" style={{ textDecoration: "underline", fontWeight: 600 }}>Hoy</a>. Estas se encuentran en la parte superior izquierda de la pantalla. </p>
                        <h2 className="cuerpo-titulo">Inicio</h2>
                        <p className="cuerpo-texto"> En tu feed de <a href="#" style={{ textDecoration: "underline", fontWeight: 600 }}>Inicio</a>, encontrarás Pines elegidos para ti en función de los tableros que creas, los Pines con los que interactúas y las cosas que buscas en Pinterest. </p>
                        <p className="cuerpo-texto"> Explora el feed de <a href="#" style={{ textDecoration: "underline", fontWeight: 600 }}>Inicio</a> para descubrir Pines de personas y tableros que sigues. Además, encontrarás recomendaciones de Pines que pueden gustarte y nuevas personas o marcas que seguir; todo esto inspirado en tu actividad reciente. </p>
                        <h2 className="cuerpo-titulo">Hoy</h2>
                        <p className="cuerpo-texto"> La pestaña Hoy es una colección seleccionada de ideas basada en las tendencias de Pinterest. Revísala todos los días para ver ideas nuevas.  </p>

                    </div>
                }
            />
        </div>
    )
}

