import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {


  const ThemeInput = {
    light: ["#0B293F", "#0E4429", "#006D32", "#26A641", "#39D353"],
    dark: ["#0B293F", "#0E4429", "#006D32", "#26A641", "#39D353"],
  };

  return (
    <>


<div className=" hidden lg:flex lg:justify-center  text-xs font-medium leading-5 text-teal-300 ">
              <div className="w-[110px] lg:w-[610px] ">
                <GitHubCalendar 
        username="sheikh-tabarak"
        theme={ThemeInput}
        colorScheme="light"
      />
                </div>                        
      </div>
    </>

  );
}

export default Github;
