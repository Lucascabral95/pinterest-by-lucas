import BodyPinterest from "../BodyPinterest/BodyPinterest"
import NavbarDesktop from "../NavbarPinterest/NavbarDesktop"
import NavbarMobile from "../NavbarPinterest/NavbarMobile"
import "./PinterestFull.scss"

export default function PinterestFull() {

    return (
        <div className="pinterest-full">

            <NavbarDesktop />

            <BodyPinterest />

            <NavbarMobile />

        </div>
    )
}