import React from "react";
import "./Perfil.scss";
import { useState, useEffect } from "react";
import { storeZustand } from "../../zustand.jsx";
import { toast, ToastContainer } from 'react-toastify';
import { Link } from "react-router-dom";

export default function Profile() {
    const { imagenesLocalStorage, setImagenesLocalStorage, datosPerfil } = storeZustand();
    const [datosIncompletos, setDatosIncompletos] = useState(true)

    const eliminarImagen = (value) => {
        const findImageIndex = imagenesLocalStorage.findIndex((i) => i.url === value);

        if (findImageIndex !== -1) {
            const imagenesActualizadas = [
                ...imagenesLocalStorage.slice(0, findImageIndex),
                ...imagenesLocalStorage.slice(findImageIndex + 1),
            ];

            localStorage.setItem("imagenes", JSON.stringify(imagenesActualizadas));
            setImagenesLocalStorage(imagenesActualizadas);
            toast.success("Imagen eliminada de favoritos.");
        }
    };

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
                    {/* <img src="/img/veronica-2.jpg" alt="Foto de perfil" /> */}
                    <img src={datosPerfil.link} alt="Foto de perfil" />
                </div>
                <strong> {datosPerfil.nombre} {datosPerfil.apellido} </strong>
                <div className="logo-count-user">
                    <img src="/img/logo-pinterest.png" alt="Logo de Pinterest" />
                    <p> {datosPerfil.userName} </p>
                </div>
                <div className="contenedor-botones">
                    <Link to={"/configuration"} title="Compartir" className="btn"> Compartir </Link>
                    <Link to={"/configuration"} title="Editar perfil" className="btn"> Editar perfil </Link>
                </div>
                <div className="guardados">
                    <p> Guardados </p>
                </div>
            </div>

            <div className="completar" >
                {/* <p className="texto" style={{ display: datosIncompletos ? "none" : "flex" }}> Para ver tus datos, completalos </p> */}
                <Link className="btn btn-danger link" to={"/configuration"} style={{ display: datosIncompletos ? "none" : "flex" }}> Completa tus datos </Link>
            </div>

            <div className="contenedor-imagenes-guardadas">
                <div className="imagenes">
                    {imagenesLocalStorage.length > 0 ? (
                        imagenesLocalStorage.map((item, key) => (
                            <div key={key} className="imagenes-img">
                                <img src={item.url} alt={item.alt} />
                                <span className="boton" onClick={() => eliminarImagen(item.url)}>
                                    Eliminar
                                </span>
                            </div>
                        ))
                    ) : (
                        <p>No hay imágenes disponibles</p>
                    )}
                </div>
            </div>

            <ToastContainer autoClose={1200} />

        </div>
    );
}
