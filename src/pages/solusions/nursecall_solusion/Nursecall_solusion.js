import { Container } from "react-bootstrap"
import "./Nursecall_solusion.css"
import baner_nurse_call from "../../../components/imgs/baner_solusion/nurse-call.PNG"
import nurse_call from "../../../components/imgs/baner_solusion/chuong-goi-y-ta.png"
import nurse_call_2 from "../../../components/imgs/baner_solusion/chuong-nha-ve-sinh.png"
import nurse_call_3 from "../../../components/imgs/baner_solusion/bao-dong-do.png"
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
                    <div className="nursecall_solusion_page_bottom_solusion_img">
                            <img src={nurse_call} />
                        </div>
                        <div className="nursecall_solusion_page_bottom_solusion_info">
                            <h4>
                            Chuông gọi nhân viên y tế
                            </h4>
                            <p>--- -</p>
                            <p>
                            Chuông gọi nhân viên y tế đã trở thành một giải pháp quan trọng trong việc đảm bảo sự phản hồi nhanh chóng và hiệu quả trong lĩnh vực chăm sóc sức khỏe. Hệ thống này cho phép bệnh nhân và nhân viên y tế có thể gọi ngay lập tức nhân viên y tế khi cần đến sự hỗ trợ.
                            </p>
                            <Link to={"/"}><button  className="solusion_page_bottom_button">Xem chi tiết</button></Link>
                        </div>
                        
                    </div>
                    <div  className="nursecall_solusion_page_bottom_solusion">
                        <div className="nursecall_solusion_page_bottom_solusion_info">
                            <h4>
                            Chuông gọi y tá trong nhà vệ sinh
                            </h4>
                            <p>--- -</p>
                            <p>
                            Trong môi trường y tế, việc đảm bảo sự thuận tiện và an toàn cho bệnh nhân là một yếu tố quan trọng. Để đáp ứng nhu cầu này, chuông gọi y tá trong nhà vệ sinh đã trở thành một giải pháp đáng chú ý trong các cơ sở y tế.
                            </p>
                            <Link to={"/"}><button  className="solusion_page_bottom_button">Xem chi tiết</button></Link>
                        </div>
                        <div className="nursecall_solusion_page_bottom_solusion_img">
                            <img src={nurse_call_2} />
                        </div>
                    </div>
                    <div  className="nursecall_solusion_page_bottom_solusion">
                    <div className="nursecall_solusion_page_bottom_solusion_img">
                            <img src={nurse_call_3} />
                        </div>
                        <div className="nursecall_solusion_page_bottom_solusion_info">
                            <h4>
                            Chuông báo khẩn cấp
                            </h4>
                            <p>--- -</p>
                            <p>
                            Trong môi trường y tế, thời gian đáng giá. Trong những tình huống khẩn cấp, phản ứng nhanh chóng và hiệu quả có thể là sự phân biệt giữa sự sống và cái chết. Để đáp ứng yêu cầu này, chuông báo gọi khẩn cấp đã trở thành một giải pháp đáng chú ý trong các bệnh viện.
                            </p>
                            <Link to={"/"}><button  className="solusion_page_bottom_button">Xem chi tiết</button></Link>
                        </div>
                        
                    </div>
                    <div  className="nursecall_solusion_page_bottom_solusion">
                        <div className="nursecall_solusion_page_bottom_solusion_info">
                            <h4>
                           Hệ thống báo động đỏ
                            </h4>
                            <p>--- -</p>
                            <p>
                            Trong môi trường y tế, an toàn của bác sĩ và nhân viên y tế là một yếu tố quan trọng và cần được đảm bảo. Để đối phó với tình huống tấn công và đảm bảo sự an toàn cho bác sĩ, hệ thống báo động đỏ nội viện đã trở thành một giải pháp đột phá và hiệu quả trong các cơ sở y tế.
                            </p>
                            <Link to={"/"}><button  className="solusion_page_bottom_button">Xem chi tiết</button></Link>
                        </div>
                        <div className="nursecall_solusion_page_bottom_solusion_img">
                            <img src={nurse_call_3} />
                        </div>
                    </div>


                    
                </div>

            </Container>
        </div>
    )
}