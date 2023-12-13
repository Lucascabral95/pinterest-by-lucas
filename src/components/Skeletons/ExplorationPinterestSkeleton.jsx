import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import Categorias from "../../JSON/Categorias.json"
import { Link } from "react-router-dom";

export default function ExplorationPinterestSkeleton() {

    return (
        <div className="contenedor-cat" >
            <div className="titulo d-flex justify-content-center align-items-center" >
                <Skeleton width={600} height={40} className="d-flex justify-content-center align-items-center" />
                <Skeleton width={600} height={40} className="d-flex justify-content-center align-items-center" />
            </div>
            <div className="contenedor-categorias">
                {Categorias.map((item, key) => (
                    <Link key={key} className="categoria-imagen" onClick={() => buscarCategoria(item)}>
                        <Skeleton width={444} height={333} />
                    </Link>
                ))}
            </div>
        </div>
    )
}