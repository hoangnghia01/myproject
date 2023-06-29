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
import swal from 'sweetalert';
import contactbackground from "../../components/imgs/baner_solusion/contact_background.jpg"
function Contact() {
    const form = useRef();
    const [formError, setFormError] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        // Kiểm tra các ô input trước khi gửi form
        const name = form.current.user_name.value;
        const phone = form.current.user_phone.value;
        const email = form.current.user_email.value;
        const message = form.current.message.value;

        if (!name || !phone || !email || !message) {
            setFormError(true);
            return;
        }

        emailjs
            .sendForm('service_21zch1a', 'template_n549ri7', form.current, '8BaRor5DETaDNRpiu')
            .then(
                (result) => {
                    console.log(result.text);
                    swal({
                        title: "Cám ơn bạn!",
                        text: "Chúng tôi đã nhận được tin nhắn của bạn!",
                    });
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    const backgroundStyle = {
        backgroundImage: `url(${contactbackground})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
    };
    return (
        <div  style={backgroundStyle}>
            <Container className='container_form' data-aos="zoom-in">
                <div className='form_contact'>
                    <Container>
                        <div className='form_label'>
                            <h2>Liên hệ với chúng tôi</h2>
                            <h5>Vui lòng liên hệ với chúng tôi nếu có bất kỳ câu hỏi hoặc thắc mắc nào.</h5>
                        </div>
                    </Container>
                    <form ref={form} onSubmit={sendEmail} className='form_contact_input'>
                        <div className='form_group'>
                            <label>Name*</label>
                            <input type="text" name="user_name" placeholder="Nhập tên" />
                        </div>
                        <div className='form_group'>
                            <label>Sdt*</label>
                            <input type="number" name="user_phone" placeholder="Nhập sdt" />
                        </div>
                        <div className='form_group'>
                            <label>Email*</label>
                            <input type="email" name="user_email" placeholder="Nhập email" />
                        </div>
                        <div className='form_group'>
                            <label>Message*</label>
                            <textarea name="message" placeholder="Nhập tin nhắn cho chúng tôi" />
                        </div>
                        {formError && <p className="error-message">Vui lòng điền đầy đủ thông tin</p>}
                        <input type="submit" value="Gửi" className='button_send' />
                    </form>
                </div>
            </Container>
        </div>
    );
}

export default Contact;
