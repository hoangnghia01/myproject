
import "./Blog.css"
import { AppContext } from "../../AppContext";
import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import huongdanbaner from "../../components/imgs/baner_solusion/huongdan_baner.jpg"
import { useState } from "react";
export default function Blog() {
    const { blog } = useContext(AppContext)
    const backgroundStyle = {
        backgroundImage: `url(${huongdanbaner})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
    };
   
    return (
        <div className="blog_page">
            <div style={backgroundStyle} className="blog_page_title" data-aos="fade-down">
                <Container>
                    <h2>Hướng dẫn</h2>
                </Container>

            </div>
            <Container>
                <div className="container_blog_page">

                    <Row className="row" data-aos="fade-up"
                        data-aos-duration="1000">

                        {blog && blog .map((item, index) => (
                            <Col xs={6} sm={6} lg={3}>
                            <Link to={`/blog/${item.id}`} key={index}>
                                <div className="card_container_blog_page">
                                    <div className="img_cart_blog_page"><img src={item.img_blog} alt={item.name} /></div>
                                    <div className="content_cart_blog_page">
                                        <div className="blog_name_page"><h6>{item ? item.name_blog : ""}</h6></div>
                                        <div className="short_description_blog_page"><p>{item ? item.short_description_blog : ""}</p></div>
                                    </div>
                                </div>
                            </Link>
                             </Col>
                        ))}

                    </Row>
                </div>
              
            </Container>
        </div>
    )
}