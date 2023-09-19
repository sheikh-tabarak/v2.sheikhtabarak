import React, { useEffect, useState } from "react";
import Loading from "../../loading";
import Technology from "../../models/TechnologyClass";
import { Link, useLocation } from "react-router-dom";
import firebaseconnection from "../../models/connection";
import ConfirmationDialog from "../../popups/ConfirmationDialog";
import UpdateTechnologies from "../../popups/updateTechnologies";

export default function MyTechnologies() {
  document.title = "My Technologies | Dashboard";

  const [isLoading, setisLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [refreshData, setrefreshData] = useState(false);
  const [refresh, setrefresh] = useState(false);
  const [techList, settechList] = useState([]);
  const [EditForm, setEditForm] = useState(false);
  const [NewTechnology, setNewTechnology] = useState({
    technology_id: "",
    technology_title: "",
    technology_desc: "",
  });

  const ConfirmDeletion = () => setOpen(!open);
  const OpenEditBox = () => setEditForm(!EditForm);

  async function deleteTechnology(TechnologyId) {
    ConfirmDeletion();
    setisLoading(true);
    const newTech = new Technology();
    await newTech.deleteTech(TechnologyId);
    setrefreshData(!refreshData);
    setisLoading(false);
  }

  async function updateTechnology(TID, TTiltle, TDesc) {
    OpenEditBox();
    setisLoading(true);

    const newTech = new Technology();

    await newTech.updateTech(TID, TTiltle, TDesc);

    setrefreshData(!refreshData);
    setisLoading(false);
  }

  // const location = useLocation();

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const collectionRef = firebaseconnection.firestore().collection("technologies");
        const snapshot = await collectionRef.get();

        const TechList = snapshot.docs.map((doc) => {
          const data = doc.data();
          return new Technology(
            data.technology_id,
            data.technology_title,
            data.technology_desc
          );
        });

        settechList(TechList);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchTechnologies();
  }, [refreshData]);

  async function addNewTech(e) {
    e.preventDefault();
    setisLoading(true);

    console.log("okay done");
    const newTech = new Technology();

    await newTech.addTechnology(
      NewTechnology.technology_title,
      NewTechnology.technology_desc
    );
    setrefreshData(!refreshData);

    setNewTechnology({
      technology_id: "",
      technology_title: "",
      technology_desc: "",
    });

    setisLoading(false);
    // console.log("okay done after : " + newTech.technology_title);
  }

  return isLoading === true ? (
    <Loading />
  ) : (
    <div className="bg-white flex w-full">
      <div className="p-8 sm:p-10 lg:flex-auto">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Add a new Technology
        </h2>

        <form onSubmit={addNewTech}>
          <div className="py-2 sm:col-span-2">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Technology Title
            </label>
            <input
              value={NewTechnology.technology_title}
              onChange={(e) => {
                setNewTechnology({
                  technology_id: NewTechnology.technology_id,
                  technology_title: e.target.value,
                  technology_desc: NewTechnology.technology_desc,
                });
              }}
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Give the technology a title"
              required=""
            />
          </div>

          <div className="py-2 sm:col-span-2">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <textarea
              value={NewTechnology.project_desc}
              onChange={(e) => {
                setNewTechnology({
                  technology_id: NewTechnology.technology_id,
                  technology_title: NewTechnology.technology_title,
                  technology_desc: e.target.value,
                });
              }}
              id="description"
              rows={8}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Describe about the technology"
              defaultValue={""}
            />
          </div>

          <button
            type="submit"
            className="mr-10 sheikhtabarak-btn-main inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            Add Technology
          </button>
        </form>
      </div>
      <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-auto">
        <div className="my-10">
          <div className="relative overflow-x-auto overflow-y-auto w-full h-[26rem] shadow-md sm:rounded-lg">
            <div className="text-white w-full sheikhtabarak-btn-main flex  items-center justify-between py-4  dark:bg-gray-800 px-5 text-sm font-medium text-gray-900 dark:text-white">
              List of Technologies
            </div>

            <table className=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="text-left w-2/3 p-5">Title</th>

                  <th className="text-left w-1/3 p-5">Action</th>
                </tr>
              </thead>
              <tbody>
                {techList.map((Technology, index) => {
                  return (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="text-left w-2/3 p-5 flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                        <div className="pl-3">
                          <div className="text-base font-semibold">
                            {Technology.technology_title}
                          </div>
                          <div className="font-normal text-gray-500">
                            {Technology.technology_desc}
                          </div>
                        </div>
                      </td>
                      <ConfirmationDialog
                        onConfirm={async (value) => {
                          await deleteTechnology(value);
                          console.log(value);
                        }}
                        message={"Do you wanna delete this Technology "}
                        yesButtonText={"Yes, Delete"}
                        noButtonText={"Cancel"}
                        open={open}
                        handleOpen={ConfirmDeletion}
                      />
                      <td className="text-left w-2/3">
                        {/* Modal toggle */}
                        <div className="flex row">
                          <div className="px-2">
                            <Link state={{ technology: Technology }}>
                              <svg
                                onClick={OpenEditBox}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 30 30"
                                width="20px"
                                height="20px"
                              >
                                <path d="M 22.828125 3 C 22.316375 3 21.804562 3.1954375 21.414062 3.5859375 L 19 6 L 24 11 L 26.414062 8.5859375 C 27.195062 7.8049375 27.195062 6.5388125 26.414062 5.7578125 L 24.242188 3.5859375 C 23.851688 3.1954375 23.339875 3 22.828125 3 z M 17 8 L 5.2597656 19.740234 C 5.2597656 19.740234 6.1775313 19.658 6.5195312 20 C 6.8615312 20.342 6.58 22.58 7 23 C 7.42 23.42 9.6438906 23.124359 9.9628906 23.443359 C 10.281891 23.762359 10.259766 24.740234 10.259766 24.740234 L 22 13 L 17 8 z M 4 23 L 3.0566406 25.671875 A 1 1 0 0 0 3 26 A 1 1 0 0 0 4 27 A 1 1 0 0 0 4.328125 26.943359 A 1 1 0 0 0 4.3378906 26.939453 L 4.3632812 26.931641 A 1 1 0 0 0 4.3691406 26.927734 L 7 26 L 5.5 24.5 L 4 23 z" />
                              </svg>
                            </Link>
                          </div>

                          <div className="px-2">
                            <Link state={{ id: Technology.technology_id }}>
                              <a href="#">
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
                              </a>
                            </Link>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <UpdateTechnologies
              EditForm={EditForm}
              OpenEditBox={OpenEditBox}
              // refresh={refresh}
              UpdatetheTechnology={async (id, title, desc) => {
                await updateTechnology(id, title, desc);
                console.log(id + title + desc);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
