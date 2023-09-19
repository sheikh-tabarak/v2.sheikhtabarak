import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/header";
import ProjectArchive from "../data/projectsdata";
import Card from "../components/card";

export default function SingleProject(props) {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const location = useLocation();
  console.log(location.state.index);
  return (
    <>

      <Card
        Title={ProjectArchive[location.state.index].title}
        image={ProjectArchive[location.state.index].project_image}
        technology={ProjectArchive[location.state.index].builtwith}
        description={ProjectArchive[location.state.index].description}
        projectLink={ProjectArchive[location.state.index].link}
        Github={ProjectArchive[location.state.index].github_link}
      />
    </>
  );
}
