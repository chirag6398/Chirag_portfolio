import React, { useContext, useEffect, useState, useRef } from "react";
import "../styles/about.css";
import myImg from "../images/myImg.jpg";
import { gsap, TweenMax, Power3, TimelineLite } from "gsap";
import { ContextValue } from "../App";
import { MdMessage } from "react-icons/md";
import { useHistory } from "react-router-dom";

export default function About() {
  const { state } = useContext(ContextValue);
  const [animate, setAnimate] = useState(false);
  let tl = new TimelineLite();
  let divNameRef = useRef(null);
  let myName = [
    "C",
    "h",
    "i",
    "r",
    "a",
    "g",
    "A",
    "g",
    "r",
    "a",
    "w",
    "a",
    "l",
  ];
  let arrayRef = useRef([]);
  let techRef = useRef(null);
  arrayRef.current = [];
  const arrayAdder = (el) => {
    if (el && !arrayRef.current.includes(el)) {
      arrayRef.current.push(el);
    }
  };
  useEffect(() => {
    gsap.fromTo(
      techRef,
      0.5,
      { x: -100, opacity: 0, ease: Power3.easeOut },
      { x: 0, y: 60, opacity: 1, delay: 2 }
    );

    TweenMax.to(divNameRef, 0, { css: { visibility: "visible" } });
    TweenMax.to(
      [
        arrayRef.current[6],
        arrayRef.current[7],
        arrayRef.current[8],
        arrayRef.current[9],
        arrayRef.current[10],
        arrayRef.current[11],
        arrayRef.current[12],
      ],
      0,
      {
        css: { color: "brown" },
      }
    );
    tl.staggerFrom(
      [
        arrayRef.current[0],
        arrayRef.current[1],
        arrayRef.current[2],
        arrayRef.current[3],
        arrayRef.current[4],
        arrayRef.current[5],
        arrayRef.current[6],
        arrayRef.current[7],
        arrayRef.current[8],
        arrayRef.current[9],
        arrayRef.current[10],
        arrayRef.current[11],
        arrayRef.current[12],
      ],
      0.5,
      { y: 5, x: -10, opacity: 0, ease: Power3.easeOut, delay: 0 },

      0.15
    );
  }, []);
  const history = useHistory();
  const messageHandler = () => {
    history.push("/talk");
  };
  // let divRef = useRef(null);
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
  });

  return (
    <>
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
              <span className="about__highlights">react-js</span> library. I
              work with my college technical society team
              <span className="about__highlights"> Conatus</span>.I am doing my
              Btech with Computer Science. I love to learn,explore,travel and
              expertise in the field of web Development.
            </p>
          </div>
        </div>
      </div>

      <div className="about__btnDiv">
        <div
          style={{
            maxWidth: "max-content",
            position: "fixed",
            right: "4px",
            zIndex: "100",
            margin: "10px 10px",
          }}
          // ref={(el) => {
          //   divRef = el;
          // }
          // }
        >
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
      <div
        ref={(el) => (divNameRef = el)}
        className={
          state.onDarkMode ? "about__nameDark about__name" : "about__name"
        }
      >
        {myName.map((val, ind) => {
          return (
            <span key={ind} ref={arrayAdder}>
              {val}
            </span>
          );
        })}

        <h4
          ref={(el) => {
            techRef = el;
          }}
        >
          MERN Developer
        </h4>
      </div>
    </>
  );
}
