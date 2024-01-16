import BodyAbout from "../BodyAbout";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

export default function ComprarPinesProductos() {
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
                titulo={"Administrar tu lista de compras"}
                cuerpo={
                    <div>

                        <p className="cuerpo-texto">Los Pines de producto incluyen productos que pueden comprarse a los comerciantes incluidos en los Pines. Te dirigirán al sitio web del comerciante. </p>
                        <p className="cuerpo-texto">Si tienes alguna pregunta sobre un producto que pediste, ponte en contacto con el comerciante al que se lo compraste.</p>
                        <p className="cuerpo-texto">Cuando guardas un Pin de producto en cualquiera de tus tableros, se agrega automáticamente a tu lista de compras, la cual solo tú podrás ver en tu perfil. Si quieres ocultar esta lista de compras de tu perfil, aprende cómo <a href="#" style={{ textDecoration: 'underline' }}>Administrar tu lista de compras</a> .</p>
                        <h2 className="cuerpo-titulo">Buscar productos para comprar</h2>
                        <p className="cuerpo-texto">Nota: Actualmente estamos implementando nuevas funciones de compra. Si aún no ves alguna de las siguientes opciones en tu cuenta, probablemente aparezca pronto.</p>
                        <div className="d-flex web-android-ios">
                            <a href="#" style={{ textDecoration: "underline" }}>WEB</a>
                            <a href="#" style={{ textDecoration: "underline" }}>ANDROID</a>
                            <a href="#" style={{ textDecoration: "underline" }}>IOS</a>
                        </div>
                        <div className="contenedor-collapse-body">
                            <div className="collapse-body" onClick={() => handleCollapse(1)}>
                                <p>Comprar productos en tus resultados de busqueda</p>
                                <FaPlus size={20} color="#004BA9" />
                            </div>
                            <div className="contenedor-texto" style={{ display: activeCollapse.maquillaje ? 'block' : 'none' }} >
                                <p className="cuerpo-texto" style={{ marginLeft: "3%" }} >1) Inicia sesión en tu<a href="#" style={{ fontWeight: 600 }}>cuenta de Pinterest</a> .</p>
                                <p className="cuerpo-texto">2)  Haz clic en la barra de búsqueda en la parte superior del feed de inicio e ingresa un producto que estés buscando. </p>
                                <ul style={{ marginLeft: "5%" }}>
                                    <li>Si ves la pestaña <a href="#" style={{ fontWeight: 600 }}>Comprar</a> en la parte superior de los resultados de búsqueda, haz clic en <a href="#" style={{ fontWeight: 600 }}>Comprar</a> para explorar Pines de producto.</li>
                                    <li>Si no ves la pestaña <a href="#" style={{ fontWeight: 600 }}>Comprar</a>, haz clic en <a href="#" style={{ fontWeight: 600 }}>Todos los Pines</a> junto a la barra de búsqueda y selecciona Pines de producto.</li>
                                </ul>
                                <p className="cuerpo-texto"> Si ves <a href="#" style={{ fontWeight: 600 }}>Compras destacadas</a> cuando escribes en la barra de búsqueda, haz clic en esa opción para explorar productos recomendados y de moda. </p>
                            </div>
                            <hr color="#004BA9" />
                            <div className="collapse-body" onClick={() => handleCollapse(2)}>
                                <p>Comprar productos relacionados con un Pin</p>
                                <FaPlus size={20} color="#004BA9" />
                            </div>
                            <div className="contenedor-texto" style={{ display: activeCollapse.busqueda ? 'block' : 'none' }} >
                                <p className="cuerpo-texto" style={{ marginLeft: "3%" }} >1) Inicia sesión en tu<a href="#" style={{ fontWeight: 600 }}> cuenta de Pinterest</a> .</p>
                                <p className="cuerpo-texto" style={{ marginLeft: "3%" }} >2) Haz clic en un Pin para abrirlo.</p>
                                <p className="cuerpo-texto" style={{ marginLeft: "3%" }} >3) Si el Pin está disponible para la compra, verás <a href="#" style={{ fontWeight: 600 }}>Comprar productos similares</a> debajo del Pin.</p>
                                <p className="cuerpo-texto" style={{ marginLeft: "3%" }} >4) Desplázate hacia abajo para explorar Pines de producto.</p>
                            </div>
                            <hr color="#004BA9" />
                            <div className="collapse-body" onClick={() => handleCollapse(3)}>
                                <p>Comprar productos de tu lista de compras </p>
                                <FaPlus size={20} color="#004BA9" />
                            </div>
                            <div className="contenedor-texto" style={{ display: activeCollapse.pines ? 'block' : 'none' }} >
                                <p className="cuerpo-texto" style={{ marginLeft: "3%" }} >1) Inicia sesión en tu<a href="#" style={{ fontWeight: 600 }}> cuenta de Pinterest</a> .</p>
                                <p className="cuerpo-texto" style={{ marginLeft: "3%" }} >2) En la esquina superior derecha, haz clic en tu foto de perfil para abrir tu perfil.</p>
                                <p className="cuerpo-texto" style={{ marginLeft: "3%" }} >3) Haz clic en <a href="#" style={{ fontWeight: 600 }}>Tu lista de compras</a> en la pestaña <a href="#" style={{ fontWeight: 600 }}>Pines guardados</a>.</p>
                                <p className="cuerpo-texto" style={{ marginLeft: "3%" }} >4) Haz clic en <a href="#" style={{ fontWeight: 600 }}>Visitar sitio</a> en el Pin del producto que quieras comprar.</p>
                                <p className="cuerpo-texto">Se te dirigirá al sitio web del comercio, donde podrás obtener más información y comprar el producto.</p>
                            </div>
                            <hr color="#004BA9" />
                        </div>
                        <h2 className="cuerpo-titulo">Detalles del comerciante</h2>
                        <p className="cuerpo-titulo">Los comerciantes que son miembros del Programa de comerciantes verificados han cumplido nuestras Directrices para comerciantes y tienen una insignia azul en sus perfiles. Cuando veas la insignia azul, significa que el comerciante: </p>
                        <ul style={{ marginLeft: "3%" }}>
                            <li>Muestra información precisa sobre los precios de los productos y si los productos están en existencia o no.</li>
                            <li>Tiene páginas de productos y un sitio web de gran calidad.</li>
                            <li>Dispone de una política de devolución clara que indica si acepta devoluciones, como también el proceso y los plazos previstos para las devoluciones.</li>
                            <li>Tiene una política de envíos clara y fácil de encontrar que indica los plazos de envío previstos.</li>
                        </ul>
                        <p className="cuerpo-texto">Además, algunos comerciantes tendrán información sobre las comunidades que representan y los valores de su marca debajo del nombre de su empresa en sus perfiles. Si una empresa se autoidentifica como que es de al menos el 51 % propiedad de un grupo subrepresentado, es posible que veas a su comunidad en la lista.
                            También puedes ver los valores de su marca en la lista. Los comerciantes pueden seleccionar valores de marca y agregarlos a su perfil únicamente después de que se hayan revisado sus sitios web.</p>
                        <h2 className="cuerpo-titulo"> Preguntas sobre un pedido </h2>
                        <p className="cuerpo-texto"> Si bien trabajamos para que la experiencia de compras sea óptima, no nos hacemos responsables de ningún conflicto o problema que puedas tener con los comerciantes o los productos que descubres en Pinterest. </p>
                        <p className="cuerpo-texto"> Agradecemos todos los comentarios sobre tu experiencia de compra en general. Infórmanos si algún comerciante no sigue nuestras <a href="#" style={{ textDecoration: 'underline' }}>directrices</a> . Si te comunicas con nuestro equipo de soporte,
                            no envíes información personal como datos de tarjetas de crédito, números de teléfono o direcciones de facturación y envío. </p>
                        <div className="contenedor-collapse-body">
                            <div className="collapse-body" onClick={() => handleCollapse(1)}>
                                <p>Quiero saber donde esta mi pedido</p>
                                <FaPlus size={20} color="#004BA9" />
                            </div>
                            <div className="contenedor-texto" style={{ display: activeCollapse.maquillaje ? 'block' : 'none' }} >
                                <p className="cuerpo-texto"> Pinterest no tiene información sobre los datos de seguimiento o los plazos de envío. Si quieres saber dónde está tu pedido: </p>
                                <ul style={{ marginLeft: "3%" }}>
                                    <li>Ponte en contacto directamente con el comerciante para preguntarle por tu producto.</li>
                                    <li>Visita el sitio web del comerciante y consulta su política de envíos.</li>
                                </ul>
                                <p className="cuerpo-texto"> Si no encuentras la política de envío del comerciante o su información de contacto, o el comerciante no se comunica contigo, ponte en contacto con nosotros para denunciarlo. </p>
                            </div>
                            <hr color="#004BA9" />
                            <div className="collapse-body" onClick={() => handleCollapse(2)}>
                                <p>Recibi mi producto pero no es lo que esperaba y quiero un reembolso</p>
                                <FaPlus size={20} color="#004BA9" />
                            </div>
                            <div className="contenedor-texto" style={{ display: activeCollapse.busqueda ? 'block' : 'none' }} >
                                <p className="cuerpo-texto"> Pinterest no se hace responsable de ningún conflicto o problema que puedas tener con los comerciantes o los productos que descubres en Pinterest y no puede hacer reembolsos por compras. </p>
                                <p className="cuerpo-texto"> Si tu artículo no es lo que esperabas: </p>
                                <ul style={{ marginLeft: "3%" }}>
                                    <li>Ponte en contacto directamente con el comerciante para solicitarle un reembolso.</li>
                                    <li>Visita el sitio del comerciante y consulta su política de reembolso.</li>
                                </ul>
                                <p className="cuerpo-texto"> Si no encuentras la política de reembolso del comerciante o su información de contacto, o el comerciante no se comunica contigo, <a href="#" style={{ textDecoration: 'underline' }}>ponte en contacto con nosotros</a> para denunciarlo. </p>
                            </div>
                            <hr color="#004BA9" />
                            <div className="collapse-body" onClick={() => handleCollapse(3)}>
                                <p>Tuve un problema con un comerciante </p>
                                <FaPlus size={20} color="#004BA9" />
                            </div>
                            <div className="contenedor-texto" style={{ display: activeCollapse.pines ? 'block' : 'none' }} >
                                <p className="cuerpo-texto"> Pinterest no se hace responsable de ningún conflicto o problema que puedas tener con los comerciantes o los productos que descubres en Pinterest. Si tienes problemas con un comerciante: </p>
                                <ul style={{ marginLeft: "3%" }}>
                                    <li>Ponte en contacto directamente con el comerciante.</li>
                                    <li>Si te han cobrado una cantidad diferente a la que esperabas, comunícate con tu institución financiera.</li>
                                </ul>
                                <p className="cuerpo-texto"> Si no puedes resolver el problema con el comerciante, <a href="#" style={{ textDecoration: 'underline' }}>ponte en contacto con nosotros</a> para denunciarlo. </p>
                            </div>
                            <hr color="#004BA9" />
                        </div>

                    </div>
                }
            />

        </div>
    )
}