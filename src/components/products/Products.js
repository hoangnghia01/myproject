import Header from "../../components/header/Header"
import Headers from "../../components/header/Headers"
import "./Products.css"

import baner_room from "../../pages/imgs/baner_room.jpg";
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
        backgroundImage: `url(${baner_room})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
    };
    
    return (
        <nav className="product_list">
            <div style={backgroundStyle} className="baner_room" data-aos="fade-down">
                <Container>
                    <h1>Rooms</h1>
                </Container>
            </div>
            <Container >
                <div className="product_list_page_list">
                    <Row>
                        <Col lg={3} xs={6}>
                            <Link onClick={() => filterProducts("1 giường")}>
                                <img src={baner_room} />
                                <h5>Phòng 1 giường</h5>
                            </Link>
                        </Col>
                        <Col lg={3} xs={6}>
                            <Link onClick={() => filterProducts("2 giường")}>
                                <img src={baner_room} />
                                <h5>Phòng 2 giường</h5>
                            </Link>
                        </Col>
                        <Col lg={3} xs={6}>
                            <Link onClick={() => filterProducts("1 giường")}>
                                <img src={baner_room} />
                                <h5>Phòng 1 giường</h5>
                            </Link>
                        </Col>
                        <Col lg={3} xs={6}>
                            <Link onClick={() => filterProducts("1 giường")}>
                                <img src={baner_room} />
                                <h5>Phòng 1 giường</h5>
                            </Link>
                        </Col>
                    </Row>
                </div>
                <Row className="row" data-aos="fade-right"

                >
                    {/* <h1 style={{color: "red"}}>{param.style}</h1> */}
                    {filteredProducts && filteredProducts.map((item, index) =>
                    (
                        <Col xs={6} sm={6} lg={4} md={6}>
                            <Card_product key={index} product={item} />
                        </Col>
                    ))}
                </Row>
                
            </Container>
        </nav >
    )
}