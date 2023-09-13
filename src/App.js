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


// import Particles from "react-particles";
// import { loadFull } from "tsparticles";
// import { useCallback } from "react";
import AnimatedCursor from "react-animated-cursor"

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




  // const options = {
  //   particles: {
  //     number: {
  //       value: 50,
  //       density: {
  //         enable: true,
  //         area: 800
  //       }
  //     },
  //     color: {
  //       value: ["#3cba54", "#f4c20d", "#db3236", "#4885ed"]
  //     },
  //     shape: {
  //       type: "circle"
  //     },
  //     opacity: {
  //       value: 1
  //     },
  //     size: {
  //       value: { min: 1, max: 8 }
  //     },
  //     links: {
  //       enable: true,
  //       distance: 150,
  //       color: "#808080",
  //       opacity: 0.4,
  //       width: 1
  //     },
  //     move: {
  //       enable: true,
  //       speed: 3,
  //       direction: "none",
  //       random: false,
  //       straight: false,
  //       outModes: "out"
  //     }
  //   },
  //   interactivity: {
  //     events: {
  //       onHover: {
  //         enable: true,
  //         mode: "grab"
  //       },
  //       onClick: {
  //         enable: true,
  //         mode: "push"
  //       }
  //     },
  //     modes: {
  //       grab: {
  //         distance: 140,
  //         links: {
  //           opacity: 1
  //         }
  //       },
  //       push: {
  //         quantity: 4
  //       }
  //     }
  //   }
  // };

  // const particlesInit = useCallback(async (engine) => {
  //   await loadFull(engine);
  // }, []);


  







  return (
    <authContextBro.Provider
      value={getAuth().isLogin ? { islogin: "true" } : { islogin: "false" }}
    >
       <AnimatedCursor


      innerSize={12}
      outerSize={34}
      color='76, 214, 132'
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
