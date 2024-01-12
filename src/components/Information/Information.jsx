import "./Information.scss"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from '../../JSON/CarouselEmpresa.json'
import Skeleton from 'react-loading-skeleton';
import { useState, useEffect } from "react";
import FastMarquee from 'react-fast-marquee';

export default function Information() {
    const [skeleton, setSkeleton] = useState(true)
    const [hoverObjetivos, setHoverObjetivos] = useState(false)
    const [hoverSeparador, setHoverSeparador] = useState(false)
    const [hoverEmpezar, setHoverEmpezar] = useState(false)
    const [hoverPositividad, setHoverPositividad] = useState(false)
    const [hoverBotonCrear, setHoverBotonCrear] = useState(false)

    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    useEffect(() => {
        setTimeout(() => {
            setSkeleton(false)
        }, 700);
    }, [skeleton])

    const messages = [
        `Suscribite al newsletter > Suscribite al newsletter > Suscribite al newsletter >
        Suscribite al newsletter > Suscribite al newsletter > Suscribite al newsletter > 
        Suscribite al newsletter > Suscribite al newsletter > Suscribite al newsletter >
        Suscribite al newsletter > Suscribite al newsletter > Suscribite al newsletter >
        Suscribite al newsletter > Suscribite al newsletter > Suscribite al newsletter > 
        Suscribite al newsletter > Suscribite al newsletter > Suscribite al newsletter >
        Suscribite al newsletter > Suscribite al newsletter > Suscribite al newsletter >
        `
    ];

    return (
        <div className="information">

            <div className="contenedor-texto">
                <h3 className="title"> Con Pinterest, es posible.</h3>
                <p className="texto uno">
                    Todos los meses, casi 500 millones de personas usan Pinterest para encontrar la inspiración, comprar nuevos productos y probar nuevas ideas.1 Están en el mercado, pero aún están indecisas y buscan marcas como la tuya.</p>
                <p className="texto dos"> Llega a tu audiencia en todas las etapas del funnel, del descubrimiento a la decisión. La suscripción es gratuita y fácil de usar.</p>
                <div className="contenedor-boton-crear-cuenta">
                    <div className="cont-boton">
                        <a href="" className="boton-crear-cuenta"> Crear cuenta </a>
                    </div>
                </div>
            </div>

            <div className="contenedor-imagen">
                <img src="https://images.ctfassets.net/h67z7i6sbjau/3chyNvP0vDdeBOrgVVFkYs/cd28992854e1529378f72a026b9df761/Spanish_2x.jpg?fm=webp&q=85&w=2880&h=2880" alt="Imagen" className="imagen" />
            </div>

            <div className="contenedor-carousel">
                <Slider className="carousel" {...settings}>
                    {skeleton ? (
                        <div className="d-flex justify-content-center align-items-center container-img">
                            <Skeleton width={766} height={766} />
                            <Skeleton width={766} height={766} />
                        </div>
                    ) : (
                        Carousel.map((item, key) => (
                            <div key={key} className="contenedor">
                                <div className="cont">
                                    <div className="mitad-uno" style={{ backgroundColor: item.color }}>
                                        <p className="subtitulo"> {item.subtitulo} </p>
                                        <p className="tituloo"> {item.titulo} </p>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <button className="boton"> {item.boton} </button>
                                        </div>
                                    </div>
                                    <div className="mitad-dos">
                                        <img src={item.foto} alt={item.description} />
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </Slider>
            </div>

            <div className="contenedor-positividad"
                // onMouseOver={() => setHoverPositividad(true)}
                onWheel={() => setHoverPositividad(true)}
                onMouseLeave={() => setHoverPositividad(false)}
                style={{ backgroundColor: hoverPositividad ? "#00422C" : "#FFFEDB", transition: "background-color 0.8s ease" }}
            >
                <div className="contendor-de-positividad">
                    <h3 className="titulo-positividad"
                        style={{ color: hoverPositividad ? "#FFFEDB" : "#00422C" }}
                    > Positividad que rinde frutos </h3>
                    <p className="texto-positividad"
                        style={{ color: hoverPositividad ? "#FFFEDB" : "#00422C" }}
                    > Pinterest lidera la industria en productos y políticas que fomentan la inclusión y la positividad. Cuando las personas sienten que las ven, tienen más ganas de explorar ideas nuevas. Y ese efecto halo se extiende también a las marcas en Pinterest. </p>
                    <div className="d-flex justify-content-center align-items-center">
                        <button className="boton-dos"> Informacion basica </button>
                    </div>
                </div>
            </div>

            <div className="contenedor-collage">
                <div className="contenedor">
                    <div className="cont-img-uno">
                        <img src="https://images.ctfassets.net/h67z7i6sbjau/5L3NKLLuY2LDnIxBIY5ve8/59ff747eb3247b52d2b2a42aca7a3998/ES_homepage_action_promotedpin_720x720.jpg_2X.png?fm=webp&q=85&w=2880&h=2880" alt="Collage 1" />
                    </div>
                    <div className="cont-img-dos">
                        <img src="https://images.ctfassets.net/h67z7i6sbjau/38kSKHGDbcr5sRDRAZ25qe/9355e0ad3b7e8c0f9e0bff27b5c25838/homepage_action_section_720x720.jpg.jpg?fm=webp&q=85&w=2880&h=2880" alt="Collage 2" />
                    </div>
                </div>
            </div>

            {/* <div className="contenedor-objetivos"
                style={{ backgroundColor: hoverObjetivos ? "#FFE376" : "#FFFEDB", transition: "background-color 0.2s ease" }}
                onMouseOver={() => setHoverObjetivos(true)}
                onMouseLeave={() => setHoverObjetivos(false)}>
                <h3 className="titulo-objetivos"> Tus objetivos, tu camino </h3>
                <div className="contenedor-objetivos-categoria">
                    <div className="objetivos-categoria">
                        <h3 className="marketing"> Expertos en Marketing </h3>
                        <p className="texto-marketing"> Usa los anuncios de Pinterest para lograr tus objetivos de marketing, como reconocimiento de marca, consideración y conversiones. Combina formatos flexibles con segmentación personalizada para lanzar campañas exitosas.</p>
                        <br />
                        <a target="_blank" href="https://business.pinterest.com/es/advertise/" className="texto-marketing"> Mas informacion sobre los anuncios. </a>
                    </div>
                    <div className="objetivos-categoria">
                        <h5 className="marketing"> Agencias </h5>
                        <p className="texto-marketing"> Ayuda a tus clientes a lograr resultados increíbles en todo el funnel con contenido inspirador y atractivo. Ofrecemos herramientas especiales para que las agencias desarrollen y hagan crecer la presencia de sus clientes en la plataforma.</p>
                        <br />
                        <a target="_blank" href="https://business.pinterest.com/es/agency-resources/" className="texto-marketing"> Ver las herramientas para agencias </a>
                    </div>
                    <div className="objetivos-categoria">
                        <h5 className="marketing"> Comerciantes </h5>
                        <p className="texto-marketing"> Los compradores en Pinterest gastan el doble al mes que la gente que usa otras plataformas.3 Usa catálogos y anuncios Shopping a fin de llegar a las personas que estén listas para comprar. </p>
                        <br />
                        <a target="_blank" href="https://business.pinterest.com/es/shopping/" className="texto-marketing p"> Ver soluciones de compra. </a>
                    </div>
                </div>
            </div> */}
            <div className="contenedor-objetivos"
                style={{ backgroundColor: hoverObjetivos ? "#FFE376" : "#FFFEDB", transition: "background-color 0.2s ease" }}
                onWheel={() => setHoverObjetivos(true)}
                onMouseLeave={() => setHoverObjetivos(false)}

                // onTouchStart={() => setHoverObjetivos(true)}
                onTouchEnd={() => setHoverObjetivos(false)}
                onTouchMove={() => setHoverObjetivos(true)}
                >
                <h3 className="titulo-objetivos"> Tus objetivos, tu camino </h3>
                <div className="contenedor-objetivos-categoria">
                    <div className="objetivos-categoria">
                        <h3 className="marketing"> Expertos en Marketing </h3>
                        <p className="texto-marketing"> Usa los anuncios de Pinterest para lograr tus objetivos de marketing, como reconocimiento de marca, consideración y conversiones. Combina formatos flexibles con segmentación personalizada para lanzar campañas exitosas.</p>
                        <br />
                        <a target="_blank" href="https://business.pinterest.com/es/advertise/" className="texto-marketing"> Mas informacion sobre los anuncios. </a>
                    </div>
                    <div className="objetivos-categoria">
                        <h5 className="marketing"> Agencias </h5>
                        <p className="texto-marketing"> Ayuda a tus clientes a lograr resultados increíbles en todo el funnel con contenido inspirador y atractivo. Ofrecemos herramientas especiales para que las agencias desarrollen y hagan crecer la presencia de sus clientes en la plataforma.</p>
                        <br />
                        <a target="_blank" href="https://business.pinterest.com/es/agency-resources/" className="texto-marketing"> Ver las herramientas para agencias </a>
                    </div>
                    <div className="objetivos-categoria">
                        <h5 className="marketing"> Comerciantes </h5>
                        <p className="texto-marketing"> Los compradores en Pinterest gastan el doble al mes que la gente que usa otras plataformas.3 Usa catálogos y anuncios Shopping a fin de llegar a las personas que estén listas para comprar. </p>
                        <br />
                        <a target="_blank" href="https://business.pinterest.com/es/shopping/" className="texto-marketing p"> Ver soluciones de compra. </a>
                    </div>
                </div>
            </div>
            <div className="contenedor-separador"
                // onMouseOver={() => setHoverSeparador(true)}
                onWheel={() => setHoverSeparador(true)}
                onMouseLeave={() => setHoverSeparador(false)}
            >
                <div className="separador-superior"
                    style={{ backgroundColor: hoverSeparador ? "#FFFEDB" : (hoverObjetivos ? "#FFE376" : "#FFFEDB"), transition: "background-color 0.2s ease" }}>
                </div>
                <div className="separador-inferior"
                    style={{ backgroundColor: hoverSeparador ? "#FFFEDB" : "#CDF9CD", transition: "background-color 0.2s ease" }}>
                </div>
            </div>
            <div className="contenedor-empezar"
                style={{ backgroundColor: hoverSeparador ? "#FFFEDB" : "#CDF9CD" }}
                // onMouseOver={() => setHoverEmpezar(true)}
                onWheel={() => setHoverEmpezar(true)}
                onMouseLeave={() => setHoverEmpezar(false)}
            >
                <h3 className="empezar-titulo"> Empieza hoy mismo</h3>
                <div className="d-flex justify-content-center align-items-center">
                    <a href="https://www.pinterest.nz/business/create/" target="_blank"
                        style={{ backgroundColor: hoverEmpezar ? "#CDF9CD" : "#FFFEDB" }}
                        // onMouseOver={() => setHoverBotonCrear(true)}
                        onWheel={() => setHoverBotonCrear(true)}
                        onMouseLeave={() => setHoverBotonCrear(false)}
                        className="boton-tres" > Crear cuenta </a>
                </div>
                <div className="marquee">
                    <FastMarquee
                        duration={1}
                        delay={1}
                        pauseOnHover
                        pauseOnClick
                        pauseOnFocus
                        direction="right"
                    >
                        {messages.map((message, index) => (
                            <div className="marquee-texto" key={index}>{message}</div>
                        ))}
                    </FastMarquee>
                </div>
            </div>

        </div>
    )
}


