import firebase from "../models/connection";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { toast } from "react-toastify";
// import { toast } from "react-toastify";

const firestore = firebase.firestore();

class Project {
  constructor(
    project_id,
    project_title,
    project_description,
    project_github,
    client_name,
    date_to_start,
    date_to_end,
    feature_image,
    project_link,
    builtsin
  ) {
    this.project_id = project_id;
    this.project_title = project_title;
    this.project_description = project_description;
    this.project_github = project_github;
    this.client_name = client_name;
    this.date_to_start = date_to_start;
    this.date_to_end = date_to_end;
    this.feature_image = feature_image;
    this.project_link = project_link;
    this.builtsin = builtsin;
  }

  async addProject(
    PTitle,
    PDescription,
    PGithub,
    PCientName,
    PStartDate,
    PEndDate,
    PFeatureImg,
    PLink,
    Builtsin
  ) {
    try {
      // const oldProject = firestore.collection('projects');
      // const ProjectId = oldProject.doc().id;
      const newProject = firestore.collection("projects");
      //.doc(ProjectId);
      // const { id } = await addDoc(usersCollectionRef, {});
      await newProject
        .add(
          new Project(
            "",
            PTitle,
            PDescription,
            PGithub,
            PCientName,
            PStartDate,
            PEndDate,
            PFeatureImg,
            PLink,
            Builtsin
          ).toJson()
        )
        .then(async (value) => {
          console.log(value.id);

          await firestore
            .collection("projects")
            .doc(value.id)
            .update(
              new Project(
                value.id,
                PTitle,
                PDescription,
                PGithub,
                PCientName,
                PStartDate,
                PEndDate,
                PFeatureImg,
                PLink,
                Builtsin
              ).toJson()
            );
        });

      toast.success("Project added successfully!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "bg-white dark:bg-gray-900",
        autoClose: 2000,
      });

      console.log("Project added successfully.");
    } catch (error) {
      toast.error(
        <>
          <p>Error Adding Project</p>
          <p className="leading-relaxed text-sm/[12px]">{error}</p>
        </>,
        {
          position: toast.POSITION.BOTTOM_RIGHT,
          className: "bg-white dark:bg-gray-900",
          autoClose: 5000,
        }
      );
    }
  }

  async delete(PId) {
    try {
      await firestore.collection("projects").doc(PId).delete();
      console.log("Project deleted successfully.");
  
      toast.success(
        <>
          <p>Project Deleted Successfully</p>
        </>,
        {
          position: toast.POSITION.BOTTOM_RIGHT,
          className: "bg-white dark:bg-gray-900",
          autoClose: 2000,
        }
      );
    } catch (error) {
      toast.error(
        <>
          <p>Error Deleting Project</p>
          <p className="leading-relaxed text-sm/[12px]">{error}</p>
        </>,
        {
          position: toast.POSITION.BOTTOM_RIGHT,
          className: "bg-white dark:bg-gray-900",
          autoClose: 5000,
        }
      );

      console.error("Error deleting project:", error);
    }
  }

  async update(
    id,
    PTitle,
    PDescription,
    PBudget,
    PCientName,
    PStartDate,
    PEndDate,
    PFeatureImg,
    PLink,
    Builtsin
  ) {
    try {
      console.log(id);
      await firestore.collection("projects").doc(id).update(
        new Project(
          id,
          PTitle,
          PDescription,
          PBudget,
          PCientName,
          PStartDate,
          PEndDate,
          PFeatureImg,
          PLink,
          Builtsin
        ).toJson()

        // new Project.toJson()
      );

      console.log("Project updated successfully.");
      toast.success("Project updated successfully!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "bg-white dark:bg-gray-900",
        autoClose: 1000,
      });
    } catch (error) {

      toast.error(
        <>
          <p>Error Updating Project</p>
          <p className="leading-relaxed text-sm/[12px]">{error}</p>
        </>,
        {
          position: toast.POSITION.BOTTOM_RIGHT,
          className: "bg-white dark:bg-gray-900",
          autoClose: 5000,
        }
      );
      // toast.error("Project updated successfully!", {
      //   position: toast.POSITION.TOP_RIGHT,
      //   className:"bg-white dark:bg-gray-900",
      //   autoClose: 1000,
      // });

      console.error("Error updating project:", error);
    }
  }

  toJson() {
    return {
      project_id: this.project_id,
      project_title: this.project_title,
      project_description: this.project_description,
      project_github: this.project_github,
      client_name: this.client_name,
      date_to_start: this.date_to_start,
      date_to_end: this.date_to_end,
      feature_image: this.feature_image,
      project_link: this.project_link,
      builtsin: this.builtsin,
    };
  }

  static fromJson(data) {
    return new Project(
      data.project_id,
      data.project_title,
      data.project_description,
      data.project_budget,
      data.client_name,
      data.date_to_start,
      data.date_to_end,
      data.feature_image,
      data.project_link,
      data.builtsin
    );
  }
}

// export {Project};
export default Project;
// export {addProject};
