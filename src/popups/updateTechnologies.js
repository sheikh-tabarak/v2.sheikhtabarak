import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function UpdateTechnologies(props) {
  const location = useLocation();



  const [NewTechnologyUpdate, setNewTechnologyUpdate] = useState({
    technology_id: "",
    technology_title: "",
    technology_desc: "",
  });

  useEffect(() => {
    try {
      setNewTechnologyUpdate({
        technology_id: location.state.technology.technology_id,
        technology_title: location.state.technology.technology_title,
        technology_desc: location.state.technology.technology_desc,
      });
    } catch (error) {}
  }, [location.key]);

  console.log(NewTechnologyUpdate);

  return (
    <div
      id="editUserModal"
      tabIndex={-1}
      aria-hidden="true"
      className={
        props.EditForm === true
          ? "fixed h-full z-50 p-4 bg-black bg-opacity-60 overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
          : "fixed hidden h-full z-50 p-4 bg-black bg-opacity-60 overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      }
    >
      <div className="absolute left-1/4 right-1/4 top-10 bottom-10 w-full max-w-2xl max-h-full">
        {/* Modal content */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            props.UpdatetheTechnology(
              NewTechnologyUpdate.technology_id,
              NewTechnologyUpdate.technology_title,
              NewTechnologyUpdate.technology_desc
            );
          }}
          //  action="#"
          className="relative bg-white rounded-lg shadow dark:bg-gray-700"
        >
          {/* Modal header */}
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Edit Technology
            </h3>
            <button
              onClick={() => {
                props.OpenEditBox();
              }}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="editUserModal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
          <div className="text-left p-5 space-y-2">
            <div className="py-2 sm:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Technology Title
              </label>
              <input
                value={NewTechnologyUpdate.technology_title}
                onChange={(e) => {
                  setNewTechnologyUpdate({
                    technology_id: NewTechnologyUpdate.technology_id,
                    technology_title: e.target.value,
                    technology_desc: NewTechnologyUpdate.technology_desc,
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

            <div className="py-2 sm:col-span-2">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Technology Description
              </label>
              <textarea
                value={NewTechnologyUpdate.technology_desc}
                onChange={(e) => {
                  setNewTechnologyUpdate({
                    technology_id: NewTechnologyUpdate.technology_id,
                    technology_title: NewTechnologyUpdate.technology_title,
                    technology_desc: e.target.value,
                  });
                }}
                id="description"
                rows={8}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Your description here"
                defaultValue={""}
              />
            </div>
          </div>
          {/* Modal footer */}
          <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              type="submit"
              className="sheikhtabarak-btn-main text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Update Technology
            </button>
          </div>
        </form>
      </div>
      {/* </div> */}
    </div>
  );
}
