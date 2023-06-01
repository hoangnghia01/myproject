import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { BsCart3 } from 'react-icons/bs';
import { CgMenuRight } from 'react-icons/cg';
import { GrFormDown } from 'react-icons/gr';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsMinecart } from 'react-icons/bs';

import logo from "../logo/logo.jpg"
import "./Header.css"
export default function Header() {
    return (

        <Navbar expand="lg" className='navbar'>
            <Container>
                <div className='header_left'>
                    <Link to={"/"} style={{ textDecoration: 'none' }} ><img src={logo} /></Link>
                </div>
                <div className='header_right'>
                    
                    


                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className='menu'>
                            <ul>
                                <li><Link to={"/"} style={{ textDecoration: 'none' }}><h3>Home</h3></Link></li>
                                <li><Link to={"/giai-phap"} style={{ textDecoration: 'none' }} className='solusion'><h3>Giai phap <span><GrFormDown /></span></h3>

                                    <ul className='menu_child'>
                                        <li>Giai phap 1
                                            <ul className='menu_child-child'>
                                                <li>ggggggggg1</li>
                                                <li>ggg1</li>
                                                <li>ggg1</li>
                                            </ul>
                                        </li>
                                        <li>Giai phap 1</li>
                                        <li>Giai phap 1</li>
                                        <li>Giai phap 1</li>
                                    </ul>

                                </Link></li>

                                <li><Link to={"/san-pham"} style={{ textDecoration: 'none' }} className='product'>
                                    <h3>San pham <span><GrFormDown /></span></h3>

                                    <ul className='menu_child'>
                                        <li>San pham 1</li>
                                        <li>San pham 2 1</li>
                                        <li>San pham 3 1</li>
                                        <li>San pham 4</li>
                                    </ul>

                                </Link></li>

                                <li><Link to={"/lien-he"} style={{ textDecoration: 'none' }}><h3>Lien he</h3></Link></li>
                            </ul>
                        </div>
                    </Navbar.Collapse>
                    <CgMenuRight className='menu_icon'/>
                    <div className='search'>
                        
                        <button className='icon_search'><AiOutlineSearch /></button>
                       
                        
                        <div className='container_search'>
                           <Container>
                            Nghix
                           </Container>
                        </div>
                        
                    </div>
                    <div className='shopping_cart'>

                        <BsCart3 className='cart_icon' />
                        <div className='container_cart'>
                            <div className='product_in_cart'><BsMinecart /></div>
                            <div className='total'>
                                <h5>Tong cong:</h5>
                                <h5>$0</h5>
                            </div>
                            <button><h5>Gio hang</h5></button>
                        </div>



                        <p className='cart_item'>0</p>

                    </div>
                </div>
            </Container>
        </Navbar>

    )
}