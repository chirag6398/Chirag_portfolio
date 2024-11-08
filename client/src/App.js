import React, { createContext, useReducer, useState, useEffect } from "react";
import "./App.css";
import Message from "./components/Message.js";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./components/About";
import Project from "./components/Projects";
import Myskills from "./components/Myskills";
import Contact from "./components/Contact";
import Loading from "./components/Loading";
import { initialState, reducer } from "./Reducer/Reducer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export const ContextValue = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let reference = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => {
      clearTimeout(reference);
    };
  });
  if (isLoading) {
    return <Loading />;
  }
  return (
    <ContextValue.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <div
          className={
            state.onDarkMode
              ? "profile__darkContainer profile__container"
              : "profile__container"
          }
        >
          <Nav />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <About />
                  <Myskills />
                  <Project />
                  <Contact />
                  <Footer />
                </>
              }
            />
            <Route path="/talk" element={<Message />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ContextValue.Provider>
  );
}

export default App;
