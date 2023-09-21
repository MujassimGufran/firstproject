import React, { Component } from 'react';

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      showForm: false,
      newCourseName: '',
      editingCourseIndex: -1,
    };
  }

  handleAddCourseClick = () => {
    this.setState({ showForm: true });
  };

  handleInputChange = (event) => {
    this.setState({ newCourseName: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { newCourseName, courses, editingCourseIndex } = this.state;

    if (editingCourseIndex === -1) {
      // Add a new course
      if (newCourseName.trim() !== '') {
        this.setState({
          courses: [...courses, newCourseName],
          newCourseName: '',
          showForm: false,
        });
      }
    } else {
      // Edit an existing course
      if (newCourseName.trim() !== '') {
        const updatedCourses = [...courses];
        updatedCourses[editingCourseIndex] = newCourseName;
        this.setState({
          courses: updatedCourses,
          newCourseName: '',
          showForm: false,
          editingCourseIndex: -1, // Reset editing index
        });
      }
    }
  };

  handleEditClick = (index) => {
    this.setState({
      showForm: true,
      newCourseName: this.state.courses[index],
      editingCourseIndex: index,
    });
  };

  render() {
    const { courses, showForm, newCourseName } = this.state;

    return (
      <div>
        <button className='btn btn-primary' onClick={this.handleAddCourseClick}>Add Course</button>
        <h3>List of Courses</h3>
        {courses.length === 0 ? (
          <p>There are Zero Courses.</p>
        ) : (
          <ul>
            {courses.map((course, index) => (
              <li key={index}>
                {course}
                <button className='btn btn-warning ml-2' onClick={() => this.handleEditClick(index)}>Edit</button>
              </li>
            ))}
          </ul>
        )}
        {showForm && (
          <form onSubmit={this.handleSubmit}>
            <p>{this.state.editingCourseIndex === -1 ? 'Add a Course' : 'Edit Course'}</p>
            <input
              type="text"
              placeholder="Enter course name"
              value={newCourseName}
              onChange={this.handleInputChange}
            />
            <br />
            <button className='btn btn-primary mt-2'>{this.state.editingCourseIndex === -1 ? 'Submit' : 'Update'}</button>
          </form>
        )}
      </div>
    );
  }
}

export default InputField;


// import React, { Component } from 'react';

// class InputField extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       courses: [],
//       showForm: false,
//       newCourseName: '',
//     };
//   }

//   handleAddCourseClick = () => {
//     this.setState({ showForm: true });
//   };

//   handleInputChange = (event) => {
//     this.setState({ newCourseName: event.target.value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const { newCourseName, courses } = this.state;
//     if (newCourseName.trim() !== '') {
//       this.setState({
//         courses: [...courses, newCourseName],
//         newCourseName: '',
//         showForm: false,
//       });
//     }
//   };

//   render() {
//     const { courses, showForm, newCourseName } = this.state;

//     return (
//       <div>
//         <button className='btn btn-primary' onClick={this.handleAddCourseClick}>Add Course</button>
//         <h3>List of Courses</h3>
//         {courses.length === 0 ? (
//           <p>There are Zero Courses.</p>
//         ) : (
//           <ul>
//             {courses.map((course, index) => (
//               <li key={index}>{course}</li>
//             ))}
//           </ul>
//         )}
//         {showForm && (
//           <form onSubmit={this.handleSubmit}>
//           <p>Add a Courses</p>

//             <input
//               type="text"
//               placeholder="Enter course name"
//               value={newCourseName}
//               onChange={this.handleInputChange}
//             /> 
//             <br/>
//             <button className='btn btn-primary mt-2'>Submit</button>
//           </form>
//         )}
//       </div>
//     );
//   }
// }

// export default InputField;


// import React, { Component } from "react";

// class InputField extends Component {
//   state = {
//     course: {
//       name: "",
//       description: "",
//       duration: "",
//       faculty: "",
//     },
//   };
 
//   handleInputChange = (e) => {
//     let s1 = { ...this.state };
//     s1.course[e.currentTarget.name] = e.currentTarget.value;
//     this.setState(s1);
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form data submitted:", this.state.course);
//   };

//   render() {
//     const { name, description, duration, faculty } = this.state.course;

//     return (
//       <div className="container">
//         <h5>Course Details Form</h5>
//         <div className="form-group">
//           <label>Name</label>
//           <input
//             type="text"
//             className="form-control"
//             name="name"
//             value={name}
//             placeholder="Enter Name"
//             onChange={this.handleInputChange}
//             required
//           />
//         </div>
//         <div className="form-group mt-2">
//           <label>Description</label>
//           <input
//             type="text"
//             className="form-control"
//             name="description"
//             value={description}
//             placeholder="Enter Description"
//             onChange={this.handleInputChange}
//             required
//           />
//         </div>
//         <div className="form-group mt-2">
//           <label>Duration</label>
//           <input
//             type="number"
//             className="form-control"
//             name="duration"
//             value={duration}
//             placeholder="Enter Duration (in days)"
//             onChange={this.handleInputChange}
//             required
//           />
//         </div>
//         <div className="form-group mt-2">
//           <label>Faculty</label>
//           <input
//             type="text"
//             className="form-control"
//             name="faculty"
//             value={faculty}
//             placeholder="Enter Faculty"
//             onChange={this.handleInputChange}
//             required
//           />
//         </div>
//         <button className="btn btn-primary mt-3" onClick={this.handleSubmit}>
//           Submit
//         </button>
//       </div>
//     );
//   }
// }

// export default InputField;
