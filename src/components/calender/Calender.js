import React, { useState, useRef, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import viLocale from 'date-fns/locale/vi';
import './CalendarComponent.css'
import { Container } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';
export default function CalendarComponent() {
    const [dateState1, setDateState1] = useState(new Date());
    const [dateState2, setDateState2] = useState(() => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        return tomorrow;
    });

    const [showCalendar1, setShowCalendar1] = useState(false);
    const [showCalendar2, setShowCalendar2] = useState(false);
    const calendarRef1 = useRef();
    const calendarRef2 = useRef();

    const changeDate1 = (e) => {
        setDateState1(e);
        setShowCalendar1(false);
    };

    const changeDate2 = (e) => {
        if (e > dateState1) {
            setDateState2(e);
        }
        setShowCalendar2(false);
    };

    const tileContent = ({ date, view }) => {
        if (view === 'month') {
            if (date >= dateState1 && date <= dateState2) {
                return <div className="date-range-marker" />;
            }
        }
        return null;
    };

    const toggleCalendar1 = () => {
        setShowCalendar1(!showCalendar1);
    };

    const toggleCalendar2 = () => {
        setShowCalendar2(!showCalendar2);
    };

    const handleOutsideClick1 = (event) => {
        if (calendarRef1.current && !calendarRef1.current.contains(event.target)) {
            setShowCalendar1(false);
        }
    };

    const handleOutsideClick2 = (event) => {
        if (calendarRef2.current && !calendarRef2.current.contains(event.target)) {
            setShowCalendar2(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick1);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick1);
        };
    }, []);

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick2);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick2);
        };
    }, []);
    const [room1, setRoom1] = useState({ room: 1, adults: 1, children: 0 });
    const handleRoomChange = (value) => {
        setRoom1({ ...room1, room: value });
    };

    const handleAdultChange = (value) => {
        setRoom1({ ...room1, adults: value });
    };

    const handleChildrenChange = (value) => {
        setRoom1({ ...room1, children: value });
    };

    const handleIncrement = (field) => {
        switch (field) {
            case 'room':
                handleRoomChange(room1.room + 1);
                break;
            case 'adults':
                handleAdultChange(room1.adults + 1);
                break;
            case 'children':
                handleChildrenChange(room1.children + 1);
                break;
            default:
                break;
        }
    };

    const handleDecrement = (field) => {
        switch (field) {
            case 'room':
                handleRoomChange(Math.max(room1.room - 1, 0));
                break;
            case 'adults':
                handleAdultChange(Math.max(room1.adults - 1, 0));
                break;
            case 'children':
                handleChildrenChange(Math.max(room1.children - 1, 0));
                break;
            default:
                break;
        }
    };
    

    const [show, setShow] = useState(false)
    const handle_click = () => {
        setShow(!show)
    }
    const handle_click_close = () => {
        setShow(false)
    }
    // console.log(show)
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
    return (
        
            <div className='containerBooking'>
                <h1>Book Now</h1>
                <h4>Check in</h4>
                <input className='inputDay'
                    type="text"
                    value={moment(dateState1).format('MMMM Do YYYY')}
                    onClick={toggleCalendar1}
                    readOnly
                />
                {showCalendar1 && (
                    <div ref={calendarRef1}>
                        <Calendar
                            locale={viLocale}
                            value={dateState1}
                            onChange={changeDate1}
                        />
                    </div>
                )}
                <br />
                <h4>Check out</h4>
                <input className='inputDay'
                    type="text"
                    value={moment(dateState2).format('MMMM Do YYYY')}
                    onClick={toggleCalendar2}
                    readOnly
                />
                {showCalendar2 && (
                    <div ref={calendarRef2}>
                        <Calendar
                            locale={viLocale}
                            value={dateState2}
                            onChange={changeDate2}
                            minDate={dateState1}
                            tileContent={tileContent}
                        />
                    </div>
                )}
                <Container className='containerSelection'>
                    <h4>Rooms</h4>
                    <div className='containerSelection_sel'>
                        <button onClick={() => handleDecrement('room')}>-</button>
                        <input className='selection'
                            type="number"
                            value={room1.room}
                            onChange={(event) => handleRoomChange(event.target.value)}
                        />
                        <button onClick={() => handleIncrement('room')}>+</button>
                    </div>
                    <h4>Adults</h4>
                    <div className='containerSelection_sel'>
                        <button onClick={() => handleDecrement('adults')}>-</button>
                        <input className='selection'
                            type="number"
                            value={room1.adults}
                            onChange={(event) => handleAdultChange(event.target.value)}
                        />
                        <button onClick={() => handleIncrement('adults')}>+</button>
                    </div>
                    <h4>Children</h4>
                    <div className='containerSelection_sel'>
                        <button onClick={() => handleDecrement('children')}>-</button>
                        <input className='selection'
                            type="number"
                            value={room1.children}
                            onChange={(event) => handleChildrenChange(event.target.value)}
                        />
                        <button onClick={() => handleIncrement('children')}>+</button>
                    </div>
                </Container>
                <button className='button_booknow' onClick={handle_click}>Book now</button>

                <div className={`containerInfoGuests ${show ? "active" : ""}`}>
                    <h1>Booking</h1>
                    <p>Check in: {moment(dateState1).format('MMMM Do YYYY')}</p>
                    <p>Check out: {moment(dateState2).format('MMMM Do YYYY')}</p>
                    <p>Số lượng phòng: {room1.room}</p>
                    <p>Số người lớn: {room1.adults}</p>
                    <p>Số trẻ em: {room1.children}</p>
                    <form ref={form} onSubmit={sendEmail} className='form_booking_input'>
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
                        <button className='back' onClick={handle_click_close}>Back</button>
                        <input type="submit" value="Booking" className='button_booking' />
                    </form>
                </div>
            </div>

        


    );
}
