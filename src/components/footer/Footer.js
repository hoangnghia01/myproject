import { Container } from "react-bootstrap"
import "./Footer.css"
import logo from "../logo/logo.png"
import { Link } from "react-router-dom"

import { AiOutlineRight } from 'react-icons/ai';
export default function Footer() {
    return (
        <div className="footer">
            <Container>
                <div className="footer_top">
                    <div className="footer_left">
                        {/* <img src={logo} /> */}
                        <h2>LOGO HOTEL</h2>
                        <p>Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper.</p>
                    </div>
                    <div className="footer_center">
                        <div className="helpful"><h4>Liên hệ</h4>
                        <ul>
                            <li><p>Điện thoại: 097 977 2145</p></li>
                            <li><p>Email: muinedatphong@gmail.com</p></li>
                            <li></li>
                        </ul>
                        </div>
                    </div>
                    <div className="contact_us"><h4>Địa chỉ</h4>
                        
                        <ul>
                        <li><p>Địa chỉ: 50/3/13 TL 29, phường Thạnh Lộc, quận 12, thành phố Hồ Chí Minh</p></li>
                            </ul>
                    </div>
                </div>
                <div className="footer_bot" >
                    <p>Copyright © GoodLayers. All Rights Reserved.</p>
                </div>
            </Container>
        </div>

    )
}