// import React from "react";
// import "./Perfil.scss";
// import { useState, useEffect } from "react";
// import { storeZustand } from "../../zustand.jsx";
// import { toast, ToastContainer } from 'react-toastify';
// import { Link } from "react-router-dom";
// import ImagenesFavoritas from "../ImagenesFavoritas/ImagenesFavoritas.jsx";
// import axios from "axios";

// export default function Profile() {
//     const { imagenesLocalStorage, setImagenesLocalStorage, datosPerfil } = storeZustand();
//     const [datosIncompletos, setDatosIncompletos] = useState(true)

//     // const eliminarImagen = (value) => {
//     //     const findImageIndex = imagenesLocalStorage.findIndex((i) => i.url === value);

//     //     if (findImageIndex !== -1) {
//     //         const imagenesActualizadas = [
//     //             ...imagenesLocalStorage.slice(0, findImageIndex),
//     //             ...imagenesLocalStorage.slice(findImageIndex + 1),
//     //         ];

//     //         localStorage.setItem("imagenes", JSON.stringify(imagenesActualizadas));
//     //         setImagenesLocalStorage(imagenesActualizadas);
//     //         toast.success("Imagen eliminada de favoritos.");
//     //     }
//     // };

//     const tieneDatos = datosPerfil.nombre ? true : false

//     useEffect(() => {
//         if (!tieneDatos) {
//             setDatosIncompletos(false)
//         }
//     }, [datosIncompletos])

//     console.log(datosPerfil);

//     return (
//         <div className="perfil">

//             <div className="contenedor-datos" style={{ opacity: datosIncompletos ? "1" : "0.7", filter: datosIncompletos ? null : "blur(5px)" }}>
//                 <div className="contenedor-img">
//                     {/* <img src="/img/veronica-2.jpg" alt="Foto de perfil" /> */}
//                     <img src={datosPerfil.link} alt="Foto de perfil" />
//                 </div>
//                 <strong> {datosPerfil.nombre} {datosPerfil.apellido} </strong>
//                 <div className="logo-count-user">
//                     <img src="/img/logo-pinterest.png" alt="Logo de Pinterest" />
//                     <p> {datosPerfil.userName} </p>
//                 </div>
//                 <div className="contenedor-botones">
//                     {/* <Link to={"/configuration"} title="Compartir" className="btn"> Compartir </Link> */}
//                     <Link to={"/favoritas"} title="Compartir" className="btn"> Fotos favoritas </Link>
//                     <Link to={"/configuration"} title="Editar perfil" className="btn"> Editar perfil </Link>
//                 </div>
//                 <div className="guardados">
//                     {/* <p> Guardados </p> */}
//                     <p> Info </p>
//                 </div>
//             </div>

//             <div className="completar" >
//                 <Link className="btn btn-danger link" to={"/configuration"} style={{ display: datosIncompletos ? "none" : "flex" }}> Completa tus datos </Link>
//             </div>

//             {/* <div className="contenedor-imagenes-guardadas">
//                 <div className="imagenes">
//                     {imagenesLocalStorage.length > 0 ? (
//                         imagenesLocalStorage.map((item, key) => (
//                             <div key={key} className="imagenes-img">
//                                 <img src={item.url} alt={item.alt} />
//                                 <span className="boton" onClick={() => eliminarImagen(item.url)}>
//                                     Eliminar
//                                 </span>
//                             </div>
//                         ))
//                     ) : (
//                         <p>No hay imágenes disponibles</p>
//                     )}
//                 </div>
//             </div> */}

//             {/* <ImagenesFavoritas /> */}

//             {datosPerfil.nombre != undefined ? (
//                 <div className="contenedor-de-info">
//                     <div className="border border-2 shadow  datos-personaless">
//                         <h1 className="title"> Informacion personal </h1>
//                         <div className="form-group">
//                             <div className="full-name">
//                                 <div className="names">
//                                     <span> Nombre(s) </span>
//                                     <input type="text" value={datosPerfil.nombre} className="form-control" />
//                                 </div>
//                                 <div className="names">
//                                     <span> Apellido(s) </span>
//                                     <input type="text" value={datosPerfil.nombre} className="form-control" />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="form-group">
//                             <span> Informacion </span>
//                             <textarea type="text"
//                                 name="Informacion"
//                                 className="form-control"
//                                 value={datosPerfil.informacion}
//                             >
//                             </textarea>
//                         </div>
//                         <div className="form-group">
//                             <span> Edad </span>
//                             <input type="number" value={"28"} className="form-control" />
//                         </div>
//                         <div className="form-group">
//                             <span> Pronombres identificativos</span>
//                             <input type="text" value={datosPerfil.pronombres} className="form-control" />
//                         </div>
//                         <div className="form-group">
//                             <span> Website</span>
//                             <input type="text" value={datosPerfil.website} className="form-control" />
//                         </div>
//                         <div className="form-group">
//                             <span> Nombre de usuario</span>
//                             <input type="text" value={datosPerfil.userName} className="form-control" />
//                         </div>
//                     </div>

//                     <div className="border border-2 shadow  datos-personaless">
//                         <h1 className="title"> Datos de contacto </h1>
//                         <div className="form-group">
//                             <div className="full-name">
//                                 <div className="names">
//                                     <span> Pronvicia </span>
//                                     <input type="text" value={"Buenos Aires"} className="form-control" />
//                                 </div>
//                                 <div className="names">
//                                     <span> Localidad </span>
//                                     <input type="text" value={"General Pacheco"} className="form-control" />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="form-group">
//                             <div className="full-name">
//                                 <div className="names">
//                                     <span> Calle </span>
//                                     <input type="text" value={"Gorritis"} className="form-control" />
//                                 </div>
//                                 <div className="names">
//                                     <span> Altura </span>
//                                     <input type="number" value={"323"} className="form-control" />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="form-group">
//                             <div className="full-name">
//                                 <div className="names">
//                                     <span> Numero de Celular </span>
//                                     <input type="text" value={"11-2243-1310"} className="form-control" />
//                                 </div>
//                                 <div className="names">
//                                     <span> Numero de telefono </span>
//                                     <input type="text" value={"3322-4422"} className="form-control" />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="form-group">
//                             <span> Codigo postal</span>
//                             <input type="text" value={"1618"} className="form-control" />
//                         </div>
//                         <div className="form-group">
//                             <span> Email</span>
//                             <input type="text" value={"Lucas@hotmail.com"} className="form-control" />
//                         </div>
//                         <div className="form-group">
//                             <span> Website</span>
//                             <input type="text" value={datosPerfil.website} className="form-control" />
//                         </div>
//                     </div>
//                 </div>
//             ) : (
//                 null
//             )}

//             <ToastContainer autoClose={1200} />

//         </div>
//     );
// }


import React from "react";
import "./Perfil.scss";
import { useState, useEffect } from "react";
import { storeZustand } from "../../zustand.jsx";
import { ToastContainer } from 'react-toastify';
import { Link } from "react-router-dom";

export default function Profile() {
    const { datosPerfil } = storeZustand();
    const [datosIncompletos, setDatosIncompletos] = useState(true)

    const tieneDatos = datosPerfil.nombre ? true : false

    useEffect(() => {
        if (!tieneDatos) {
            setDatosIncompletos(false)
        }
    }, [datosIncompletos])

    console.log(datosPerfil);

    return (
        <div className="perfil">

            <div className="contenedor-datos" style={{ opacity: datosIncompletos ? "1" : "0.7", filter: datosIncompletos ? null : "blur(5px)" }}>
                <div className="contenedor-img">
                    <img src={datosPerfil.link} alt="Foto de perfil" />
                </div>
                <strong> {datosPerfil.nombre} {datosPerfil.apellido} </strong>
                <div className="logo-count-user">
                    <img src="/img/logo-pinterest.png" alt="Logo de Pinterest" />
                    <p> {datosPerfil.userName} </p>
                </div>
                <div className="contenedor-botones">
                    <Link to={"/favoritas"} title="Compartir" className="btn"> Fotos favoritas </Link>
                    <Link to={"/configuration"} title="Editar perfil" className="btn"> Editar perfil </Link>
                    <Link to={"/empresa"} title="Editar perfil" className="btn"> Empresa </Link>
                </div>
                <div className="guardados">
                    <p> Info </p>
                </div>
            </div>

            <div className="completar" >
                <Link className="btn btn-danger link" to={"/configuration"} style={{ display: datosIncompletos ? "none" : "flex" }}> Completa tus datos </Link>
            </div>

            {datosPerfil.nombre != undefined ? (
                <div className="contenedor-de-info">
                    <div className="border border-2 shadow  datos-personaless">
                        <h1 className="title"> Informacion personal </h1>
                        <div className="form-group">
                            <div className="full-name">
                                <div className="names">
                                    <span> Nombre(s) </span>
                                    <input type="text" value={datosPerfil.nombre} className="form-control" />
                                </div>
                                <div className="names">
                                    <span> Apellido(s) </span>
                                    <input type="text" value={datosPerfil.nombre} className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <span> Informacion </span>
                            <textarea type="text"
                                name="Informacion"
                                className="form-control"
                                value={datosPerfil.informacion}
                            >
                            </textarea>
                        </div>
                        <div className="form-group">
                            <span> Edad </span>
                            <input type="number" value={"28"} className="form-control" />
                        </div>
                        <div className="form-group">
                            <span> Pronombres identificativos</span>
                            <input type="text" value={datosPerfil.pronombres} className="form-control" />
                        </div>
                        <div className="form-group">
                            <span> Website</span>
                            <input type="text" value={datosPerfil.website} className="form-control" />
                        </div>
                        <div className="form-group">
                            <span> Nombre de usuario</span>
                            <input type="text" value={datosPerfil.userName} className="form-control" />
                        </div>
                    </div>

                    <div className="border border-2 shadow  datos-personaless">
                        <h1 className="title"> Datos de contacto </h1>
                        <div className="form-group">
                            <div className="full-name">
                                <div className="names">
                                    <span> Pais </span>
                                    <input type="text" value={datosPerfil.pais} className="form-control" />
                                </div>
                                <div className="names">
                                    <span> Provincia </span>
                                    <input type="text" value={datosPerfil.provincia} className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="full-name">
                                <div className="names">
                                    <span> Partido </span>
                                    <input type="text" value={datosPerfil.partido} className="form-control" />
                                </div>
                                <div className="names">
                                    <span> Localidad </span>
                                    <input type="text" value={datosPerfil.localidad} className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="full-name">
                                <div className="names">
                                    <span> Calle </span>
                                    <input type="text" value={datosPerfil.calle} className="form-control" />
                                </div>
                                <div className="names">
                                    <span> Altura </span>
                                    <input type="number" value={datosPerfil.altura} className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="full-name">
                                <div className="names">
                                    <span> Numero de Celular </span>
                                    <input type="text" value={datosPerfil.celular} className="form-control" />
                                </div>
                                <div className="names">
                                    <span> Numero de telefono </span>
                                    <input type="text" value={datosPerfil.telefono} className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <span> Codigo postal</span>
                            <input type="text" value={datosPerfil.postal} className="form-control" />
                        </div>
                        <div className="form-group">
                            <span> Email</span>
                            <input type="text" value={datosPerfil.email} className="form-control" />
                        </div>
                    </div>
                </div>
            ) : (
                null
            )}

            <ToastContainer autoClose={400} />

        </div>
    );
}


