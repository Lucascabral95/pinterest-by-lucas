import "./ImagenesFavoritas.scss"
import { storeZustand } from "../../zustand.jsx";
import Skeleton from "react-loading-skeleton";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ImagenesFavoritas() {
    const { imagenesLocalStorage, setImagenesLocalStorage } = storeZustand();
    const [loading, setLoading] = useState(false)

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

    useEffect(() => {
        setTimeout(() => {
            setLoading(true)
        }, 400);
    }, [imagenesLocalStorage])

    return (
        <div>
            <h2 className="text-center title-imagenes-favoritas"> Imagenes guardadas </h2>


            {!loading ? (
                <div className="contenedor-imagenes-guardadas">
                    {imagenesLocalStorage.length > 0 ? (
                        imagenesLocalStorage.map((item, key) => (
                            <div key={key} className="imagenes-img">
                                <Skeleton height={300} />
                            </div>
                        ))
                    ) : (
                        <p>No hay imágenes disponibles</p>
                    )}

                </div>
            ) : (
                <div className="contenedor-imagenes-guardadas">
                    <div className="imagenes">
                        {imagenesLocalStorage.length > 0 ? (
                            imagenesLocalStorage.map((item, key) => (
                                <div key={key} className="imagenes-img">
                                    <Link to={`${item.url}`}>
                                        <img src={item.url} alt={item.alt} />
                                    </Link>
                                    <button className="boton" onClick={() => eliminarImagen(item.url)}>
                                        Eliminar
                                    </button>
                                </div>
                            ))
                        ) : (
                            <p>No hay imágenes disponibles</p>
                        )}
                    </div>
                </div>
            )}

        </div>
    )
}