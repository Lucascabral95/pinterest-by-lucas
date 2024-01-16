import "./FooterAbout.scss"
import { BiSad } from "react-icons/bi";
import { RiEmotionHappyLine } from "react-icons/ri";
import { Link } from "react-router-dom";

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

            <div className="contenedor-mayor">

                <div className="contenedor-grande">
                    <div className="logo-idiomas">
                        <div className="logo">
                            <img src="/img/pinterest-sin-fondo.png" alt="Logo de Pinterest" />
                        </div>
                        <div className="idiomas">
                            <span className="lenguage">Idiomas</span>
                            <select name="idiomas" id="idiomas">
                                <option value="Español">Español</option>
                                <option value="Ingles">English (US) </option>
                                <option value="Indonesia">Bahasa Indonesia </option>
                                <option value="Cestina">Cestina </option>
                                <option value="Aleman">Deutsch </option>
                                <option value="Ingles">English (UK) </option>
                                <option value="Frances">Français </option>
                                <option value="Italiano">Italiano </option>
                                <option value="Magyar">Magyar </option>
                                <option value="Holandes">Nederlands </option>
                                <option value="Noruego">Norks Bokmål  </option>
                                <option value="Polaco">Polski </option>
                                <option value="Brasil">Portugues </option>
                                <option value="Rumano">Românâ </option>
                                <option value="Esloveno">Slovenčina </option>
                                <option value="Finlandes">Soumi </option>
                                <option value="Sueco">Svenska </option>
                                <option value="Filipino">Filipino </option>
                                <option value="Vietnamita">Tiếng Việt </option>
                                <option value="Japones">日本語  </option>
                                <option value="Coreano">한국어   </option>
                            </select>
                        </div>
                    </div>

                    <div className="nosotros-politicas-informacion">
                        <div className="nosotros uno">
                            <p className="contenido-titulo"> Acerca de nosotros </p>
                            <p>
                                <Link to="/about" className="contenido-texto">Que es Pinterest</Link>
                            </p>
                            <p>
                                <a href="https://ar.pinterest.com/pinterest/" target="_blank" className="contenido-texto">Nuestra pagina de Pinterest</a>
                            </p>
                            <p>
                                <a href="https://medium.com/@Pinterest_Engineering" target="_blank" className="contenido-texto">Blog de ingenieria</a>
                            </p>
                            <p>
                                <a target="_blank" href="https://business.pinterest.com/es/brand-guidelines/" className="contenido-texto">Directrices de la marca</a>
                            </p>
                            <p>
                                <a target="_blank" href="https://www.pinterestcareers.com/en/" className="contenido-texto">Empleo</a>
                            </p>
                            <p>
                                <a target="_blank" href="https://help.pinterest.com/es" className="contenido-texto">Centro de ayuda</a>
                            </p>
                            <p>
                                <a target="_blank" href="https://www.pinterestcareers.com/en/pinterest-labs/" className="contenido-texto">Pinterest Labs</a>
                            </p>
                        </div>
                        <div className="nosotros dos" >
                            <p className="contenido-titulo"> Nuestras politicas </p>
                            <p>
                                <a target="_blank" href="https://policy.pinterest.com/es/copyright" className="contenido-texto">Copyrigth</a>
                            </p>
                            <p>
                                <a target="_blank" href="https://help.pinterest.com/es/article/personalized-ads-on-pinterest" className="contenido-texto">Anuncios personalizados</a>
                            </p>
                            <p>
                                <a target="_blank" href="https://policy.pinterest.com/es/terms-of-service" className="contenido-texto">Condiciones de servicio</a>
                            </p>
                            <p>
                                <a target="_blank" href="https://policy.pinterest.com/es/privacy-policy" className="contenido-texto">Privacidad</a>
                            </p>
                        </div>
                        <div className="nosotros tres" >
                            <p className="contenido-titulo"> Mas informacion </p>
                            <p>
                                <Link to={"/empresa"} className="contenido-texto">Para empresas</Link>
                            </p>
                            <p>
                                <a target="_blank" href="https://developers.pinterest.com/" className="contenido-texto">Para desarrolladores</a>
                            </p>
                            <p>
                                <a target="_blank" href="https://newsroom.pinterest.com/es/" className="contenido-texto">Prensa</a>
                            </p>
                            <p>
                                <a target="_blank" href="https://investor.pinterestinc.com/investor-overview/default.aspx" className="contenido-texto">Para inversionistas</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="contenedor-marca">
                    <p className="marca-texto"> © Pinterest 2024 </p>
                </div>
            </div>
        </div>
    )
}