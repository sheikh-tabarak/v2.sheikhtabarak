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
import Project from "./models/ProjectsClass";
import PortfolioList from "./admin/pages/PortfolioList";
import { setProjectArchive } from "./store/actions/index";

export const authContextBro = createContext("");

const analytics = getAnalytics(firebaseconnection);

function App() {
  const [name, setname] = useState("test");
  const isLogin = useSelector((state) => state.checkLoginApp);

  const [projects, setProjects] = useState([]);
  const [refreshData, setrefreshData] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const collectionRef = firebaseconnection
          .firestore()
          .collection("projects");
        const snapshot = await collectionRef.get();

        const projectList = snapshot.docs.map((doc) => {
          const data = doc.data();
          return new Project(
            data.project_id,
            data.project_title,
            data.project_description,
            data.project_github,
            data.client_name,
            data.date_to_start,
            data.date_to_end,
            data.feature_image,
            data.project_link,
            data.builtsin
          );

        });

        setProjects(projectList);
        console.log(projectList);

        store.dispatch(setProjectArchive(projectList));
     
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  },[refreshData]);

  

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
          <Route path="/portfolio/" element={<PortfolioList />} />
        </Routes>
      </BrowserRouter>
    </authContextBro.Provider>
  );
}

export default App;
