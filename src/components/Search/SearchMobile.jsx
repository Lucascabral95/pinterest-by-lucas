import { useState } from "react"
import "./SearchMobile.scss"
import { storeZustand } from "../../zustand.jsx"
import BodyPinterest from "../BodyPinterest/BodyPinterest.jsx"
import ExplorationPinterest from "../ExplorationPinterest/ExplorationPinterest.jsx"
import Carousel from "./Carousel.jsx"

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

            <Carousel />

            {searchActive ? (
                <BodyPinterest />
            ) : (
                null
            )}

            <ExplorationPinterest />

        </div>
    )
}