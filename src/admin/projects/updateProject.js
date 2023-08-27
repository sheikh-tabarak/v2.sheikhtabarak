import Datepicker from "react-tailwindcss-datepicker";
import Loading from "../../loading";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Project from "../../models/ProjectsClass";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import firebase from "../../models/connection";
import Technology from "../../models/TechnologyClass";


export default function UpdateProject(props) {

  document.title = "Update Project | Dashboard";

  const location = useLocation();

  const [NewProject, setNewProject] = useState({
    id: location.state.project.project_id,
    name: location.state.project.project_title,
    desc: location.state.project.project_description,
    budget: location.state.project.project_budget,
    clientName: location.state.project.client_name,
    startDate: location.state.project.date_to_start,
    endDate: location.state.project.date_to_end,
    featureImage: location.state.project.feature_image,
    link: location.state.project.project_link,
    builtsin: location.state.project.builtsin,
  });

  console.log(location);

  const [isLoading, setisLoading] = useState(false);

  const [value, setValue] = useState({
    startDate: NewProject.startDate,
    endDate: NewProject.endDate,
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);

    setNewProject({
      id: NewProject.id,
      name: NewProject.name,
      desc: NewProject.desc,
      budget: NewProject.budget,
      clientName: NewProject.clientName,
      startDate: newValue.startDate,
      endDate: newValue.endDate,
      featureImage: NewProject.featureImage,
      link: NewProject.link,
      builtsin: NewProject.builtsin,
    });
  };

  async function UpdatethisProject(e){

    
    // e.preventDefault();
    // toast.success("Project updated successfully!", {
    //   position: toast.POSITION.BOTTOM_RIGHT,
    //   className:"bg-white dark:bg-gray-900",
    //   autoClose: 1000,
    // });
    setisLoading(true);

    const UpdateProject = new Project();

    await UpdateProject.update(
      NewProject.id,
      NewProject.name,
      NewProject.desc,
      NewProject.budget,
      NewProject.clientName,
      NewProject.startDate,
      NewProject.endDate,
      NewProject.featureImage,
      NewProject.link,
      NewProject.builtsin
    );
   setisLoading(false);

  }


const [TechList, setTechList] = useState([]);

useEffect(() => {
  const fetchTheTechnologies = async () => {
    try {
      const collectionRef = firebase.firestore().collection("technologies");
      const snapshot = await collectionRef.get();

      const TechList = snapshot.docs.map((doc) => {
        const data = doc.data();
        return new Technology(
          data.technology_id,
          data.technology_title,
          data.technology_desc
        );
      });
      setTechList(TechList);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  fetchTheTechnologies();

//   console.log(
  //     "Title: " +
  //       NewProject.name +
  //       "\nDescription: " +
  //       NewProject.desc +
  //       "\nStartDate: " +
  //       NewProject.startDate +
  //       "\nEnd Date: " +
  //       NewProject.endDate +
  //       "\nFeature Image: " +
  //       NewProject.featureImage +
  //       "\nClient: " +
  //       NewProject.clientName +
  //       "\nProject Link: " +
  //       NewProject.link +
  //       "\nBuilts in: " +
  //       NewProject.builtsin
  //   );
});


  return isLoading === true ? (
    <Loading />
  ) : (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-10 max-w-2xl lg:py-10">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Update the Project {location.state.project[0]}
        </h2>

        <label
          htmlFor="dropzone-file"
          className={
            " bg-no-repeat bg-contain	 mb-5 flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          }
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            onSelect={(e) => {
              setNewProject({
                id: NewProject.id,
                name: NewProject.name,
                desc: NewProject.desc,
                budget: NewProject.budget,
                clientName: NewProject.clientName,
                startDate: NewProject.startDate,
                endDate: NewProject.endDate,
                featureImage: e.target.value,
                link: NewProject.link,
                builtsin: NewProject.builtsin,
              });
            }}
            id="dropzone-file"
            type="file"
            className="hidden"
          />
        </label>
        <form onSubmit={UpdatethisProject}
>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Project Name
              </label>
              <input
                value={NewProject.name}
                onChange={(e) => {
                  setNewProject({
                    id: NewProject.id,
                    name: e.target.value,
                    desc: NewProject.desc,
                    budget: NewProject.budget,
                    clientName: NewProject.clientName,
                    startDate: NewProject.startDate,
                    endDate: NewProject.endDate,
                    featureImage: NewProject.featureImage,
                    link: NewProject.link,
                    builtsin: NewProject.builtsin,
                  });
                }}
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                required=""
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <textarea
                value={NewProject.desc}
                onChange={(e) => {
                  setNewProject({
                    id: NewProject.id,
                    name: NewProject.name,
                    desc: e.target.value,
                    budget: NewProject.budget,
                    clientName: NewProject.clientName,
                    startDate: NewProject.startDate,
                    endDate: NewProject.endDate,
                    featureImage: NewProject.featureImage,
                    link: NewProject.link,
                    builtsin: NewProject.builtsin,
                  });
                }}
                id="description"
                rows={8}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Your description here"
                defaultValue={""}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="client"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Client Name
              </label>
              <input
                value={NewProject.clientName}
                onChange={(e) => {
                  setNewProject({
                    id: NewProject.id,
                    name: NewProject.name,
                    desc: NewProject.desc,
                    budget: NewProject.budget,
                    clientName: e.target.value,
                    startDate: NewProject.startDate,
                    endDate: NewProject.endDate,
                    featureImage: NewProject.featureImage,
                    link: NewProject.link,
                    builtsin: NewProject.builtsin,
                  });
                }}
                type="text"
                name="client"
                id="client"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Client Name"
                required=""
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="budget"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Budget
              </label>
              <input
                value={NewProject.budget}
                onChange={(e) => {
                  setNewProject({
                    id: NewProject.id,
                    name: NewProject.name,
                    desc: NewProject.desc,
                    budget: e.target.value,
                    clientName: NewProject.clientName,
                    startDate: NewProject.startDate,
                    endDate: NewProject.endDate,
                    featureImage: NewProject.featureImage,
                    link: NewProject.link,
                    builtsin: NewProject.builtsin,
                  });
                }}
                type="number"
                name="budget"
                id="budget"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Rs. 30,000"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="builtin"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Builts in
              </label>
              <select
                value={NewProject.builtsin}
                // onSelect={
                //   (e) => {
                //     setNewProject({
                //       name: NewProject.name,
                //       desc: NewProject.desc,
                //       budget: NewProject.budget,
                //       clientName: NewProject.clientName,
                //       startDate: NewProject.startDate,
                //       endDate: NewProject.endDate,
                //       featureImage: NewProject.featureImage,
                //       link: NewProject.link,
                //       builtsin: e.target.value,
                //     });
                //   }

                // }
                // value={NewProject.builtsin}
                onChange={(e) => {
                  setNewProject({
                    id: NewProject.id,
                    name: NewProject.name,
                    desc: NewProject.desc,
                    budget: NewProject.budget,
                    clientName: NewProject.clientName,
                    startDate: NewProject.startDate,
                    endDate: NewProject.endDate,
                    featureImage: NewProject.featureImage,
                    link: NewProject.link,
                    builtsin: e.target.value,
                  });
                }}
                // placeholder={NewProject.builtsin}
                id="builtin"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                {/* <option defaultValue={""}>Choose Tech Stack</option> */}
                {TechList.map((technology, index) => {
                  return (
                    <option key={index} value={technology.technology_title}>
                      {technology.technology_title}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <label
                htmlFor="link"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Project link
              </label>
              <input
                value={NewProject.link}
                onChange={(e) => {
                  setNewProject({
                    id: NewProject.id,
                    name: NewProject.name,
                    desc: NewProject.desc,
                    budget: NewProject.budget,
                    clientName: NewProject.clientName,
                    startDate: NewProject.startDate,
                    endDate: NewProject.endDate,
                    featureImage: NewProject.featureImage,
                    link: e.target.value,
                    builtsin: NewProject.builtsin,
                  });
                }}
                type="text"
                name="link"
                id="link"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder={"https://xyz.sheikhtabarak.me"}
                required=""
              />
            </div>

            <Datepicker
              containerClassName="relative sm:col-span-2"
              toggleClassName="absolute bg-blue-300 rounded-r-lg text-white right-0 h-full px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed sheikhtabarak-btn-main"
              inputClassName="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              primaryColor={"green"}
              showShortcuts={true}
              // asSingle={true}
              // useRange={false}
              placeholder={"Start Date to End Date"}
              showFooter={true}
              separator={"to"}
              value={value}
              onChange={handleValueChange}
            />
          </div>
          <button
            // onClick={()=>UpdatethisProject}
            //   onClick={()=>addData}
            type="submit"
            className=" sheikhtabarak-btn-main inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            Update Project
          </button>
       

          {/* <ToastContainer/> */}
        </form>
      </div>
    </section>
  );
}