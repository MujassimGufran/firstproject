import React, { Component } from 'react';

class FormWithConditionalFields extends Component {
  state = {
    selectedOption: null,
    employer: '',
    designation: '',
    college: '',
    course: '',
  };

  handleOptionChange = (event) => {
    this.setState({
      selectedOption: event.target.value,
    });
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = () => {
    const details = {
      employer: this.state.employer,
      designation: this.state.designation,
      college: this.state.college,
      course: this.state.course,
    };

    let alertMessage =
    'Employer: ' + details.employer +
    '\nDesignation: ' + details.designation +
    '\nCollege: ' + details.college +
    '\nCourse: ' + details.course;
  
  alert(alertMessage);
  };

  render() {
    return (
      <div className="container">
        <div className="col-6 border">
          <div className="m-2">
            <h4>Provide Details Below</h4>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                value="working"
                checked={this.state.selectedOption === 'working'}
                onChange={this.handleOptionChange}
                id="workingRadio"
              />
              <label className="form-check-label" htmlFor="workingRadio">
                Working
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                value="studying"
                checked={this.state.selectedOption === 'studying'}
                onChange={this.handleOptionChange}
                id="studyingRadio"
              />
              <label className="form-check-label" htmlFor="studyingRadio">
                Studying
              </label>
            </div>

            {this.state.selectedOption === 'working' && (
              <div className="mb-3">
                <h5>Provide Job Details</h5>
                <label className="form-label">Company Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="employer"
                  value={this.state.employer}
                  onChange={this.handleInputChange}
                />
                <label className="form-label">Designation</label>
                <input
                  type="text"
                  className="form-control"
                  id="designation"
                  value={this.state.designation}
                  onChange={this.handleInputChange}
                />
              </div>
            )}

            {this.state.selectedOption === 'studying' && (
              <div className="mb-3">
                <h5>Provide Course Details</h5>
                <label className="form-label">College Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="college"
                  value={this.state.college}
                  onChange={this.handleInputChange}
                />
                <label className="form-label">Course</label>
                <input
                  type="text"
                  className="form-control"
                  id="course"
                  value={this.state.course}
                  onChange={this.handleInputChange}
                />
              </div>
            )}
          </div>

          <button className="btn btn-primary m-2" onClick={this.handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default FormWithConditionalFields;


// import React, { Component } from 'react';

// class FormWithConditionalFields extends Component {
//   state = {
//     isWorkingChecked: false,
//     isStudyingChecked: false,
//     employer: '',
//     designation: '',
//     college: '',
//     course: '',
//   };

//   handleWork = (event) => {
//     this.setState({ isWorkingChecked: event.target.checked });
//   };

//   handleStudy = (event) => {
//     this.setState({ isStudyingChecked: event.target.checked });
//   };

//   handleEmployerChange = (event) => {
//     this.setState({ employer: event.target.value });
//   };

//   handleDesignationChange = (event) => {
//     this.setState({ designation: event.target.value });
//   };

//   handleCollegeChange = (event) => {
//     this.setState({ college: event.target.value });
//   };

//   handleCourseChange = (event) => {
//     this.setState({ course: event.target.value });
//   };
//   handleSubmit = () => {
//     const details = {
//       employer: this.state.employer,
//       designation: this.state.designation,
//       college: this.state.college,
//       course: this.state.course,
//     };
  
//     let alertMessage = `
//   Employer: ${details.employer}
//   Designation: ${details.designation}
//   College: ${details.college}
//   Course: ${details.course}`;
  
//     alert(alertMessage);
//   };
  

//   render() {
//     return (
//       <div className="container">
//         <div className="col-6 border">
//           <div className="m-2">
//             <h4>Provide Details Below</h4>
//             <div className="form-check">
//               <input
//                 className="form-check-input"
//                 type="checkbox"
//                 checked={this.state.isWorkingChecked}
//                 onChange={this.handleWork}
//                 id="workingCheckbox"
//               />
//               <label className="form-check-label" htmlFor="workingCheckbox">
//                 Working
//               </label>
//             </div>
//             <div className="form-check">
//               <input
//                 className="form-check-input"
//                 type="checkbox"
//                 checked={this.state.isStudyingChecked}
//                 onChange={this.handleStudy}
//                 id="studyingCheckbox"
//               />
//               <label className="form-check-label" htmlFor="studyingCheckbox">
//                 Studying
//               </label>
//             </div>

//             {this.state.isWorkingChecked && (
//               <div className="mb-3">
//                 <h5>Provide Job Details</h5>
//                 <label className="form-label">Company Name</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="employer"
//                   value={this.state.employer}
//                   onChange={this.handleEmployerChange}
//                 />
//                 <label className="form-label">Designation</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="designation"
//                   value={this.state.designation}
//                   onChange={this.handleDesignationChange}
//                 />
//               </div>
//             )}

//             {this.state.isStudyingChecked && (
//               <div className="mb-3">
//                 <h5>Provide Course Details</h5>
//                 <label className="form-label">College Name</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="college"
//                   value={this.state.college}
//                   onChange={this.handleCollegeChange}
//                 />
//                 <label className="form-label">Course</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="course"
//                   value={this.state.course}
//                   onChange={this.handleCourseChange}
//                 />
//               </div>
//             )}
//           </div>

//           <button className="btn btn-primary m-2" onClick={this.handleSubmit}>
//             Submit
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default FormWithConditionalFields;


// import React, { Component } from 'react';

// class FormWithConditionalFields extends Component {
//   state = {
//     isWorkingChecked: false,
//     isStudyingChecked: false,
//   };

//   handleWork = (event) => {
//     this.setState({ isWorkingChecked: event.target.checked });
//   };

//   handleStudy = (event) => {
//     this.setState({ isStudyingChecked: event.target.checked });
//   };

//   render() {
//     return (
//       <div className="container">
//       <div className='col-6 border'>
//         <div className="m-2">
//           <h4>Provide Details Below</h4>
//           <div className="form-check">
//             <input
//               className="form-check-input"
//               type="checkbox"
//               checked={this.state.isWorkingChecked}
//               onChange={this.handleWork}
//               id="workingCheckbox"
//             />
//             <label className="form-check-label" htmlFor="workingCheckbox">
//               Working
//             </label>
//           </div>
//           <div className="form-check">
//             <input
//               className="form-check-input"
//               type="checkbox"
//               checked={this.state.isStudyingChecked}
//               onChange={this.handleStudy}
//               id="studyingCheckbox"
//             />
//             <label className="form-check-label" htmlFor="studyingCheckbox">
//               Studying
//             </label>
//           </div>

//           {this.state.isWorkingChecked && (
//             <div className="mb-3">
//               <h5>Provide Job Details</h5>
//               <label className="form-label">
//                 Company Name
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="employer"
//               />
//               <label className="form-label">
//                 Designation
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="designation"
//               />
//             </div>
//           )}

//           {this.state.isStudyingChecked && (
//             <div className="mb-3">
//               <h5>Provide Course Details</h5>
//               <label className="form-label">
//                 College Name
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="college"
//               />
//               <label  className="form-label">
//                 Course
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="course"
//               />
//             </div>
//           )}
//         </div>
//       </div>
//       </div>
//     );
//   }
// }

// export default FormWithConditionalFields;
