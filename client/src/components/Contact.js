import React, { useContext, useEffect } from "react";
import "../styles/contact.css";
import line from "../images/line.png";
import { ContextValue } from "../App";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import callImg from "../images/call.svg";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Contact() {
  const { state } = useContext(ContextValue);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div
      className={
        state.onDarkMode
          ? "contact__container__dark contact__container"
          : "contact__container"
      }
    >
      <div data-aos="fade-right" className="contact__leftSide">
        <div
          style={{ display: "flex", width: "100vw", justifyContent: "center" }}
        >
          <img src={line} alt="..." />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4>Got A Project?</h4>
            <span className="contact__span">Let's Talk</span>
          </div>
        </div>
      </div>
      <div className="contact__main_container">
        <img data-aos="fade-right" src={callImg} alt="..." />
        <div className="contact__rightSide">
          <div data-aos="fade-left" className="contact__phone">
            <FaPhoneAlt style={{ marginLeft: "3px" }} />
            <span>6398356528</span>
          </div>
          <div data-aos="fade-left" className="contact__email">
            <MdEmail style={{ marginRight: "3px" }} />
            <span>agarwalchirag112@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
