import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExpirenceArray from "../data/experiencesdata";
import firebaseconnection from "../../models/connection";
import Experiences from "../../models/ExperienceClass";

export default function Experience() {
  let menuArray = [true, false, false, false, false];

  const [menu, setMenu] = useState(0);

  const [ExperienceState, setExperienceState] = useState({
    title: "",
    Company: "",
    Description: "",
  });

  const [Experience, setExperience] = useState([]);
  const [refreshData, setrefreshData] = useState(false);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const collectionRef = firebaseconnection
          .firestore()
          .collection("experiences");
        const snapshot = await collectionRef.get();

        const ExperienceList = snapshot.docs.map((doc) => {
          const exdata = doc.data();
          return new Experiences(
            exdata.Company,
            exdata.Description,
            exdata.EndDate,
            exdata.JobLink,
            exdata.StartDate,
            exdata.title
          );
        });

        setExperience(ExperienceList);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchExperiences();
  }, [refreshData]);

  return (
    <section id="">
      <div className="px-10 py-10 lg:px-36 lg:py-12 md:px-36 md:py-10">


        <div id="" className="flex pb-4">
          <h1 className="col menu-font-span text-[22px] ">2.</h1>
          <h1 className="col text-[20px] leading-8 font-bold mb-4 tracking-tight text-[#CCD6F6] md:text-[40px] lg:text-[24px]">
            Where I’ve Worked.
          </h1>
          {/* <hr className="h-px mx-8 my-12 bg-gray-400 border-1 dark:bg-gray-700"/> */}
        </div>

        <div className="lg:flex overflow-x-auto lg:space-x-8 w-full">
          <div>
            <div
              id="menu1"
              className={`${
                //   menu[0] ?
                "flex "
                // "flex overflow-x-auto space-x-8 w-full"
                // :"hidden"
              } lg:justify-start lg:flex-col w-full md:w-auto items-start pb-1 `}
            >
              {Experience.map((value, index) => {
                return (
                  <button
                    onClick={() => {
                      setMenu(index);
                    }}
                    className={
                      menu === index
                        ? "text-[#4CD684] hover:text-[#4CD684] text-left border-l-2 border-[#4CD684] text-[13px] experience-font-in-SFMonoBold flex justify-content space-x-6  bg-gray-700 hover:bg-gray-700  px-3 py-2  w-full md:w-52"
                        : "text-left text-[13px] border-l-2  border-[#404C66]  experience-font-in-SFMonoBold flex justify-start items-center space-x-6  focus:bg-gray-700 focus:text-[#4CD684] hover:bg-gray-700 text-gray-400 px-3 py-2  w-full md:w-52"
                    }
                  >
                    {ExpirenceArray[index].Company}
                  </button>
                );
              })}
            </div>
          </div>

          {/* <div> */}
            <div className="py-5 lg:w-full shadow px-0 lg:px-10 lg:py-0 md:py-10">
              <span className="col text-[18px] leading-8 mb-4 tracking-tight text-[#CCD6F6] md:text-[40px] lg:text-[22px] font-[500]">
                {ExpirenceArray[menu].title}
              </span>

              <span className="px-2 col text-[18px] leading-8 mb-4 tracking-tight text-[#4CD684] md:text-[40px] lg:text-[22px] font-[500] ">
                <Link to={ExpirenceArray[menu].JobLink} target="blank">
                  @{ExpirenceArray[menu].Company}
                </Link>
              </span>

              <p className="skills-font-span text-[13px] text-[#8892B0] py-2">
                {ExpirenceArray[menu].StartDate}-{ExpirenceArray[menu].EndDate}
              </p>

              <p className="text-[14px]  tracking-tight text-[#8892B0] md:text-[18px] lg:text-[18px]">
                {
                  ExpirenceArray[menu].Description

                  // : menu.four
                  // ? ExpirenceArray[3].Description
                }
              </p>
            </div>
          {/* </div> */}
        </div>
        <div id="work"></div>
      </div>
    </section>
  );
}
