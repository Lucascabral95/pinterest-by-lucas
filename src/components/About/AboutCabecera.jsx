import "./AboutCabecera.scss"
import Categorias from "../../JSON/Busqueda.json"
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";
import { useState, useEffect } from "react";
import { storeZustand } from "../../zustand.jsx";

export default function AboutCabecera() {
    const [categoriaActual, setCategoriaActual] = useState(null)
    const { cateActual, setCateActual } = storeZustand()

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 468) {
                setCategoriaActual(1);
                setCateActual(1)
            } else if (window.innerWidth < 600) {
                setCategoriaActual(2);
                setCateActual(2)
            } else if (window.innerWidth < 900) {
                setCategoriaActual(3);
                setCateActual(3)
            } else {
                setCategoriaActual(4);
                setCateActual(4)
            }
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="about">
            <div className="contenedor-titlo">
                <div className="contenedor">
                    <h1 className="titulo-pinterest"> Todo acerca de Pinterest </h1>
                </div>
            </div>

            <div className="contenedor-informacion">
                <div className="secciones">
                    <div className="contenedor-icon">
                        {(categoriaActual - cateActual) === 0 ? (
                            null
                        ) : (
                            <GrFormPreviousLink onClick={() => setCategoriaActual(categoriaActual - 1)} size={30} color="#d7edff" />
                        )
                        }
                    </div>
                    {Categorias.slice((categoriaActual - cateActual), categoriaActual).map((item, index) => (
                        <div key={index} className="seccion">
                            <a href={`#${item.key}`} className="seccion-texto" style={{ textDecoration: "none" }}>
                                {item.titulo}
                            </a>
                        </div>
                    ))}
                    <div className="contenedor-icon">
                        {categoriaActual === 7 ? (
                            null
                        ) : (
                            <GrFormNextLink onClick={() => setCategoriaActual(categoriaActual + 1)} size={30} color="#d7edff" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}