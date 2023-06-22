import { Container } from "react-bootstrap"
import "./Restaurant_solusion.css"
import baner_resraurent_call from "../../../components/imgs/baner_solusion/nha-hang-1.png"
import baner_resraurent_call_1 from "../../../components/imgs/baner_solusion/chuong-goi-phuc-vu.png"
import baner_resraurent_call_2 from "../../../components/imgs/baner_solusion/so-thu-tu.png"
import application_hospital_s1 from "../../../components/imgs/baner_solusion/application_hospital_s1.png"
import { Link } from "react-router-dom"
export default function Restaurant_solusion() {
    return (
        <div className="restaurant_solusion_page">
            <Container>
                <div className="container_restaurant_solusion_page">
                    <h1 className="container_restaurant_solusion_page_tital">Giải pháp toàn diện cho nhà hàng</h1>
                </div>
                <div className="restaurant_solusion_page_top" data-aos="fade-up"
                    data-aos-duration="1000">
                    <div className="restaurant_solusion_pagetop_left">
                        <h3>Tăng cường sự tiện lợi và hiệu quả trong dịch vụ</h3>
                        <p>--- -</p>
                        <p>
                            Chuông gọi phục vụ giúp tăng tính tiện lợi và tốc độ phục vụ trong nhà hàng, đồng thời cải thiện trải nghiệm của khách hàng.
                        </p>
                        <Link to={"/lien-he"}> <button className="restaurant_solusion_page_contact">Liên hệ ngay</button></Link>
                    </div>
                    <div className="restaurant_solusion_pagetop_right">
                        <img src={baner_resraurent_call} />
                    </div>
                </div>
                <div className="restaurant_solusion_page_bottom">
                    <h2>Các giải pháp</h2>
                    <div className="restaurant_solusion_page_bottom_solusion" data-aos="fade-up"
                    data-aos-duration="1500">
                        <div className="restaurant_solusion_page_bottom_solusion_info">
                            <h4>
                                Chuông gọi nhân viên phục vụ
                            </h4>
                            <p>
                                Chuông gọi nhân viên phục vụ là một giải pháp quan trọng để tăng cường sự tiện lợi và hiệu quả trong việc phục vụ khách hàng. Chuông gọi giúp khách hàng dễ dàng liên lạc và yêu cầu sự hỗ trợ từ nhân viên một cách nhanh chóng và thuận tiện.
                            </p>
                            <button className="restaurant_solusion_button">Xem chi tiết</button>
                        </div>
                        <div className="restaurant_solusion_page_bottom_solusion_img">
                            <img src={baner_resraurent_call_1} />
                        </div>
                    </div>
                    <div className="restaurant_solusion_page_bottom_solusion" data-aos="fade-up"
                    data-aos-duration="1500">
                        <div className="restaurant_solusion_page_bottom_solusion_info">
                            <h4>
                                Hệ thống gọi số thứ tự
                            </h4>
                            <p>

                                Hệ thống gọi số thứ tự được sử dụng để tối ưu hóa quá trình chờ đợi và phục vụ khách hàng. Hệ thống này giúp tổ chức và quản lý quy trình phục vụ một cách hiệu quả, đảm bảo sự công bằng và nâng cao trải nghiệm của khách hàng.
                            </p>
                            <button className="restaurant_solusion_button">Xem chi tiết</button>
                        </div>
                        <div className="restaurant_solusion_page_bottom_solusion_img">
                            <img src={baner_resraurent_call_2} />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}