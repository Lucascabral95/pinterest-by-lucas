import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Carousel.scss";
import Carrusel from "../../JSON/Carousel.json"
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

export default function Carousel() {
    const [skeleton, setSkeleton] = useState(true)

    const settings = {
        dots: true,
        infinite: true,
        speed: 3500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
    };

    useEffect(() => {
       setTimeout(() => {
         setSkeleton(false)
       }, 700);
    }, [skeleton])

    return (
        <div className="carousel" style={{ overflow: "hidden" }}>

            <Slider className='carousel-container' {...settings}>
                {skeleton ? (
                    <div className="d-flex justify-content-center align-items-center container-img">
                        <Skeleton width={800} height={276} />
                    </div>
                ) : (
                    Carrusel.map((item, key) => (
                        <div key={key} className="d-flex justify-content-center align-items-center container-img">
                            <img style={{ width: "100%" }} src={item.imagen} alt={item.titulo} />
                            <strong className="titulo"> {item.titulo} </strong>
                            <p className='texto'> {item.descripcion} </p>
                        </div>
                    ))
                )}
            </Slider>

        </div>
    );
}
