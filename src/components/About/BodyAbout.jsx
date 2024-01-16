import About from "./About";
import AboutCabecera from "./AboutCabecera";
import AboutTitulo from "./AboutTitulo";
import FooterAbout from "./FooterAbout";

export default function BodyAbout(props) {
    return (
        <div className="about">

            {props.titulo && <AboutTitulo titulo={props.titulo} />}
            {props.navbar && <AboutCabecera navbar={props.navbar} />}

            <div className="cuerpo-about">

                <div className="cuerpo-about-info">
                    {props.cuerpo}
                </div>

                <div className="otros-articulos">
                    <About />
                </div>
            </div>

            <FooterAbout />

        </div>
    );
}
