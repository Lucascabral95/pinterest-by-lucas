import "./NavbarMobile.scss"
import { MdHomeFilled } from "react-icons/md";
import { Link } from "react-router-dom";

export default function NavbarMobile() {

    return (
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
            <Link to={""} className="contenedor-icon">
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path d="M18 12.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 18 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 6 12.5M12 0C5.925 0 1 4.925 1 11c0 2.653.94 5.086 2.504 6.986L2 24l5.336-3.049A10.93 10.93 0 0 0 12 22c6.075 0 11-4.925 11-11S18.075 0 12 0" fill="#000000">
                        </path>
                    </svg>
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
    )
}