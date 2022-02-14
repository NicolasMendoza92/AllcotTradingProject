import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { FormContact } from '../components/formContact/FormContact'

function Contact() {

    const [verMas, setVerMas] = useState(false);
    const extraContent = (
        <>
           
            <span className="text-center text-md-start px-5 px-md-0 pe-md-5 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo nihil mollitia veritatis molestias, est vel pariatur similique, tenetur placeat eveniet esse! Velit delectus minima soluta quisquam tenetur, facilis aliquam placeat.</span>
        </>
    );
    const linkContent = verMas ? "<< Ver menos" : "Ver más >>";
    const verMasClick = (e) => {
        setVerMas(!verMas);
    };
    return (
        <div className="container-contact" >
            <Container>
                <section className="row  row-cols-1 row-cols-lg-2">
                    <div className="text-format d-flex flex-column aling-items-center align-items-md-start pb-0">
                        <h1>Contacta con nuestros Traders</h1>
                        <h5 className=" px-5 px-md-0 pe-md-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium amet possimus corrupti sequi asperiores excepturi, a accusantium, voluptatum quam accusamus iusto hic laborum impedit, quaerat dignissimos distinctio ad error quis!</h5>
                        <h5 className="px-5 px-md-0 pe-md-5 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti blanditiis inventore nam vero eos accusamus porro possimus necessitatibus quo id pariatur sed perferendis ipsum quidem error earum, placeat animi saepe.</h5>
                        {verMas && extraContent}

                        <p onClick={verMasClick} className="ver-mas">{linkContent}</p>
                    </div>
                    <Container className="m-auto">
                        <FormContact />
                    </Container>
                </section>
            </Container>
        </div>
    )
}

export default Contact