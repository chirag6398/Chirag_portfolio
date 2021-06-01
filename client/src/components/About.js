import React, { useContext, useEffect, useState } from "react";
import "../styles/about.css";
import myImg from "../images/myImg.jpg";
import { ContextValue } from "../App";
import { MdMessage } from "react-icons/md";
import { useHistory } from "react-router-dom";

export default function About() {
  const { state } = useContext(ContextValue);
  const [animate, setAnimate] = useState(false);
  const history = useHistory();
  const messageHandler = () => {
    history.push("/talk");
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 280) {
        setAnimate(true);
      } else {
        if (animate) {
          setAnimate(false);
        }
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 200) {
          setAnimate(true);
        } else {
          if (animate) {
            setAnimate(false);
          }
        }
      });
    };
  });

  return (
    <div className="about__container">
      <div className="about__mainContent">
        <div>
          <img className="about__myImg" src={myImg} alt="..." />
        </div>
        <div>
          <p
            className={
              state.onDarkMode
                ? "about__paraContent about__Content"
                : "about__Content"
            }
          >
            Hi there, this is
            <span>
              <b> Chirag</b>
            </span>
            . A front-end web developer using
            <span className="about__highlights">react-js</span> library. I work
            with my college technical society team
            <span className="about__highlights"> Conatus</span>.I am doing my
            Btech with Computer Science. I love to learn,explore,travel and
            expertise in the field of web Development.
          </p>
        </div>
        <div style={{ maxWidth: "max-content" }}>
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
    </div>
  );
}
