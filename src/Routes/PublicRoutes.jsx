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
import Reacciones from "../components/About/InteraccionPin/Reacciones.jsx"
import AgregarAdministrar from "../components/About/InteraccionPin/AgregarAdministrarPin.jsx"
import InterPint from "../components/About/InteraccionPin/InterPin.jsx"
import EncontraTuPerfil from "../components/About/ConfiguracionPerfil/EncontraTuPerfil.jsx"
import ModificarTuPerfil from "../components/About/ConfiguracionPerfil/ModificaTuPerfil.jsx"
import PerfilPrivadoPublico from "../components/About/ConfiguracionPerfil/PerfilPrivadoPublico.jsx"
import ActualizarAplicacion from "../components/About/PinterestDispositivo/ActualizarAplicacion.jsx"
import AgregarWidget from "../components/About/PinterestDispositivo/AgregaWidget.jsx"
import LectorPantalla from "../components/About/PinterestDispositivo/LectorPantalla.jsx"
import PinterestLite from "../components/About/PinterestDispositivo/PinterestLite.jsx"
import ModoNoche from "../components/About/PinterestDispositivo/ModoNoche.jsx"
import AutorizacionesIOS from "../components/About/PinterestDispositivo/AutorizacionesIOS.jsx"
import AutorizacionesAndroid from "../components/About/PinterestDispositivo/AutorizacionesAndroid.jsx"
import AppStore from "../components/About/PinterestDispositivo/AppStore.jsx"
import ConfiguracionesAutomaticas from "../components/About/FuncionesHerramientas/ConfiguracionesAutomatica.jsx"
import ComprarPinesProductos from "../components/About/FuncionesHerramientas/ComprarPinesProductos.jsx"
import FuncionPrueba from "../components/About/FuncionesHerramientas/FuncionPrueba.jsx"
import TablerosSecretos from "../components/About/FuncionesHerramientas/TablerosSecretos.jsx"
import InformePinterest from "../components/About/FuncionesHerramientas/InformePinterest.jsx"
import ListaCompras from "../components/About/FuncionesHerramientas/ListaCompras.jsx"
import TablerosSecretosDos from "../components/About/FuncionesHerramientas/TablerosSecretos.jsx"

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
                <Route path='/about/tipos/pines' element={<TiposDePines />} />
                <Route path='/about/tipos/pines' element={<TiposDePines />} />
                <Route path='/about/cuenta/pinterest' element={<CuentaDePinterest />} />
                <Route path='/about/descubre/ideas' element={<DescubreIdeas />} />
                <Route path='/about/explora/feed' element={<ExploraFeed />} />
                <Route path='/about/ideas/pinterest' element={<IdeasPinterest />} />
                <Route path='/about/shuffles' element={<Shuffles />} />
                <Route path='/about/reacciones' element={<Reacciones />} />
                <Route path='/about/agregar/administrar' element={<AgregarAdministrar />} />
                <Route path='/about/inter/pin' element={<InterPint />} />
                <Route path='/about/encontrar/tu/perfil' element={<EncontraTuPerfil />} />
                <Route path='/about/modificar/tu/perfil' element={<ModificarTuPerfil />} />
                <Route path='/about/perfil/privado/publico' element={<PerfilPrivadoPublico />} />
                <Route path='/about/funcion/prueba' element={<FuncionPrueba />} />
                <Route path='/about/tableros/secretos' element={<TablerosSecretos />} />
                <Route path='/about/informe/pinterest' element={<InformePinterest />} />
                <Route path='/about/actualizar/aplicacion' element={<ActualizarAplicacion />} />
                <Route path='/about/agregar/widget' element={<AgregarWidget />} />
                <Route path='/about/lector/pantalla' element={<LectorPantalla />} />
                <Route path='/about/pinterest/lite' element={<PinterestLite />} />
                <Route path='/about/modo/noche' element={<ModoNoche />} />
                <Route path='/about/autorizaciones/ios' element={<AutorizacionesIOS />} />
                <Route path='/about/autorizaciones/android' element={<AutorizacionesAndroid />} />
                <Route path='/about/appstore' element={<AppStore />} />
                <Route path='/about/configuraciones/automaticas' element={<ConfiguracionesAutomaticas />} />
                <Route path='/about/comprar/pines/productos' element={<ComprarPinesProductos />} />
                <Route path='/about/lista/compras' element={<ListaCompras />} />
                <Route path='/about/funcion/prueba' element={<FuncionPrueba />} />
                <Route path='/about/tableros/secretos/dos' element={<TablerosSecretosDos />} />
                <Route path='/about/informe/pinterest' element={<InformePinterest />} />

            </Routes>

        </>

    )
}

