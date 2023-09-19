class Experiences {
  constructor(title, Company, StartDate, EndDate, JobLink, Description) {
    this.title = title;
    this.Company = Company;
    this.StartDate = StartDate;
    this.EndDate = EndDate;
    this.JobLink = JobLink;
    this.Description = Description;
  }

  toJson() {
    return {
      title: this.title,
      Company: this.Company,
      StartDate: this.StartDate,
      EndDate: this.EndDate,
      JobLink: this.JobLink,
      Description: this.Description,
    };
  }

  static fromJson(data) {
    return new Experiences(
      data.title,
      data.Company,
      data.StartDate,
      data.EndDate,
      data.JobLink,
      data.Description
    );
  }
}

export default Experiences;
