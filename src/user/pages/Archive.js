import React from "react";

export default function Archive() {
  return (
    <div className="px-10 py-10 lg:px-36 lg:py-10 md:px-36 md:py-10">
      <h1 className="text-[20px] font-bold  tracking-tight text-[#CCD6F6] md:text-[40px] lg:text-[60px]">
        Archive
      </h1>
      <p className="menu-font-span leading-10 text-[16px] pb-10 ">
        A big list of things I’ve worked on
      </p>

      <div className="relative overflow-x-auto shadow-md">
        <table className="w-full text-sm text-left  text-gray-400  ">
          <thead className="text-[14px] lg:text-[20px] text-[700] text-gray-400">
            <tr>
              {/* <th scope="col" className="px-6 py-3">
    year
        </th> */}
              <th scope="col" className="px-6 py-3">
                Year
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Made at
              </th>
              <th scope="col" className="px-6 py-3">
                Built with
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>

          <tbody className="border-radius: 20px">
            <tr className=" border-b border-gray-700 hover:bg-gray-600 rounded-lg hover:rounded-lg">
              {/* <td className="px-6 py-4">$2999</td> */}
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap text-white"
              >
                2021
              </th>

              <td className="px-6 py-4">
                tevkbn kln kln ;kml ;lm jijklo nkllk ffy{" "}
              </td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
