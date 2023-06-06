import Header from "../../components/header/Header"
import Headers from "../../components/header/Headers"
import Footer from "../../components/footer/Footer"
import "./Home.css"
import hospital1 from "../imgs/hospital1.jpg"
import { Container, Carousel } from "react-bootstrap"
import { Link } from "react-router-dom"
export default function Home() {
    return (
        <div>
            <Header />
            {/* <Headers/> */}
            <main>
                <div>
                    <Container>
                        <div className="slider">
                            <Carousel variant="dark" className="con_slider">
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
                            </Carousel>
                        </div>
                        <div className="why_choose">
                            <div className="con_why_choose">
                            <Container>
                                <h1>Ly do ban nen chon chung toi</h1>
                                <div className="reasons">

                                    <div className="reason">
                                        <Link to={"/"}>
                                            <div className="reason_icon">icon nef</div>
                                            <h6>Tieu de</h6>
                                            <p>Morbilling pharetra sapiening ut mattis viverra. Curabitur magna.</p>
                                        </Link>
                                    </div>
                                    <div className="reason">
                                        <Link to={"/"}>
                                            <div className="reason_icon">icon nef</div>
                                            <h6>Tieu de</h6>
                                            <p>Morbilling pharetra sapiening ut mattis viverra. Curabitur magna.</p>
                                        </Link>
                                    </div>

                                    <div className="reason">
                                        <Link to={"/"}>
                                            <div className="reason_icon">icon nef</div>
                                            <h6>Tieu de</h6>
                                            <p>Morbilling pharetra sapiening ut mattis viverra. Curabitur magna.</p>
                                        </Link>
                                    </div>
                                    <div className="reason">
                                        <Link to={"/"}>
                                            <div className="reason_icon">icon nef</div>
                                            <h6>Tieu de</h6>
                                            <p>Morbilling pharetra sapiening ut mattis viverra. Curabitur magna.</p>
                                        </Link>
                                    </div>

                                </div>
                            </Container>
                            </div>
                        </div>
                        <div className="solusion_home">
                           <div className="solusion_home_hospital">
                                <div className="solusion_home_hospital_left">
                                    <h2>Giai phap benh vien</h2>
                                    <p>Phasellus vitae velit sit amet diam semper commodo quis quis libero. Morbi consequat arcu augue, molestie faucibus metus ullamcorper vel.</p>
                                    <ul>
                                        <li><button>Chuong goi</button><button>Chuong goi</button></li>
                                        <li><button>Chuong goi</button><button>Chuong goi</button></li>
                                    </ul>
                                </div>
                           </div>
                        </div>
                    </Container>
                </div>
            </main>
            <Footer />
        </div>
    )
}