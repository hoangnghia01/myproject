import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import "./Contact.css"
import { Container } from 'react-bootstrap';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
function FormExample() {
    const [validated, setValidated] = useState(false);

    // const handleSubmit = (event) => {
    //     const form = event.currentTarget;
    //     if (form.checkValidity() === false) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //     }

    //     setValidated(true);
    //     emailjs.sendForm('service_21zch1a', 'template_n549ri7', form.current, '8BaRor5DETaDNRpiu')
    // };
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_21zch1a', 'template_n549ri7', form.current, '8BaRor5DETaDNRpiu')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div>
           
            <Container className='container_form'>
                {/* <Form noValidate validated={validated} onSubmit={handleSubmit} className='form_contact' ref={form}>
               <div className='form_label'>
               <h1>Liên hệ với chúng tôi</h1>
                <h5>Vui lòng liên hệ với chúng tôi nếu có bất kỳ câu hỏi hoặc thắc mắc nào.</h5>
               </div>
                <Row className="mb-3">
                    <Form.Group controlId="validationCustom01" className='form_group'>
                        <Form.Label>Họ*</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Nhập họ"
                            className='form_control'
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="validationCustom02" className='form_group'>
                        <Form.Label>Tên*</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Nhập tên"
                            className='form_control'
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="validationCustom02" className='form_group'>
                        <Form.Label>Email*</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="Email"
                            className='form_control'
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="validationCustom02" className='form_group'>
                        <Form.Label>Message*</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Nhập tin nhắn"
                            className='form_control_mes'
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Button type="submit" className='submit_form'>Submit form</Button>
            </Form> */}
                <div className='form_contact'>
                    <div className='form_label'>
                        <h1>Liên hệ với chúng tôi</h1>
                        <h5>Vui lòng liên hệ với chúng tôi nếu có bất kỳ câu hỏi hoặc thắc mắc nào.</h5>
                    </div>
                    <form ref={form} onSubmit={sendEmail} className='form_contact_input'>
                        <div className='form_group'>
                            <label>Name*</label>
                            <input type="text" name="user_name" placeholder="Nhập tên"/>
                        </div>

                        <div className='form_group'>
                            <label>Email*</label>
                            <input type="email" name="user_email" placeholder="Nhập email"/>
                        </div>
                        <div className='form_group'>
                            <label>Message*</label>
                            <textarea name="message" placeholder="Nhập tin nhan cho chung toi"/>
                        </div>
                        <input type="submit" value="Send" className='button_send' />
                    </form>
                </div>
            </Container>
           
        </div>
    );
}

export default FormExample;