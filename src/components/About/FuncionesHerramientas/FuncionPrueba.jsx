import BodyAbout from "../BodyAbout";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

export default function FuncionPrueba() {
    const [activeCollapse, setActiveCollapse] = useState({
        maquillaje: false,
        busqueda: false,
        pines: false
    })

    const handleCollapse = (id) => {
        if (id === 1) {
            setActiveCollapse({ ...activeCollapse, maquillaje: !activeCollapse.maquillaje });
        } else if (id === 2) {
            setActiveCollapse({ ...activeCollapse, busqueda: !activeCollapse.busqueda });
        } else {
            setActiveCollapse({ ...activeCollapse, pines: !activeCollapse.pines });
        }
    };

    return (
        <div>

            <BodyAbout
                titulo={"Usar la función Prueba"}
                cuerpo={
                    <div>

                        <div className="disponibilidad-ios">
                            <p className="cuerpo-texto">Parece que la función de prueba no está disponible en tu área.  </p>
                            <button> Mas informacion </button>
                        </div>
                        <p className="cuerpo-texto">Usa la cámara o una imagen del álbum de la cámara para descubrir productos de maquillaje, como lápices labiales y sombras de ojos, a través de la prueba virtual de la aplicación de Pinterest.
                            También puedes colocar decoración del hogar y muebles en tu espacio de forma virtual para encontrar artículos que te interesen. Además, puedes rotar virtualmente el objeto en 3D. Si te gusta lo que ves, puedes comprarlo en ese mismo instante o guardarlo en un tablero y hacerlo más adelante.</p>
                        <p className="cuerpo-texto">Recuerda que la función <a href="#" style={{ fontWeight: 600 }}>Prueba</a> solo está disponible para algunos Pines. Algunos Pines de maquillaje o decoración del hogar pueden ser Pines normales. Busca Pines con el botón Prueba o el ícono del cubo para probar esta función.</p>
                        <p className="cuerpo-texto">Nota: la función de prueba de sombras de ojos y decoración del hogar aún no está disponible en el Reino Unido, pero puedes usar la de lápiz labial.</p>
                        <div className="contenedor-img" style={{ marginTop: "8%", marginBottom: "8%" }}>
                            <img className="img-pines" src="https://help.pinterest.com/sites/pinhelp/files/flex_img/2021-01/VTO_Eyeshadow_Lighter_Shade_US-EN_0.jpg" alt="Prueba de sombras de ojos" />
                        </div>
                        <h2 className="cuerpo-titulo">Antes de comenzar</h2>
                        <p className="cuerpo-texto">Antes de usar la función de prueba, deberás hacer lo siguiente:</p>
                        <ul style={{ marginLeft: "3%" }}>
                            <li>Dar permiso a Pinterest para acceder a la cámara </li>
                            <li>Si usas un dispositivo Android, deberás descargar los servicios de Google Play para RA</li>
                        </ul>
                        <p className="cuerpo-texto">Si no completaste estos pasos, se te indicará que sigas los pasos que aparecen a continuación.</p>
                        <h2 className="cuerpo-titulo">Usa la función Prueba para maquillaje</h2>
                        <div className="d-flex web-android-ios">
                            <a href="#" style={{ textDecoration: "underline" }}>WEB</a>
                            <a href="#" style={{ textDecoration: "underline" }}>ANDROID</a>
                            <a href="#" style={{ textDecoration: "underline" }}>IOS</a>
                        </div>
                        <div className="contenedor-collapse-body">
                            <div className="collapse-body" onClick={() => handleCollapse(1)}>
                                <p>Prueba maquillaje con Lens</p>
                                <FaPlus size={20} color="#004BA9" />
                            </div>
                            <div className="contenedor-texto" style={{ display: activeCollapse.maquillaje ? 'block' : 'none' }} >
                                <p className="cuerpo-texto">Usa Lens de Pinterest en la aplicación de Pinterest para probar productos de maquillaje</p>
                                <p className="cuerpo-texto">Parece que estás leyendo esto desde un navegador web. Por el momento, deberás usar un teléfono o tableta para probarte maquillaje. Para ver estas instrucciones, haz clic en Android o iOS más arriba.</p>
                            </div>
                            <hr color="#004BA9" />
                            <div className="collapse-body" onClick={() => handleCollapse(2)}>
                                <p>Prueba maquillaje desde la barra de busqueda</p>
                                <FaPlus size={20} color="#004BA9" />
                            </div>
                            <div className="contenedor-texto" style={{ display: activeCollapse.busqueda ? 'block' : 'none' }} >
                                <p className="cuerpo-texto">Escribe términos de búsqueda de belleza en la barra de búsqueda para usar la función de prueba con gamas de tonos de piel.</p>
                                <p className="cuerpo-texto">Parece que estás leyendo esto desde un navegador web. Por el momento, deberás usar un teléfono o tableta para probarte maquillaje. Para ver estas instrucciones, haz clic en Android o iOS más arriba.</p>
                            </div>
                            <hr color="#004BA9" />
                            <div className="collapse-body" onClick={() => handleCollapse(3)}>
                                <p>Prueba maquillaje desde los Pines </p>
                                <FaPlus size={20} color="#004BA9" />
                            </div>
                            <div className="contenedor-texto" style={{ display: activeCollapse.pines ? 'block' : 'none' }} >
                                <p className="cuerpo-texto">Con algunos Pines, puedes probar el producto destacado en el Pin o probar productos similares.</p>
                                <p className="cuerpo-texto">Parece que estás leyendo esto desde un navegador web. Por el momento, deberás usar un teléfono o tableta para probarte maquillaje. Para ver estas instrucciones, haz clic en Android o iOS más arriba.</p>
                            </div>
                            <hr color="#004BA9" />
                        </div>




                        <h2 className="cuerpo-titulo">Usa la función Prueba para decoración del hogar </h2>
                        <div className="d-flex web-android-ios">
                            <a href="#" style={{ textDecoration: "underline" }}>WEB</a>
                            <a href="#" style={{ textDecoration: "underline" }}>ANDROID</a>
                            <a href="#" style={{ textDecoration: "underline" }}>IOS</a>
                        </div>
                        <p className="cuerpo-texto">Parece que estás leyendo esto desde un navegador web. Por el momento, deberás usar un teléfono o tableta para probar decoración del hogar. Para ver estas instrucciones,
                            haz clic en <a href="#" style={{ fontWeight: 600 }}>Android</a> o <a href="#" style={{ fontWeight: 600 }}>iOS</a> más arriba.</p>

                    </div>
                }
            />
        </div>
    )
}