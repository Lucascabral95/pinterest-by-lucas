import BodyAbout from "../BodyAbout";

export default function EncontraTuPerfil() {

    return (
        <div>
            <BodyAbout
                titulo={"Encuentra tu perfil"}
                cuerpo={
                    <div>
                        <p className="cuerpo-texto">En tu perfil se encuentran todos los Pines que guardas, los tableros que creas y los Pines que pruebas. Allí también aparece tu foto de perfil, tu nombre, tu biografía y, opcionalmente, tu ubicación. Puedes <a href="#" style={{ textDecoration: 'underline' }}>editar esta informacion</a> en cualquier momento.</p>
                        <h2 className="cuerpo-titulo">Entra en tu pefil</h2>
                        <div className="d-flex web-android-ios">
                            <a href="#" style={{ textDecoration: "underline" }}>WEB</a>
                            <a href="#" style={{ textDecoration: "underline" }}>ANDROID</a>
                            <a href="#" style={{ textDecoration: "underline" }}>IOS</a>
                        </div>
                        <p className="cuerpo-texto" style={{ marginLeft: "3%" }} >1) Inicia sesion en <a href="#" style={{ textDecoration: 'underline' }}>Pinterest.com</a></p>
                        <p className="cuerpo-texto" style={{ marginLeft: "3%" }} >2)  Haz click en tui foto de perfil en la esquina superior derecha y luego en <a href="#" style={{ fontWeight: 600 }}>Ver perfil </a>.</p>
                        <p className="cuerpo-texto">En tu perfil, también puedes ver <a href="#" style={{ textDecoration: 'underline' }}>quienes te siguen y las personas, tablertos y los temas que sigues</a>. Cualquier persona puede ver tu perfil, pero solo tú puedes acceder a tus tableros secretos cuando ves tu propio perfil.</p>
                    </div>
                }
            />
        </div>
    )
}

<a href="#" style={{ fontWeight: 600 }}></a>