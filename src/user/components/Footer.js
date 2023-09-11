import React from "react";
import { Link } from "react-router-dom";
import { FaRegCopyright } from "react-icons/fa";
import Github from "./Github";

export default function Footer() {
  return (
    <section>
      <div className="  px-4 py-10 lg:px-36 lg:py-10 md:px-36 md:py-5">
        <div className="block lg:flex lg:justify-between lg:items-end">
          <div>
            <div className="hidden lg:block text-center lg:text-left bg-[#112240] p-4 mb-3 mr-10 rounded-[10px] text-[400] text-[12px] overflow-break tracking-tight text-[#8892B0] md:text-[15px] lg:text-[15px]">
              <Link
                className="experience-font-in-SFMonoBold text-[#4CD684] text-[10px] lg:text-[13px] pb-1 flex gap-2 content-between justify-start"
                to="https://github.com/sheikh-tabarak/sheikhtabarak"
                target="blank"
              >
                How Frequently I code
              </Link>
              <p className="text-[8px] lg:text-[12px] ">
                A visual journey through my coding commitment and open-source
                contributions.
              </p>
            </div>

            {/* <p  className="text-[10px] lg:text-[13px] py-2 flex gap-2 content-between justify-start">A visual journey through my coding commitment and open-source contributions.</p> */}

            <Link
              to={"/"}
              className="menu-font-in-SFMonoBold text-[10px] lg:text-[13px]  flex gap-2 content-between justify-center lg:justify-start "
            >
              <FaRegCopyright className="self-center	" />
              2023 Copyrights | All Rights Reserved
            </Link>
          </div>

          <Github />
        </div>
      </div>
    </section>
  );
}
