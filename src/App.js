import React, { createContext, useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Redirect,
} from "react-router-dom";
import "./App.css";
import "firebase/auth";
import Login from "./auth/Login";
import Dashboard from "./admin/Dashboard";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Home from "./user/home";
import Portfolio from "./user/pages/portfolio";
import { getAuth } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux/";
import store from "./store/store";
import HomePage from "./user/pages/HomePage";
import AnimatedCursor from "react-animated-cursor";
import firebaseconnection from "./models/connection";

export const authContextBro = createContext("");

const analytics = getAnalytics(firebaseconnection);

function App() {
  const [name, setname] = useState("test");
  const isLogin = useSelector((state) => state.checkLoginApp);

  return (
    <authContextBro.Provider
      value={getAuth().isLogin ? { islogin: "true" } : { islogin: "false" }}
    >
      <AnimatedCursor
        innerSize={12}
        outerSize={34}
        color="76, 214, 132"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={3}
      />
      {/* <Particles options={options} init={particlesInit} /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </authContextBro.Provider>
  );
}

export default App;
