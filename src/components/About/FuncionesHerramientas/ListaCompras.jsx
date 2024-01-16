import BodyAbout from "../BodyAbout";
import { RiFilterLine, RiCloseLine } from 'react-icons/ri';

export default function ListaCompras() {

    return (
        <div>

            <BodyAbout
                titulo={"Administrar tu lista de compras"}
                cuerpo={
                    <div>

                        <div className="disponibilidad-ios">
                            <p className="cuerpo-texto">Parece que estás viendo este artículo desde un país donde las listas de compras aún no están disponibles.
                                onsulta dónde están disponibles para las cuentas de Pinterest.  </p>
                            <button> Mas informacion </button>
                        </div>
                        <p className="cuerpo-texto">Cuando guardes Pines de producto en tus tableros, también se agregarán automáticamente a <a href="#" style={{ fontWeight: 600 }}>Tu lista de compras</a>. Esto significa que podrás explorar todos los productos que hayas guardado en tus tableros en un solo lugar.
                            También verás información adicional, como el precio, las reseñas y la información de envío.</p>
                        <p className="cuerpo-texto"><a href="#" style={{ fontWeight: 600 }}>Tu lista de compras</a> aparece en segundo lugar en la lista de tableros de tu perfil y solo tú puedes verla. Si no quieres que aparezca en tu perfil, puedes ocultarla.</p>
                        <h2 className="cuerpo-titulo">Ocultar tu lista de compras</h2>
                        <div className="d-flex web-android-ios">
                            <a href="#" style={{ textDecoration: "underline" }}>WEB</a>
                            <a href="#" style={{ textDecoration: "underline" }}>ANDROID</a>
                            <a href="#" style={{ textDecoration: "underline" }}>IOS</a>
                        </div>
                        <p className="cuerpo-texto" style={{ marginLeft: "3%" }}>1) Inicia sesión en tu cuenta de Pinterest . </p>
                        <p className="cuerpo-texto" style={{ marginLeft: "3%" }}>2) Haz clic en tu foto de perfil, en la parte superior derecha de la pantalla, para abrir tu perfil. </p>
                        <p className="cuerpo-texto" style={{ marginLeft: "3%" }}>3) En la parte superior izquierda, arriba de tus tableros, haz clic en <RiFilterLine size={20} color="#004BA9" />. </p>
                        <p className="cuerpo-texto" style={{ marginLeft: "3%" }}>4) Selecciona Editar visibilidad del tablero. </p>
                        <p className="cuerpo-texto" style={{ marginLeft: "3%" }}>5) Activa la opción Mostrar Tu lista de compras. </p>
                        <p className="cuerpo-texto" style={{ marginLeft: "3%" }}>6) Haz clic en <RiCloseLine size={20} color="#004BA9" /> ubicado junto a Administrar la visibilidad. </p>
                        <p className="cuerpo-texto"> Actualiza la página y tu lista de compras ya no estará visible.  </p>

                    </div>
                }
            />

        </div>
    )
}