import React, { useContext, useEffect } from "react";
import "../styles/project.css";
import netflix from "../images/NetflixClne.JPG";
import instagram from "../images/InstagramClone.JPG";
import gitfetch from "../images/fechgitrepo.JPG";
import mern from "../images/MernProject.JPG";
import AOS from "aos";
import "aos/dist/aos.css";
import { ContextValue } from "../App";
export default function Project() {
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
          ? "project__container project__container_dark"
          : "project__container"
      }
    >
      <div data-aos="fade-right" className="project__section__heading">
        <h3>Mini-Projects</h3>
      </div>

      <div className="project__img__container">
        <div data-aos="fade-up" className="project__imgContainer">
          <img alt="loading.." src={netflix} style={{ width: "430.41px" }} />
          <a
            href="https://netflix-clone-by.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <div className="project__imgOverlay">
              <span>Netflix-Clone</span>
            </div>
          </a>
        </div>
        <div data-aos="fade-up" className="project__imgContainer">
          <img alt="loading.." src={instagram} />
          <a
            href="https://instagram-by-ch.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <div className="project__imgOverlay">
              <span>Instagram-Clone</span>
            </div>
          </a>
        </div>
        <div data-aos="fade-up" className="project__imgContainer">
          <img alt="loading.." src={gitfetch} />
          <a
            href="https://netflix-clone-by.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <div className="project__imgOverlay">
              <span>Fetch-Repo</span>
            </div>
          </a>
        </div>
        <div data-aos="fade-up" className="project__imgContainer">
          <img alt="loading.." src={mern} />
          <a
            href="https://mernfirstproject.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <div className="project__imgOverlay">
              <span>Authentication </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
