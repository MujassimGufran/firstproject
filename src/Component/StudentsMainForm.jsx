import React, { Component } from "react";

class StudentsMainForm extends Component {
  state = {
    name: "",
    course: "",
    year: "",
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, course, year } = this.state;
    if (name,course,year) {
      const student = { id: Date.now(), name: name, course:course,year:year, marks: null };
      this.props.onSubmit(student);
      this.setState({ name: "", course: "", year:"" });
    }
  };

  render() {
    const { name, course, year } = this.state;

    return (
      <div>
        <h2>New Student</h2>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Course</label>
            <input
              className="form-control"
              type="text"
              name="course"
              value={course}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Year</label>
            <input
              className="form-control"
              type="text"
              name="year"
              value={year}
              onChange={this.handleInputChange}
            />
          </div>
          <button className="btn btn-primary mt-2" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default StudentsMainForm;
