import  { useEffect } from 'react'
import { Carousel } from 'react-bootstrap'
import Aos from "aos";
import "aos/dist/aos.css";

export const HistoriaCards = () => {
    useEffect(() => {
        Aos.init({duration:2000});
    }, [])

    return (
        <div className="row gx-3 gy-2 p-3 mb-2 historia-style">
            <h1 data-aos="fade-up" className="text-center ">¿Que hacemos?</h1>
            <div data-aos="fade-up"  className="col-12 col-xxl-6 p-3 ">
                <h4 className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi architecto aliquid, inventore ratione temporibus laboriosam at, maiores vero quisquam dolorum nesciunt possimus numquam ullam quam vitae amet ipsa velit. Totam.</h4>
                <h4 style={{ color: '#b59062' }} ><b>¿En donde estamos?</b></h4>
                <h4 className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi architecto aliquid, inventore ratione temporibus laboriosam at, maiores vero quisquam dolorum nesciunt possimus numquam ullam quam vitae amet ipsa velit. Totam.</h4>

            </div>
            <div data-aos="fade-up" className="col-12 col-xxl-6 p-3 ">
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1644863866/Allcot%20Trading/digital-screen-with-environment-day-1-scaled_ml3hrw.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1644864162/Allcot%20Trading/Equipo_trading_zcdad0.jpg"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://res.cloudinary.com/dbv6dgwez/image/upload/v1644864500/Allcot%20Trading/Equipo_2_zmgg1i.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}
