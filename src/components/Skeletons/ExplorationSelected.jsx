import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

export default function ExplorationSelectedSkeleton() {

    return (
        <div className="contenedor-imagen">
            <Skeleton width={650} height={280} />
            <Skeleton width={650} height={30} />
        </div>
    )
}