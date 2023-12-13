import ExplorarionPinterest from "../components/ExplorationPinterest/ExplorationPinterest.jsx"
import ImagenPinterest from "../components/ImagenPinterest/ImagenPinterest"
import { Routes, Route } from "react-router-dom"
import Profile from "../components/Perfil/Perfil.jsx"
import NavbarDesktop from "../components/NavbarPinterest/NavbarDesktop.jsx"
import BodyPinterest from "../components/BodyPinterest/BodyPinterest.jsx"
import DatosPersonales from "../components/DatosPersonales/DatosPersonales.jsx"
import SearchMobile from "../components/Search/SearchMobile.jsx"

export default function PublicRoutes() {

    return (

        <>

            <NavbarDesktop />

            <Routes>
                <Route path='*' element={<BodyPinterest />} />
                <Route path='/' element={<BodyPinterest />} />
                <Route path='/pinterest/:id' element={<ImagenPinterest />} />
                <Route path='/exploration' element={<ExplorarionPinterest />} />
                <Route path='/perfil' element={<Profile />} />
                <Route path='/configuration' element={<DatosPersonales />} />
                <Route path='/search' element={<SearchMobile />} />
            </Routes>

        </>

    )
}