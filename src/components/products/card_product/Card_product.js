import { Button } from "bootstrap";
import "./Card_product.css"
import { AppContext } from "../../../AppContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import swal from 'sweetalert';
export default function Card_product(props) {
    const { product } = props;
    const { addCart } = useContext(AppContext)

    return (

        <div className="card_product">
            <div className="ing_product"> <img src={product.img} alt={product.name} /></div>
            {/* <div className="quick_view"><button>Xem nhanh</button>

                </div> */}
            <div className="content_cart_product">
                <Link to={`/san-pham/${product.id}`} className="product_name"><b><h5>{product ? product.name : ""}</h5></b></Link>
                <div className="product_price"><span>Giá: </span>{product ? product.price : ""} <span>đ</span></div>
                <div className="product_code"><span>Mã sản phẩm: </span>{product ? product.product_code : ""}</div>
                <div className="product_label">{product ? product.label : ""}</div>
                <button className="add_cart" onClick={() => (addCart(product.id), swal({
                    title: "Đạt hàng thành công!",
                    text: "Đã thêm vào giỏ hàng của bạn!",
                    icon: "success",
                    button: "Tiếp tục mua sắm!",
                })
                )}>Thêm vào giỏ hàng</button>
            </div>
        </div>




    )
}