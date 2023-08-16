import { Container } from "react-bootstrap";
import "./Chuonggoiphucvu.css"
import Header from "../../../components/header/Header";
import Slider from "../../../components/slider/Slider"
import { useContext } from 'react';
import { AppContext } from "../../../AppContext";
import Card_product from "../../../components/products/card_product/Card_product";
import banersanpham from "../../../components/imgs/baner_solusion/hinhnensanpham.jpg"
export default function Chuonggoiphucvu() {
    const { products } = useContext(AppContext)
    const nutchuongs = products.filter(item => item.type === 'Nut chuong');
    const manhinhs = products.filter(item => item.type === 'Man hinh');
    const backgroundStyle = {
        backgroundImage: `url(${banersanpham})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
    };
    return (
        <div>
            <div className="rooms_page">
                <div className="baner_rooms_page" style={backgroundStyle} >
                    <Container>
                        <h2>PHONG 1 GIUONG NGU</h2>
                    </Container>
                </div>
                <Container className="container_room">
                    {products.map((item, index) => (

                        <Card_product key={index} product={item} />

                    ))}
                </Container>
            </div>
        </div>
    )
}