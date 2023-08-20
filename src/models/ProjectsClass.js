import firebase from '../models/connection';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firestore = firebase.firestore();

class Project {
  constructor(project_id, project_title, project_description, project_budget, client_name, date_to_start, date_to_end, feature_image, project_link) {
    this.project_id = project_id;
    this.project_title = project_title;
    this.project_description = project_description;
    this.project_budget = project_budget;
    this.client_name = client_name;
    this.date_to_start = date_to_start;
    this.date_to_end = date_to_end;
    this.feature_image = feature_image;
    this.project_link = project_link;
  }

  async add( PTitle,  ) {
    try {
      const newProject = await firestore.collection('projects').add(

        Project(newProject.id,PTitle,PDescription,PBudget, PCientName,PStartDate, PEndDate, PFeatureImg, PLink )
        
        .toJson());
      console.log('Project added successfully.');
    } catch (error) {
      console.error('Error adding project:', error);
    }
  }

  async delete() {
    try {
      await firestore.collection('projects').doc(this.project_id).delete();
      console.log('Project deleted successfully.');
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  }

  async update() {
    try {
      await firestore.collection('projects').doc(this.project_id).update(this.toJson());
      console.log('Project updated successfully.');
    } catch (error) {
      console.error('Error updating project:', error);
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
      project_link: this.project_link
    };
  }

  static fromJson(data) {
    return new Project(data.project_id, data.project_title, data.project_description, data.project_budget, data.client_name, data.date_to_start, data.date_to_end, data.feature_image, data.project_link);
  }
}

// export {Project};
export default Project;
