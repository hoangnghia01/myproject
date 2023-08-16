import React, { useState, useEffect } from "react";
import { AiOutlineUpCircle, AiOutlinePhone } from "react-icons/ai";
import "./ScrollToTop.css";
const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className="top-to-btm">
            {" "}
            {showTopBtn && (
                <AiOutlineUpCircle
                    className="icon-position-ontop"
                    onClick={goToTop}
                />
            )}{" "}
            <section className="call-buton">
                <a className="cc-calto-action-ripple" href="tel:0979772145">
                    <i><AiOutlinePhone/></i>
                    <span className="num">0979.772.145</span>
                </a>
            </section>
        </div>
    );
};
export default ScrollToTop;