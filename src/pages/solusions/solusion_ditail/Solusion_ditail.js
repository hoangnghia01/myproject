import { Container } from "react-bootstrap";
import { AppContext } from "../../../AppContext";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect, useContext } from "react";
import baner_lolusion from "../../../components/imgs/blog_img/baner_losusion.png"
import "./Solusion_ditail.css"
export default function Solusion_ditail() {
    const { solusions } = useContext(AppContext)
    const [solusion, setSolusion] = useState(null);

    const location = useLocation();
    const path = location.pathname;
    const link = path.substring(path.lastIndexOf("/") + 1);

    useEffect(() => {
        // Tìm kiếm sản phẩm dựa trên ID trong danh sách sản phẩm
        const foundsolusion = solusions.find((item) => item.link === link);
        setSolusion(foundsolusion);
    }, [link, solusions]);
    console.log(solusion)
    const backgroundStyle = {
        backgroundImage: `url(${baner_lolusion})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    return (
        <div>

            <div style={backgroundStyle} className="baner_solusion" data-aos="fade-down">
                <Container>
                    <h2>Giải pháp</h2>
                    <h2>{solusion ? solusion.name_slusion : ""}</h2>
                </Container>
            </div>
            <Container>
                <div className="container_solusion_ditail">
                    <img className="img" src={solusion ? solusion.img_slusion : ""} alt={solusion ? solusion.name_slusion : ""} />
                    <p className="description_slusion">{solusion ? solusion.description_slusion : ""}</p>
                </div>
            </Container>
        </div>
    )
}