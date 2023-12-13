// import { useEffect, useState } from "react";
// import NavbarDesktop from "../NavbarPinterest/NavbarDesktop";
// import "./ExplorationPinterest.scss";
// import { storeZustand } from "../../zustand.jsx";
// import { Link } from "react-router-dom";
// import ExplorationSelected from "./ExplorationSelected.jsx";
// import BodyPinterest from "../BodyPinterest/BodyPinterest.jsx";
// import Categorias from "../../JSON/Categorias.json"
// import Skeleton from "react-loading-skeleton";
// import 'react-loading-skeleton/dist/skeleton.css'

// export default function ExplorationPinterest() {
//     const { currentDate, busqueda, setBusqueda, infoCategoria, setInfoCategoria } = storeZustand()
//     const [selectCategory, setSelectCateogory] = useState(false)
//     const [skeleton, setSkeleton] = useState(false)

//     const buscarCategoria = (value) => {
//         setBusqueda(value.busqueda)
//         setSelectCateogory(true)
//         setInfoCategoria(
//             {
//                 titulo: value.titulo,
//                 descripcion: value.descripcion,
//                 imagen: value.imagen,
//                 detalle: value.detalle
//             }
//         )
//         console.log(infoCategoria);
//     }

//     useEffect(() => {
//        setTimeout(() => {
//          setSkeleton(true)
//        }, 100);
//     }, [skeleton])

//     return (
//         <div className="exploration">
//             <NavbarDesktop />

//             <div className="contenedor-cat" style={{ display: selectCategory ? "none" : "block" }}>
//                 <div className="titulo">
//                     <p> {currentDate} </p>
//                     <h2>Sigue inspirándote</h2>
//                 </div>

//                 {/* <div className="contenedor-categorias">
//                     <Link className="categoria-imagen" onClick={() => buscarCategoria("Postres caseros")}>
//                         <img src="https://png.pngtree.com/background/20230519/original/pngtree-free-free-desserts-wallpapers-picture-image_2669805.jpg" alt="Postres" />
//                         <h5>Recetas de postres caseros</h5>
//                         <p> Hecho en casa </p>
//                     </Link>
//                     <Link className="categoria-imagen" onClick={() => buscarCategoria("Navidad")}>
//                         <img src="https://static.onecms.io/wp-content/uploads/sites/21/2020/12/10/GettyImages-1159390595-2000.jpg" alt="Sesion de fotos navideña" />
//                         <h5> Sesion de fotos navideña </h5>
//                         <p> Posando con la familia </p>
//                     </Link>
//                     <Link className="categoria-imagen" onClick={() => buscarCategoria("Nuevos comienzos 2024")}>
//                         <img src="https://wallpapers.com/images/featured/4k-ocean-ia6qs8dhowpjrzgj.jpg" alt="Informe de Unsplash" />
//                         <h5> Descubre lo que vendra en 2024 </h5>
//                         <p> Informe de Unsplash </p>
//                     </Link>
//                     <Link className="categoria-imagen" onClick={() => buscarCategoria("Decoracion hogar")}>
//                         <img src="https://e6oe5g5k44d.exactdn.com/wp-content/uploads/2020/03/dise%C3%B1o-de-interiores.jpg?strip=all&lossy=1&ssl=1" alt="Decoracion para tu hogar" />
//                         <h5> Decoracion para tu hogar </h5>
//                         <p> POV: te sientes acogido </p>
//                     </Link>
//                     <Link className="categoria-imagen" onClick={() => buscarCategoria("Decoracion Navidena")}>
//                         <img src="https://noticias.bidcom.com.ar/wp-content/uploads/2022/12/decoracion-navidad.jpg" alt="Decoracion Navidena" />
//                         <h5> Decoracion Navidena </h5>
//                         <p> Para tu hogar </p>
//                     </Link>
//                     <Link className="categoria-imagen" onClick={() => buscarCategoria("Destinos de nieve")}>
//                         <img src="https://www.canr.msu.edu/contentAsset/image/6898d064-63c6-4ab5-9366-b9ce84cfd406/fileAsset/filter/Resize,Jpeg/resize_w/750/jpeg_q/80" alt="Mejores destinos con nieve" />
//                         <h5> Mejores destinos con nieve </h5>
//                         <p> POV: queres irte de vacaciones </p>
//                     </Link>
//                 </div> */}
//                 <div className="contenedor-categorias">
//                     {Categorias.map((item, key) => (
//                         <Link key={key} className="categoria-imagen" onClick={() => buscarCategoria(item)}>
//                             <img src={item.imagen} alt="Postres" />
//                             <h5> {item.titulo} </h5>
//                             <p> {item.descripcion} </p>
//                         </Link>
//                     ))}
//                 </div>
//             </div>

//             {selectCategory ? (
//                 <>
//                     <ExplorationSelected />
//                     <BodyPinterest />
//                 </>
//             ) : (
//                 null
//             )}

//         </div>
//     );
// }


// {/* <ExplorationSelected /> */ }

import { useEffect, useState } from "react";
import "./ExplorationPinterest.scss";
import { storeZustand } from "../../zustand.jsx";
import { Link } from "react-router-dom";
import BodyPinterest from "../BodyPinterest/BodyPinterest.jsx";
import Categorias from "../../JSON/Categorias.json"
import ExplorationPinterestSkeleton from "../Skeletons/ExplorationPinterestSkeleton.jsx";
import CategoryDesktop from "../CategoryPinterest/CategoryDesktop.jsx";

export default function ExplorationPinterest() {
    const { currentDate, setBusqueda, infoCategoria, setInfoCategoria } = storeZustand()
    const [selectCategory, setSelectCateogory] = useState(false)
    const [skeleton, setSkeleton] = useState(false)

    const buscarCategoria = (value) => {
        setBusqueda(value.busqueda)
        setSelectCateogory(true)
        setInfoCategoria(
            {
                titulo: value.titulo,
                descripcion: value.descripcion,
                imagen: value.imagen,
                detalle: value.detalle
            }
        )
        console.log(infoCategoria);
    }

    useEffect(() => {
        setTimeout(() => {
            setSkeleton(true)
        }, 300);
    }, [skeleton])

    return (
        <div className="exploration">

            {skeleton ? (
                <div className="contenedor-cat" style={{ display: selectCategory ? "none" : "block" }}>
                    <div className="titulo">
                        <p> {currentDate} </p>
                        <h2>Sigue inspirándote</h2>
                    </div>
                    <div className="contenedor-categorias">
                        {Categorias.map((item, key) => (
                            <Link key={key} className="categoria-imagen" onClick={() => buscarCategoria(item)}>
                                <img src={item.imagen} alt="Postres" />
                                <h5> {item.titulo} </h5>
                                <p> {item.descripcion} </p>
                            </Link>
                        ))}
                    </div>
                </div>
            ) : (
                <ExplorationPinterestSkeleton />
            )}

            {selectCategory ? (
                <>
                    <CategoryDesktop />
                    <BodyPinterest />
                </>
            ) : (
                null
            )}

        </div>
    );
}