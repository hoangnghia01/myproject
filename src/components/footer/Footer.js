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
                        <img src={logo} />
                        <p>Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper.</p>
                    </div>
                    <div className="footer_center">
                        <div className="helpful"><h4>Hỗ trợ khách hàng</h4>
                            <ul>
                                <li><AiOutlineRight />  <Link to={"/"}>Hình thức thanh toán</Link></li>
                                <li><AiOutlineRight />  <Link to={"/"}>Phương thức vận chuyển</Link></li>
                                <li><AiOutlineRight />  <Link to={"/"}>Chính sách đổi trả</Link></li>
                                <li><AiOutlineRight />  <Link to={"/"}>Chính sách bảo hành</Link></li>
                            </ul>
                        </div>
                        {/* <div className="support"><h4>Support</h4>
                            <ul>
                                <li><AiOutlineRight />  <Link to={"/"}>Contact</Link></li>
                                <li><AiOutlineRight />  <Link to={"/"}>Contact</Link></li>
                                <li><AiOutlineRight />  <Link to={"/"}>Contact</Link></li>
                                <li><AiOutlineRight />  <Link to={"/"}>Contact</Link></li>
                            </ul>
                        </div> */}
                    </div>
                    <div className="contact_us"><h4>Thông tin liên hệ</h4>
                        <ul>
                            <li><p>Địa chỉ: 50/3/13 TL 29, phường Thạnh Lộc, quận 12, thành phố Hồ Chí Minh</p></li>
                            <li><p>Điện thoại: 097 977 2145</p></li>
                            <li><p>Email: info@ctsvn.vn</p></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div className="footer_bot" >
                    <p>© 2023 CTSVN</p>
                </div>
            </Container>
        </div>

    )
}