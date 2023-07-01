import Header from "../../components/header/Header"
import Headers from "../../components/header/Headers"
import "./Products.css"

import { FcFilledFilter } from 'react-icons/fc';
import Card_product from "./card_product/Card_product";
import { Container, Row, Col } from "react-bootstrap";
import { useContext, useState } from "react";
import { AppContext } from "../../AppContext";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from "react-router-dom";
import manhinh from "../imgs/sra330.jpg"
import nutchuong from "../imgs/st3002b.png"
import den from "../imgs/sll-300.jpg"
import dongho from "../imgs/sb-700.jpg"
import therung from "../imgs/gp-200r-10.jpg"
import goistt from "../imgs/st-5010-fr3003som.jpg"
import banersanpham from "../imgs/baner_solusion/hinhnensanpham.jpg"
export default function Products() {
    const { products } = useContext(AppContext)
    const [filteredProducts, setFilteredProducts] = useState(products);

    const filterProducts = (type) => {
        if (type === "all") {
            const filtered = products;
            setFilteredProducts(filtered);
        }
        else {
            const filtered = products.filter((product) => product.type === type);
            setFilteredProducts(filtered);
        }
    };
    const backgroundStyle = {
        backgroundImage: `url(${banersanpham})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
    };
    
    return (
        <nav className="product_list">
            <div style={backgroundStyle} className="productsList" data-aos="fade-down">
                <Container>
                    <h2>Sản phẩm</h2>
                </Container>

            </div>
            <Container >
                
                <div className="product_list_page_list">
                    <Row>
                        <Col lg={2} xs={3}>
                            <Link onClick={() => filterProducts("Man hinh")}>
                                <img src={manhinh} />
                                <h5>Màn hình</h5>
                            </Link>
                        </Col>
                        <Col lg={2} xs={3}>
                            <Link onClick={() => filterProducts("Nut chuong")}>
                                <img src={nutchuong} />
                                <h5>Nút chuông</h5>
                            </Link>
                        </Col>
                        <Col lg={2} xs={3}>
                            <Link onClick={() => filterProducts("Den bao")}>
                                <img src={den} />
                                <h5>Đèn báo</h5>
                            </Link>
                        </Col>
                        <Col lg={2} xs={3}>
                            <Link onClick={() => filterProducts("Dong ho")}>
                                <img src={dongho} />
                                <h5>Đồng hồ</h5>
                            </Link>
                        </Col>
                        <Col lg={2} xs={3}>
                            <Link onClick={() => filterProducts("The rung")}>
                                <img src={therung} />
                                <h5>Thẻ rung</h5>
                            </Link>
                        </Col>
                        <Col lg={2} xs={3}>
                            <Link>
                                <img src={goistt} />
                                <h5>Gọi số thứ tự</h5>
                            </Link>
                        </Col>
                    </Row>
                </div>
                <Row className="row" data-aos="fade-right"

                >
                    {/* <h1 style={{color: "red"}}>{param.style}</h1> */}
                    {filteredProducts && filteredProducts.map((item, index) =>
                    (
                        <Col xs={6} sm={6} lg={3} md={6}>
                            <Card_product key={index} product={item} />
                        </Col>
                    ))}
                </Row>
                
            </Container>
        </nav >
    )
}