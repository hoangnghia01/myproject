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
import { useEffect } from "react"
import logo from "../../components/logo/logo.png"
import logohoanmy from "../../components/logo/logo_doitac/logo_bv_hoan_my.png"
import highland from "../../components/logo/logo_doitac/Highlands-Coffee-ogo.png"
import logo_bv from "../../components/logo/logo_doitac/logo_bv.jpg"
// import logo_bv_auco from "../../components/logo/logo_doitac/logo_bv_âu cơ.png"
import logo_emart from "../../components/logo/logo_doitac/logo_emart.png"
import logo_jollibe from "../../components/logo/logo_doitac/logo_jollibe.jpg"
import logo_king_cf from "../../components/logo/logo_doitac/logo_king_cf.png"
import logo_sukiya from "../../components/logo/logo_doitac/logo_sukiya.jpg"
import logo_vinamilk from "../../components/logo/logo_doitac/logo_vinamilk.png"
import logo_phuclong from "../../components/logo/logo_doitac/phuc_long.jpg"
import logo_tch from "../../components/logo/logo_doitac/the_coffee_house_logo.jpg"
import { useContext } from "react"
import { AppContext } from "../../AppContext"
import { CgMenuLeft } from 'react-icons/cg';
import ScrollToTop from "../../components/scrolltotop/ScrollToTop"
import baner_nhietdo from "../../components/imgs/blog_img/img4.png"
import baner_nhamay from "../../components/imgs/blog_img/img5.png"
import baner_camera from "../../components/imgs/blog_img/img6.png"
import baner_bodam from "../../components/imgs/blog_img/img7.png"

import React, { useRef, useState } from "react";
// Import Swiper React components
import Slider from "../../components/slider/Slider"

const images = [
    logohoanmy,
    highland,
    // logo_bv_auco,

    logo_emart,
    logo_jollibe,
    logo_emart,
    logo_vinamilk,
    logo_phuclong,
    logo_tch
]
export default function Home() {
    const { blog } = useContext(AppContext)

    return (
        <div>
            {/* <Header /> */}
            <ScrollToTop />
            {/* <Headers/> */}
            <main>
                <div>
                    <div className="con_slider">

                        <img src={slider_hospital} data-aos="fade-left" data-aos-duration="1000"></img>
                        <div className="content_slider">
                            <Container>
                                <div className="con_content_slider" data-aos="fade-right" data-aos-duration="500">
                                    <h2>Nâng cao giá trị và hiệu quả cho doanh nghiệp của bạn.</h2>
                                    <p>Chúng tôi tin rằng ctsvn.vn sẽ là điểm đến đáng tin cậy cho những giải pháp công nghệ thông tin chất lượng và tận tâm, giúp doanh nghiệp của bạn phát triển và tiến xa hơn trong thị trường.</p>
                                    <h4>--- -</h4>
                                    <Link to={"/giai-phap"}>Xem thêm</Link>
                                </div>
                            </Container>
                        </div>
                    </div>

                    <div className="why_choose">

                        <div className="con_why_choose">

                            <Container>
                                <h1>Lý do bạn nên chọn chúng tôi</h1>
                                <div className="reasons">

                                    <div className="reason" data-aos="fade-up" data-aos-duration="4000">
                                        <Link to={"/"}>
                                            <div className="reason_icon" style={{ color: "orange", fontSize: "30px" }}><FcBriefcase /></div>
                                            <h6>Chuyên môn và kinh nghiệm</h6>
                                            <p>Chúng tôi hiểu rõ các yêu cầu và thách thức của ngành công nghiệp và sẵn sàng đưa ra các giải pháp phù hợp.</p>
                                        </Link>
                                    </div>

                                    <div className="reason" data-aos="fade-up" data-aos-duration="1000">
                                        <Link to={"/"}>
                                            <div className="reason_icon" style={{ fontSize: "30px" }}><FcServices /></div>
                                            <h6>Sản phẩm và dịch vụ</h6>
                                            <p>Chúng tôi cam kết cung cấp sản phẩm và dịch vụ chất lượng cao, đáng tin cậy và đáp ứng tiêu chuẩn quốc tế.</p>
                                        </Link>
                                    </div>
                                    <div className="reason" data-aos="fade-up" data-aos-duration="2000">
                                        <Link to={"/"}>
                                            <div className="reason_icon" style={{ color: "orange", fontSize: "30px" }}><TbFileLike /></div>
                                            <h6>Độ tin cậy và hỗ trợ</h6>
                                            <p>Chúng tôi đặt sự tin tưởng và hỗ trợ khách hàng lên hàng đầu.</p>
                                        </Link>
                                    </div>
                                    <div className="reason" data-aos="fade-up" data-aos-duration="3000">
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
                                    <div data-aos="fade-right" data-aos-duration="1000">
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
                                </div>
                                <div className="solusion_home_img" data-aos="fade-left">
                                    <img src={hospital_solusion_img} />
                                </div>
                            </Container>
                        </div>
                        <div className="solusion_home_restaurant">
                            <Container className="con_solusion_home">
                                <div className="solusion_home_img" data-aos="fade-up">
                                    <img src={baner_solusion_2} />
                                </div>
                                <div className="solusion_home_info" data-aos="fade-left">
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
                                <div className="solusion_home_info" data-aos="fade-right">
                                    <h2>Thẻ rung tự phục vụ</h2>
                                    <h4 style={{ color: "orange" }}>--- -</h4>
                                    <p>
                                        Thẻ rung tự phục vụ là một giải pháp công nghệ tiên tiến giúp cải thiện trải nghiệm khách hàng và quản lý dịch vụ trong các ngành công nghiệp như nhà hàng, quán cà phê, quầy phục vụ, quầy thu ngân, nhà sách, và nhiều nơi khác.  </p>
                                    <ul>
                                        <li><Link to={"/"} style={{ background: "linear-gradient(-45deg, #eb6424, #fbba72)" }}><BiChevronRight /><span>Xem chi tiết</span></Link></li>
                                       
                                    </ul>
                                    
                                </div>
                                <div className="solusion_home_img" data-aos="fade-up">
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
                                    <Link to={"/"} className="solusion_other_con_card" data-aos="fade-right" data-aos-duration="1000">
                                        <div className="solusion_other_con_card_img"><img src={baner_nhamay}/></div>
                                        <div className="solusion_other_con_card_title">
                                            <h5>Chuông gọi nhà máy</h5>
                                        </div>
                                        <div className="solusion_other_con_card_content">
                                            <p>Để giải quyết và ứng phó với các sự cố nhanh chóng và hiệu quả là một giải pháp quan trọng.</p>
                                        </div>
                                    </Link>
                                    <Link to={"/"} className="solusion_other_con_card" data-aos="fade-right" data-aos-duration="1500">
                                        <div className="solusion_other_con_card_img"><img src={baner_nhietdo}/></div>
                                        <div className="solusion_other_con_card_title">
                                            <h5>Cảnh báo nhiệt độ</h5>
                                        </div>
                                        <div className="solusion_other_con_card_content">
                                            <p>Đảm bảo rằng các điều kiện môi trường được duy trì trong phạm vi an toàn và tối ưu.</p>
                                        </div>
                                    </Link>
                                    <Link to={"/"} className="solusion_other_con_card" data-aos="fade-right" data-aos-duration="2000">
                                        <div className="solusion_other_con_card_img"><img src={baner_camera}/></div>
                                        <div className="solusion_other_con_card_title">
                                            <h5>Camera an ninh</h5>
                                        </div>
                                        <div className="solusion_other_con_card_content">
                                            <p>Camera an ninh là một giải pháp quan trọng để đảm bảo an toàn và giám sát trong nhiều lĩnh vực.</p>
                                        </div>
                                    </Link>
                                    <Link to={"/"} className="solusion_other_con_card" data-aos="fade-right" data-aos-duration="2500">
                                        <div className="solusion_other_con_card_img"><img src={baner_bodam}/></div>
                                        <div className="solusion_other_con_card_title">
                                            <h5>Bộ đàm</h5>
                                        </div>
                                        <div className="solusion_other_con_card_content">
                                            <p>Rất hữu ích trong các tình huống khẩn cấp hoặc khi cần phản ứng nhanh.</p>
                                        </div>
                                    </Link>
                                </div>
                                <Link to={"/giai-phap"} className="home_button_allsolusion">Xem tất cả <FiChevronsRight /></Link>
                            </div>
                        </Container>
                    </div>
                    <div className="home_customer_typical" data-aos="fade-up">
                        <Container>
                            <div className="home_customer_typical_title" >
                                <h2>Khách hàng tiêu biểu</h2>
                            </div>
                            <div className="home_customer_typical_slider">
                                <Container className="container_logo_doitac">
                                    <div className="slider-images">
                                        {images.map((image, index) => (
                                            <img
                                                key={index}
                                                src={image}
                                                alt={`Image ${index}`}
                                                className="logo_doitac"
                                            />
                                        ))}
                                    </div>
                                </Container>
                            </div>
                        </Container>
                    </div>
                    <div className="home_contact">
                        <Container className="container_home_contact">
                            <h4>Chúng tôi cung cấp giải pháp và sản phẩm làm hài lòng khách hàng, và doanh nghiệp của bạn.</h4>
                            <Link to={"/lien-he"}>Liên hệ ngay</Link>
                        </Container>
                    </div>
                    <div className="blog_home">
                        <Container>
                            <div className="container_blog_home">
                                <div className="title_container_blog_home">
                                    <h2>Bài viết mới nhất</h2>
                                    <p>Hướng dẫn sử dung hệ thống và phần mềm giám sát nhiệt độ Dalian.</p>
                                </div>
                                <div className="container_home_blog_card">
                                    {blog && blog.slice(0, 3).map((item, index) => (
                                        <div className="home_blog_card" data-aos="fade-up" data-aos-duration="1000" key={index}>
                                            <div className="home_blog_card_img"><img src={item.img_blog} alt={item.name} /></div>
                                            <div className="home_blog_card_content">
                                                <h5>{item ? item.name_blog : ""}</h5>
                                                <p>{item ? item.short_description_blog : ""}</p>
                                                <Link to={`/blog/${item.id}`}  >Xem thêm <FiChevronsRight /></Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Container>
                    </div>

                </div>
            </main>

        </div>
    )
}