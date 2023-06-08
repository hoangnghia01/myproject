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
import { CiBookmark } from 'react-icons/ci';
import Headers from './Headers';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { VscSearch } from 'react-icons/vsc';

import logo from "../logo/logo.png"
import "./Header.css"
import { useContext } from 'react';
import { AppContext } from '../../AppContext';



export default function Header() {
    const { handle_click,handle_click_close, show, setShow, handle_click_cart,handle_click_cart_close, showcart, setShowcart , handle_click_menu,close_menu, shownav, setShownav
        , backrgoudNav, setBackrgoudNav} = useContext(AppContext)
    return (
<div className='vav'>
        <Navbar expand="lg" className={`navbar ${backrgoudNav? "setbackgroud" : ""}`} >
            <Container className='container'>
                <CgMenuLeft className='nav_icon' onClick={handle_click_menu}/>
                <div className='header_left'>
                    <Link to={"/"} style={{ textDecoration: 'none' }} ><img src={logo} /></Link>
                </div>
                <div className='header_right'>
                    {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                    <div className={`menu ${shownav ? "activemenu" : ""}`}>
                        
                        <ul  onClick={close_menu}>
                            <li><Link to={"/"} style={{ textDecoration: 'none' }}><h3>Trang chủ</h3></Link></li>
                            <li><Link to={"/giai-phap"} style={{ textDecoration: 'none' }} className='solusion'><h3>Giải pháp <span><GrFormDown /></span></h3>
                                <ul className='menu_child'>
                                    <li>Giải pháp cho bệnh viện
                                        <ul className='menu_child-child'>
                                            <li>ggggggggg1</li>
                                            <li>ggg1</li>
                                            <li>ggg1</li>
                                        </ul>
                                    </li>
                                    <li>Giải pháp cho nhà hàng</li>
                                    <li>Giải pháp chuông gọi trong nhà máy</li>
                                    <li>Giải pháp tự phục vụ</li>
                                    <li>Giải pháp cảnh báo nhiệt độ - độ ẩm</li>
                                    <li>Giải pháp Camera an ninh</li>
                                    <li>Bộ đàm</li>
                                </ul>
                            </Link></li>
                            <li><Link to={"/san-pham"} style={{ textDecoration: 'none' }} className='product'>
                                <h3>Sản phẩm <span><GrFormDown /></span></h3>
                                <ul className='menu_child'>
                                    <li>San pham 1</li>
                                    <li>San pham 2 1</li>
                                    <li>San pham 3 1</li>
                                    <li>San pham 4</li>
                                </ul>
                            </Link></li>
                            <li><Link to={"/lien-he"} style={{ textDecoration: 'none' }}><h3>Liên hệ</h3></Link></li>
                        </ul>
                       <div className='div_close' onClick={close_menu}></div>
                        
                    </div>
                    
                    {/* </Navbar.Collapse> */}
                    {/* <CgMenuRight className='menu_icon' /> */}
                    <div className='header_right_icon'>
                        <div className='search'>
                            <button className='icon_search' onClick={handle_click}><AiOutlineSearch /></button>
                            <div className={`container_search ${show ? "active" : ""}`}>
                                <div className='con_search'>
                                    <Container className='container_con_search'>
                                        <div className='search_input'>
                                            <AiOutlineSearch className='icon_search_input' />
                                            <input placeholder='Tìm kiếm' className='input' />
                                        </div>
                                        <div className='suggest'>
                                            <p>Gợi ý</p>
                                            <ul>
                                                <Link to={"/"}> <li><BiRightArrowAlt />    Mua sam truc tuyen</li></Link>
                                                <Link to={"/"}> <li><BiRightArrowAlt />    Mua sam truc tuyen</li></Link>
                                                <Link to={"/"}> <li><BiRightArrowAlt />    Mua sam truc tuyen</li></Link>
                                                <Link to={"/"}> <li><BiRightArrowAlt />    Mua sam truc tuyen</li></Link>
                                                <Link to={"/"}> <li><BiRightArrowAlt />    Mua sam truc tuyen</li></Link>
                                            </ul>
                                        </div>
                                    </Container>
                                </div>
                                <div className='con_search_close' onClick={handle_click_close}>

                                </div>

                            </div>

                        </div>
                        <div className='shopping_cart'>
                            <button onClick={handle_click_cart}><BsBag className='cart_icon' /></button>

                            <div className={`container_cart ${showcart ? "active1" : ""}`}>
                                <div className='con_cart'>
                                    <Container className='container_con_cart'>
                                        <h3>Túi của bạn trống.</h3>
                                        <p><Link>Đăng nhập</Link><span> để xem có sản phẩm nào đã lưu không?</span></p>
                                        <h5>Hồ sơ của tôi</h5>
                                        <ul>
                                            <li><Link to={"/"}><BsMinecartLoaded /> <span>Đơn hàng</span></Link></li>
                                            <li><Link to={"/"}><CiBookmark /> <span>Mục đã lưu</span></Link></li>
                                            <li><Link to={"/"}><MdOutlineAccountCircle /> <span>Tài khoản</span></Link></li>
                                            <li><Link to={"/"}><CgEnter /> <span>Đăng nhập</span></Link></li>
                                        </ul>
                                    </Container>
                                </div>
                                <div className='con_cart_close' onClick={handle_click_cart_close}></div>
                            </div>

                        </div>
                    </div>

                </div>
            </Container>
            <div>

            </div>
        </Navbar>
        </div>

    )
}