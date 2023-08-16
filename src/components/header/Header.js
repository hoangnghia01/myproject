import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { BsBag, BsMinecartLoaded } from 'react-icons/bs';
import { CgMenuLeft, CgEnter } from 'react-icons/cg';
import { GrFormDown } from 'react-icons/gr';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsMinecart } from 'react-icons/bs';
import { BiRightArrowAlt } from 'react-icons/bi';
import { CiBookmark, CiFacebook } from 'react-icons/ci';
import Headers from './Headers';
import { MdOutlineAccountCircle, MdDeleteForever } from 'react-icons/md';
import { HiMenuAlt2 } from 'react-icons/hi';
// <<<<<<< HEAD
import Cart_page from '../../pages/cart_page/Cart_page';
// =======
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import { VscClose } from 'react-icons/vsc';
import { BiArrowBack } from 'react-icons/bi';
// >>>>>>> f52d4507c1d4c5a8a7f358a3bb3cfae15193a2d2
import logo from "../logo/logo.png"
import "./Header.css"
import { useContext } from 'react';
import { AppContext } from '../../AppContext';



export default function Header() {
    const { handle_click, handle_click_close, show, setShow, handle_click_cart, handle_click_cart_close, showcart, setShowcart, handle_click_menu, close_menu, shownav, setShownav
        , backrgoudNav, setBackrgoudNav, quanlity, cart, changqty, delete1
        , handleSearchChange, handleSearchSubmit, searchText
    } = useContext(AppContext)
    return (
        <div className='vav'>
            <div className='header'>
                <Navbar expand="lg" className={`navbar ${backrgoudNav ? "setbackgroud" : ""}`} >
                    <Container className='container'>
                        <div className='nav_icon'>
                            <HiMenuAlt2 onClick={handle_click_menu} />
                        </div>
                        <div className='header_left'>
                            <Link to={"/"} style={{ textDecoration: 'none' }} >
                                {/* <img src={logo} /> */}LOGO HOTEL
                            </Link>
                        </div>
                        <div className='header_right'>
                            <div className={`menu ${shownav ? "activemenu" : ""}`}>

                                <ul onClick={close_menu}>
                                    <li><Link to={"/"} style={{ textDecoration: 'none' }}><h3>HOME</h3></Link></li>
                                    <li><Link to={"/"} style={{ textDecoration: 'none' }}><h3>RESERVATION</h3></Link></li>

                                    <li><Link to={"/san-pham"} style={{ textDecoration: 'none' }} className='product'>
                                        <h3>ROOMS</h3>

                                    </Link></li>
                                    <li><Link to={"/"} style={{ textDecoration: 'none' }}><h3>BLOG</h3></Link></li>
                                    <li><Link to={"/lien-he"} style={{ textDecoration: 'none' }}><h3>CONTACT</h3></Link></li>
                                </ul>
                                <div className='div_close' onClick={close_menu}></div>

                            </div>
                            <div className='contactFacebook'>
                                <a className='Facebook' href="https://www.facebook.com/groups/700736942097108/" target="_blank" rel="noopener noreferrer">GROUP FACEBOOK</a>
                                <a className='iconFacebook'  href="https://www.facebook.com/groups/700736942097108/" target="_blank" rel="noopener noreferrer"><CiFacebook/></a>
                            </div>


                        </div>
                    </Container>
                    <div>

                    </div>
                </Navbar>
            </div>
        </div>
    )
}