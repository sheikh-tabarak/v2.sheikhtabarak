import firebase from "../models/connection";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firestore = firebase.firestore();

class Project {
  constructor(
    project_id,
    project_title,
    project_description,
    project_budget,
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
    this.project_budget = project_budget;
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
    PBudget,
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
            PBudget,
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
                PBudget,
                PCientName,
                PStartDate,
                PEndDate,
                PFeatureImg,
                PLink,
                Builtsin
              ).toJson()
            );
        });

      // firestore.collection('projects').doc()

      console.log("Project added successfully.");
    } catch (error) {
      console.error("Error adding project:", error);
    }
  }

  async delete(PId) {
    try {
      await firestore.collection("projects").doc(PId).delete();
      console.log("Project deleted successfully.");
    } catch (error) {
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

      console.log(id)
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
    } catch (error) {
      console.error("Error updating project:", error);
    }
  }

  toJson() {
    return {
      project_id: this.project_id,
      project_title: this.project_title,
      project_description: this.project_description,
      project_budget: this.project_budget,
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
