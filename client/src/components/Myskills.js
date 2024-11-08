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
        <div data-aos="fade-up" className="skills__heading">
          <img
            alt="_____"
            src={line}
            style={{ width: "50px", height: "1px", marginRight: "5px" }}
          />
          <div className="skills__checkout">
            <h4>Checkout</h4>
            <h2 style={{ fontSize: "4em", fontFamily: "impact" }}>What I Do</h2>
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
            <p>
              Build backened and front-end using node.js ,express.js ,mongodb
              ,react.js
            </p>
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
        <div data-aos="fade-up" className="skills__heading">
          <img
            alt="_____"
            src={line}
            style={{ width: "50px", height: "1px", marginRight: "5px" }}
          />
          <div className="skills__checkout">
            <h4>Checkout</h4>
            <h2 style={{ fontSize: "4em", fontFamily: "impact" }}>What I Do</h2>
          </div>
        </div>
        <div className="skills__img">
          <div data-aos="fade-up" className="skills__img__1">
            <h4>MongoDb</h4>

            <ProgressBar
              animated
              variant="success"
              now={80}
              label={`${80}%`}
              className="skills__progressBar"
            />
          </div>
          <div data-aos="fade-up" className="skills__img__1">
            <h4>Clickhouse</h4>

            <ProgressBar
              animated
              variant="success"
              now={80}
              label={`${80}%`}
              className="skills__progressBar"
            />
          </div>
          <div data-aos="fade-up" className="skills__img__1">
            <h4>Node-js</h4>

            <ProgressBar
              animated
              variant="success"
              now={80}
              label={`${80}%`}
              className="skills__progressBar"
            />
          </div>

          <div data-aos="fade-up" className="skills__img__1">
            <h4>Go-lang</h4>

            <ProgressBar
              animated
              variant="success"
              now={80}
              label={`${80}%`}
              className="skills__progressBar"
            />
          </div>

          <div data-aos="fade-up" className="skills__img__1">
            <h4>Redis</h4>

            <ProgressBar
              animated
              variant="success"
              now={80}
              label={`${80}%`}
              className="skills__progressBar"
            />
          </div>
          <div data-aos="fade-up" className="skills__img__1">
            <h4>Kafka</h4>

            <ProgressBar
              animated
              variant="success"
              now={80}
              label={`${80}%`}
              className="skills__progressBar"
            />
          </div>

          <div data-aos="fade-up" className="skills__img__1">
            <h4>Express/Koa</h4>

            <ProgressBar
              animated
              variant="dark"
              now={80}
              label={`${80}%`}
              className="skills__progressBar"
            />
          </div>

          <div data-aos="fade-up" className="skills__img__1">
            <h4>C++/Problem-Solving</h4>

            <ProgressBar
              animated
              now={85}
              variant="danger"
              label={`${85}%`}
              className="skills__progressBar"
            />
          </div>

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
              now={90}
              variant="success"
              label={`${90}%`}
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
            <h4>CSS</h4>

            <ProgressBar
              animated
              variant="dark"
              now={80}
              label={`${80}%`}
              className="skills__progressBar"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
