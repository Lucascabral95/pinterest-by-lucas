import BodyAbout from "../BodyAbout";

export default function PinterestLite() {

    return (
        <div>

            <BodyAbout
                tiulo={"Pinterest Lite"}
                cuerpo={
                    <div>

                        <p className="cuerpo-texto"> Pinterest Lite es una versión ligera de la aplicación de Pinterest que se descarga más rápido y ocupa menos espacio en tu dispositivo. </p>
                        <div className="d-flex web-android-ios">
                            <a href="#" style={{ textDecoration: "underline" }}>WEB</a>
                            <a href="#" style={{ textDecoration: "underline" }}>ANDROID</a>
                            <a href="#" style={{ textDecoration: "underline" }}>IOS</a>
                        </div>
                        <p className="cuerpo-texto"> Por ahora, Pinterest Lite solo está disponible en Android. </p>

                    </div>
                }
            />

        </div>
    )
}