import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Carousel.scss";
import Carrusel from "../../JSON/Carousel.json"

export default function Carousel() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className="carousel" style={{ overflow: "hidden" }}>

            <Slider className='carousel-container' {...settings}>
                {Carrusel.map((item, key) => (
                    <div key={key} className="d-flex justify-content-center align-items-center container-img">
                        <img style={{ width: "100%" }} src={item.imagen} alt={item.titulo} />
                        <strong className="titulo"> {item.titulo} </strong>
                        <p className='texto'> {item.descripcion} </p>
                    </div>
                ))}
            </Slider>

        </div>
    );
}
