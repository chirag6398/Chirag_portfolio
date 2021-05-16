import React, { createContext, useReducer } from "react";
import Particle from "./Particles/Particle";
import "./App.css";
import Message from "./components/Message.js";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./components/About";
import Project from "./components/Projects";
import Myskills from "./components/Myskills";
import Contact from "./components/Contact";
import { initialState, reducer } from "./Reducer/Reducer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
export const ContextValue = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

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
          <Switch>
            <Route exact path="/">
              <Nav />
              <About />
              <Myskills />
              <Project />
              <Contact />
              <Footer />
              <Particle />
            </Route>
            <Route exact path="/talk">
              <Message />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </ContextValue.Provider>
  );
}

export default App;
