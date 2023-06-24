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
import React from "react";
import "./Cart_page.css"
import { AppContext } from "../../AppContext";
import { VscClose } from 'react-icons/vsc';
import { BiArrowBack } from 'react-icons/bi';

import { useContext } from "react";

export default function Cart_page() {
    const { cart, quanlity, changqty, delete1 } = useContext(AppContext)
    console.log(cart)
    return (
        <section style={{ backgroundColor: "#eee" }}>
            <MDBContainer className="py-5">
                <MDBRow className="justify-content-center align-items-center">
                    <MDBCol size="12">
                        <MDBCard className="card-registration card-registration-2" style={{ borderRadius: "15px" }}>
                            <MDBCardBody className="p-0">
                                <MDBRow className="g-0">
                                    <MDBCol lg="8">
                                        <div className="p-5">
                                            <div className="d-flex justify-content-between align-items-center mb-5">
                                                <MDBTypography tag="h1" className="fw-bold mb-0 text-black">
                                                    Giỏ hàng của bạn
                                                </MDBTypography>
                                                <MDBTypography className="mb-0 text-muted">
                                                    {quanlity} sản phẩm
                                                </MDBTypography>
                                            </div>
                                            <div>
                                                <table className="table_cart_page">
                                                    <thead>
                                                        <tr>
                                                            <th className="hinh_sp_cart_page">Hinh san pham</th>
                                                            <th className="price_cart_page">Don gia</th>
                                                            <th  className="name_cart_page">Ten san pham</th>
                                                            <th  className="qualy_cart_page">So luong</th>
                                                            <th className="total_cart_page">Tong cong</th>
                                                            <th  className="delete_cart_page" >Xoa</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {cart.map((product, index) =>
                                                            <tr>
                                                                <td  className="hinh_sp_cart_page"><img src={product.img} alt={product.name}/></td>
                                                                <td  className="price_cart_page">$
                                                                    {product ? product.price : ""}
                                                                </td>
                                                                <td  className="name_cart_page">{product ? product.name : ""}</td>
                                                                <td  className="qualy_cart_page">
                                                                    <samp type="button" onClick={() => (changqty(product.id, -1))}>-</samp>
                                                                    {product.qty}
                                                                    <samp type="button" onClick={() => (changqty(product.id, +1))}>+</samp>
                                                                </td>
                                                                <td className="total_cart_page">${product.qty * product.price}</td>
                                                                <td  className="delete_cart_page" ><VscClose fas icon="times" onClick={() => (delete1(product.id))} /></td>
                                                            </tr>
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>
                                            {/* {cart.map((product, index) =>
                                                <div key={index}>
                                                    <div className="container_product_cart">
                                                        <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                                                            <MDBCol md="2" lg="2" xl="2">
                                                                <img src={product.img} alt={product.name} className="rounded-3" />


                                                            </MDBCol>
                                                            <MDBCol md="2" lg="2" xl="2" className="text-center my-1">
                                                                {product ? product.price : ""}
                                                            </MDBCol>
                                                            <MDBCol md="2" lg="3" xl="3" className="text-center my-1"    >
                                                                
                                                                <MDBTypography tag="h6" className="text-black mb-0">
                                                                    {product ? product.name : ""}
                                                                </MDBTypography>
                                                            </MDBCol>
                                                            <MDBCol md="2" lg="2" xl="2" className="quality_cart_page my-1">


                                                                <samp type="button" onClick={() => (changqty(product.id, -1))}>-</samp>


                                                                {product.qty}

                                                                <samp type="button" onClick={() => (changqty(product.id, +1))}>+</samp>


                                                            </MDBCol>
                                                            <MDBCol md="2" lg="2" xl="2" className="text-center my-1">
                                                                <MDBTypography tag="h6" className="mb-0">${product.qty * product.price}</MDBTypography>
                                                            </MDBCol>
                                                            <MDBCol md="2" lg="1" xl="1" className="text-center">
                                                                <a href="#!" className="text-muted">
                                                                    <VscClose fas icon="times" onClick={() => (delete1(product.id))} />
                                                                </a>
                                                            </MDBCol>
                                                        </MDBRow>
                                                    </div>
                                                </div>
                                            )} */}
                                            <hr className="my-4" />
                                            <div className="pt-5">
                                                <MDBTypography tag="h6" className="mb-0">
                                                    <MDBCardText tag="a" href="/san-pham" className="text-body">
                                                        <BiArrowBack /> Back
                                                        to shop
                                                    </MDBCardText>
                                                </MDBTypography>
                                            </div>
                                        </div>
                                    </MDBCol>
                                    <MDBCol lg="4" className="bg-grey">
                                        <div className="p-5">
                                            <MDBTypography tag="h3" className="fw-bold mb-5 mt-2 pt-1">
                                                Thanh toán
                                            </MDBTypography>
                                            <div className="d-flex justify-content-between mb-4">
                                                <MDBTypography tag="h5" className="text-uppercase">
                                                    Tổng cộng:
                                                </MDBTypography>
                                                <MDBTypography tag="h5"> ${cart.reduce((total, item) => total + item.qty * item.price, 0)}</MDBTypography>
                                            </div>
                                            <hr className="my-3" />
                                            <MDBTypography tag="h3" className="fw-bold mb-2 mt-2 pt-1">
                                                Thong tin giao hang
                                            </MDBTypography>


                                            {/* <MDBTypography tag="h5" className="text-uppercase mb-3">
                                                Giao hàng
                                            </MDBTypography> */}

                                            {/* <div className="mb-4 pb-2">
                                                <select className="select p-2 rounded bg-grey" style={{ width: "100%" }}>
                                                    <option value="1">Giao hang mien phi</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                    <option value="4">Four</option>
                                                </select>
                                            </div>

                                            <MDBTypography tag="h5" className="text-uppercase mb-3">
                                               Giảm giá
                                            </MDBTypography> */}

                                            <div className="my-4">
                                                <MDBInput size="lg" placeholder="Nhap ten ban" />
                                            </div>
                                            <div className="my-4">
                                                <MDBInput size="lg" placeholder="So dien thoai" />
                                            </div>
                                            <div className="my-4">
                                                <MDBInput size="lg" placeholder="Email cua ban" />
                                            </div>
                                            <div className="my-4">
                                                <MDBInput size="lg" placeholder="Dia chi giao hang" />
                                            </div>


                                            <hr className="my-4" />

                                            {/* <div className="d-flex justify-content-between mb-5">
                                                <MDBTypography tag="h5" className="text-uppercase">
                                                    TỔNG THANH TOÁN
                                                </MDBTypography>
                                                <MDBTypography tag="h5">€ 137.00</MDBTypography>
                                            </div> */}

                                            <MDBBtn color="dark orange" block size="lg">
                                                Đặt hàng
                                            </MDBBtn>
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}