import Header from "../../components/header/Header"
import Headers from "../../components/header/Headers"
import "./Products.css"

import Card_product from "./card_product/Card_product";
import { Container, Row, Col } from "react-bootstrap";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
export default function Products() {
    const {products} = useContext(AppContext)

    return (
        <div>
           

            <div>
               
                <nav className="product_list">
                    <Container >
                    <h2 className="productsList">Sản phẩm</h2>
                        <Row className="row">
                            {/* <h1 style={{color: "red"}}>{param.style}</h1> */}
                            {products && products.map((item, index) =>
                            (
                                <Col xs={2} sm={3}>
                                    <Card_product key={index} product={item} />
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </nav >
            </div>
        </div>
    )
}