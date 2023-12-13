import "./CardImage.scss"
import { storeZustand } from "../../zustand.jsx"

export default function CardImage() {
    const { infoCurrentPhoto } = storeZustand()    

    return (
        <div className="card-image">
            <h2 className="text-center"> Card image </h2>
                 

        </div>
    )
}