import React, { useContext, useEffect } from "react";
import "../styles/footer.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { ContextValue } from "../App";
import {
  FaRegThumbsUp,
  FaInstagram,
  FaLinkedinIn,
  FaGithubSquare,
  FaRegCopyright,
} from "react-icons/fa";

export default function Footer() {
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
          ? "footer__container footer__containerOnDark"
          : "footer__container"
      }
    >
      <div data-aos="fade-up" className="footer__row">
        <div className="footer__thumb">
          {state.onDarkMode ? (
            <FaRegThumbsUp
              className="footer__icon__dark "
              style={{ fontSize: "50px", color: "white" }}
            />
          ) : (
            <FaRegThumbsUp
              className="footer__icon "
              style={{ fontSize: "50px" }}
            />
          )}
        </div>
      </div>
      <div data-aos="fade-up" className="footer__row">
        <h5>That's all folks! Thanks for scrolling.</h5>
      </div>
      <div data-aos="fade-up" className="footer__row">
        {state.onDarkMode ? (
          <a
            href="https://www.instagram.com/invites/contact/?i=1m2qaw2eudl1s&utm_content=284j26e"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaInstagram className="footer__icon__dark footer__icon_hover" />
          </a>
        ) : (
          <a
            href="https://www.instagram.com/invites/contact/?i=1m2qaw2eudl1s&utm_content=284j26e"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaInstagram
              className="footer__icon footer__icon_hover"
              rel="noopener noreferrer"
              target="_blank"
            />
          </a>
        )}
        {state.onDarkMode ? (
          <a
            href="http://www.linkedin.com/in/chirag-agrawal-32b5a31a3"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedinIn className="footer__icon__dark footer__icon_hover" />
          </a>
        ) : (
          <a
            href="http://www.linkedin.com/in/chirag-agrawal-32b5a31a3"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedinIn
              className="footer__icon footer__icon_hover"
              rel="noopener noreferrer"
              target="_blank"
            />
          </a>
        )}
        {state.onDarkMode ? (
          <a
            href="https://github.com/chirag6398"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGithubSquare className="footer__icon__dark footer__icon_hover" />
          </a>
        ) : (
          <a
            href="https://github.com/chirag6398"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGithubSquare
              className="footer__icon footer__icon_hover"
              rel="noopener noreferrer"
              target="_blank"
            />
          </a>
        )}
      </div>
      <div
        data-aos="fade-up"
        className={
          state.onDarkMode
            ? "footer__row lastRowDarkMode "
            : "footer__row lastRow "
        }
      >
        <p>
          <b>copyright</b>
          <FaRegCopyright />
          2021
        </p>
      </div>
    </div>
  );
}
