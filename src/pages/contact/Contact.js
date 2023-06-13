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
function FormExample() {
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
        <div>
            <Header />
            <Container className='container_form'>
            <Form noValidate validated={validated} onSubmit={handleSubmit} className='form_contact'>
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
            </Form>
            </Container>
            <Footer />
        </div>
    );
}

export default FormExample;