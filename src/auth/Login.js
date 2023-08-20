import React, { createContext, useContext } from "react";
import logo from "../assests/logo/logo.png";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";

import "../styles/sheikhtabarak.css";
import { Firestore } from "firebase/firestore";
import Loading from "../loading";
import { useNavigate } from "react-router-dom";
import {logIn} from '.././store/actions/index'
import { useDispatch, useSelector } from "react-redux";
import { authContextBro } from "../App";


// const LoginContext = createContext();


export default function Login() {

  const loginset = useContext(authContextBro)

  
  const isLogin = useSelector((state)=>state.checkLoginApp);

  const navigate = useNavigate();


  const Dispatcher = useDispatch();

  // })


  const auth = getAuth();

  const [isLoading, setisLoading] = useState(false);

  const [error, setError] = useState({
    status: false,
    message: "Error",
  });

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  function Abort() {
    setError({
      status: false,
      message: "",
    });
  }



  // const  loginStateChange () => Dispatcher(logIn)

  async function LoginAction(e) {

   
    e.preventDefault();

    // alert(user.username+"\n"+user.password)
    setisLoading(true);
    await signInWithEmailAndPassword(auth, user.username, user.password)
      .then((userCredential) => {
        const user = userCredential.user;


       

        // loginset.setName("New text")

        console.log("before"+isLogin)

      //  Dispatcher(logIn())

        
       
        navigate("/dashboard", "_");
        console.log("after"+isLogin)
      


        console.log(

          getAuth().currentUser.email,
          user.username + " <- this is user",
          console.log("after getting user"+ isLogin)
          );
        setisLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + " : " + errorMessage);
        setError({ 
          status: true,
          message: errorCode,
        });

        setisLoading(false);
      });





  }


  // const handleLogin = () => {
  //   console.log("before getting user"+isLogin)
  //   Dispatcher(logIn());
  //   console.log("after getting user"+isLogin)
  //   navigate("/dashboard")
  // };

  //  console.log(user.username);

  return isLoading === true ? (
    <Loading />
  ) : (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <a
              href="/"
              className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <img className="h-20 mr-2" src={logo} alt="logo" />
            </a>

            <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </p>

            {
              // user.error===""?

              error.status === true ? (
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                  role="alert"
                >
                  {/* <strong className="font-bold">Holy smokes!</strong> */}
                  <span className="block sm:inline">
                    Username/Password is wrong
                  </span>

                  <span
                    onClick={Abort}
                    className="absolute top-0 bottom-0 right-0 px-4 py-3"
                  >
                    <svg
                      className="fill-current h-6 w-6 text-red-500"
                      role="button"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <title>Close</title>
                      <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                    </svg>
                  </span>
                </div>
              ) : (
                <div></div>
              )
            }

            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>

                <input
                  value={user.username}
                  onChange={(value) => {
                    setUser({
                      username: value.target.value,
                      password: user.password,
                    });

                    setError({
                      status: false,
                      message: "No message",
                    });

                    console.log(user.username);
                  }}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                autoComplete=""
                  value={user.password}
                  onChange={(value) => {
                    setError({
                      status: false,
                      message: "No message",
                    });

                    error.status = false;
                    setUser({
                      password: value.target.value,
                      username: user.username,
                    });
                    console.log(user.password);
                  }}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="/" 
                  target="_"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                Visit website
                </a>
              </div>

              <button
                onClick={LoginAction}
                type="submit"
                className=" sheikhtabarak-btn-main block w-full rounded-md  px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );


  
}

// export  {LoginContext};