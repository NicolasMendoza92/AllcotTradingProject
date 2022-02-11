import { useEffect } from 'react';
import "./about.css";
// Import efectos to scroll
import Aos from "aos";
import "aos/dist/aos.css";


export const Historia = () => {
    useEffect(() => {
        Aos.init({duration:2000});
    }, [])
    return (
        <div data-aos="fade-up" className="row gx-3 gy-2 p-3  historia-style ">
            <h1 className="text-center">¿Quienes somos?</h1>
            <div className="col-12 col-xxl-6 p-2">
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi architecto aliquid, inventore ratione temporibus laboriosam at, maiores vero quisquam dolorum nesciunt possimus numquam ullam quam vitae amet ipsa velit. Totam.</h4>
            </div>
            <div className="col-12 col-xxl-6 p-2">
                <h4> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam vitae iste dolore sint. Deleniti natus reprehenderit ipsa quidem quibusdam, sint nobis distinctio laboriosam. Distinctio officia laborum molestias inventore quas quae? </h4>
            </div>
        </div>
    )
}
