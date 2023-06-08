import Header from "../../components/header/Header"
import Headers from "../../components/header/Headers"
import Footer from "../../components/footer/Footer"
import "./Home.css"
import hospital1 from "../imgs/hospital1.jpg"
import slider_hospital from "../imgs/slider_hospital.png"
import baner_solusion_2 from "../imgs/baner_solusion_2.png"
import hospital_solusion_img from "../imgs/hospital_solusion_img.png"
import { Container, Carousel } from "react-bootstrap"
import { Link } from "react-router-dom"
import { BiChevronRight } from 'react-icons/bi';
import { TbFileLike, TbH5 } from 'react-icons/tb';
import { FcServices, FcBullish, FcBriefcase } from 'react-icons/fc';
import { FiChevronsRight } from 'react-icons/fi';

import { BsFillFileEarmarkMedicalFill } from 'react-icons/bs';

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import Swiper from "swiper"
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import { Autoplay } from "swiper";


export default function Home() {
    return (
        <div>
            <Header />
            {/* <Headers/> */}
            <main>
                <div>
                    <div className="slider">
                        {/* <Carousel variant="dark" className="con_slider">
                            <Carousel.Item className="item_slider">
                                <img
                                    className="d-block w-100"
                                    src={hospital1}
                                    alt="First slide"
                                />
                                <Carousel.Caption className="info_item">
                                    <h2>Industry Leading Managed Services and Staffing Solutions</h2>
                                    <p>Proven methods to capture business priorities and goals as well as current pain points that enables measurable business outcomes.</p>
                                    <button className="learn_more">Xem them</button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={hospital1}
                                    alt="Second slide"
                                />
                                <Carousel.Caption className="info_item">
                                    <h2>Industry Leading Managed Services and Staffing Solutions</h2>
                                    <p>Proven methods to capture business priorities and goals as well as current pain points that enables measurable business outcomes.</p>
                                    <button className="learn_more">Xem them</button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={hospital1}
                                    alt="Third slide"
                                />
                                <Carousel.Caption className="info_item">
                                    <h2>Industry Leading Managed Services and Staffing Solutions</h2>
                                    <p>Proven methods to capture business priorities and goals as well as current pain points that enables measurable business outcomes.</p>
                                    <button className="learn_more">Xem them</button>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel> */}
                        <img src={slider_hospital}></img>
                        <div className="content_slider">
                            <Container>
                                <div className="con_content_slider">
                                    <h2>Industry Leading Managed Services and Staffing Solutions</h2>
                                    <p>Proven methods to capture business priorities and goals as well as current pain points that enables measurable business outcomes.</p>
                                    <h4>--- -</h4>
                                    <Link to={"/"}>Learn more</Link>
                                </div>
                            </Container>
                        </div>
                    </div>
                    <div className="why_choose">
                        <div className="con_why_choose">
                            <Container>
                                <h1>Lý do bạn nên chọn chúng tôi</h1>
                                <div className="reasons">

                                    <div className="reason">
                                        <Link to={"/"}>
                                            <div className="reason_icon" style={{ color: "orange", fontSize: "30px" }}><FcBriefcase /></div>
                                            <h6>Chuyên môn và kinh nghiệm</h6>
                                            <p>Chúng tôi hiểu rõ các yêu cầu và thách thức của ngành công nghiệp và sẵn sàng đưa ra các giải pháp phù hợp.</p>
                                        </Link>
                                    </div>
                                    <div className="reason">
                                        <Link to={"/"}>
                                            <div className="reason_icon" style={{ fontSize: "30px" }}><FcServices /></div>
                                            <h6>Sản phẩm và dịch vụ</h6>
                                            <p>Chúng tôi cam kết cung cấp sản phẩm và dịch vụ chất lượng cao, đáng tin cậy và đáp ứng tiêu chuẩn quốc tế.</p>
                                        </Link>
                                    </div>
                                    <div className="reason">
                                        <Link to={"/"}>
                                            <div className="reason_icon" style={{ color: "orange", fontSize: "30px" }}><TbFileLike /></div>
                                            <h6>Độ tin cậy và hỗ trợ</h6>
                                            <p>Chúng tôi đặt sự tin tưởng và hỗ trợ khách hàng lên hàng đầu.</p>
                                        </Link>
                                    </div>
                                    <div className="reason">
                                        <Link to={"/"}>
                                            <div className="reason_icon" style={{ color: "orange", fontSize: "30px" }}><FcBullish /></div>
                                            <h6>Giá trị và hiệu quả</h6>
                                            <p>Chúng tôi cam kết mang đến giá trị thực và hiệu quả cho khách hàng. </p>
                                        </Link>
                                    </div>
                                </div>
                            </Container>
                        </div>
                    </div>
                    <div className="solusion_home" >
                        <div className="solusion_home_hospital">
                            <Container className="con_solusion_home">
                                <div className="solusion_home_info">
                                    <h2>Giải pháp toàn diện cho bệnh viện</h2>
                                    <h4 style={{ color: "orange" }}>--- -</h4>
                                    <p>Chúng tôi cung cấp các giải pháp công nghệ đa dạng cho bệnh viện nhằm nâng cao hiệu quả và đảm bảo an ninh, an toàn cho bệnh nhân và nhân viên y tế. </p>
                                    <ul>
                                        <li><Link to={"/"} style={{ background: "linear-gradient(-45deg, #eb6424, #fbba72)" }}><BiChevronRight /><span>Chuông gọi nhân viên y tế</span></Link></li>
                                        <li>
                                            <Link to={"/"}><BiChevronRight /><span>Chuông báo gọi trong nhà vệ sinh</span></Link></li>
                                    </ul>
                                    <ul>
                                        <li><Link to={"/"}><BiChevronRight /><span>Chuông báo khẩn cấp</span></Link></li>
                                        <li>
                                            <Link to={"/"}><BiChevronRight /><span>Hệ thống báo động đỏ</span></Link></li>
                                    </ul>
                                </div>
                                <div className="solusion_home_img">
                                    <img src={hospital_solusion_img} />
                                </div>
                            </Container>
                        </div>
                        <div className="solusion_home_restaurant">
                            <Container className="con_solusion_home">
                                <div className="solusion_home_img">
                                    <img src={baner_solusion_2} />
                                </div>
                                <div className="solusion_home_info">
                                    <h2>Giải pháp chuông gọi cho nhà hàng</h2>
                                    <h4 style={{ color: "orange" }}>--- -</h4>
                                    <p>Với giải pháp chuông gọi toàn diện của chúng tôi, nhà hàng có thể tận dụng công nghệ để nâng cao hiệu suất hoạt động và mang đến trải nghiệm tốt hơn cho khách hàng. </p>
                                    <ul>
                                        <li><Link to={"/"} style={{ background: "linear-gradient(-45deg, #eb6424, #fbba72)" }}><BiChevronRight /><span>Chuông gọi nhân viên phục vụ</span></Link></li>
                                    </ul>
                                    <ul>
                                        <li><Link to={"/"}><BiChevronRight /><span>Hệ thống gọi số thứ tự</span></Link></li>
                                    </ul>
                                </div>
                            </Container>
                        </div>
                        <div className="solusion_home_pager">
                            <Container className="con_solusion_home">
                                <div className="solusion_home_info">
                                    <h2>Thẻ rung tự phục vụ</h2>
                                    <h4 style={{ color: "orange" }}>--- -</h4>
                                    <p>
                                        Thẻ rung tự phục vụ là một giải pháp công nghệ tiên tiến giúp cải thiện trải nghiệm khách hàng và quản lý dịch vụ trong các ngành công nghiệp như nhà hàng, quán cà phê, quầy phục vụ, quầy thu ngân, nhà sách, và nhiều nơi khác.  </p>
                                    <ul>
                                        <li><Link to={"/"} style={{ background: "linear-gradient(-45deg, #eb6424, #fbba72)" }}><BiChevronRight /><span>Chuông gọi nhân viên y tế</span></Link></li>
                                        <li><Link to={"/"}><BiChevronRight /><span>Chuông báo gọi trong nhà vệ sinh</span></Link></li>
                                    </ul>
                                    <ul>
                                        <li><Link to={"/"}><BiChevronRight /><span>Chuông báo khẩn cấp</span></Link></li>
                                        <li><Link to={"/"}><BiChevronRight /><span>Hệ thống báo động đỏ</span></Link></li>
                                    </ul>
                                </div>
                                <div className="solusion_home_img">
                                    <img src={hospital_solusion_img} />
                                </div>
                            </Container>
                        </div>
                    </div>
                    <div className="solusion_other">
                        <Container>
                            <div className="container_solusion_other">


                                <div className="title_solusion_other">
                                    <h2>Các giải pháp khác</h2>
                                    <p>Chúng tôi cung cấp một loạt các giải pháp công nghệ để nâng cao hiệu suất và trải nghiệm khách hàng. Dưới đây là một số ví dụ về các giải pháp khác mà chúng tôi cung cấp:</p>
                                </div>
                                <div className="solusion_other_con">
                                    <div className="solusion_other_con_card">
                                        <div className="solusion_other_con_card_img">img</div>
                                        <div className="solusion_other_con_card_title">
                                            <h5>Solusion</h5>
                                        </div>
                                        <div className="solusion_other_con_card_content">
                                            <p>Proin arcu ligula, malesuada id tincidunt laoreet, facilisis at justo. Sed at lorem.</p>
                                        </div>
                                    </div>
                                    <div className="solusion_other_con_card">
                                        <div className="solusion_other_con_card_img">img</div>
                                        <div className="solusion_other_con_card_title">
                                            <h5>Solusion</h5>
                                        </div>
                                        <div className="solusion_other_con_card_content">
                                            <p>Proin arcu ligula, malesuada id tincidunt laoreet, facilisis at justo. Sed at lorem.</p>
                                        </div>
                                    </div>
                                    <div className="solusion_other_con_card">
                                        <div className="solusion_other_con_card_img">img</div>
                                        <div className="solusion_other_con_card_title">
                                            <h5>Solusion</h5>
                                        </div>
                                        <div className="solusion_other_con_card_content">
                                            <p>Proin arcu ligula, malesuada id tincidunt laoreet, facilisis at justo. Sed at lorem.</p>
                                        </div>
                                    </div>
                                    <div className="solusion_other_con_card">
                                        <div className="solusion_other_con_card_img">img</div>
                                        <div className="solusion_other_con_card_title">
                                            <h5>Solusion</h5>
                                        </div>
                                        <div className="solusion_other_con_card_content">
                                            <p>Proin arcu ligula, malesuada id tincidunt laoreet, facilisis at justo. Sed at lorem.</p>
                                        </div>
                                    </div>
                                </div>
                                <Link to={"/"} className="home_button_allsolusion">Xem tat ca <FiChevronsRight /></Link>
                            </div>
                        </Container>
                    </div>
                    <div className="home_customer_typical">
                        <Container>
                            <div className="home_customer_typical_title" >
                                <h5>Khach hang tieu bieu</h5>

                            </div>
                            <div className="home_customer_typical_slider">
                                <Container>
                                <>
                                    <Swiper
                                        spaceBetween={30}
                                        centeredSlides={true}
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: false,
                                        }}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        navigation={true}
                                        modules={[Autoplay, Pagination, Navigation]}
                                        className="mySwiper"
                                    >
                                        <SwiperSlide>Slide 1</SwiperSlide>
                                        <SwiperSlide>Slide 2</SwiperSlide>
                                        <SwiperSlide>Slide 3</SwiperSlide>
                                        <SwiperSlide>Slide 4</SwiperSlide>
                                        <SwiperSlide>Slide 5</SwiperSlide>
                                        <SwiperSlide>Slide 6</SwiperSlide>
                                        <SwiperSlide>Slide 7</SwiperSlide>
                                        <SwiperSlide>Slide 8</SwiperSlide>
                                        <SwiperSlide>Slide 9</SwiperSlide>
                                    </Swiper>
                                </>
                                </Container>
                            </div>
                        </Container>
                    </div>
                    <div className="home_contact">
                        <Container className="container_home_contact">
                            <h4>We design and develop web apps that delight your users and grow your business.</h4>
                            <Link to={"/"}>Contact Us</Link>
                        </Container>
                    </div>
                    <div className="blog_home">
                        <Container>
                            <div className="container_blog_home">
                                <div className="title_container_blog_home">
                                    <h2>Latest Blog Posts</h2>
                                    <p>Donec vulputate urna sed rutrum venenatis. Cras consequat magna quis arcu elementum, quis congue risus volutpat.</p>
                                </div>
                                <div className="container_home_blog_card">
                                    <div className="home_blog_card">
                                        <div className="home_blog_card_img">img</div>
                                        <div className="home_blog_card_content">
                                            <h5>Turing Expands the Leadership Team with David Lin, Controller</h5>
                                            <p>Mauris tellus sem, ultrices varius nisl at, convallis iaculis mauris. Sed eget sem vitae purus tempus dignissim.</p>
                                            <Link to={"/"}>Button</Link>
                                        </div>
                                    </div>
                                    <div className="home_blog_card">
                                        <div className="home_blog_card_img">img</div>
                                        <div className="home_blog_card_content">
                                            <h5>Turing Expands the Leadership Team with David Lin, Controller</h5>
                                            <p>Mauris tellus sem, ultrices varius nisl at, convallis iaculis mauris. Sed eget sem vitae purus tempus dignissim.</p>
                                            <Link to={"/"}>Button</Link>
                                        </div>
                                    </div>
                                    <div className="home_blog_card">
                                        <div className="home_blog_card_img">img</div>
                                        <div className="home_blog_card_content">
                                            <h5>Turing Expands the Leadership Team with David Lin, Controller</h5>
                                            <p>Mauris tellus sem, ultrices varius nisl at, convallis iaculis mauris. Sed eget sem vitae purus tempus dignissim.</p>
                                            <Link to={"/"}>Button</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    )
}