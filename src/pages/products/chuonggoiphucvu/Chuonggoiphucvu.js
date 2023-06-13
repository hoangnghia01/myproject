import { Container } from "react-bootstrap";
import "./Chuonggoiphucvu.css"
import Header from "../../../components/header/Header";
import Slider from "../../../components/slider/Slider"
import { useContext } from 'react';
import { AppContext } from "../../../AppContext";
export default function Chuonggoiphucvu() {
    const { products } = useContext(AppContext)
 
    const nutchuongs = products.filter(item => item.type === 'Nut chuong');
    const manhinhs = products.filter(item => item.type === 'Man hinh');
    
    return (
        <div>
          
           
                <div className="con_chuonggoiphucvu">
                    <div className="baner_chuonggoi">
                        <h1>Chuông gọi phục vụ</h1>
                    </div>
                    <div className="list_chuonggoiphucvu">
                        <div className="brand">
                            <Container>
                            <h2>
                                Hãng Syscall Hàn Quốc
                            </h2>
                            <h3>Nút chuông gọi</h3>
                            </Container>
                            <div className="lider_sanpham_nut">
                            <Slider product={nutchuongs} />
                            </div>
                            <h3>Thiết bị hiển thị</h3>
                            <div className="lider_sanpham_hienthi">
                            <Slider product={manhinhs} />

                            </div>
                        </div>
                    </div>
                </div>

           
        </div>
    )
}