import "./ImagenesFavoritas.scss"
import { storeZustand } from "../../zustand.jsx";

export default function ImagenesFavoritas() {
    const { imagenesLocalStorage, setImagenesLocalStorage } = storeZustand();

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

    return (
        <div>
            <h2 className="text-center title-imagenes-favoritas"> Imagenes favoritas guardadas </h2>

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

        </div>
    )
}