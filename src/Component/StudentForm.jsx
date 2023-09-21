import React, { Component } from "react";

class StudentForm extends Component {
  state = {
    student: {
      id: "",
      name: "",
    },
  };

  handleChange = (e) => {
    let s1 = { ...this.state };
    s1.student[e.currentTarget.name] = e.currentTarget.value;
    this.setState(s1);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.student);
  };

  render() {
    let { id, name } = this.state.student;
    return (
      <div className="container">
        <h5>Enroll Student in Course</h5>
        <div className="form-group mt-2">
          <label>Student ID</label>
          <input
            type="text"
            className="form-control mt-2"
            id="id"
            name="id"
            placeholder="Enter Student ID"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group mt-2">
          <label>Name of the Student</label>
          <input
            type="text"
            className="form-control mt-2"
            id="name"
            name="name"
            placeholder="Enter Name"
            onChange={this.handleChange}
          />
        </div>
        <button className="btn btn-primary mt-2" onClick={this.handleSubmit}>
          Enroll Student
        </button>
              </div>
    );
  }
}
export default StudentForm;
