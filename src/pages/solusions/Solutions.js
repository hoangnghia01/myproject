import { Container, Row, Col } from "react-bootstrap"
import { useContext } from "react"
import { AppContext } from "../../AppContext"
import { Link } from "react-router-dom"
import "./Solutions.css"
import baner_lolusion from "../../components/imgs/blog_img/baner_losusion.png"
export default function Solutions() {
    const { solusions } = useContext(AppContext)
    
    const backgroundStyle = {
        backgroundImage: `url(${baner_lolusion})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
    return (
        <div>
            <div style={backgroundStyle} className="baner_solusion" data-aos="fade-down">
                <Container>
                <h2>Giải pháp</h2>
                </Container>
               
            </div>
            <Container>
                <div className="conatiner_page_solusion">
                    <Row>
                        {solusions && solusions.map((item, index) => (
                            <Col xs={12} sm={6} lg={3} md={6}>
                                <div className="solusion_other_con" key={index} >
                                    <Link to={`/giai-phap/${item.link}`} className="solusion_other_con_card" data-aos="fade-right" data-aos-duration="1000">
                                        <div className="solusion_other_con_card_img"><img src={item.img_slusion} alt={item.name_slusion} /></div>
                                        <div className="solusion_other_con_card_title">
                                            <h5>{item ? item.name_slusion : ""}</h5>
                                        </div>
                                        <div className="solusion_other_con_card_content">
                                            <p>{item ? item.short_description_slusion : ""}</p>
                                        </div>
                                    </Link>
                                </div>
                            </Col>

                        ))}
                    </Row>
                </div>
            </Container>
        </div>
    )
}