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
          <div className="project__imgOverlay">
            <span>Netflix-Clone</span>
          </div>
        </div>
        <div data-aos="fade-up" className="project__imgContainer">
          <img alt="loading.." src={instagram} />
          <div className="project__imgOverlay">
            <span>Instagram-Clone</span>
          </div>
        </div>
        <div data-aos="fade-up" className="project__imgContainer">
          <img alt="loading.." src={gitfetch} />
          <div className="project__imgOverlay">
            <span>Fetch-Repo</span>
          </div>
        </div>
        <div data-aos="fade-up" className="project__imgContainer">
          <img alt="loading.." src={mern} />
          <div className="project__imgOverlay">
            <span>Authentication </span>
          </div>
        </div>
      </div>
    </div>
  );
}
