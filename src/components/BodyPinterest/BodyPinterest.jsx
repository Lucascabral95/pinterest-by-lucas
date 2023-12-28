// import React, { useEffect, useState } from "react";
// import { IoSave } from "react-icons/io5";
// import "./BodyPinterest.scss";
// import axios from "axios";
// import { storeZustand } from "../../zustand.jsx";
// import { Link } from "react-router-dom";
// import Skeleton from "react-loading-skeleton";
// import { toast, ToastContainer } from 'react-toastify';

// const accessKey = "IUFSMGKqNNZGzGZxUbHsEgJnQIPq6tcq33QAVqlemPs";

// export default function BodyPinterest() {
//     const [imagen, setImagen] = useState([]);
//     const [noImages, setNoImages] = useState(false);
//     const [loading, setLoading] = useState(true);
//     const { busqueda, setInfoCurrentPhoto, setImagenesLocalStorage, cantidadFotos, cantidadColumnas } = storeZustand();

//     const guardarEnFavoritos = (link) => {
//         const datosParseados = JSON.parse(localStorage.getItem('imagenes')) || [];
//         const imagenRepetida = datosParseados.some(i => i.url === link);

//         if (imagenRepetida) {
//             console.log(`La imagen ya se encuentra en favoritos.`);
//             toast.error("La imagen ya se encuentra en favoritos.");
//         } else {
//             datosParseados.push({ url: link });
//             localStorage.setItem('imagenes', JSON.stringify(datosParseados));
//             setImagenesLocalStorage(datosParseados);
//             console.log(`Imagen agregada a favoritos.`);
//             toast.success("Imagen agregada a favoritos.");
//         }
//     };

//     const handleImageClick = (value) => {
//         setInfoCurrentPhoto([
//             {
//                 urls: value.urls.regular || "No data",
//                 alt: value.alt_description || "No data",
//                 description: value.description || "No data",
//                 downloads: value.downloads || "No data",
//                 views: value.views || "No data",
//                 likes: value.likes || "No data",
//                 location: value.location.name || value.location.city || value.location.country || "No data",
//                 photoCamera: value.exif.name || "No data",
//                 created_at: value.created_at || "No data",
//                 fullName: value.user.name || "No data",
//                 profileImage: value.user.profile_image.medium || "No data",
//                 countInstagram: value.user.instagram_username || "No data",
//                 countUnsplash: value.user.links.html || "No data"
//             },
//         ]);

//         const datos = {
//             urls: value.urls.regular || "No data",
//             alt: value.alt_description || "No data",
//             description: value.description || "No data",
//             downloads: value.downloads || "No data",
//             views: value.views || "No data",
//             likes: value.likes || "No data",
//             location: value.location.name || value.location.city || value.location.country || "No data",
//             photoCamera: value.exif.name || "No data",
//             created_at: value.created_at || "No data",
//             fullName: value.user.name || "No data",
//             profileImage: value.user.profile_image.medium || "No data",
//             countInstagram: value.user.instagram_username || "No data",
//             countUnsplash: value.user.links.html || "No data"
//         }
//         localStorage.setItem("imagenSeleccionada", JSON.stringify(datos))
//     };


//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get(
//                     `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=${cantidadFotos}&query=${busqueda}`
//                 );
//                 setImagen(response.data);
//                 setLoading(false);
//                 console.log(response.data);
//             } catch (error) {
//                 console.error("Error fetching image:", error);
//                 setImagen([]);
//                 setNoImages(true);
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, [busqueda]);

//     return (
//         <div className="container-fluid bodyPinterest">

//             <div className="mb-4 mt-5">
//                 <h2> Busqueda: {busqueda} </h2>
//                 <div className="foto">
//                     {loading ? (
//                         Array.from({ length: cantidadFotos }).map((_, index) => (
//                             <div key={index} className="contenedor-img">
//                                 <Skeleton height={300} />
//                             </div>
//                         ))
//                     ) : (
//                         imagen.map((photo, key) => (
//                             <div key={key} className="contenedor-img">
//                                 <Link to={`/pinterest`} className="img-img" >
//                                     <img src={photo.urls.regular} alt={photo.alt_description} onClick={() => handleImageClick(photo)} />
//                                     <div className="icon" >
//                                         <IoSave size={20} color="black" />
//                                     </div>
//                                     <Link className="boton-guardar" onClick={() => guardarEnFavoritos(photo.urls.regular)} > Guardar </Link>
//                                 </Link>
//                             </div>
//                         ))
//                     )}
//                 </div>

//                 {noImages ? (
//                     <>
//                         <h3 className="text-center mt-3"> Espere a que la API's vuelva a recuperar su cuota, por favor. </h3>
//                         <div className="imagen-espera">
//                             <img src="https://i.pinimg.com/564x/23/96/07/2396070c6522c7d2c6d789a56bd9e4cc.jpg" alt="Imagen de espera" />
//                         </div>
//                     </>
//                 ) : null}

//                 <ToastContainer autoClose={1200} />

//             </div>
//         </div>
//     );
// }


// ---------------------------------------------------------------------------------------------------

// import React, { useEffect, useState } from "react";
// import { IoSave } from "react-icons/io5";
// import "./BodyPinterest.scss";
// import axios from "axios";
// import { storeZustand } from "../../zustand.jsx";
// import { Link } from "react-router-dom";
// import Skeleton from "react-loading-skeleton";
// import { toast, ToastContainer } from 'react-toastify';
// import InfiniteScroll from 'react-infinite-scroll-component';

// const accessKey = "IUFSMGKqNNZGzGZxUbHsEgJnQIPq6tcq33QAVqlemPs";

// export default function BodyPinterest() {
//     const [imagen, setImagen] = useState([]);
//     const [noImages, setNoImages] = useState(false);
//     const [loading, setLoading] = useState(true);
//     const { busqueda, setInfoCurrentPhoto, setImagenesLocalStorage, cantidadFotos } = storeZustand();
//     const [page, setPage] = useState(1);

//     const fetchData = async () => {
//         try {
//             const response = await axios.get(
//                 `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=${cantidadFotos}&query=${busqueda}&page=${page}`
//             );
//             setLoading(false);
//             console.log(response.data);

//             setImagen((prevImagen) => [...prevImagen, ...response.data]);
//             setPage((prevPage) => prevPage + 1);
//         } catch (error) {
//             console.error("Error fetching image:", error);
//             setImagen([]);
//             setNoImages(true);
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, [busqueda]);

//     const guardarEnFavoritos = (link) => {
//         const datosParseados = JSON.parse(localStorage.getItem('imagenes')) || [];
//         const imagenRepetida = datosParseados.some(i => i.url === link);

//         if (imagenRepetida) {
//             console.log(`La imagen ya se encuentra en favoritos.`);
//             toast.error("La imagen ya se encuentra en favoritos.");
//         } else {
//             datosParseados.push({ url: link });
//             localStorage.setItem('imagenes', JSON.stringify(datosParseados));
//             setImagenesLocalStorage(datosParseados);
//             console.log(`Imagen agregada a favoritos.`);
//             toast.success("Imagen agregada a favoritos.");
//         }
//     };

//     const handleImageClick = (value) => {
//         setInfoCurrentPhoto([
//             {
//                 urls: value.urls.regular || "No data",
//                 alt: value.alt_description || "No data",
//                 description: value.description || "No data",
//                 downloads: value.downloads || "No data",
//                 views: value.views || "No data",
//                 likes: value.likes || "No data",
//                 location: value.location.name || value.location.city || value.location.country || "No data",
//                 photoCamera: value.exif.name || "No data",
//                 created_at: value.created_at || "No data",
//                 fullName: value.user.name || "No data",
//                 profileImage: value.user.profile_image.medium || "No data",
//                 countInstagram: value.user.instagram_username || "No data",
//                 countUnsplash: value.user.links.html || "No data"
//             },
//         ]);

//         const datos = {
//             urls: value.urls.regular || "No data",
//             alt: value.alt_description || "No data",
//             description: value.description || "No data",
//             downloads: value.downloads || "No data",
//             views: value.views || "No data",
//             likes: value.likes || "No data",
//             location: value.location.name || value.location.city || value.location.country || "No data",
//             photoCamera: value.exif.name || "No data",
//             created_at: value.created_at || "No data",
//             fullName: value.user.name || "No data",
//             profileImage: value.user.profile_image.medium || "No data",
//             countInstagram: value.user.instagram_username || "No data",
//             countUnsplash: value.user.links.html || "No data"
//         }
//         localStorage.setItem("imagenSeleccionada", JSON.stringify(datos))
//     };

//     return (
//         <div className="container-fluid bodyPinterest">
//             <div className="mb-4 mt-5">
//                 <h2> Busqueda: {busqueda} </h2>
//                 <InfiniteScroll
//                     dataLength={imagen.length}
//                     next={fetchData}
//                     hasMore={true}
//                 >
//                     <div className="foto">
//                         {loading ? (
//                             Array.from({ length: cantidadFotos }).map((_, index) => (
//                                 <div key={index} className="contenedor-img">
//                                     <Skeleton height={300} />
//                                 </div>
//                             ))
//                         ) : (
//                             imagen.map((photo, key) => (
//                                 <div key={key} className="contenedor-img">
//                                     <Link to={`/pinterest`} className="img-img">
//                                         <img
//                                             src={photo.urls.regular}
//                                             alt={photo.alt_description}
//                                             onClick={() => handleImageClick(photo)}
//                                         />
//                                         <div className="icon">
//                                             <IoSave size={20} color="black" />
//                                         </div>
//                                         <Link className="boton-guardar" onClick={() => guardarEnFavoritos(photo.urls.regular)}> Guardar </Link>
//                                     </Link>
//                                 </div>
//                             ))
//                         )}
//                     </div>
//                 </InfiniteScroll>

//                 {noImages ? (
//                     <>
//                         <h3 className="text-center mt-3"> Espere a que la API's vuelva a recuperar su cuota, por favor. </h3>
//                         <div className="imagen-espera">
//                             <img src="https://i.pinimg.com/564x/23/96/07/2396070c6522c7d2c6d789a56bd9e4cc.jpg" alt="Imagen de espera" />
//                         </div>
//                     </>
//                 ) : null}

//                 <ToastContainer autoClose={1200} />
            
//             </div>
//         </div>
//     );
// }

import React, { useEffect, useState } from "react";
import { IoSave } from "react-icons/io5";
import "./BodyPinterest.scss";
import axios from "axios";
import { storeZustand } from "../../zustand.jsx";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { toast, ToastContainer } from 'react-toastify';
import InfiniteScroll from 'react-infinite-scroll-component';

const accessKey = "IUFSMGKqNNZGzGZxUbHsEgJnQIPq6tcq33QAVqlemPs";

export default function BodyPinterest() {
    const [imagen, setImagen] = useState([]);
    const [noImages, setNoImages] = useState(false);
    const [loading, setLoading] = useState(true);
    const { busqueda, setInfoCurrentPhoto, setImagenesLocalStorage, cantidadFotos } = storeZustand();
    const [page, setPage] = useState(1);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=${cantidadFotos}&query=${busqueda}&page=${page}`
            );
            setLoading(false);
            console.log(response.data);

            setImagen((prevImagen) => {
                const uniqueImages = new Set([...prevImagen, ...response.data]);
                return [...uniqueImages];
            });
            setPage((prevPage) => prevPage + 1);
        } catch (error) {
            console.error("Error fetching image:", error);
            setImagen([]);
            setNoImages(true);
            setLoading(false);
        }
    };

    useEffect(() => {
        setImagen([]);
        setPage(1);
        fetchData();
    }, [busqueda]);

    const guardarEnFavoritos = (link) => {
        const datosParseados = JSON.parse(localStorage.getItem('imagenes')) || [];
        const imagenRepetida = datosParseados.some(i => i.url === link);

        if (imagenRepetida) {
            console.log(`La imagen ya se encuentra en favoritos.`);
            toast.error("La imagen ya se encuentra en favoritos.");
        } else {
            datosParseados.push({ url: link });
            localStorage.setItem('imagenes', JSON.stringify(datosParseados));
            setImagenesLocalStorage(datosParseados);
            console.log(`Imagen agregada a favoritos.`);
            toast.success("Imagen agregada a favoritos.");
        }
    };

    const handleImageClick = (value) => {
        setInfoCurrentPhoto([
            {
                urls: value.urls.regular || "No data",
                alt: value.alt_description || "No data",
                description: value.description || "No data",
                downloads: value.downloads || "No data",
                views: value.views || "No data",
                likes: value.likes || "No data",
                location: value.location.name || value.location.city || value.location.country || "No data",
                photoCamera: value.exif.name || "No data",
                created_at: value.created_at || "No data",
                fullName: value.user.name || "No data",
                profileImage: value.user.profile_image.medium || "No data",
                countInstagram: value.user.instagram_username || "No data",
                countUnsplash: value.user.links.html || "No data"
            },
        ]);

        const datos = {
            urls: value.urls.regular || "No data",
            alt: value.alt_description || "No data",
            description: value.description || "No data",
            downloads: value.downloads || "No data",
            views: value.views || "No data",
            likes: value.likes || "No data",
            location: value.location.name || value.location.city || value.location.country || "No data",
            photoCamera: value.exif.name || "No data",
            created_at: value.created_at || "No data",
            fullName: value.user.name || "No data",
            profileImage: value.user.profile_image.medium || "No data",
            countInstagram: value.user.instagram_username || "No data",
            countUnsplash: value.user.links.html || "No data"
        }
        localStorage.setItem("imagenSeleccionada", JSON.stringify(datos))
    };

    window.onscroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
        ) {
            fetchData();
        }
    };

    return (
        <div className="container-fluid bodyPinterest">
            <div className="mb-4 mt-5">
                <h2> Busqueda: {busqueda} </h2>
                <InfiniteScroll
                    dataLength={imagen.length}
                    next={fetchData}
                    hasMore={!loading && !noImages}
                >
                    <div className="foto">
                        {loading ? (
                            Array.from({ length: cantidadFotos }).map((_, index) => (
                                <div key={index} className="contenedor-img">
                                    <Skeleton height={300} />
                                </div>
                            ))
                        ) : (
                            imagen.map((photo, key) => (
                                <div key={key} className="contenedor-img">
                                    <Link to={`/pinterest`} className="img-img">
                                        <img
                                            src={photo.urls.regular}
                                            alt={photo.alt_description}
                                            onClick={() => handleImageClick(photo)}
                                        />
                                        <div className="icon">
                                            <IoSave size={20} color="black" />
                                        </div>
                                        <Link className="boton-guardar" onClick={() => guardarEnFavoritos(photo.urls.regular)}> Guardar </Link>
                                    </Link>
                                </div>
                            ))
                        )}
                    </div>
                </InfiniteScroll>

                {noImages ? (
                    <>
                        <h3 className="text-center mt-3"> Espere a que la API's vuelva a recuperar su cuota, por favor. </h3>
                        <div className="imagen-espera">
                            <img src="https://i.pinimg.com/564x/23/96/07/2396070c6522c7d2c6d789a56bd9e4cc.jpg" alt="Imagen de espera" />
                        </div>
                    </>
                ) : null}

                <ToastContainer autoClose={1200} />
            
            </div>
        </div>
    );
}
