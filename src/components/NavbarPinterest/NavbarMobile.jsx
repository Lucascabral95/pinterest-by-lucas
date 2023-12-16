import "./NavbarMobile.scss"
import { MdHomeFilled } from "react-icons/md";
import { Link } from "react-router-dom";
import { BiSolidCategory } from "react-icons/bi";

export default function NavbarMobile() {

    return (
        <div className="contenedor-navbar-mobile">

            <Link to={"/"}>
                <div className="logo-e-imagen">
                    <img className="logo-e-imagen-img" src="/img/logoo-pinterest.png" alt="Logo de Pinterest" />
                </div>
            </Link>

            <div className="navbar-mobile">
                <Link to={"/"} className="contenedor-icon">
                    <div className="icon"> <MdHomeFilled color="black" size={26} />  </div>
                </Link>
                <Link to={"/search"} className="contenedor-icon">
                    <div className="icon">
                        <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                            <path d="M10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m13.12 2.88-4.26-4.26A9.842 9.842 0 0 0 20 10c0-5.52-4.48-10-10-10S0 4.48 0 10s4.48 10 10 10c1.67 0 3.24-.41 4.62-1.14l4.26 4.26a3 3 0 0 0 4.24 0 3 3 0 0 0 0-4.24" fill="#000000">
                            </path>
                        </svg>
                    </div>
                </Link>
                <Link to={"/exploration"} className="contenedor-icon">
                    <div className="icon">
                        <BiSolidCategory size={24} color="#000000" />
                    </div>
                </Link>
                <Link to={"/perfil"} className="contenedor-icon">
                    <div className="icon">
                        <div className="icon-contenedor">
                            <p> L  </p>
                        </div>
                    </div>
                </Link>
            </div>

        </div>
    )
}