
import "./Blog.css"
import { AppContext } from "../../AppContext";
import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Blog() {
    const { blog } = useContext(AppContext)

    return (
        <div className="blog_page">
            <Container>
                <div className="container_blog_page">
                    <div className="title_container_blog_page">
                        <h2>Hướng dẫn</h2>
                        {/* <p>Donec vulputate urna sed rutrum venenatis. Cras consequat magna quis arcu elementum, quis congue risus volutpat.</p> */}
                    </div>
                    <Row className="row" data-aos="fade-up"
     data-aos-duration="2000">

                        {blog && blog.map((item, index) => (
                            // <Col xs={2} sm={4}>
                                <Link to={`/blog/${item.id}`} key={index}>
                                <div className="card_container_blog_page">
                                    <div className="img_cart_blog_page"><img src={item.img_blog} alt={item.name} /></div>
                                    <div className="content_cart_blog_page">
                                        <div className="blog_name_page"><h5>{item ? item.name_blog : ""}</h5></div>
                                        <div className="short_description_blog_page"><p>{item ? item.short_description_blog : ""}</p></div>
                                    </div>
                                </div>
                                </Link>
                            // </Col>
                        ))}

                    </Row>
                </div>
            </Container>
        </div>
    )
}