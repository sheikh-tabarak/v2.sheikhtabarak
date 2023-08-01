import React, { useEffect, useState } from "react";
import {
  Navigate,
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Login from "./auth/Login";
import Dashboard from "./admin/Dashboard";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Home from "./user/home";
import Portfolio from "./user/pages/portfolio";
import { getAuth } from "firebase/auth";
import { Firestore } from "firebase/firestore";

// import Practice from "./Practice";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
  // measurementId: process.env.REACT_APP_MEASURMENT_ID,

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
  // const [authenticated, setauthenticated] = useState(null);
  // useEffect(async () => {
  //   const loggedInUser = await getAuth().currentUser.isLoggedIn;
  //   console.log(getAuth().currentUser.isLoggedIn);
  //   if (loggedInUser === undefined || loggedInUser === null) {
  //     setauthenticated(loggedInUser);
  //   }
  // }, []);

  // console.log(getAuth().currentUser.isLoggedIn)

  // const navigate = useNavigate();
  // const [isLoggedIn, setisLoggedIn] = useState(getAuth().currentUser.isLoggedIn);

  // useEffect(() => {
  //   // Checking if user is not loggedIn
  //   if (!isLoggedIn) {
  //     window.open("/login")

  //     // navigate("/login");
  //   } else {
  // //    navigate("/login");
  //   }
  // },
  // )
  //[navigate, isLoggedIn]);

  // if (!authenticated) {
  //   return <Login />;
  // } else {

//   if(){

//     return (
//      <Navigate replace={"/*"} to={"/login"} />
// // {/* <Redirect from="/*" to="/login" noThrow /> */}
//     )
        
//   }

//   else{

//     return (<BrowserRouter>
//     <Routes>
//       <Route  path="/*" element={<Home />} />
//       <Route path="/login/*" element={<Login />} />
//       <Route path="/dashboard/*" element={<Dashboard />}></Route>
//     </Routes>
//   </BrowserRouter>)

//   }
    return (

    

     
      <BrowserRouter>
        <Routes>
          <Route  path="/*" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
          <Route path="/dashboard/*" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
//}
export default App;
