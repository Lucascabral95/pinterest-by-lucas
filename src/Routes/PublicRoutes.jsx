import "./PublicRoutes.scss"
import { Routes, Route } from "react-router-dom"
import ExplorarionPinterest from "../components/ExplorationPinterest/ExplorationPinterest.jsx"
import ImagenPinterest from "../components/ImagenPinterest/ImagenPinterest"
import Profile from "../components/Perfil/Perfil.jsx"
import NavbarDesktop from "../components/NavbarPinterest/NavbarDesktop.jsx"
import BodyPinterest from "../components/BodyPinterest/BodyPinterest.jsx"
import DatosPersonales from "../components/DatosPersonales/DatosPersonales.jsx"
import SearchMobile from "../components/Search/SearchMobile.jsx"
import Scroll from "../scrol.jsx"
import ImagenesFavoritas from "../components/ImagenesFavoritas/ImagenesFavoritas.jsx"
import Information from "../components/Information/Information.jsx"
import About from "../components/About/About.jsx"

export default function PublicRoutes() {      

    return (

        <>

            <NavbarDesktop />

            <Routes>
                <Route path='*' element={<BodyPinterest />} />
                <Route path='/' element={<BodyPinterest />} />
                <Route path='/exploration' element={<ExplorarionPinterest />} />
                <Route path='/perfil' element={<Profile />} />
                <Route path='/configuration' element={<DatosPersonales />} />
                <Route path='/search' element={<SearchMobile />} />
                <Route path='/pinterest' element={<ImagenPinterest />} />
                <Route path='/scroll' element={<Scroll />} />
                <Route path='/favoritas' element={<ImagenesFavoritas />} />
                <Route path='/empresa' element={<Information />} />
                <Route path='/about' element={<About />} />
            </Routes>

        </>

    )
}

