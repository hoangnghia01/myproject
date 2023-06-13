import { Button } from "bootstrap";
import "./Card_product.css"
export default function Card_product(props) {
    const { product } = props;
    return (
        <div>
            <div className="card_product">
                <div className="ing_product"> <img src={product.img} alt={product.name} /></div>
                <div className="quick_view"><button>Xem nhanh</button>

                </div>
                <div className="content_cart_product">
                    <div className="product_name"><h5>{product ? product.name : ""}</h5></div>
                    <div className="product_price"><span>Giá: </span>{product ? product.price : ""} <span>đ</span></div>
                    <div className="product_code"><span>Mã sản phẩm: </span>{product ? product.product_code : ""}</div>
                    <div className="product_label">{product ? product.label : ""}</div>
                    <div><button className="add_cart">Thêm vào giỏ hàng</button></div>
                </div>

            </div>

        </div>


    )
}