import React, { useRef, useState } from "react";
import "./Home.css"

import biaweb from "../imgs/biaweb.jpeg"
import hinhnen from "../imgs/hinhnen.jpeg"
import hinhnen2 from "../imgs/hinhnen2.jpeg"
import hinh2 from "../imgs/baner_room.jpg"
import { AiOutlineSafetyCertificate } from 'react-icons/ai';
// import { MdPool } from 'react-icons/md';
import { FaChevronRight, FaChevronLeft, FaSwimmingPool } from 'react-icons/fa';
import { MdGroups, MdOutlineLocalLaundryService } from 'react-icons/md';
import { IoBedOutline, IoMdCar, IoRestaurantOutline } from 'react-icons/io5';
import { LuParkingCircle } from 'react-icons/lu';
import One_Bedroom from "../imgs/One_Bedroom.jpeg"
import { BsChevronRight } from 'react-icons/bs';
import { BiSpa } from 'react-icons/bi';
import { CgGym } from 'react-icons/cg';
import { LuConciergeBell } from 'react-icons/lu';
import Slider from "../../components/slider1/Slider"
import Card_product from "../../components/products/card_product/Card_product"
import { Container, Carousel, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import Calender from "../../components/calender/Calender.js";
import { useContext } from "react"
import { AppContext } from "../../AppContext"

export default function Home() {
    const { blog, solusions, products } = useContext(AppContext);
    const [selectedDate, setSelectedDate] = useState(null);
    const imagesbaner = [
        biaweb, hinhnen, hinhnen2
    ]
    return (
        <div>
            <main>
                <div>
                    <div className="home_slider">
                        <Slider images={imagesbaner} autoSlideInterval={5000} />
                        <div className="con_content_slider">
                            <h2>CĂN HỘ KHÁCH SẠN APEC MŨI NÉ</h2>
                        </div>
                    </div>
                    <div className="why_choose_utilities">
                        <div className="con_why_choose_utilities">
                            <Container>
                                {/* <h1>Dịch vụ</h1> */}
                                <div className="con_why_choose_title_utilities">
                                    <h1>CÁC TIỆN ÍCH TẠI APEC MŨI NÉ</h1>
                                    <p>- - - - - - - - - -</p>
                                    <h6>Tinh tế từ thiết kế đến tiện nghi, cho dù bạn đi du lịch để thư giãn, nạp lại năng lượng hay nuông chiều bản thân, đội ngũ của chúng tôi cam kết mang đến một kỳ nghỉ mà bạn sẽ không bao giờ quên.</h6>
                                </div>
                                <div className="utilities">
                                    <div className="utilitie" data-aos="fade-up" data-aos-duration="500">
                                        <div className="reason_icon"><LuParkingCircle /></div>
                                        <h6>Parking</h6>
                                    </div>
                                    <div className="utilitie" data-aos="fade-up" data-aos-duration="700">
                                        <div className="reason_icon"><AiOutlineSafetyCertificate /></div>
                                        <h6>Safe</h6>
                                    </div>
                                    <div className="utilitie" data-aos="fade-up" data-aos-duration="900">
                                        <div className="reason_icon"><FaSwimmingPool /></div>
                                        <h6>Swimming Pool</h6>
                                    </div>
                                    <div className="utilitie" data-aos="fade-up" data-aos-duration="1100">
                                        <div className="reason_icon"><BiSpa /></div>
                                        <h6>Spa</h6>
                                    </div>
                                    <div className="utilitie" data-aos="fade-up" data-aos-duration="1100">
                                        <div className="reason_icon" ><IoRestaurantOutline /></div>
                                        <h6>Restaurant</h6>
                                    </div>
                                </div>
                                <div className="utilities">
                                    <div className="utilitie" data-aos="fade-up" data-aos-duration="500">
                                        <div className="reason_icon"><MdOutlineLocalLaundryService /></div>
                                        <h6>In-house Laundry</h6>
                                    </div>
                                    <div className="utilitie" data-aos="fade-up" data-aos-duration="700">
                                        <div className="reason_icon"><CgGym /></div>
                                        <h6>Gym</h6>
                                    </div>
                                    <div className="utilitie" data-aos="fade-up" data-aos-duration="700">
                                        <div className="reason_icon"><LuConciergeBell /></div>
                                        <h6>Room Service</h6>
                                    </div>
                                </div>
                            </Container>

                        </div>
                    </div>
                    <div className="classify_rooms">
                        <div className="con_classify_rooms">
                            <Container>
                                <div className="con_classify_rooms_title">
                                    <h1>Căn hộ Apec</h1>
                                    <p>- - - - - - -</p>

                                </div>
                                <div className="classify_rooms_items">
                                    <div className="rooms_item" data-aos="fade-up" data-aos-duration="500">
                                        <Link to={"/"}>
                                            <div className="rooms_item_img"><img src={One_Bedroom} /></div>
                                            <div className="rooms_item_content">
                                                <h3>Phòng 1 giường</h3>
                                                <div className="rooms_item_content_icon">
                                                    <IoBedOutline className="icon" />
                                                    <p>1 King Bed</p>
                                                    <MdGroups className="icon" />
                                                    <p>1 Guests</p>
                                                </div>

                                                <p className="xemthem">Xem thêm <BsChevronRight /></p>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="rooms_item" data-aos="fade-up" data-aos-duration="700">
                                        <Link to={"/"}>
                                            <div className="rooms_item_img"><img src={One_Bedroom} /></div>
                                            <div className="rooms_item_content">
                                                <h3>Phòng 2 giường</h3>
                                                <div className="rooms_item_content_icon">
                                                    <IoBedOutline className="icon" />
                                                    <p>2 Bed</p>
                                                    <MdGroups className="icon" />
                                                    <p>3-5 Guests</p>
                                                </div>

                                                <p className="xemthem">Xem thêm <BsChevronRight /></p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="rooms_item" data-aos="fade-up" data-aos-duration="900">
                                        <Link to={"/"}>
                                            <div className="rooms_item_img"><img src={One_Bedroom} /></div>
                                            <div className="rooms_item_content">
                                                <h3>Phòng 3 giường</h3>
                                                <div className="rooms_item_content_icon">
                                                    <IoBedOutline className="icon" />
                                                    <p>3 Bed</p>
                                                    <MdGroups className="icon" />
                                                    <p>5-7 Guests</p>
                                                </div>
                                                <p className="xemthem">Xem thêm <BsChevronRight /></p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="rooms_item" data-aos="fade-up" data-aos-duration="1100">
                                        <Link to={"/"}>
                                            <div className="rooms_item_img"><img src={One_Bedroom} /></div>
                                            <div className="rooms_item_content">
                                                <h3>Phòng King</h3>
                                                <div className="rooms_item_content_icon">
                                                    <IoBedOutline className="icon" />
                                                    <p>1 King Bed</p>
                                                    <MdGroups className="icon" />
                                                    <p>1 Guests</p>
                                                </div>

                                                <p className="xemthem">Xem thêm <BsChevronRight /></p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <p className="con_classify_rooms_viewall"><p>Xem tất cả</p><BsChevronRight /></p>
                            </Container>

                        </div>
                    </div>

                    <div className="rooms">
                        <div className="con_rooms">
                            <Container>
                                <div className="rooms_items">
                                    <div >
                                        <h1>Căn hộ một giường ngủ</h1>
                                        <div className="con_rooms_items">
                                            <Row className="row" data-aos="fade-right">
                                            {products
                                                .filter(item => item.type === '1 giường')
                                                .map((item, index) => (
                                                    <Col xs={12} sm={12} lg={6} md={6} key={index}>
                                                        <Card_product product={item} />
                                                    </Col>
                                                ))}
                                            </Row>
                                        </div>
                                        <h5>Xem tất cả <BsChevronRight /></h5>
                                    </div>
                                    <div className="rooms_items_homepage">
                                        <h1>Căn hộ hai giường ngủ</h1>
                                        <div className="con_rooms_items">
                                        <Row className="row" data-aos="fade-right">
                                            {products
                                                .filter(item => item.type === '2 giường')
                                                .map((item, index) => (
                                                    <Col xs={12} sm={12} lg={6} md={6} key={index}>
                                                        <Card_product product={item} />
                                                    </Col>
                                                ))}
                                            </Row>
                                        </div>
                                        <h5>Xem tất cả <BsChevronRight /></h5>
                                    </div>
                                    <div className="rooms_items_homepage">
                                        <h1>Xem thêm các phòng khác</h1>
                                        <div className="con_rooms_items">
                                        <Row className="row" data-aos="fade-right">
                                            {products.map((item, index) => (
                                                    <Col xs={12} sm={12} lg={6} md={6} key={index}>
                                                        <Card_product product={item} />
                                                    </Col>
                                                ))}
                                            </Row>
                                        </div>
                                        <h5>Xem tất cả <BsChevronRight /></h5>
                                    </div>
                                </div>
                                <div className="advertisement">
                                    <div className="advertisement_booknow" data-aos="fade-left">
                                        {/* <DatePickerProvider>
                                            <Calender />
                                        </DatePickerProvider> */}
                                        <Calender />
                                    </div>
                                </div>
                            </Container>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}