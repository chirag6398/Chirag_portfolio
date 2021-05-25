import React, { useContext, useEffect } from "react";
import "../styles/skills.css";
import Front from "../images/Front.png";
import Res from "../images/res.png";
import Web from "../images/webAni.png";
import ResD from "../images/resDark.png";
import FrontD from "../images/FrontDark.png";
import WebD from "../images/webAniDark.png";
import line from "../images/line.png";
import { ProgressBar } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { ContextValue } from "../App";
export default function Myskills() {
  const { state } = useContext(ContextValue);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="skills__container">
      <section
        className={
          state.onDarkMode
            ? "skills__section skills__section__darkMode"
            : "skills__section"
        }
      >
        <div data-aos="fade-right" className="skills__heading">
          <img
            alt="_____"
            src={line}
            style={{ width: "50px", height: "1px", marginRight: "5px" }}
          />
          <div className="skills__checkout">
            <h4>Checkout</h4>
            <h2 style={{ fontWeight: "900" }}>What I Do</h2>
          </div>
        </div>
        <div className="skills__img">
          <div data-aos="fade-up" className="skills__img__1">
            {state.onDarkMode ? (
              <img
                alt="Loading..."
                src={ResD}
                style={{
                  objectFit: "contain",
                  height: "80px",
                  width: "80px",
                }}
              />
            ) : (
              <img
                alt="Loading..."
                src={Res}
                style={{
                  objectFit: "contain",
                  height: "80px",
                  width: "80px",
                }}
              />
            )}

            <h3>RESPONSIVE WEB DESIGN</h3>
            <p>
              Building highly responsive User Interfaces for Websites and Web
              Applications.
            </p>
          </div>
          <div data-aos="fade-up" className="skills__img__1">
            {state.onDarkMode ? (
              <img
                alt="Loading..."
                src={FrontD}
                style={{
                  objectFit: "contain",
                  height: "80px",
                  width: "80px",
                }}
              />
            ) : (
              <img
                alt="Loading..."
                src={Front}
                style={{
                  objectFit: "contain",
                  height: "80px",
                  width: "80px",
                }}
              />
            )}

            <h3>FRONT-END DEVELOPER</h3>
            <p>
              Building highly interactive next gen User Interfaces for Websites
              and Web Applications.
            </p>
          </div>
          <div data-aos="fade-up" className="skills__img__1">
            {state.onDarkMode ? (
              <img
                alt="Loading..."
                src={WebD}
                style={{
                  objectFit: "contain",
                  height: "80px",
                  width: "80px",
                }}
              />
            ) : (
              <img
                alt="Loading..."
                src={Web}
                style={{
                  objectFit: "contain",
                  height: "80px",
                  width: "80px",
                }}
              />
            )}

            <h3>WEB-ANIMATION</h3>
            <p>
              Laveraging the power of Javascript and CSS's Animation feature to
              give life to the User Interfaces.
            </p>
          </div>
          <div data-aos="fade-up" className="skills__img__1">
            {state.onDarkMode ? (
              <img
                alt="Loading..."
                src={FrontD}
                style={{
                  objectFit: "contain",
                  height: "80px",
                  width: "80px",
                }}
              />
            ) : (
              <img
                alt="Loading..."
                src={Front}
                style={{
                  objectFit: "contain",
                  height: "80px",
                  width: "80px",
                }}
              />
            )}

            <h3>MERN-STACK DEVELOPER</h3>
            <p>Build backened using nodejs,expressjs,mongodb,reactjs.</p>
          </div>
        </div>
      </section>
      <section
        className={
          state.onDarkMode
            ? "skills__section skills__section__darkMode"
            : "skills__section"
        }
      >
        <div data-aos="fade-right" className="skills__heading">
          <img
            alt="_____"
            src={line}
            style={{ width: "50px", height: "1px", marginRight: "5px" }}
          />
          <div className="skills__checkout">
            <h4>Checkout</h4>
            <h2 style={{ fontWeight: "900" }}>What I Do</h2>
          </div>
        </div>
        <div className="skills__img">
          <div data-aos="fade-up" className="skills__img__1">
            <h4>React-js</h4>

            <ProgressBar
              animated
              now={80}
              label={`${80}%`}
              className="skills__progressBar"
            />
          </div>
          <div data-aos="fade-up" className="skills__img__1">
            <h4>Js</h4>

            <ProgressBar
              animated
              now={70}
              variant="success"
              label={`${70}%`}
              className="skills__progressBar"
            />
          </div>
          <div data-aos="fade-up" className="skills__img__1">
            <h4>HTML</h4>

            <ProgressBar
              animated
              now={80}
              variant="info"
              label={`${80}%`}
              className="skills__progressBar"
            />
          </div>
          <div data-aos="fade-up" className="skills__img__1">
            <h4>GSAP</h4>

            <ProgressBar
              animated
              now={30}
              variant="danger"
              label={`${30}%`}
              className="skills__progressBar"
            />
          </div>
          <div data-aos="fade-up" className="skills__img__1">
            <h4>CSS</h4>

            <ProgressBar
              animated
              variant="dark"
              now={60}
              label={`${60}%`}
              className="skills__progressBar"
            />
          </div>

          <div data-aos="fade-up" className="skills__img__1">
            <h4>MongoDb</h4>

            <ProgressBar
              animated
              variant="success"
              now={40}
              label={`${40}%`}
              className="skills__progressBar"
            />
          </div>
          <div data-aos="fade-up" className="skills__img__1">
            <h4>Node-js</h4>

            <ProgressBar
              animated
              variant="success"
              now={50}
              label={`${50}%`}
              className="skills__progressBar"
            />
          </div>
          <div data-aos="fade-up" className="skills__img__1">
            <h4>Bootstrap</h4>

            <ProgressBar
              animated
              variant="info"
              now={60}
              label={`${60}%`}
              className="skills__progressBar"
            />
          </div>
          <div data-aos="fade-up" className="skills__img__1">
            <h4>Express</h4>

            <ProgressBar
              animated
              variant="dark"
              now={50}
              label={`${50}%`}
              className="skills__progressBar"
            />
          </div>
          <div data-aos="fade-up" className="skills__img__1">
            <h4>C++/Problem-Solving</h4>

            <ProgressBar
              animated
              now={40}
              variant="danger"
              label={`${40}%`}
              className="skills__progressBar"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
