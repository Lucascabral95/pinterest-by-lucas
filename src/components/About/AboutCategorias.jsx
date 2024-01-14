// import "./About.scss"
// import { FaPlus } from "react-icons/fa6";
// import { useState } from "react";

// export default function AboutCategorias() {
//     const [activeModal, setActiveModal] = useState({
//         introduccion: false,
//         ideas: false,
//         pin: false,
//         perfil: false,
//         dispositivo: false,
//         herramientas: false,
//     })

//     const activadorDeModal = (id) => {
//         const newActiveModal = { ...activeModal };
//         for (const key in newActiveModal) {
//             if (id === 1 && key === 'introduccion') {
//                 newActiveModal[key] = !newActiveModal[key];
//             } else if (id === 2 && key === 'ideas') {
//                 newActiveModal[key] = !newActiveModal[key];
//             } else if (id === 3 && key === 'pin') {
//                 newActiveModal[key] = !newActiveModal[key];
//             } else if (id === 4 && key === 'perfil') {
//                 newActiveModal[key] = !newActiveModal[key];
//             } else if (id === 5 && key === 'dispositivo') {
//                 newActiveModal[key] = !newActiveModal[key];
//             } else if (id === 6 && key === 'herramientas') {
//                 newActiveModal[key] = !newActiveModal[key];
//             }
//         }
//         setActiveModal(newActiveModal);
//     };

//     return (
//         <div className="about">
//             <div className="cuerpo-about">

//                 <div className="otros-articulos">
//                     <div className="titulo-articulos">
//                         <h3 className="titulo"> Otros articulos </h3>
//                     </div>
//                     <div className="articulos-secciones">
//                         <div className="contenedor-articulos">
//                             <p className="subtitulo" style={{ fontWeight: activadorDeModal.introduccion ? 700 : 500 }}> Introduccion a Pinterest </p>
//                             <div onClick={() => activadorDeModal(1)} className="contenedor-icon">
//                                 <FaPlus size={24} color="#004BA9" />
//                             </div>
//                         </div>
//                         <div className="contenedor-relleno" style={{ display: activeModal.introduccion ? "block" : "none" }}>
//                             <p className="relleno" style={{ textDecoration: "underline" }} >Todo acerca de Pinterest</p>
//                             <p className="relleno">Obten una cuenta de Pinterest</p>
//                             <p className="relleno">Tipos de Pines en Pinterest</p>
//                         </div>
//                         <hr color="#004BA9" />
//                         <div className="contenedor-articulos">
//                             <p className="subtitulo" style={{ fontWeight: activadorDeModal.ideas ? 700 : 500 }}> Descubre ideas </p>
//                             <div onClick={() => activadorDeModal(2)} className="contenedor-icon">
//                                 <FaPlus size={24} color="#004BA9" />
//                             </div>
//                         </div>
//                         <div className="contenedor-relleno" style={{ display: activeModal.ideas ? "block" : "none" }}>
//                             <p className="relleno">Descubre ideas en Pinterest</p>
//                             <p className="relleno">Explora el feed de inicio</p>
//                             <p className="relleno">Buscar ideas en Pinterest</p>
//                             <p className="relleno">Shuffles</p>
//                         </div>
//                         <hr color="#004BA9" />
//                         <div className="contenedor-articulos">
//                             <p className="subtitulo" style={{ fontWeight: activadorDeModal.pin ? 700 : 500 }}> Interactua con un Pin </p>
//                             <div onClick={() => activadorDeModal(3)} className="contenedor-icon">
//                                 <FaPlus size={24} color="#004BA9" />
//                             </div>
//                         </div>
//                         <div className="contenedor-relleno" style={{ display: activeModal.pin ? "block" : "none" }}>
//                             <p className="relleno">Reacciones</p>
//                             <p className="relleno">Agregar o administrar comentarios en un Pin</p>
//                             <p className="relleno">Interactua con los Pines</p>
//                         </div>
//                         <hr color="#004BA9" />
//                         <div className="contenedor-articulos">
//                             <p className="subtitulo" style={{ fontWeight: activadorDeModal.perfil ? 700 : 500 }}> Configura tu perfil </p>
//                             <div onClick={() => activadorDeModal(4)} className="contenedor-icon">
//                                 <FaPlus size={24} color="#004BA9" />
//                             </div>
//                         </div>
//                         <div className="contenedor-relleno" style={{ display: activeModal.perfil ? "block" : "none" }}>
//                             <p className="relleno" style={{ textDecoration: "underline" }} >Encuentra tu perfil</p>
//                             <p className="relleno">Modifica tu perfil</p>
//                             <p className="relleno">Haz que tu perfil sea privado o publico</p>
//                         </div>
//                         <hr color="#004BA9" />
//                         <div className="contenedor-articulos">
//                             <p className="subtitulo" style={{ fontWeight: activadorDeModal.dispositivo ? 700 : 500 }}> Pinterest y tu dispositivo </p>
//                             <div onClick={() => activadorDeModal(5)} className="contenedor-icon">
//                                 <FaPlus size={24} color="#004BA9" />
//                             </div>
//                         </div>
//                         <div className="contenedor-relleno" style={{ display: activeModal.dispositivo ? "block" : "none" }}>
//                             <p className="relleno">Actualizar la aplicacion de Pinterest</p>
//                             <p className="relleno">Agrega un widget de Pinterest</p>
//                             <p className="relleno">Activar un lector de pantalla para Pinterest</p>
//                             <p className="relleno">Pinterest Lite</p>
//                             <p className="relleno">Modo noche</p>
//                             <p className="relleno">Concede las autorizaciones en Android</p>
//                             <p className="relleno">Concede las autorizaciones en IOS</p>
//                             <p className="relleno">Dirigido a App Store, Play Store o Amazon</p>
//                         </div>
//                         <hr color="#004BA9" />
//                         <div className="contenedor-articulos">
//                             <p className="subtitulo" style={{ fontWeight: activadorDeModal.herramientas ? 700 : 500 }}> Funciones y herramientas </p>
//                             <div onClick={() => activadorDeModal(6)} className="contenedor-icon">
//                                 <FaPlus size={24} color="#004BA9" />
//                             </div>
//                         </div>
//                         <div className="contenedor-relleno" style={{ display: activeModal.herramientas ? "block" : "none" }}>
//                             <p className="relleno">Administra la configuracion de reproduccion automatica</p>
//                             <p className="relleno">Comprar mediante Pines de productos</p>
//                             <p className="relleno">Administrar tu lista de compras</p>
//                             <p className="relleno">Usar la funcion de Prueba</p>
//                             <p className="relleno">Tableros secretos</p>
//                             <p className="relleno">Tu informe Pinterest Predicts </p>
//                         </div>
//                         <hr color="#004BA9" />
//                     </div>
//                 </div>

//             </div>
//         </div>
//     )
// }




import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { useState } from 'react';
import "./About.scss"

const TuComponente = () => {
    const [activeModal, setActiveModal] = useState({
        introduccion: false,
        ideas: false,
        pin: false,
        perfil: false,
        dispositivo: false,
        herramientas: false,
    })

    const activadorDeModal = (id) => {
        const newActiveModal = { ...activeModal };
        for (const key in newActiveModal) {
            if (id === 1 && key === 'introduccion') {
                newActiveModal[key] = !newActiveModal[key];
            } else if (id === 2 && key === 'ideas') {
                newActiveModal[key] = !newActiveModal[key];
            } else if (id === 3 && key === 'pin') {
                newActiveModal[key] = !newActiveModal[key];
            } else if (id === 4 && key === 'perfil') {
                newActiveModal[key] = !newActiveModal[key];
            } else if (id === 5 && key === 'dispositivo') {
                newActiveModal[key] = !newActiveModal[key];
            } else if (id === 6 && key === 'herramientas') {
                newActiveModal[key] = !newActiveModal[key];
            }
        }
        setActiveModal(newActiveModal);
    };

    return (
        <div className="about">
            <div className="cuerpo-about">

                <div className="otros-articulos">
                    <div className="titulo-articulos">
                        <h3 className="titulo"> Otros articulos </h3>
                    </div>
                    <div className="articulos-secciones">
                        <div className="contenedor-articulos">
                            <p className="subtitulo" style={{ fontWeight: activadorDeModal.introduccion ? 700 : 500 }}> Introduccion a Pinterest </p>
                            <div onClick={() => activadorDeModal(1)} className="contenedor-icon">
                                <FaPlus size={24} color="#004BA9" />
                            </div>
                        </div>
                        <div className="contenedor-relleno" style={{ display: activeModal.introduccion ? "block" : "none" }}>
                            <p className="relleno" style={{ textDecoration: "underline" }} >Todo acerca de Pinterest</p>
                            <p className="relleno">Obten una cuenta de Pinterest</p>
                            <p className="relleno">Tipos de Pines en Pinterest</p>
                        </div>
                        <hr color="#004BA9" />
                        <div className="contenedor-articulos">
                            <p className="subtitulo" style={{ fontWeight: activadorDeModal.ideas ? 700 : 500 }}> Descubre ideas </p>
                            <div onClick={() => activadorDeModal(2)} className="contenedor-icon">
                                <FaPlus size={24} color="#004BA9" />
                            </div>
                        </div>
                        <div className="contenedor-relleno" style={{ display: activeModal.ideas ? "block" : "none" }}>
                            <p className="relleno">Descubre ideas en Pinterest</p>
                            <p className="relleno">Explora el feed de inicio</p>
                            <p className="relleno">Buscar ideas en Pinterest</p>
                            <p className="relleno">Shuffles</p>
                        </div>
                        <hr color="#004BA9" />
                        <div className="contenedor-articulos">
                            <p className="subtitulo" style={{ fontWeight: activadorDeModal.pin ? 700 : 500 }}> Interactua con un Pin </p>
                            <div onClick={() => activadorDeModal(3)} className="contenedor-icon">
                                <FaPlus size={24} color="#004BA9" />
                            </div>
                        </div>
                        <div className="contenedor-relleno" style={{ display: activeModal.pin ? "block" : "none" }}>
                            <p className="relleno">Reacciones</p>
                            <p className="relleno">Agregar o administrar comentarios en un Pin</p>
                            <p className="relleno">Interactua con los Pines</p>
                        </div>
                        <hr color="#004BA9" />
                        <div className="contenedor-articulos">
                            <p className="subtitulo" style={{ fontWeight: activadorDeModal.perfil ? 700 : 500 }}> Configura tu perfil </p>
                            <div onClick={() => activadorDeModal(4)} className="contenedor-icon">
                                <FaPlus size={24} color="#004BA9" />
                            </div>
                        </div>
                        <div className="contenedor-relleno" style={{ display: activeModal.perfil ? "block" : "none" }}>
                            <p className="relleno" style={{ textDecoration: "underline" }} >Encuentra tu perfil</p>
                            <p className="relleno">Modifica tu perfil</p>
                            <p className="relleno">Haz que tu perfil sea privado o publico</p>
                        </div>
                        <hr color="#004BA9" />
                        <div className="contenedor-articulos">
                            <p className="subtitulo" style={{ fontWeight: activadorDeModal.dispositivo ? 700 : 500 }}> Pinterest y tu dispositivo </p>
                            <div onClick={() => activadorDeModal(5)} className="contenedor-icon">
                                <FaPlus size={24} color="#004BA9" />
                            </div>
                        </div>
                        <div className="contenedor-relleno" style={{ display: activeModal.dispositivo ? "block" : "none" }}>
                            <p className="relleno">Actualizar la aplicacion de Pinterest</p>
                            <p className="relleno">Agrega un widget de Pinterest</p>
                            <p className="relleno">Activar un lector de pantalla para Pinterest</p>
                            <p className="relleno">Pinterest Lite</p>
                            <p className="relleno">Modo noche</p>
                            <p className="relleno">Concede las autorizaciones en Android</p>
                            <p className="relleno">Concede las autorizaciones en IOS</p>
                            <p className="relleno">Dirigido a App Store, Play Store o Amazon</p>
                        </div>
                        <hr color="#004BA9" />
                        <div className="contenedor-articulos">
                            <p className="subtitulo" style={{ fontWeight: activadorDeModal.herramientas ? 700 : 500 }}> Funciones y herramientas </p>
                            <div onClick={() => activadorDeModal(6)} className="contenedor-icon">
                                <FaPlus size={24} color="#004BA9" />
                            </div>
                        </div>
                        <div className="contenedor-relleno" style={{ display: activeModal.herramientas ? "block" : "none" }}>
                            <p className="relleno">Administra la configuracion de reproduccion automatica</p>
                            <p className="relleno">Comprar mediante Pines de productos</p>
                            <p className="relleno">Administrar tu lista de compras</p>
                            <p className="relleno">Usar la funcion de Prueba</p>
                            <p className="relleno">Tableros secretos</p>
                            <p className="relleno">Tu informe Pinterest Predicts </p>
                        </div>
                        <hr color="#004BA9" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TuComponente;


