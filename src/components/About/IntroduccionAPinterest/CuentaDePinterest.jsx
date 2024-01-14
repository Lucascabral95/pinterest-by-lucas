import { useState } from "react";
import AboutTitulo from "../AboutTitulo.jsx";
import { FaPlus } from "react-icons/fa6";
import "../About.scss"
import About from "../About.jsx";
import "../About.scss"

export default function CuentaDePinterest() {
    const [activeCollapse, setActiveCollapse] = useState({
        personal: false,
        adicional: false
    })

    const handleCerrar = (num) => {
        if (num === 1) {
            setActiveCollapse(prevState => ({ ...prevState, personal: !prevState.personal }));
        } else {
            setActiveCollapse(prevState => ({ ...prevState, adicional: !prevState.adicional }));
        }
    }

    return (
        <div className="about">

            <AboutTitulo titulo={"Obten una cuenta de Pinterest"} />

            <div className="cuerpo-about">

                <div className="cuerpo-about-info">

                    <p className="cuerpo-texto"> Pinterest es un motor de descubrimiento visual para encontrar ideas como recetas, inspiración para el hogar y de estilo, y mucho más.</p>
                    <p className="cuerpo-texto"> Crea una cuenta de Pinterest para que descubras Pines que te gusten y los guardes en tableros para que tus ideas estén organizadas y sean fáciles de encontrar.</p>
                    <p className="cuerpo-texto"> Si nunca has usado Pinterest, puedes crear una cuenta personal. </p>
                    <p className="cuerpo-texto"> Si has usado Pinterest o te gustaría crear una cuenta adicional que sea independiente de tu cuenta personal existente y use un correo electrónico diferente, puedes crear una segunda cuenta. </p>
                    <h2 className="cuerpo-titulo"> Crear una cuenta personal</h2>

                    <p className="cuerpo-texto">Crea una cuenta personal nueva para que descubras Pines y los guardes en tableros.</p>
                    <p className="cuerpo-texto">Al crear una cuenta, aceptas las Directrices para la comunidad y la Política de privacidad de Pinterest.</p>
                    <div className="d-flex web-android-ios">
                        <a href="#" style={{ textDecoration: "underline" }}>WEB</a>
                        <a href="#" style={{ textDecoration: "underline" }}>ANDROID</a>
                        <a href="#" style={{ textDecoration: "underline" }}>IOS</a>
                    </div>


                    <div className="contenedor-collapse">
                        <div className="collapse">
                            <h2 className="cuerpo-titulo"> Crear una cuenta personal </h2>
                            <FaPlus style={{ cursor: "pointer" }} size={26} color="#004BA9" className="icon-collapse" onClick={() => handleCerrar(1)} />
                        </div>
                        <div className="collapse-interior" style={{ display: activeCollapse.personal ? "block" : "none" }}>
                            <p className="cuerpo-texto">  1) Ve a Pinterest. </p>
                            <p className="cuerpo-texto"> 2) Ingresa tu correo electrónico, crea una contraseña e introduce tu edad. </p>
                            <p className="cuerpo-texto"> 3) Haz clic en Continuar. </p>
                            <p className="cuerpo-texto"> 4) Haz clic en Siguiente. </p>
                            <p className="cuerpo-texto"> 5) Selecciona cómo te identificas. </p>
                            <p className="cuerpo-texto"> 6) Selecciona tu idioma y país o región en los menús desplegables. </p>
                            <p className="cuerpo-texto"> 7) Selecciona 5 o más temas. </p>
                            <p className="cuerpo-texto"> 8) Haz clic en Listo. </p>
                        </div>
                    </div>
                    <hr className="hr-collapse" />
                    <h2 style={{ marginTop: '-10%' }} className="cuerpo-titulo"> Crear una cuenta personal adicional </h2>
                    <p className="cuerpo-texto"> Si ya tienes una cuenta personal pero te gustaría crear una cuenta adicional, puedes hacerlo con una dirección de correo electrónico diferente. Una vez que la hayas creado, puedes conectar tus cuentas para cambiar entre las cuentas vinculadas .</p>
                    <p className="cuerpo-texto"> Al crear una cuenta, aceptas las Directrices para la comunidad y la Política de privacidad de Pinterest.</p>
                    <div className="d-flex web-android-ios">
                        <a href="#" style={{ textDecoration: "underline" }}>WEB | </a>
                        <a href="#" style={{ textDecoration: "underline" }}> ANDROID |</a>
                        <a href="#" style={{ textDecoration: "underline" }}> IOS</a>
                    </div>
                    <div className="contenedor-collapse">
                        <div className="collapse">
                            <h2 className="cuerpo-titulo"> Crear una cuenta personal adicional </h2>
                            <FaPlus style={{ cursor: "pointer" }} size={26} color="#004BA9" className="icon-collapse" onClick={() => handleCerrar(2)} />
                        </div>
                        <div className="collapse-interior" style={{ display: activeCollapse.adicional ? "block" : "none" }}>
                            <p className="cuerpo-texto">  1) Inicia sesión en tu cuenta personal de Pinterest. </p>
                            <p className="cuerpo-texto"> 2) En la parte superior derecha de la pantalla, haz clic en el icono de la flecha hacia abajo y luego en Agregar cuenta. </p>
                            <p className="cuerpo-texto"> 3) En Crear una cuenta personal nueva, haz clic en Crear. </p>
                            <p className="cuerpo-texto"> 4) Ingresa tu correo electrónico, crea una contraseña e introduce tu edad. </p>
                            <p className="cuerpo-texto"> 5) Haz clic en Continuar. </p>
                            <p className="cuerpo-texto"> 6) Si lo deseas, haz clic en el icono de editar para cambiar tu nombre y luego haz clic en Siguiente. </p>
                            <p className="cuerpo-texto"> 7) Selecciona cómo te identificas. </p>
                            <p className="cuerpo-texto"> 8) Selecciona tu idioma y país o región en los menús desplegables. </p>
                            <p className="cuerpo-texto"> 9) Selecciona 5 o más temas </p>
                            <p className="cuerpo-texto"> 10) Haz clic en Listo. </p>
                        </div>
                    </div>
                    <hr className="hr-collapse" />
                    <h2 style={{ marginTop: '-10%' }} className="cuerpo-titulo"> Convertir tu cuenta personal en una cuenta para empresa </h2>
                    <p className="cuerpo-texto"> Si tienes una cuenta personal pero quieres usarla para fines comerciales, puedes convertir tu cuenta personal en una cuenta para empresa . Si decides convertir tu cuenta, conservarás todos los Pines y seguidores que ya tienes. Puedes volver a tu cuenta personal en cualquier momento. </p>
                </div>
                <div className="otros-articulos">
                    <About />
                </div>
            </div>
        </div >
    )
}