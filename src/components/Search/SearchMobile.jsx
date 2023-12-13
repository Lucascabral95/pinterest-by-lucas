import { useState } from "react"
import "./SearchMobile.scss"
import { storeZustand } from "../../zustand.jsx"
import carousel from "../../JSON/Carousel.json"
import BodyPinterest from "../BodyPinterest/BodyPinterest.jsx"
import ExplorationPinterest from "../ExplorationPinterest/ExplorationPinterest.jsx"

export default function SearchMobile() {
    const [busquedaNavbar, setBusquedaNavbar] = useState("")
    const [searchActive, setSearchActive] = useState(false)
    const { setBusqueda } = storeZustand()

    const handleNuevaBusqueda = (event) => {
        if (event.key === 'Enter') {
            const currentPath = window.location.pathname;
            if (currentPath !== '/') {
                setBusqueda(busquedaNavbar);
                setSearchActive(true)
            } else {
                setBusqueda(busquedaNavbar);
            }
        }
    }

    return (
        <div className="search">

            <div className="contenedor-search">
                <div className="searchh">
                    <svg className='svg-search' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                        <path d="M10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m13.12 2.88-4.26-4.26A9.842 9.842 0 0 0 20 10c0-5.52-4.48-10-10-10S0 4.48 0 10s4.48 10 10 10c1.67 0 3.24-.41 4.62-1.14l4.26 4.26a3 3 0 0 0 4.24 0 3 3 0 0 0 0-4.24" fill="#666666">
                        </path>
                    </svg>
                    <input placeholder="Buscar" type="text" className="form-control search-input"
                        onChange={(e) => setBusquedaNavbar(e.target.value)}
                        onKeyDown={handleNuevaBusqueda}
                    />
                </div>
            </div>

            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src="https://mandolina.co/wp-content/uploads/2020/11/postre-de-oreo.jpg" className="d-block w-100" alt="Postres" style={{ height:"54vw" }}/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://audaces.com/wp-content/uploads/2022/03/estilos-de-moda.webp" className="d-block w-100" alt="..." style={{ height:"54vw" }}/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://media.ambito.com/p/4c50db8f232830d01a3952e9c82b7ba2/adjuntos/239/imagenes/039/791/0039791115/playa-paradisiacasjpg.jpg" className="d-block w-100" alt="..." style={{ height:"54vw" }}/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {searchActive ? (
                <BodyPinterest />
            ) : (
                null
            )}

            <ExplorationPinterest />

        </div>
    )
}