import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Experience() {
  let menuArray = [true, false, false, false, false];

  const ExpirenceArray = [
    {
      title: "Level Two Seller",
      Company: "Fiverr",
      StartDate: "Jan 2022",
      EndDate: "Present",
      Description:
        "I am Muhammad Tabarak, a software engineer and a diligent developer who loves to innovate, explore & design. I have started my professional career in 2020 on fiverr as a WordPress developer. Then I started proving services i.e UML designing, LinkedIn Profiles creation, resume and presentation designing etc And now I have a complete team for full range of web/mobile application development. Till now, I have worked with 100s of clients and completed 190+ five star rated orders. Do check my portfolio for more.",
    },

    {
      title: "Verified Seller",
      Company: "Upwork",
      StartDate: "Feb 2023",
      EndDate: "Present",
      Description:
        "I am pleased to offer my professional services to you at a highly competitive rate. As a new freelancer on Upwork, I am eager to establish a strong client base and earn your trust. I am a highly experienced WordPress and Elementor developer, with four years of experience both locally and on Fiverr. I am confident in my ability to clone your design from XD to WordPress Elementor with 100% accuracy, including the header, footer, and all other pages. To see examples of my work, please visit my portfolio on Behance at behance.net/sheikhtabarak. I am committed to your complete satisfaction and am happy to provide a preview of the work before you make a decision.",
    },

    {
      title: "Internee",
      Company: "National Incubation Center",
      StartDate: "Oct 2022",
      EndDate: "Apr 2023",
      Description:
        'I had the privilege of honing a diverse range of skills during my time at NIC. This included teamwork, leadership, stress management and effective time management. As a web developer, social media specialist, and finance manager for our startup project "Pakpets", I was able to apply these skills in a practical setting, resulting in a truly enriching experience.  This valuable experience has added an indispensable dimension to my professional journey.',
    },

    {
      title: "Founder & CEO",
      Company: "Sheikh Tabarak",
      StartDate: "August 2021",
      EndDate: "Present",
      Description:
        "I have expertise in Frontend Web and Mobile Application Development, able to deliver high-quality, reliable solutions on time and on budget. I am dedicated to ensuring client satisfaction and am willing to go above and beyond to meet the needs of my clients. I have a proactive, solutions-oriented approach to problem-solving, and I am flexible and adaptable in working with clients’ changing needs and priorities. I am also committed to continuous learning and professional development.",
    },

    // {
    //   title: "Lead Engineer",
    //   Company: "Upstatement",
    //   StartDate: "May 23, 2018",
    //   EndDate: "Present",
    //   Description:
    //     "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship",
    // },
  ];

  const [menu, setMenu] = useState({
    one: true,
    two: false,
    three: false,
    four: false,
    // five: false,
  });

  const [ExperienceState, setExperienceState] = useState({
    title: "",
    Company: "",
    Description: "",
  });

  //   const [show, setShow] = useState(true);

  //   const setMenuValue = (props) => {
  //     let newArr = [...menu];
  //     newArr[props] = !newArr[props];
  //     setMenu(newArr);
  //   };

  return (
    <section id="">


        
      <div className="px-4 py-10 lg:px-36 lg:py-12 md:px-36 md:py-10">


      <div id="Experience" className="flex pb-4">
              <h1 className="col menu-font-span text-[22px] ">2.</h1>
              <h1 className="col text-[20px] leading-8 font-bold mb-4 tracking-tight text-[#CCD6F6] md:text-[40px] lg:text-[24px]">
              Where I’ve Worked.
              </h1>
              {/* <hr className="h-px mx-8 my-12 bg-gray-400 border-1 dark:bg-gray-700"/> */}
            </div>


        <div className="lg:flex overflow-x-auto space-x-8 w-full">
          <div >
            <div
              id="menu1"
              className={`${
                //   menu[0] ?
                "flex "
                // "flex overflow-x-auto space-x-8 w-full"
                // :"hidden"
              } lg:justify-start lg:flex-col w-full md:w-auto items-start pb-1 `}
            >
              <button
                onClick={() => {
                  setMenu({
                    one: true,
                    two: false,
                    three: false,
                    four: false,
                    // five: false,
                  });

                  //  ()=> setExperienceState({
                  //     title:"This is One",
                  //     Company:"One number",
                  //     Description:"TYhis is Oeaskl",

                  //   })
                }}
                className={
                  menu.one
                    ? "text-[#4CD684] hover:text-[#4CD684] text-left border-l-2 border-[#4CD684] text-[13px] experience-font-in-SFMonoBold flex justify-start items-center space-x-6  focus:bg-gray-700 hover:bg-gray-700  px-3 py-2  w-full md:w-52"
                    : "text-left text-[13px] border-l-2  border-[#404C66]  experience-font-in-SFMonoBold flex justify-start items-center space-x-6  focus:bg-gray-700 focus:text-[#4CD684] hover:bg-gray-700 text-gray-400 px-3 py-2  w-full md:w-52"
                }
              >
                {ExpirenceArray[0].Company}
              </button>
              <button
                onClick={() => {
                  setMenu({
                    one: false,
                    two: true,
                    three: false,
                    four: false,
                    // five: false,
                  });
                  //  ()=> setExperienceState({
                  //     title:"This is Two",
                  //     Company:"Two Two",
                  //     Description:"TYhis is Two",

                  //   })
                }}
                className={
                  menu.two
                    ? "text-left border-l-2 border-[#4CD684] text-[13px]  text-[#4CD684] experience-font-in-SFMonoBold flex justify-start items-center space-x-6  focus:bg-gray-700 hover:bg-gray-700  px-3 py-2  w-full md:w-52"
                    : "text-left text-[13px] border-l-2  border-[#404C66]   experience-font-in-SFMonoBold flex justify-start items-center space-x-6  focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 px-3 py-2  w-full md:w-52"
                }
              >
                {ExpirenceArray[1].Company}
              </button>
              <button
                onClick={() =>
                  setMenu({
                    one: false,
                    two: false,
                    three: true,
                    four: false,
                    // five: false,
                  })
                }
                className={
                  menu.three
                    ? "text-left  border-l-2 border-[#4CD684] text-[13px]  text-[#4CD684] experience-font-in-SFMonoBold flex justify-start items-center space-x-6  focus:bg-gray-700 hover:bg-gray-700 px-3 py-2  w-full md:w-52"
                    : "text-left text-[13px] border-l-2  border-[#404C66]   experience-font-in-SFMonoBold flex justify-start items-center space-x-6  focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 px-3 py-2  w-full md:w-52"
                }
              >
                {ExpirenceArray[2].Company}
              </button>
              <button
                onClick={() =>
                  setMenu({
                    one: false,
                    two: false,
                    three: false,
                    four: true,
                    // five: false,
                  })
                }
                className={
                  menu.four
                    ? "text-left  border-l-2 border-[#4CD684] text-[13px]  text-[#4CD684] experience-font-in-SFMonoBold flex justify-start items-center space-x-6  focus:bg-gray-700 hover:bg-gray-700  px-3 py-2  w-full md:w-52"
                    : "text-left text-[13px] border-l-2  border-[#404C66]   experience-font-in-SFMonoBold flex justify-start items-center space-x-6  focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 px-3 py-2  w-full md:w-52"
                }
              >
                {ExpirenceArray[3].Company}
              </button>
              
            </div>
          </div>

          <div>
            <div className="py-5 w-full shadow lg:px-10 lg:py-0 sm: md:py-10">
              <span className="col text-[18px] leading-8 mb-4 tracking-tight text-[#CCD6F6] md:text-[40px] lg:text-[22px] font-[500]">
                {menu.one
                  ? ExpirenceArray[0].title
                  : menu.two
                  ? ExpirenceArray[1].title
                  : menu.three
                  ? ExpirenceArray[2].title
                  : menu.four
                  ? ExpirenceArray[3].title
                  : ""}
              </span>

              <span className="px-2 col text-[18px] leading-8 mb-4 tracking-tight text-[#4CD684] md:text-[40px] lg:text-[22px] font-[500] ">
                <Link>
                  @
                  {menu.one
                    ? ExpirenceArray[0].Company
                    : menu.two
                    ? ExpirenceArray[1].Company
                    : menu.three
                    ? ExpirenceArray[2].Company
                    : menu.four
                    ? ExpirenceArray[3].Company
                    : ""}
                </Link>
              </span>

              <p className="skills-font-span text-[13px] text-[#8892B0] py-2">
                {menu.one
                  ? ExpirenceArray[0].StartDate
                  : menu.two
                  ? ExpirenceArray[1].StartDate
                  : menu.three
                  ? ExpirenceArray[2].StartDate
                  : menu.four
                  ? ExpirenceArray[3].StartDate
                  : ""}
                -
                {menu.one
                  ? ExpirenceArray[0].EndDate
                  : menu.two
                  ? ExpirenceArray[1].EndDate
                  : menu.three
                  ? ExpirenceArray[2].EndDate
                  : menu.four
                  ? ExpirenceArray[3].EndDate
                  :""}
              </p>

              <p className="text-[14px]  tracking-tight text-[#8892B0] md:text-[18px] lg:text-[18px]">
                {menu.one
                  ? ExpirenceArray[0].Description
                  : menu.two
                  ? ExpirenceArray[1].Description
                  : menu.three
                  ? ExpirenceArray[2].Description
                  : menu.four
                  ? ExpirenceArray[3].Description
                  : ""}
              </p>
            </div>
          </div>
          
        </div><div id="work"></div>
      </div>

      
    </section>
  );
}
