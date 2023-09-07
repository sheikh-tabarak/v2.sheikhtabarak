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
import {initializeApp} from "firebase/app";
// import firebase from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Home from "./user/home";
import Portfolio from "./user/pages/portfolio";
import { getAuth } from "firebase/auth";
// import { Firestore } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux/";
import store from "./store/store";
import HomePage from "./user/pages/HomePage";

// import Practice from "./Practice";

export const authContextBro = createContext("" );

const firebaseConfig = {
  apiKey: "AIzaSyCbtqO_Bjp2k8yT5NL86KTWXLg6-BoS5V8",
  authDomain: "sheikhtabarak-1019.firebaseapp.com",
  projectId: "sheikhtabarak-1019",
  storageBucket: "sheikhtabarak-1019.appspot.com",
  messagingSenderId: "937342048244",
  appId: "1:937342048244:web:79b8fd2a3b5f15dc538ba1",
  measurementId: "G-R77PC48PBW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  const [name, setname] = useState("test");
  const isLogin = useSelector((state) => state.checkLoginApp);

  return (
    <authContextBro.Provider
      value={getAuth().isLogin ? { islogin: "true" } : { islogin: "false" }}
    >
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
