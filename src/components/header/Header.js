import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { BsCart3 } from 'react-icons/bs';
import { CgMenuRight } from 'react-icons/cg';
import logo from "../logo/logo.jpg"
import "./Header.css"
export default function Header() {
    return (

        <Navbar expand="lg">
            <Container>
                <div className='header_left'>
                    <Link to={"/"} style={{ textDecoration: 'none' }} ><img src={logo} /></Link>
                </div>
                <div className='header_right'>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='icon_menu' />
                    {/* <CgMenuRight className='menu_icon'/> */}






                </div>
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className='menu'>
                        <Link to={"/"} style={{ textDecoration: 'none' }}><h3>Home</h3></Link>
                        <Link to={"/giai-phap"} style={{ textDecoration: 'none' }} className='giaiphap '><h3>Giai phap</h3></Link>
                        <div className='menu_giaiphap'>
                            <ul>
                                <li>Giai phap 1</li>
                                <li>Giai phap 1</li>
                                <li>Giai phap 1</li>
                                <li>Giai phap 1</li>
                                <li>Giai phap 1</li>
                            </ul>
                        </div>
                        <Link to={"/san-pham"} style={{ textDecoration: 'none' }}><h3>San pham</h3></Link>

                        <Link to={"/lien-he"} style={{ textDecoration: 'none' }}><h3>Lien he</h3></Link>
                    </div>
                </Navbar.Collapse>

                <BsCart3 className='cart' />
            </Container>
        </Navbar>

    )
}