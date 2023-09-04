import firebase from "../models/connection";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { toast } from "react-toastify";

const firestore = firebase.firestore();

class Technology {
  constructor(technology_id, technology_title, technology_desc) {
    this.technology_id = technology_id;
    this.technology_title = technology_title;
    this.technology_desc = technology_desc;
    
  }

  async addTechnology(TTitle, TDescription) {
    try {
      // const oldProject = firestore.collection('projects');
      // const ProjectId = oldProject.doc().id;
      const newTechnology = firestore.collection("technologies");
      //.doc(ProjectId);
      // const { id } = await addDoc(usersCollectionRef, {});
      await newTechnology
        .add(new Technology("", TTitle, TDescription).toJson())
        .then(async (value) => {
          console.log(value.id);

          await firestore
            .collection("technologies")
            .doc(value.id)
            .update(new Technology(value.id, TTitle, TDescription).toJson());
        });

      // firestore.collection('projects').doc()

      toast.success("New Technology added successfully!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "bg-white dark:bg-gray-900",
        autoClose: 2000,
      });

      console.log("Technology added successfully.");
    } catch (error) {
      toast.error(
        <>
          <p>Error Adding Technology</p>
          <p className="leading-relaxed text-sm/[12px]">{error}</p>
        </>,
        {
          position: toast.POSITION.BOTTOM_RIGHT,
          className: "bg-white dark:bg-gray-900",
          autoClose: 5000,
        }
      );
      console.error("Error adding Technology:", error);
    }
  }

  async deleteTech(TId) {
    try {
      await firestore.collection("technologies").doc(TId).delete();
      console.log("Technology deleted successfully.");
      toast.success("Technology deleted successfully!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "bg-white dark:bg-gray-900",
        autoClose: 2000,
      });
    } catch (error) {
      toast.error(
        <>
          <p>Error Deleting Technology</p>
          <p className="leading-relaxed text-sm/[12px]">{error}</p>
        </>,
        {
          position: toast.POSITION.BOTTOM_RIGHT,
          className: "bg-white dark:bg-gray-900",
          autoClose: 5000,
        }
      );
      console.error("Error deleting Technology:", error);
    }
  }

  async updateTech(id, TTitle, TDescription) {
    try {
      console.log(id);
      await firestore
        .collection("technologies")
        .doc(id)
        .update(new Technology(id, TTitle, TDescription).toJson());

      toast.success("Technology updated successfully!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "bg-white dark:bg-gray-900",
        autoClose: 2000,
      });
      console.log("Technology updated successfully.");
    } catch (error) {
      toast.error(
        <>
          <p>Error Updating Technology</p>
          <p className="leading-relaxed text-sm/[12px]">{error}</p>
        </>,
        {
          position: toast.POSITION.BOTTOM_RIGHT,
          className: "bg-white dark:bg-gray-900",
          autoClose: 5000,
        }
      );
      console.error("Error updating Technology:", error);
    }
  }

  toJson() {
    return {
      technology_id: this.technology_id,
      technology_title: this.technology_title,
      technology_desc: this.technology_desc,
    };
  }

  static fromJson(data) {
    return new Technology(
      data.technology_id,
      data.technology_title,
      data.technology_desc
    );
  }
}

export default Technology;
