import React from "react";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaRegCopyright } from "react-icons/fa";

import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section id="contact">
      <div className="px-4 py-10 lg:px-36 lg:py-10 md:px-36 md:py-5">
        <p className="text-center menu-font-span leading-10 text-[16px] ">
          04. What’s Next?
        </p>

        <h1 className="text-[20px] text-center font-bold  tracking-tight text-[#CCD6F6] md:text-[40px] lg:text-[60px]">
          Get In Touch
        </h1>

        <div className="px-2 py-5 lg:px-36 lg:py-7">
          <p className=" text-center lg:text-center text-[16px]  text-[#8892B0] md:text-[20px] lg:text-[20px]">
            Although I’m not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </p>
        </div>

        <div className="flex justify-center mx-auto">
          <a
            id="about"
            href="mailto:admin@sheikhtabarak.me"
            className=" flex gap-2 menu-button  hover:-translate-y-1 hover:transition hover:ease-in-out hover:delay-175 px-5 py-3 text-[10px] font-bold mb-4 tracking-tight text-[#8892B0] md:text-[13px] lg:text-[13px] lg:px-8 lg:py-3"
          >
            <HiOutlineMailOpen />
            Say Hello
          </a>
        </div>
      </div>


    </section>
  );
}
