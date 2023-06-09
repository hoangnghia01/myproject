import { Container, Col, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { AppContext } from "../../../AppContext";
import { Link } from "react-router-dom";
import "./Product_ditail.css"
import swal from 'sweetalert';
import Card_product from "../../../components/products/card_product/Card_product";
export default function Product_ditail() {
    const { products, addCart } = useContext(AppContext);
    const [product, setProduct] = useState(null);

    const location = useLocation();
    const path = location.pathname;
    const id = path.substring(path.lastIndexOf("/") + 1);

    useEffect(() => {
        // Tìm kiếm sản phẩm dựa trên ID trong danh sách sản phẩm
        const foundProduct = products.find((item) => item.id === parseInt(id));
        setProduct(foundProduct);
    }, [id, products]);

    console.log(product);

    return (
        <div className="product_ditail_page">
            <Container className="container-product_ditail">
                <h2>Sản phẩm</h2>
                <div className="product_ditail_top">
                    <div className="product_ditail_top_img" data-aos="zoom-in">
                        <img src={product ? product.img : ""} alt={product ? product.name : ""} />
                    </div>
                    <div data-aos="fade-left" className="product_ditail_top_content">

                        <div className="product_ditail_top_content_name"><h3>{product ? product.name : ""}</h3></div>
                        <div className="product_ditail_top_content_price"><span>Giá: </span>{product ? product.price : ""} <span>đ</span></div>
                        <div className="product_ditail_top_content_code"><span>Mã sản phẩm: </span>{product ? product.product_code : ""}</div>
                        <div className="product_ditail_top_content_origin"><span>Xuất xứ: </span>{product ? product.origin : ""}</div>
                        <Link><button className="product_ditail_top_content_add_cart"
                            onClick={() => (addCart(product.id), swal({
                                title: "Đạt hàng thành công!",
                                text: "Đã thêm vào giỏ hàng của bạn!",
                                icon: "success",
                                button: "Tiếp tục mua sắm!",
                            })
                            )}
                        >Thêm vào giỏ hàng</button></Link>
                        <div className="product_ditail_top_content_short_description">
                            <h4>Mô tả</h4>
                            <p>{product ? product.short_description : ""}</p>
                        </div>

                    </div>
                </div>
                <div className="product_ditail_bottom" data-aos="fade-up">
                    <h4>Chi tiết sản phẩm</h4>
                    <p>{product ? product.description : ""}</p>
                </div>
                <div>

                    <nav className="product_ditail_bottom_list">
                        <Container >
                            <h4 className="product_ditail_bottomList">Sản phẩm tương tự</h4>
                            <Row className="row">
                                {/* <h1 style={{color: "red"}}>{param.style}</h1> */}
                                {products && products.map((item, index) =>
                                (
                                    <Col xs={12} sm={6} lg={3} md={6}>
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
