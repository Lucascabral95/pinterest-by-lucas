// import "./ImagenPinterest.scss"
// import { useParams } from "react-router-dom"
// import { Link } from "react-router-dom"
// import { storeZustand } from "../../zustand.jsx"
// import moment from "moment"
// import { MdOutlineDescription } from "react-icons/md";
// import { useState } from "react"

// export default function ImagenPinterest() {
//     const { id } = useParams()
//     const { infoCurrentPhoto, infoCurrentPhoto2 } = storeZustand()
//     const [popover, setPopover] = useState(false)

//     const countInstagram = `http://instagram.com/${infoCurrentPhoto[0]?.countInstagram}`

//     const redirigirInstagram = () => {
//         window.open(countInstagram, '_blank');
//     }

//     const countUserUnsplash = () => {
//         window.open(infoCurrentPhoto[0]?.countUnsplash)
//     }

//     const toGoPhoto = () => {
//         window.open(infoCurrentPhoto[0]?.urls, "_blank")
//     }

//     // const inArrow = () => {
//     //     setPopover(true)
//     // }

//     // const outArrow = () => {
//     //     setPopover(false)
//     // }

//     const fechaFormateada = moment(infoCurrentPhoto[0]?.created_at).format('MMMM Do YYYY');

//     const imagenSeleccionada = JSON.parse(localStorage.getItem("imagenSeleccionada"))
//     // console.log(imagenSeleccionada.alt);

//     return (
//         <div className="imagen-pinterest">

//             <div className="contenedor-ruta">
//                 <div className="back" >
//                     <Link to={"/pin"} className="svg-back">
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
//                             <path d="M8.415 4.586a2 2 0 1 1 2.828 2.828L8.657 10H21a2 2 0 0 1 0 4H8.657l2.586 2.586a2 2 0 1 1-2.828 2.828L1 12l7.415-7.414z" fill="black">
//                             </path>
//                         </svg>
//                     </Link>
//                     <div className="texto">
//                         <p>Para ti </p>
//                     </div>
//                 </div>

//                 <div className="contenedor-padre">

//                     <div className="contenedora-info-user">
//                         <div className="cont">
//                             <div className="img-user">
//                                 <div className="img-img" onClick={countUserUnsplash} >
//                                     <img src={infoCurrentPhoto[0].profileImage} alt="Foto del usuario" />
//                                 </div>
//                                 <div className="textos">
//                                     <p className="texto-user"> {infoCurrentPhoto[0]?.fullName} </p>
//                                     <div className="cuenta-instagram" onClick={redirigirInstagram}>
//                                         <img className="imagen-instagram" src="/img/logo-instagram.png" alt="" />
//                                         <span className="texto-instagram"> {infoCurrentPhoto[0]?.countInstagram} </span>
//                                     </div>
//                                 </div>
//                             </div>
//                             {/* <div onMouseEnter={inArrow} onMouseLeave={outArrow} className="shadow-sm rounded boton"> */}
//                             <div className="shadow-sm rounded boton">
//                                 <div className="icon" >
//                                     <svg className="icon-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
//                                         <path d="m19.35 11.625-5.85 5.4V1.5h-3v15.525l-5.85-5.4-2.025 2.25L12 22.425l9.375-8.55-2.025-2.25Z" fill="#666666">
//                                         </path>
//                                     </svg>
//                                     {popover ? (
//                                         <div className="popover">
//                                             <p className="popover-texto"> Guardar imagen </p>
//                                         </div>
//                                     ) : (
//                                         null
//                                     )}
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="foto-buscada" onClick={toGoPhoto}>
//                             <img src={infoCurrentPhoto[0]?.urls} alt="Foto seleccionada" />
//                         </div>

//                         <div className="container-image">
//                             <div className="seccion-texto">
//                                 <div className="texto">
//                                     <p className="texto-1"> Visualizaciones </p>
//                                     <p className="texto-2"> {infoCurrentPhoto[0]?.views} </p>
//                                 </div>
//                                 <div className="texto">
//                                     <p className="texto-1"> Descargas</p>
//                                     <p className="texto-2"> {infoCurrentPhoto[0]?.downloads} </p>
//                                 </div>
//                                 <div className="texto">
//                                     <p className="texto-1"> Presentado en  </p>
//                                     <p className="texto-2">Editorial</p>
//                                 </div>
//                             </div>
//                             <div className="seccion-info">

//                                 {infoCurrentPhoto[0].description === "No data" ? (
//                                     null
//                                 ) : (
//                                     <div className="info" >
//                                         <div>
//                                             <MdOutlineDescription size={16} color="#666666" />
//                                         </div>
//                                         <p style={{ position: "relative", top: "4px" }}> Descripcion: {infoCurrentPhoto[0]?.description} </p>
//                                     </div>
//                                 )}

//                                 <div className="info" >
//                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
//                                         <path
//                                             d="M21.424 4.594c-2.101-2.125-5.603-2.125-7.804 0l-1.601 1.619-1.601-1.62c-2.101-2.124-5.603-2.124-7.804 0-2.202 2.126-2.102 5.668 0 7.894L12.019 22l9.405-9.513a5.73 5.73 0 0 0 0-7.893Z" fill="#666666">
//                                         </path>
//                                     </svg>
//                                     <p> Likes: {infoCurrentPhoto[0]?.likes} </p>
//                                 </div>
//                                 <div className="info">
//                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
//                                         <path
//                                             d="M17.6 4.2C16 2.7 14.1 2 12 2s-4 .7-5.6 2.2C4.8 5.7 4 7.7 4 10.2c0 1.7.7 3.5 2 5.4 1.3 2 3.3 4.1 6 6.4 2.7-2.3 4.7-4.4 6-6.4 1.3-2 2-3.8 2-5.4 0-2.5-.8-4.5-2.4-6zm-1.1 10.1c-1 1.5-2.5 3.2-4.5 5.1-2-1.9-3.5-3.6-4.5-5.1-1-1.5-1.5-2.9-1.5-4.1 0-1.8.6-3.3 1.7-4.5C8.9 4.6 10.3 4 12 4s3.1.6 4.3 1.7c1.2 1.2 1.7 2.6 1.7 4.5 0 1.2-.5 2.5-1.5 4.1zm-2-4.3c0 1.4-1.1 2.5-2.5 2.5S9.5 11.4 9.5 10s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5z" fill="#666666">
//                                         </path>
//                                     </svg>
//                                     <p> {infoCurrentPhoto[0]?.location}. </p>
//                                 </div>
//                                 <div className="info">
//                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
//                                         <path
//                                             d="M21 6v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h1V2h2v2h8V2h2v2h1c1.1 0 2 .9 2 2zM5 8h14V6H5v2zm14 12V10H5v10h14z" fill="#666666">
//                                         </path>
//                                     </svg>
//                                     <p> Publicado: {fechaFormateada}. </p>
//                                 </div>
//                                 <div className="info">
//                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
//                                         <path
//                                             d="m14.12 4 1.83 2H20v12H4V6h4.05l1.83-2h4.24ZM15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2Zm-3 7c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3Zm0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5Z" fill="#666666">
//                                         </path>
//                                     </svg>
//                                     <p> {infoCurrentPhoto[0]?.photoCamera}. </p>
//                                 </div>
//                                 <div className="info">
//                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
//                                         <path
//                                             d="m10 14.2 6.6-6.6L18 9l-8 8-4-4 1.4-1.4 2.6 2.6ZM21 5v6c0 5.5-3.8 10.7-9 12-5.2-1.3-9-6.5-9-12V5l9-4 9 4Zm-2 1.3-7-3.1-7 3.1V11c0 4.5 3 8.7 7 9.9 4-1.2 7-5.4 7-9.9V6.3Z" fill="#666666">
//                                         </path>
//                                     </svg>
//                                     <p> Uso gratuito bajo <strong>Licencia Unsplash</strong>. </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

import "./ImagenPinterest.scss"
import { useParams, Link, useLocation } from "react-router-dom"
import { storeZustand } from "../../zustand.jsx"
import moment from "moment"
import { MdOutlineDescription } from "react-icons/md";
import { useState, useEffect } from "react"
import { toast, ToastContainer } from 'react-toastify';
export default function ImagenPinterest() {
    const { id } = useParams()
    const { infoCurrentPhoto, setImagenesLocalStorage, imagenesLocalStorage } = storeZustand()
    const [popover, setPopover] = useState(false)

    const countInstagram = `http://instagram.com/${infoCurrentPhoto[0]?.countInstagram}`

    const redirigirInstagram = () => {
        window.open(countInstagram, '_blank');
    }

    const countUserUnsplash = () => {
        window.open(infoCurrentPhoto[0]?.countUnsplash)
    }

    const toGoPhoto = () => {
        window.open(infoCurrentPhoto[0]?.urls, "_blank")
    }

    const inArrow = () => {
        setPopover(true)
    }

    const outArrow = () => {
        setPopover(false)
    }

    const guardarEnFavoritos = (link) => {
        const datosParseados = JSON.parse(localStorage.getItem("imagenes")) || []
        const imagenRepetida = datosParseados.some(i => i.url === link)

        if (imagenRepetida) {
            console.log(`La imagen ya se encuentra en favoritos`);
            toast.error("La imagen ya se encuentra en favoritos.");
        } else {
            datosParseados.push({ url: link })
            localStorage.setItem("imagenes", JSON.stringify(datosParseados))
            setImagenesLocalStorage(datosParseados)
            console.log(`Imagen agregada a favoritos.`);
            toast.success("Imagen agregada a favoritos.");
        }
    }

    const fechaFormateada = moment(infoCurrentPhoto[0]?.created_at).format('MMMM Do YYYY');

    const imagenSeleccionada = JSON.parse(localStorage.getItem("imagenSeleccionada"))

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className="imagen-pinterest">

            <div className="contenedor-ruta">
                <div className="back" >
                    <Link to={"/pin"} className="svg-back">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path d="M8.415 4.586a2 2 0 1 1 2.828 2.828L8.657 10H21a2 2 0 0 1 0 4H8.657l2.586 2.586a2 2 0 1 1-2.828 2.828L1 12l7.415-7.414z" fill="black">
                            </path>
                        </svg>
                    </Link>
                    <div className="texto">
                        <p>Para ti </p>
                    </div>
                </div>

                <div className="contenedor-padre">

                    <div className="contenedora-info-user">
                        <div className="cont">
                            <div className="img-user">
                                <div className="img-img" onClick={countUserUnsplash} >
                                    <img src={imagenSeleccionada.profileImage} alt="Foto del usuario" />
                                </div>
                                <div className="textos">
                                    <p className="texto-user"> {infoCurrentPhoto[0]?.fullName} </p>
                                    <div className="cuenta-instagram" onClick={redirigirInstagram}>
                                        <img className="imagen-instagram" src="/img/logo-instagram.png" alt="" />
                                        <span className="texto-instagram"> {imagenSeleccionada.countInstagram} </span>
                                    </div>
                                </div>
                            </div>
                            <div onMouseEnter={inArrow} onMouseLeave={outArrow} onClick={() => guardarEnFavoritos(imagenSeleccionada.urls)} className="shadow-sm rounded boton">
                                <div className="icon" >
                                    <svg className="icon-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path d="m19.35 11.625-5.85 5.4V1.5h-3v15.525l-5.85-5.4-2.025 2.25L12 22.425l9.375-8.55-2.025-2.25Z" fill="#666666">
                                        </path>
                                    </svg>
                                    {popover ? (
                                        <div className="popover">
                                            <p className="popover-texto"> Guardar imagen </p>
                                        </div>
                                    ) : (
                                        null
                                    )}
                                    <ToastContainer />
                                </div>
                            </div>
                        </div>

                        <div className="foto-buscada" onClick={toGoPhoto}>
                            <img src={imagenSeleccionada.urls} alt="Foto seleccionada" />
                        </div>

                        <div className="container-image">
                            <div className="seccion-texto">
                                <div className="texto">
                                    <p className="texto-1"> Visualizaciones </p>
                                    <p className="texto-2"> {imagenSeleccionada.views} </p>
                                </div>
                                <div className="texto">
                                    <p className="texto-1"> Descargas</p>
                                    <p className="texto-2"> {imagenSeleccionada.downloads} </p>
                                </div>
                                <div className="texto">
                                    <p className="texto-1"> Presentado en  </p>
                                    <p className="texto-2">Editorial</p>
                                </div>
                            </div>
                            <div className="seccion-info">

                                {imagenSeleccionada.description === "No data" ? (
                                    null
                                ) : (
                                    <div className="info" >
                                        <div>
                                            <MdOutlineDescription size={16} color="#666666" />
                                        </div>
                                        <p style={{ position: "relative", top: "4px" }}> Descripcion: {imagenSeleccionada.description} </p>
                                    </div>
                                )}

                                <div className="info" >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                                        <path
                                            d="M21.424 4.594c-2.101-2.125-5.603-2.125-7.804 0l-1.601 1.619-1.601-1.62c-2.101-2.124-5.603-2.124-7.804 0-2.202 2.126-2.102 5.668 0 7.894L12.019 22l9.405-9.513a5.73 5.73 0 0 0 0-7.893Z" fill="#666666">
                                        </path>
                                    </svg>
                                    <p> Likes: {imagenSeleccionada.likes} </p>
                                </div>
                                <div className="info">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                                        <path
                                            d="M17.6 4.2C16 2.7 14.1 2 12 2s-4 .7-5.6 2.2C4.8 5.7 4 7.7 4 10.2c0 1.7.7 3.5 2 5.4 1.3 2 3.3 4.1 6 6.4 2.7-2.3 4.7-4.4 6-6.4 1.3-2 2-3.8 2-5.4 0-2.5-.8-4.5-2.4-6zm-1.1 10.1c-1 1.5-2.5 3.2-4.5 5.1-2-1.9-3.5-3.6-4.5-5.1-1-1.5-1.5-2.9-1.5-4.1 0-1.8.6-3.3 1.7-4.5C8.9 4.6 10.3 4 12 4s3.1.6 4.3 1.7c1.2 1.2 1.7 2.6 1.7 4.5 0 1.2-.5 2.5-1.5 4.1zm-2-4.3c0 1.4-1.1 2.5-2.5 2.5S9.5 11.4 9.5 10s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5z" fill="#666666">
                                        </path>
                                    </svg>
                                    <p> {imagenSeleccionada.location}. </p>
                                </div>
                                <div className="info">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                                        <path
                                            d="M21 6v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h1V2h2v2h8V2h2v2h1c1.1 0 2 .9 2 2zM5 8h14V6H5v2zm14 12V10H5v10h14z" fill="#666666">
                                        </path>
                                    </svg>
                                    <p> Publicado: {fechaFormateada}. </p>
                                </div>
                                <div className="info">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                                        <path
                                            d="m14.12 4 1.83 2H20v12H4V6h4.05l1.83-2h4.24ZM15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2Zm-3 7c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3Zm0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5Z" fill="#666666">
                                        </path>
                                    </svg>
                                    <p> {imagenSeleccionada.photoCamera}. </p>
                                </div>
                                <div className="info">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                                        <path
                                            d="m10 14.2 6.6-6.6L18 9l-8 8-4-4 1.4-1.4 2.6 2.6ZM21 5v6c0 5.5-3.8 10.7-9 12-5.2-1.3-9-6.5-9-12V5l9-4 9 4Zm-2 1.3-7-3.1-7 3.1V11c0 4.5 3 8.7 7 9.9 4-1.2 7-5.4 7-9.9V6.3Z" fill="#666666">
                                        </path>
                                    </svg>
                                    <p> Uso gratuito bajo <strong>Pinterest</strong>. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}