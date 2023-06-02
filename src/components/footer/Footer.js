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
                        <img src={logo}/>
                        <p>Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper.</p>
                    </div>
                    <div className="helpful"><h4>Helpful</h4>
                        <ul>
                            <li><AiOutlineRight/>  <Link to={"/"}>About Us</Link></li>
                            <li><AiOutlineRight/>  <Link to={"/"}>About Us</Link></li>
                            <li><AiOutlineRight/>  <Link to={"/"}>About Us</Link></li>
                            <li><AiOutlineRight/>  <Link to={"/"}>About Us</Link></li>
                        </ul>
                    </div>
                    <div className="support"><h4>Support</h4>
                        <ul>
                            <li><AiOutlineRight/>  <Link to={"/"}>Contact</Link></li>
                            <li><AiOutlineRight/>  <Link to={"/"}>Contact</Link></li>
                            <li><AiOutlineRight/>  <Link to={"/"}>Contact</Link></li>
                            <li><AiOutlineRight/>  <Link to={"/"}>Contact</Link></li>
                        </ul>
                    </div>
               
                <div className="contact_us"><h4>Contact Us</h4>
                    <ul>
                        <li><p>455 West Orchard Street
                            Kings Mountain, NC 28086</p></li>
                        <li><p>Phone: (272) 211-7370</p></li>
                        <li><p>Email: (272) 211-7370</p></li>
                        <li></li>
                    </ul>
                </div>
                </div>
                <div className="footer_bot" >
                    <p>© 2023 Turing. All Rights Reserved.</p>
                </div>
            </Container>
        </div>

    )
}