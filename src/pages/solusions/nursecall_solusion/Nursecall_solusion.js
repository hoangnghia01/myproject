import { Container } from "react-bootstrap"
import "./Nursecall_solusion.css"
import baner_nurse_call from "../../../components/imgs/baner_solusion/nurse-call.PNG"
import application_hospital_s1 from "../../../components/imgs/baner_solusion/application_hospital_s1.png"
import { Link } from "react-router-dom"
export default function Nursecall_solusion() {
    return (
        <div className="nursecall_solusion_page">
            <Container>
                <div className="container_nursecall_solusion_page">
                    <h1 className="container_nursecall_solusion_page_tital">Giải pháp toàn diện cho bệnh viện</h1>


                </div>
                <div className="nursecall_solusion_page_top">
                    <div className="nursecall_solusion_pagetop_left">
                        <h2>Giao tiếp tốt hơn thúc đẩy chăm sóc sức khỏe tốt hơn cho bệnh nhân và gia đình!</h2>
                        <p>--- -</p>
                        <p>
                            Các bệnh viện, cơ sở y tế và văn phòng chăm sóc sức khỏe hiểu rằng tối ưu hóa lưu lượng bệnh nhân là một phần không thể thiếu trong việc cung cấp dịch vụ chăm sóc bệnh nhân hiệu quả. SYSCALL cung cấp hệ thống báo gọi y tá hoàn chỉnh và đáng tin cậy nhất cho phép bạn giao tiếp với bệnh nhân hiệu quả hơn như hệ thống báo gọi y tá, v.v.
                            Với các sản phẩm của SYSCALL , bạn có thể cải thiện trải nghiệm của bệnh nhân một cách nhanh chóng và dễ dàng.
                            SYSCALL sẽ giúp doanh nghiệp của bạn phát triển.
                        </p>

                        <Link to={"/lien-he"}> <button className="nursecall_solusion_page_contact">Liên hệ ngay</button></Link>
                    </div>
                    <div className="nursecall_solusion_pagetop_right">
                        <img src={baner_nurse_call} />
                    </div>
                </div>
                <div className="nursecall_solusion_page_bottom">
                    <h2>Các giải pháp</h2>
                    <div  className="nursecall_solusion_page_bottom_solusion">
                        <div className="nursecall_solusion_page_bottom_solusion_info">
                            <h4>
                            Hệ Thống Gọi Y Tá
                            </h4>
                            <p>
                                1. Bệnh nhân nhấn nút gọi , số phòng hoặc số giường sẽ hiện trên đầu thu .
                            </p>
                            <p>
                                2. Các y tá cũng có thể kiểm tra các cuộc gọi bằng máy nhắn tin .
                            </p>
                        </div>
                        <div className="nursecall_solusion_page_bottom_solusion_img">
                            <img src={application_hospital_s1} />
                        </div>
                    </div>
                    <div  className="nursecall_solusion_page_bottom_solusion">
                        <div className="nursecall_solusion_page_bottom_solusion_info">
                            <h4>
                            Hệ Thống Gọi Y Tá
                            </h4>
                            <p>
                                1. Bệnh nhân nhấn nút gọi , số phòng hoặc số giường sẽ hiện trên đầu thu .
                            </p>
                            <p>
                                2. Các y tá cũng có thể kiểm tra các cuộc gọi bằng máy nhắn tin .
                            </p>
                        </div>
                        <div className="nursecall_solusion_page_bottom_solusion_img">
                            <img src={application_hospital_s1} />
                        </div>
                    </div>


                    
                </div>

            </Container>
        </div>
    )
}