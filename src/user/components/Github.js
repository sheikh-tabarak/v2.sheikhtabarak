import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  //   const colourTheme =ThemeInput {
  //     // theme:"#ffffff",
  //     background: "#ffffff",
  //     text: "#ffffff",
  //     grade4: "#8400b8",
  //     grade3: "#b22ff4",
  //     grade2: "#b265f6",
  //     grade1: "#c084f5",
  //     grade0: "#ecd9fc",
  //   };

  const ThemeInput = {
    light: ["#0B293F", "#0E4429", "#006D32", "#26A641", "#39D353"],
    dark: ["#0B293F", "#0E4429", "#006D32", "#26A641", "#39D353"],
  };

  return (
    // <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
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
