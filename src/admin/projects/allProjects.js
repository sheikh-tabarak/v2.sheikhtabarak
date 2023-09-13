import React, { useEffect, useState } from "react";
import firebase from "../../models/connection";
import Loading from "../../loading";
import { Link } from "react-router-dom";
import UpdateProject from "./updateProject";
import CreateNewProject from "./CreateNewProject";
import MyTechnologies from "./myTechnologies";
import Project from "../../models/ProjectsClass";
import ConfirmationDialog from "../../popups/ConfirmationDialog";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Technology from "../../models/TechnologyClass";

export default function AllProjects() {
  document.title = "All Projects | Dashboard";

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // navigate(0)
  const [open, setOpen] = useState(false);
  const ConfirmDeletion = () => setOpen(!open);
  const [isLoading, setisLoading] = useState(false);
  const [refreshData, setrefreshData] = useState(false);

  async function deleteProject(ProjectId) {
    ConfirmDeletion();
    setisLoading(true);
    const newProject = new Project();
    await newProject.delete(ProjectId);
    setrefreshData(!refreshData);
    // delay(1000);
    setisLoading(false);
  }

  const ProductList = [
    {
      id: "0000",
      title: "Apple MacBook Pro 17",
      category: "Laptop",
      color: "Silver",
      price: 1000,
    },
    {
      id: "0002",
      title: "Microsoft Surface Pro",
      category: "Laptop PC",
      color: "White",
      price: 1999,
    },

    {
      id: "0003",
      title: "Microsoft Surface Pro",
      category: "Laptop PC",
      color: "White",
      price: 1999,
    },

    {
      id: "0004",
      title: "Microsoft Surface Pro",
      category: "Laptop PC",
      color: "White",
      price: 1999,
    },

    {
      id: "0005",
      title: "Microsoft Surface Pro",
      category: "Laptop PC",
      color: "White",
      price: 1999,
    },

    {
      id: "0006",
      title: "Microsoft Surface Pro",
      category: "Laptop PC",
      color: "White",
      price: 1999,
    },

    {
      id: "0007",
      title: "Microsoft Surface Pro",
      category: "Laptop PC",
      color: "White",
      price: 1999,
    },
  ];

  const [projects, setProjects] = useState([]);
  const [TechList, setTechList] = useState([]);

  useEffect(() => {

    const fetchProjects = async () => {
      try {
        const collectionRef = firebase.firestore().collection("projects");
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
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };


    // console.log(projects.project_github)

    // const fetchTheTechnologies = async () => {
    //   try {
    //     const collectionRef = firebase.firestore().collection("technologies");
    //     const snapshot = await collectionRef.get();

    //     const TechList = snapshot.docs.map((doc) => {
    //       const data = doc.data();
    //       return new Technology(
    //         data.technology_id,
    //         data.technology_title,
    //         data.technology_desc
    //       );
    //     });
    //     setTechList(TechList);
    //   } catch (error) {
    //     console.error("Error fetching projects:", error);
    //   }
    // };

    fetchProjects();
  }, [refreshData]);

  // function clickHereButton() {
  //   // console.log(TestingLocation);
  //   // setTestingLocation("This is Testing Value");
  //   Link
  //   navigate("/dashboard/projects/update-project", {
  //     replace: true,
  //     state: { projects },
  //   });
  // }

  return isLoading === true ? (
    <Loading />
  ) : (
    <>
      <div className="hidden lg:flex items-right lg:justify-between pb-4">
        <div>
          <button
            id="dropdownRadioButton"
            data-dropdown-toggle="dropdownRadio"
            className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            type="button"
          >
            <svg
              className="w-3 h-3 text-gray-500 dark:text-gray-400 mr-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
            </svg>
            Last 30 days
            <svg
              className="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {/* Dropdown menu */}
          <div
            id="dropdownRadio"
            className="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            data-popper-reference-hidden=""
            data-popper-escaped=""
            data-popper-placement="top"
            style={{
              position: "absolute",
              inset: "auto auto 0px 0px",
              margin: 0,
              transform: "translate3d(522.5px, 3847.5px, 0px)",
            }}
          >
            <ul
              className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownRadioButton"
            >
              <li>
                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <input
                    id="filter-radio-example-1"
                    type="radio"
                    defaultValue=""
                    name="filter-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="filter-radio-example-1"
                    className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                  >
                    Last day
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <input
                    defaultChecked=""
                    id="filter-radio-example-2"
                    type="radio"
                    defaultValue=""
                    name="filter-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="filter-radio-example-2"
                    className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                  >
                    Last 7 days
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <input
                    id="filter-radio-example-3"
                    type="radio"
                    defaultValue=""
                    name="filter-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="filter-radio-example-3"
                    className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                  >
                    Last 30 days
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <input
                    id="filter-radio-example-4"
                    type="radio"
                    defaultValue=""
                    name="filter-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="filter-radio-example-4"
                    className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                  >
                    Last month
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <input
                    id="filter-radio-example-5"
                    type="radio"
                    defaultValue=""
                    name="filter-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="filter-radio-example-5"
                    className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                  >
                    Last year
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            className="items-stretch p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for items"
          />
        </div>

        <ToastContainer />
        <Link to={"/dashboard/projects/new-project"}>
          <a className="sheikhtabarak-btn-main text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
            Add New Project
          </a>
        </Link>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="text-left w-2/6 p-5">
                IMAGE AND TITLE
              </th>
              <th scope="col" className=" text-left w-1/6 ">
                Product Description
              </th>
              <th scope="col" className="text-left w-1/6 p-5">
                CLIENT NAME
              </th>

              <th scope="col" className="text-left w-1/6 p-5">
                Builts in
              </th>
              <th scope="col" className="text-center w-1/6 p-5">
                Action
              </th>
            </tr>
          </thead>
        </table>
        {/* <tbody> */}
        {projects.map((project, index) => (
          <table
            key={project.project_id}
            className="w-full text-sm text-left text-gray-500 dark:text-gray-400"
          >
            <tbody className="">
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-2/6">
                  <div className="w-full flex p-5 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                      alt="Jese image"
                    />
                    <div className="pl-3">
                      <div className="text-base font-semibold">
                        {project.project_title === ""
                          ? "N/A"
                          : project.project_title}
                      </div>
                      <div className="font-normal text-gray-500">
                        {project.project_link === ""
                          ? "N/A"
                          : project.project_link}
                      </div>
                    </div>
                  </div>
                  {/* </div> */}
                </td>
                <td
                  scope="row"
                  className=" w-1/6 text-left font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {project.project_description === ""
                    ? "N/A"
                    : project.project_description.length <= 15
                    ? project.project_description
                    : project.project_description.split("", 15)}


{project.project_description === ""
                    ? "N/A"
                    : project.project_description.length <= 15
                    ? ""
                    : " ..."}

              


                  
                </td>

                {/* <td className="w-full  px-6 py-4">{product.project_title===""?"N/A":product.project_title}</td> */}
                <td className="w-1/6 px-6 py-4">
                  {project.project_id === "" ? "N/A" : project.client_name}
                </td>
                <td className=" w-1/6 px-6 py-4">
                  {project.builtsin === ""
                    ? "N/A"
                    : project.builtsin}
                </td>
                <td className=" w-1/6 px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <div className="flex row">
                      <div className="px-2">
                        <Link
                          to={
                            "/dashboard/projects/update-project/" +
                            project.project_id
                          }
                          state={{
                            project: project,
                          }}
                        >
                          <svg
                            // src="/dashboard/projects/update-project"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 30 30"
                            width="20px"
                            height="20px"
                          >
                            <path d="M 22.828125 3 C 22.316375 3 21.804562 3.1954375 21.414062 3.5859375 L 19 6 L 24 11 L 26.414062 8.5859375 C 27.195062 7.8049375 27.195062 6.5388125 26.414062 5.7578125 L 24.242188 3.5859375 C 23.851688 3.1954375 23.339875 3 22.828125 3 z M 17 8 L 5.2597656 19.740234 C 5.2597656 19.740234 6.1775313 19.658 6.5195312 20 C 6.8615312 20.342 6.58 22.58 7 23 C 7.42 23.42 9.6438906 23.124359 9.9628906 23.443359 C 10.281891 23.762359 10.259766 24.740234 10.259766 24.740234 L 22 13 L 17 8 z M 4 23 L 3.0566406 25.671875 A 1 1 0 0 0 3 26 A 1 1 0 0 0 4 27 A 1 1 0 0 0 4.328125 26.943359 A 1 1 0 0 0 4.3378906 26.939453 L 4.3632812 26.931641 A 1 1 0 0 0 4.3691406 26.927734 L 7 26 L 5.5 24.5 L 4 23 z" />
                          </svg>
                        </Link>
                      </div>

                      <ConfirmationDialog
                        onConfirm={async (value) => {
                          await deleteProject(value);
                        }}
                        message={"Do you wanna delete this Project"}
                        yesButtonText={"Yes, Delete"}
                        noButtonText={"Cancel"}
                        open={open}
                        handleOpen={ConfirmDeletion}
                      />

                      <div className="px-2">
                        <Link
                          to={"/projects/" + project.project_id}
                          state={{ project: project }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#000000"
                            width="20px"
                            height="20px"
                            viewBox="-3.5 0 32 32"
                            version="1.1"
                          >
                            <title>view</title>
                            <path d="M12.406 13.844c1.188 0 2.156 0.969 2.156 2.156s-0.969 2.125-2.156 2.125-2.125-0.938-2.125-2.125 0.938-2.156 2.125-2.156zM12.406 8.531c7.063 0 12.156 6.625 12.156 6.625 0.344 0.438 0.344 1.219 0 1.656 0 0-5.094 6.625-12.156 6.625s-12.156-6.625-12.156-6.625c-0.344-0.438-0.344-1.219 0-1.656 0 0 5.094-6.625 12.156-6.625zM12.406 21.344c2.938 0 5.344-2.406 5.344-5.344s-2.406-5.344-5.344-5.344-5.344 2.406-5.344 5.344 2.406 5.344 5.344 5.344z" />
                          </svg>
                        </Link>
                      </div>

                      <div className="px-2">
                        <Link state={{ id: project.project_id }}>
                          <svg
                            onClick={ConfirmDeletion}
                            fill="#FF0000"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 30 30"
                            width="20px"
                            height="20px"
                          >
                            {" "}
                            <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        ))}
      </div>
    </>
  );
}
