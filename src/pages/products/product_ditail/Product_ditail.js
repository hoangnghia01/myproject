import React, { useEffect, useState, useContext } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { AppContext } from "../../../AppContext";
import "./Product_ditail.css";
import Card_product from "../../../components/products/card_product/Card_product";
import Slider from "../../../components/slider1/Slider";
import { LuView } from 'react-icons/lu';
import { TfiDesktop } from 'react-icons/tfi';
import { AiOutlineWifi } from 'react-icons/ai';
import { BsSafe } from 'react-icons/bs';
import { GiShower, GiRotaryPhone } from 'react-icons/gi';
import { TbAirConditioning } from 'react-icons/tb';
import { AiOutlineSafetyCertificate } from 'react-icons/ai';
import { FaChevronRight, FaChevronLeft, FaSwimmingPool } from 'react-icons/fa';
import { MdGroups, MdOutlineLocalLaundryService } from 'react-icons/md';
import { IoBedOutline, IoMdCar, IoRestaurantOutline } from 'react-icons/io5';
import { LuParkingCircle } from 'react-icons/lu';
import { BsArrowsFullscreen } from 'react-icons/bs';
import { BiSpa } from 'react-icons/bi';
import { CgGym } from 'react-icons/cg';
import { LuConciergeBell } from 'react-icons/lu';

import baner_room from "../../imgs/baner_room.jpg";
import hinh1 from "../../imgs/baner_contact.jpg";
import hinh2 from "../../imgs/biaweb.jpeg";
import hinh3 from "../../imgs/slider_hospital.png";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Product_ditail() {
    const { products, addCart } = useContext(AppContext);
    const [product, setProduct] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const location = useLocation();
    const path = location.pathname;
    const id = path.substring(path.lastIndexOf("/") + 1);

    useEffect(() => {
        const foundProduct = products.find((item) => item.id === parseInt(id));
        setProduct(foundProduct);
    }, [id, products]);


    const backgroundStyle = {
        backgroundImage: `url(${baner_room})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
    };
    const images = [
        baner_room,
        hinh1
    ];


    return (
        <div className="product_ditail_page">
            <div style={backgroundStyle} className="baner_room" data-aos="fade-down">
                <Container>
                    <h1>Room</h1>
                </Container>
            </div>
            <Container className="container-product_ditail">
                <div className="product_ditail_top">
                    <div className="product_ditail_top_img" data-aos="zoom-in">
                        {product && product.img_rooms && (
                            <Slider images={product.img_rooms} autoSlideInterval={5000} />
                        )}
                    </div>
                    <div data-aos="fade-left" className="product_ditail_top_content">
                        <div className="product_ditail_top_content_name"><h1>{product ? product.name : ""}</h1></div>
                        <div className="product_ditail_top_content_price"><span>Từ {product ? product.price : ""}<span>/đêm</span></span></div>
                        <div className="rooms_item_content_icon_ditail">
                            <IoBedOutline className="icon" />
                            <span> <h6>Bed</h6><p><span>{product ? product.bed : ""}</span> King Bed</p></span>
                            <MdGroups className="icon" />
                            <span> <h6>Max Guest</h6><p><span>{product ? product.max_guest : ""}</span> Guest</p></span>
                        </div>
                        <div className="rooms_item_content_icon_ditail">
                            <BsArrowsFullscreen className="icon" />
                            <span> <h6>Room Space</h6><p><span>{product ? product.soom_space : ""}</span>m2</p></span>
                            <LuView className="icon" />
                            <span> <h6>Room View</h6><p><span>{product ? product.view : ""}</span> View</p></span>
                        </div>
                        <div className="product_ditail_top_content_code"></div>
                        <div className="product_ditail_top_content_origin"></div>
                        <button className="product_ditail_top_content_add_cart">Liên hệ đặt phòng ngay
                            <span className="product_ditail_top_content_add_cart_before">{product ? product.phone : ""}</span>
                        </button>
                    </div>
                </div>
                <div className="product_ditail_bottom" data-aos="fade-up">
                    <h2>Chi tiết phòng</h2>
                    <p>{product ? product.description : ""}</p>
                </div>
                <div className="product_ditail_room_amenities" data-aos="fade-up">
                    <h2>Tiện ích trong phòng</h2>
                    <ul>
                        <li><p><TfiDesktop /></p><span>Tivi</span></li>
                        <li><p><AiOutlineWifi /></p><span>Wifi</span></li>
                        <li><p><BsSafe /></p><span>Safe</span></li>
                        <li><p><GiShower /></p><span>Hot water</span></li>
                        <li><p><TbAirConditioning /></p><span>Air-Conditioning</span></li>
                        <li><p><GiRotaryPhone /></p><span>Phone</span></li>
                        <li><p><TfiDesktop /></p><span>Tivi</span></li>
                    </ul>
                </div>
                <div className="product_ditail_room_amenities" data-aos="fade-up">
                    <h2>Tiện ích Apec</h2>
                    <ul>
                        <li><p><LuParkingCircle /></p><span>Parking</span></li>
                        <li><p><AiOutlineSafetyCertificate /></p><span>Safe</span></li>
                        <li><p><FaSwimmingPool /></p><span>Swimming Pool</span></li>
                        <li><p><BiSpa /></p><span>Spa</span></li>
                        <li><p><IoRestaurantOutline /></p><span>Restaurant</span></li>
                        <li><p><MdOutlineLocalLaundryService /></p><span>In-house Laundry</span></li>
                        <li><p><CgGym /></p><span>Gym</span></li>
                        <li><p><LuConciergeBell /></p><span>Room Service</span></li>
                    </ul>
                </div>
                <div>
                    <nav className="product_ditail_bottom_list">
                        <Container >
                            <h2 className="product_ditail_bottomList">Xem thêm các phòng tương tự</h2>
                            <Row className="row">
                                {/* <h1 style={{color: "red"}}>{param.style}</h1> */}
                                {products && products.map((item, index) =>
                                (
                                    <Col xs={12} sm={6} lg={4} md={6}>
                                        <Card_product key={index} product={item} />
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </nav >
                </div>
            </Container>
        </div>
    );
}

