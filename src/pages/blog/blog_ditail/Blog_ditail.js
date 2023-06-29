import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { AppContext } from "../../../AppContext";
import "./Blog_ditail.css"
import huongdanbaner from "../../../components/imgs/baner_solusion/huongdan_baner.jpg"
export default function Blog_ditail() {
    const { blog } = useContext(AppContext);
    const [blog_dt, setBlog_dt] = useState(null);

    const location = useLocation();
    const path = location.pathname;
    const id = path.substring(path.lastIndexOf("/") + 1);

    useEffect(() => {
        // Tìm kiếm sản phẩm dựa trên ID trong danh sách sản phẩm
        const foundblog_dt = blog.find((item) => item.id === parseInt(id));
        setBlog_dt(foundblog_dt);
    }, [id, blog]);
    const backgroundStyle = {
        backgroundImage: `url(${huongdanbaner})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
    };
    return (
        <div className="blog_ditail">
            <div style={backgroundStyle} className="blog_page_title" data-aos="fade-down">
            </div>
            <Container>
                <div className="blog_ditail_container" data-aos="fade-up"
                    data-aos-duration="1000">

                    <div className="blog_ditail_container_content">
                        <h3>{blog_dt ? blog_dt.name_blog : ""}</h3>
                        <img className="img_blog" src={blog_dt ? blog_dt.img_blog
                            : ""} alt={blog_dt ? blog_dt.name_blog : ""} />
                        <h4>Hướng dẫn chi tiết:</h4>
                        <p>{blog_dt ? blog_dt.description_blog : ""}</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}