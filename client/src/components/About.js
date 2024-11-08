import React, { useContext, useEffect, useState } from "react";

import "../styles/about.css";
import myImg from "../images/myImg.jpg";
import { ContextValue } from "../App";
import { MdMessage } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function About() {
  const { state } = useContext(ContextValue);
  const [animate, setAnimate] = useState(false);
  const history = useNavigate();

  const messageHandler = () => {
    history.push("/talk");
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 360) {
        setAnimate(true);
      } else {
        if (animate) {
          setAnimate(false);
        }
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 360) {
          setAnimate(true);
        } else {
          if (animate) {
            setAnimate(false);
          }
        }
      });
    };
  }, [animate]);

  return (
    <>
      <div className="about__container">
        <div className="about__mainContent">
          <div className="about__rightSide">
            <div className="aboutImg__div">
              <img className="about__myImg" src={myImg} alt="..." />
            </div>

            <div
              className={
                state.onDarkMode ? "about__nameDark about__name" : "about__name"
              }
            >
              <span>Chirag Agrawal</span>

              <h4>MERN Developer</h4>
            </div>
          </div>

          <div className="about__paraDiv">
            <p
              className={
                state.onDarkMode
                  ? "about__paraContent about__Content"
                  : "about__Content"
              }
            >
              Hi, I'm Chirag, a passionate Software Engineer with over 2 years
              of hands-on experience in backend development. I specialize in
              Node.js, Golang, and cloud-based architectures, with a strong
              focus on building scalable, high-performance systems. Currently, I
              work at Trackier, where I design and develop solutions for complex
              backend challenges, including data aggregation, real-time
              processing, and analytics. My expertise spans across various
              backend technologies such as MongoDB, ClickHouse, Kafka, and
              Redis, enabling me to create efficient, data-driven applications.
              I also have a strong foundation in report analytics using
              aggregation techniques, which helps transform data into valuable
              insights for businesses. In addition to backend, I have a solid
              understanding of frontend technologies and the MERN stack
              (MongoDB, Express.js, React, Node.js), allowing me to deliver
              full-stack solutions when needed. My passion lies in continuous
              learning and problem-solving, and I am always eager to explore new
              technologies and methodologies.I enjoy exploring new places and
              learning from different cultures, which fuels my creativity and
              drive in both my personal and professional life.
            </p>
          </div>
        </div>
      </div>

      <div className="about__btnDiv">
        <div className="btn">
          {animate ? (
            <MdMessage
              onClick={messageHandler}
              style={{
                fontSize: "35px",
                color: "#ff6e6c",
                cursor: "pointer",
                zIndex: "10",
              }}
            />
          ) : (
            <button onClick={messageHandler} className="about__btn">
              Let's Talk
            </button>
          )}
        </div>
      </div>
    </>
  );
}
