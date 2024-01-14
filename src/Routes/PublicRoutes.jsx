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
import TiposDePines from "../components/About/IntroduccionAPinterest/TiposDePines.jsx"
import CuentaDePinterest from "../components/About/IntroduccionAPinterest/CuentaDePinterest.jsx"
import MainAbout from "../components/About/MainAbout.jsx"
import DescubreIdeas from "../components/About/Descubre-Ideas/DescubreIdeas.jsx"
import ExploraFeed from "../components/About/Descubre-Ideas/ExploraFeed.jsx"
import IdeasPinterest from "../components/About/Descubre-Ideas/IdeasPinterest.jsx"
import Shuffles from "../components/About/Descubre-Ideas/Shuffles.jsx"

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


                <Route path='/about' element={<MainAbout />} />
                <Route path='/tipos/pines' element={<TiposDePines />} />
                <Route path='/tipos/pines' element={<TiposDePines />} />
                <Route path='/cuenta/pinterest' element={<CuentaDePinterest />} />
                
                <Route path='/descubre/ideas' element={<DescubreIdeas />} />
                <Route path='/explora/feed' element={<ExploraFeed />} />
                <Route path='/ideas/pinterest' element={<IdeasPinterest />} />
                <Route path='/shuffles' element={<Shuffles />} />
            </Routes>

        </>

    )
}

