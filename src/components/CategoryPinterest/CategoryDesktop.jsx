import "./CategoryDesktop.scss"
import { useEffect, useState } from "react"
import { storeZustand } from "../../zustand.jsx"
import ExplorationSelectedSkeleton from "../Skeletons/ExplorationSelected.jsx"

export default function CategoryDesktop() {
    const { infoCategoria } = storeZustand()
    const [skeleton, setSkeleton] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setSkeleton(true)
        }, 200);
    }, [skeleton])

    return (
        <div className="exploration-selected">

            {skeleton ? (
                <>
                    <div className="contenedor-imagen" >
                        <img src={infoCategoria.imagen} alt={infoCategoria.titulo} />
                        <p> {infoCategoria.descripcion} </p>
                        <h5> {infoCategoria.titulo} </h5>
                    </div>
                    <div className="texto">
                        <p> {infoCategoria.detalle} </p>
                    </div>
                </>
            ) : (
                <ExplorationSelectedSkeleton />
            )}
        </div>
    )
}

