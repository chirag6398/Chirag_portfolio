import React, { useEffect, useState, useContext } from "react";
import "../styles/nav.css";
import { FiToggleLeft, FiToggleRight } from "react-icons/fi";
import { MdBrightness5, MdBrightness2 } from "react-icons/md";
import { ContextValue } from "../App";
export default function Nav() {
  const { state, dispatch } = useContext(ContextValue);
  const [show, setShow] = useState(false);
  // console.log(state.onDarkMode);
  const darkModeHandler = () => {
    dispatch({ type: "CHANGE_MODE", payload: !state.onDarkMode });
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        if (show) {
          setShow(false);
        }
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 200) {
          setShow(true);
        }
      });
    };
  });
  return (
    <div
      className={
        show && state.onDarkMode
          ? "nav__container nav__show__onDark"
          : show && !state.onDarkMode
          ? "nav__show nav__container"
          : "nav__container"
      }
    >
      <div className="nav__logo">
        {show ? (
          <p>
            <span className={state.onDarkMode ? "nav__span1" : undefined}>
              Chirag
            </span>
            <span className="nav__span2">Agrawal</span>
          </p>
        ) : null}
      </div>
      <div
        className={
          state.onDarkMode && show
            ? "nav__rightContent__darkMode nav__rightContent"
            : "nav__rightContent"
        }
      >
        <div>
          {state.onDarkMode ? (
            <FiToggleRight
              onClick={darkModeHandler}
              className={
                show
                  ? "nav__icons__toggleRight"
                  : "nav__icons__toggleRight_notShow"
              }
            />
          ) : (
            <FiToggleLeft
              onClick={darkModeHandler}
              className="nav__icons__toggleLeft"
            />
          )}
        </div>
        {!state.onDarkMode ? (
          <div>
            <MdBrightness5 className="nav__icons__sun" />
          </div>
        ) : null}

        {state.onDarkMode ? (
          <div>
            <MdBrightness2
              className={
                show ? "nav__icons__night" : " nav__icons__night_notShow"
              }
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
