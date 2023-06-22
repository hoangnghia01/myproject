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
        , backrgoudNav, setBackrgoudNav, quanlity, cart, changqty, delete1 } = useContext(AppContext)
    return (
        <div className='vav'>
            <div className='header'>
                <Navbar expand="lg" className={`navbar ${backrgoudNav ? "setbackgroud" : ""}`} >
                    <Container className='container'>
                        <CgMenuLeft className='nav_icon' onClick={handle_click_menu} />
                        <div className='header_left'>
                            <Link to={"/"} style={{ textDecoration: 'none' }} ><img src={logo} /></Link>
                        </div>
                        <div className='header_right'>
                            {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                            <div className={`menu ${shownav ? "activemenu" : ""}`}>

                                <ul onClick={close_menu}>
                                    <li><Link to={"/"} style={{ textDecoration: 'none' }}><h3>Trang chủ</h3></Link></li>
                                    <li><Link to={"/giai-phap"} style={{ textDecoration: 'none' }} className='solusion'><h3>Giải pháp <span><GrFormDown /></span></h3>
                                        <ul className='menu_child'>
                                            <li><Link to={"/giai-phap/giai-phap-cho-benh-vien"}>Giải pháp cho bệnh viện</Link>
                                                <ul className='menu_child-child'>
                                                    <li>Chuông gọi nhân viên y tế</li>
                                                    <li>Chuông báo gọi trong nhà vệ sinh</li>
                                                    <li>Chuông báo khẩn cấp</li>
                                                    <li>Hệ thống báo động đỏ</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to={"/giai-phap/giai-phap-cho-nha-hang"}>Giải pháp cho nhà hàng</Link>
                                                <ul className='menu_child-child'>
                                                    <li>Chuông gọi nhân viên phục vụ</li>
                                                    <li>Hệ thống gọi số thứ tự</li>

                                                </ul>
                                            </li>
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
                                            <li><Link to={"/san-pham/chuong-goi-phuc-vu"}>Chuông gọi phục vụ</Link>
                                                <ul className='menu_child-child'>
                                                    <li>Hãng Syscall Hàn Quốc</li>
                                                    <li>Hãng Ringo</li>
                                                    <li>Hãng Quickbell</li>
                                                    <li>Hãng JT</li>
                                                </ul>
                                            </li>
                                            <li>Chuông báo gọi y tá
                                                <ul className='menu_child-child'>
                                                    <li>Chuông gọi y tá không dây</li>
                                                    <li>Chuông gọi y tá có dây</li>

                                                </ul>
                                            </li>
                                            <li>Thẻ rung tự phục vụ
                                                <ul className='menu_child-child'>
                                                    <li>Hãng Syscall Hàn Quốc</li>
                                                    <li>Hãng JT</li>

                                                </ul>
                                            </li>
                                            <li>Hệ thống định vị bàn khách ngồi</li>
                                            <li>Hệ thống gọi số thứ tự
                                                <ul className='menu_child-child'>
                                                    <li>Hãng Syscall Hàn Quốc</li>
                                                    <li>Hãng JT</li>

                                                </ul>
                                            </li>
                                            <li>Thiết bị cảnh báo nhiệt độ - độ ẩm</li>
                                            <li>Bộ đàm</li>
                                            <li>Camera an ninh</li>
                                            <li>Phụ kiện</li>
                                        </ul>
                                    </Link></li>
                                    <li><Link to={"/blog"} style={{ textDecoration: 'none' }}><h3>Blog</h3></Link></li>
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
                                    <button onClick={handle_click_cart}><BsBag className='cart_icon' />
                                        <div className='item_quanlity'>{quanlity}</div>
                                    </button>

                                    <div className={`container_cart ${showcart ? "active1" : ""}`}>
                                        <div className='con_cart'>
                                            <Container className='container_con_cart'>
                                                {(quanlity === 0) ?
                                                    <div>
                                                        <h3>Túi của bạn trống.</h3>
                                                        <p><Link>Đăng nhập</Link><span> để xem có sản phẩm nào đã lưu không?</span></p>
                                                    </div>

                                                    :
                                                    <div>
                                                        <MDBCol lg="12">
                                                            <div className="product_shoppingcart">
                                                                <div className="d-flex justify-content-between align-items-center mb-5">
                                                                    <MDBTypography tag="h3" className="fw-bold mb-0 text-black">
                                                                        Shopping Cart
                                                                    </MDBTypography>
                                                                    <MDBTypography className="mb-0 text-muted">
                                                                        {quanlity} san pham
                                                                    </MDBTypography>
                                                                </div>

                                                                {cart.map((product, index) =>
                                                                    <div key={index}>
                                                                        <div className="container_product_cart">
                                                                            <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                                                                                {/* <MDBCol md="2" lg="2" xl="2">
                                                                                <img src={product.img} alt={product.name} className="rounded-3" />
                                                                            </MDBCol> */}

                                                                                <MDBCol md="2" lg="3" xl="3">
                                                                                    <MDBTypography tag="h6" className="text-muted text-align-top">
                                                                                        Tên hàng hoá
                                                                                    </MDBTypography>
                                                                                    <MDBTypography tag="h6" className="text-black mb-0">
                                                                                        {product ? product.name : ""}
                                                                                    </MDBTypography>
                                                                                </MDBCol>
                                                                                <MDBCol md="2" lg="1" xl="1">
                                                                                    <MDBTypography tag="h6" className="text-muted text-align-top">
                                                                                        Đơn giá
                                                                                    </MDBTypography>
                                                                                    <MDBTypography tag="h6" className="text-black mb-0 ">
                                                                                        {product ? product.price : ""}$
                                                                                    </MDBTypography>

                                                                                </MDBCol>
                                                                                <MDBCol md="2" lg="2" xl="2">
                                                                                    <MDBTypography tag="h6" className="text-muted text-align-center;">
                                                                                        Số lượng
                                                                                    </MDBTypography>
                                                                                    <MDBTypography tag="h6" className="text-black mb-0">
                                                                                        <samp type="button" onClick={() => (changqty(product.id, -1))}>-</samp>
                                                                                        {product.qty}
                                                                                        <samp type="button" onClick={() => (changqty(product.id, +1))}>+</samp>
                                                                                    </MDBTypography>


                                                                                </MDBCol>
                                                                                <MDBCol md="2" lg="2" xl="2" className="text-center">
                                                                                    <MDBTypography tag="h6" className="text-muted text-align-center;">
                                                                                        Tổng
                                                                                    </MDBTypography>
                                                                                    <MDBTypography tag="h6" className="mb-0">${product.qty * product.price}</MDBTypography>
                                                                                </MDBCol>
                                                                                <MDBCol md="2" lg="2" xl="2" className="text-center">
                                                                                    {/* <MDBTypography tag="h6" className="text-muted text-align-center;">
                                                                                        Xoá
                                                                                    </MDBTypography> */}
                                                                                    <a href="#!" className="text-muted">
                                                                                        <VscClose fas icon="times" onClick={() => (delete1(product.id))} />
                                                                                    </a>
                                                                                </MDBCol>
                                                                            </MDBRow>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                                <hr className="my-4" />
                                                                <div className="pt-1">
                                                                    <MDBTypography tag="h6" className="cart_button_cart">
                                                                        <MDBCardText onClick={handle_click_cart_close} className="cart_button_close_cart">
                                                                            <BiArrowBack /> Tiếp tục mua sắm
                                                                        </MDBCardText>
                                                                        <MDBCardText tag="a" href="/cart" className="cart_button_thanhtoan">
                                                                            Thanh toán
                                                                        </MDBCardText>

                                                                    </MDBTypography>
                                                                   
                                                                        
                                                                   
                                                                </div>
                                                            </div>
                                                        </MDBCol>
                                                    </div>
                                                }
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
        </div>
    )
}