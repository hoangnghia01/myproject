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

import "./Cart_page.css"
import { AppContext } from "../../AppContext";
import { VscClose } from 'react-icons/vsc';
import { BiArrowBack } from 'react-icons/bi';
import { useContext } from "react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';
import { useState } from "react";

export default function Cart_page() {
    const { cart, quanlity, changqty, delete1 } = useContext(AppContext)
    const form_order = useRef();
    const [form_orderError, setForm_orderError] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        // Kiểm tra các ô input trước khi gửi form
        const name = form_order.current.user_name.value;
        const phone = form_order.current.user_phone_number.value;
        const email = form_order.current.user_email.value;
        const address = form_order.current.user_address.value;

        if (!name || !phone || !email || !address) {
            setForm_orderError(true);
            return;
        }

        emailjs
            .sendForm('service_21zch1a', 'template_s22baxb', form_order.current, '8BaRor5DETaDNRpiu')
            .then(
                (result) => {
                    console.log(result.text);
                    swal({
                        title: "Cám ơn bạn!",
                        text: "Chúng tôi đã nhận được tin nhắn của bạn!",
                    });
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <section style={{ backgroundColor: "#eee" }} data-aos="zoom-in">
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
                                                            <th className="hinh_sp_cart_page">Hình sản phẩm</th>
                                                            <th className="price_cart_page">Đơn giá</th>
                                                            <th className="name_cart_page">Tên sản phẩm</th>
                                                            <th className="qualy_cart_page">Số lượng</th>
                                                            <th className="total_cart_page">Tổng cộng</th>
                                                            <th className="delete_cart_page" >Xoá</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {cart.map((product, index) =>
                                                            <tr>
                                                                <td className="hinh_sp_cart_page"><img src={product.img} alt={product.name} /></td>
                                                                <td className="price_cart_page">$
                                                                    {product ? product.price : ""}
                                                                </td>
                                                                <td className="name_cart_page">{product ? product.name : ""}</td>
                                                                <td className="qualy_cart_page">
                                                                    <samp type="button" onClick={() => (changqty(product.id, -1))}>-</samp>
                                                                    {product.qty}
                                                                    <samp type="button" onClick={() => (changqty(product.id, +1))}>+</samp>
                                                                </td>
                                                                <td className="total_cart_page">${product.qty * product.price}</td>
                                                                <td className="delete_cart_page" ><VscClose fas icon="times" onClick={() => (delete1(product.id))} /></td>
                                                            </tr>
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>

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
                                                Thông tin giao hàng
                                            </MDBTypography>

                                            <form ref={form_order} onSubmit={sendEmail} className='form_input_ship'>
                                                <div className='form_group'>
                                                    <label>Name*</label>
                                                    <input type="text" name="user_name" placeholder="Nhập tên" />
                                                </div>
                                                <div className='form_group'>
                                                    <label>Số điện thoại*</label>
                                                    <input type="number" name="user_phone_number" placeholder="Nhập số điện thoại của bạn" />
                                                </div>
                                                <div className='form_group'>
                                                    <label>Email*</label>
                                                    <input type="email" name="user_email" placeholder="Nhập email của bạn" />
                                                </div>
                                                <div className='form_group'>
                                                    <label>Địa chỉ*</label>
                                                    <input type="text" name="user_address" placeholder="Nhập địa chỉ" />
                                                </div>
                                                <div>
                                                    {form_orderError && <p className="error-message">Vui lòng điền đầy đủ thông tin</p>}
                                                </div>


                                                <input type="submit" value=" Đặt hàng" className='button_send' />
                                            </form>
                                            <hr className="my-4" />
                                            {/* <MDBBtn color="dark orange" block size="lg">
                                                Đặt hàng
                                            </MDBBtn> */}
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