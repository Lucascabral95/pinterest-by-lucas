import "./FooterAbout.scss"
import { BiSad } from "react-icons/bi";
import { RiEmotionHappyLine } from "react-icons/ri";

export default function FooterAbout() {

    return (
        <div className="footer-about">

            <div className="contenedor-uno">
                <div className="contenedor">
                    <div className="contenedor-footer-texto">
                        <p className="footer-texto">¿Aún necesitas ayuda? </p>
                    </div>
                    <div className="boton">
                        <p> Ponte en contacto </p>
                    </div>
                </div>
            </div>
            <div className="contenedor-dos">
                <div className="contenedor">
                    <div className="contenedor-footer-texto">
                        <p className="footer-texto">¿Fue útil este artículo?</p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center contenedor-icons">
                        <RiEmotionHappyLine className="icon" size={30} color="#004BA9" /> <BiSad className="icon" size={30} color="#004BA9" />
                    </div>
                </div>
            </div>

        </div>
    )
}