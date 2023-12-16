import "./NavbarMobileImagen.scss"
import { Link } from "react-router-dom"

export default function NavbarMobileImagen() {

    return (
        <div className="navbar-mobile-imagen">

            <div className="contenedor-imagen">
                <Link to={"/"} className="svg-back">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path d="M8.415 4.586a2 2 0 1 1 2.828 2.828L8.657 10H21a2 2 0 0 1 0 4H8.657l2.586 2.586a2 2 0 1 1-2.828 2.828L1 12l7.415-7.414z" fill="black">
                        </path>
                    </svg>
                </Link>
                <div className="logo">
                <img src="/img/logoo-pinterest.png" alt="Logo Pinterest" className="logo-pinterest" />
                </div>
            </div>

        </div>
    )
}