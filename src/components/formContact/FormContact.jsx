
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import './formsStyles.css'


export const FormContact = () => {
    // Validaciones reactBoot
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setValidated(true);
      };

return (
    <Form
        noValidate validated={validated}
        className="form-styles my-5"
        onSubmit={handleSubmit}
    >
        <Form.Group className="mb-3 row align-items-center justify-content-center">
            <label className="text-center col-11 col-md-3">Nombre </label>
            <Form.Control
                className="col-11 col-md-9 form-input form-with-input"
                type="text"
                name="senderName"
                required
                maxLength="30"
            />
        </Form.Group>
        <Form.Group className="mb-3 row align-items-center justify-content-center">
            <label className="text-center col-11 col-md-3 align-items-center">Email</label>
            <Form.Control
                className="col-11 col-md-9 form-input form-with-input"
                type="email"
                name="senderEmail"
                required
                maxLength="35"
            />
        </Form.Group>
        <Form.Group className="mb-3 row align-items-center justify-content-center ">
            <Form.Control
                className="col-11 col-md-12 form-input form-with-text-area"
                placeholder="Dejanos un mensaje aqui..."
                as="textarea"
                name="message"
                required
                minLength="15"
                maxLength="200"
                rows={3}
            />
        </Form.Group>
        <hr />
        <div className="d-flex flex-column align-items-center align-items-md-start justify-content-center">
            <button className="btn-general-style">Contactanos</button>
        </div>
    </Form>
)
}
