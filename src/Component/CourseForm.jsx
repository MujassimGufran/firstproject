import React, { Component } from "react";

class CourseForm extends Component {
  state = {
    course: this.props.course,
  };

  handleInputChange = (e) => {
    let s1 = { ...this.state };
    s1.course[e.currentTarget.name] = e.currentTarget.value;
    this.setState(s1);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", this.state.course);
    this.props.onSubmit(this.state.course);
  };

  render() {
    let { courseName, faculty, lectures } = this.state.course;
    return (
      <div className="container">
        <h5>{this.props.edit ? "Edit Details" : "Enter Details of course"}</h5>
        <div className="form-group">
          <label>Course Name</label>
          <input
            type="text"
            className="form-control"
            id="courseName"
            name="courseName"
            value={courseName}
            placeholder="Enter CourseName"
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group mt-2">
          <label>Faculty</label>
          <input
            type="text"
            className="form-control"
            id="faculty"
            name="faculty"
            value={faculty}
            placeholder="Enter Faculty"
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group mt-2">
          <label>Lectures</label>
          <input
            type="text"
            className="form-control"
            id="lectures"
            name="lectures" 
            value={lectures}
            placeholder="Enter Lectures"
            onChange={this.handleInputChange}
          />
        </div>
        <button className="btn btn-primary mt-3" onClick={this.handleSubmit}>
          {this.props.edit ? "Update" : "Submit"}
        </button>
      </div>
    );
  }
}

export default CourseForm;



// import React, { Component } from "react";

// class CourseForm extends Component {
//   state = {
//     course: this.props.course,
//   };

//   handleInputChange = (e) => {
//     let s1 = { ...this.state };
//     s1.course[e.currentTarget.name] = e.currentTarget.value;
//     this.setState(s1);
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form data submitted:", this.state.course);
//     this.props.onSubmit(this.state.course);
//   };

//   render() {
//     let { courseName, faculty, lectures } = this.state.course;
//     return (
//       <div className="container">
//         <h5>{this.props.edit ? "Edit Details" : "Enter Details of course"}</h5>
//         <div className="form-group">
//           <label>Course Name</label>
//           <input
//             type="text"
//             className="form-control"
//             id="courseName"
//             name="courseName"
//             value={courseName}
//             placeholder="Enter CourseName"
//             onChange={this.handleInputChange}
//           />
//         </div>
//         <div className="form-group mt-2">
//           <label>Faculty</label>
//           <input
//             type="text"
//             className="form-control"
//             id="faculty"
//             name="faculty"
//             value={faculty}
//             placeholder="Enter Faculty"
//             onChange={this.handleInputChange}
//           />
//         </div>
//         <div className="form-group mt-2">
//           <label>Lectures</label>
//           <input
//             type="text"
//             className="form-control"
//             id="lectures"
//             name="lectures" 
//             value={lectures}
//             placeholder="Enter Lectures"
//             onChange={this.handleInputChange}
//           />
//         </div>
//         <button className="btn btn-primary mt-3" onClick={this.handleSubmit}>
//           {this.props.edit ? "Update" : "Submit"}
//         </button>
//       </div>
//     );
//   }
// }

// export default CourseForm;
