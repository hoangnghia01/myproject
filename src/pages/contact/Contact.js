import { useState } from 'react';
import "./Contact.css"
import { AiOutlinePhone } from 'react-icons/ai';
import { MdOutlineMail } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';

import { Container } from 'react-bootstrap';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';
import baner_contact from "../../pages/imgs/baner_contact.jpg"

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
    const backgroundStyle1 = {
        backgroundImage: `url(${baner_contact})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
    };
    return (
        <div>
            <div style={backgroundStyle1} className="baner_contact" data-aos="fade-down">
                <Container>
                    <h1>Contact</h1>
                </Container>
            </div>
            <div className="info_contact" data-aos="fade-down">
                <Container>
                    <div className='contact'>
                        <div className='contact_icon'>
                            <AiOutlinePhone/>
                        </div>
                        <h3>Phone</h3>
                        <h6>097 977 2145</h6>
                    </div>
                    <div className='contact'>
                        <div className='contact_icon'>
                            <MdOutlineMail/>
                        </div>
                        <h3>Email</h3>
                        <h6>datphongmuine@gmail.com</h6>
                    </div>
                    <div className='contact'>
                        <div className='contact_icon'>
                            <CiLocationOn/>
                        </div>
                        <h3>Location</h3>
                        <h6>097 977 2145</h6>
                    </div>
                </Container>
            </div>
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
                            {/* <label>Name*</label> */}
                            <input type="text" name="user_name" placeholder="Họ & tên*" />
                        </div>
                        <div className='form_group'>
                            {/* <label>Sdt*</label> */}
                            <input type="number" name="user_phone" placeholder="Số điện thoại*" />
                        </div>
                        <div className='form_group'>
                            {/* <label>Email*</label> */}
                            <input type="email" name="user_email" placeholder="Email*" />
                        </div>
                        <div className='form_group'>
                            {/* <label>Message*</label> */}
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
