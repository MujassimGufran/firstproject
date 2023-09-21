import React, { Component } from "react";
import CourseForm from "./CourseForm";
import StudentForm from "./StudentForm"; 


class CourseComponent extends Component {
  state = {
    courses: [
      { courseName: "JavaScript", faculty: "Bill", lectures: 20, student: [] },
      { courseName: "React", faculty: "Steve", lectures: 28, student: [] },
    ],
    view: 0,
    editCourseIndex: -1,
    viewCourseIndex: -1,
  };

  handlecourses = (course) => {
    let s1 = { ...this.state };
    s1.editCourseIndex >= 0
      ? (s1.courses[s1.editCourseIndex] = course)
      : s1.courses.push(course);
    s1.view = 0;
    s1.editCourseIndex = -1;
    this.setState(s1);
  };
  handleStudent = (student) => {
    let s1 = { ...this.state };
   s1.courses[s1.viewCourseIndex].student.push(student);
   s1.view = 2;
    this.setState(s1);
  };

  showForm = () => {
    let s1 = { ...this.state };
    s1.view = 11;
    this.setState(s1);
  };

  editCourse = (index) => {
    let s1 = { ...this.state };
    s1.view = 11;
    s1.editCourseIndex = index;
    this.setState(s1);
  };

  deleteCourse = (index) => {
    let s1 = { ...this.state };
    s1.courses.splice(index, 1);
    this.setState(s1);
  };

  viewCourseDetails = (index) => {
    let s1 = { ...this.state };
    s1.view = 2;
    s1.viewCourseIndex = index;
    this.setState(s1);
  };

  showCourseList= ()=>{
    let s1 = { ...this.state };
    s1.view = 0;
    s1.viewCourseIndex = -1;
    this.setState(s1);
  }
  showStudentForm =()=> {
    let s1 = { ...this.state };
    s1.view = 3;
    this.setState(s1);
  }

  showCourseDetails = () => {
    const { courses, viewCourseIndex, view } = this.state;
    const { courseName, faculty, lectures, student } = courses[viewCourseIndex];
    

    return ( 
      <div className="container">
        <h5>Course Name : {courseName}</h5>
        <h5>Faculty : {faculty}</h5>
        <h5>Number of Lectures : {lectures}</h5>
        <h5>Number of Student : {student.length}</h5>
        {student.length === 0 ? (
          ""
        ) : (
          <React.Fragment>
            {student.map((st) => (
              <div className="row">
                <div className="col-6 border">{st.id}</div>
                <div className="col-6 border">{st.name}</div>
              </div>
            ))}
          </React.Fragment>
        )}
        {view === 2 ? (

     
        <button
          className="btn btn-primary"
          onClick={() => this.showStudentForm()}
        >
          Enroll More Students
        </button> 
        ) : (
          <StudentForm student={{}} onSubmit={this.handleStudent} />
        )}
        <br/>
         <button
          className="btn btn-primary mt-2"
          onClick={() => this.showCourseList()}
        >
          Show List of Course
        </button>
      </div>
    );
  };

  render() {
    let course = { courseName: "", faculty: "", lectures: "", student: [] };
    let { courses, view, editCourseIndex } = this.state;
    return view === 0 ? (
      <div className="container">
        {courses.map((course, index) => (
          <div className="row" key={index}>
            <div className="col-3 border">{course.courseName}</div>
            <div className="col-2 border">{course.faculty}</div>
            <div className="col-2 border">{course.lectures}</div>
            <div
              className="col-2 border"
              onClick={() => this.viewCourseDetails(index)}
            >
              {course.student.length}
            </div>
            <div className="col-3 border">
              <button
                className="btn btn-warning btn-sm mr-2"
                onClick={() => this.editCourse(index)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger btn-sm ml-2"
                onClick={() => this.deleteCourse(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        <button className="btn btn-primary" onClick={() => this.showForm()}>
          Add New Course
        </button>
      </div>
    ) : view == 11 ? (
      <CourseForm
        course={editCourseIndex >= 0 ? courses[editCourseIndex] : course}
        onSubmit={this.handlecourses}
        edit={editCourseIndex >= 0}
      />
    ) : view === 2 ? (
      this.showCourseDetails()
    ) : (
      this.showCourseDetails()
    );
  }
}

export default CourseComponent;

// import React, { Component } from "react";
// import CourseForm from "./CourseForm";
// class CourseComponent extends Component {
//   state = {
//     courses: [
//       { courseName: "JavaScript", faculty: "Bill", lectures: 20 },
//       { courseName: "React", faculty: "Steve", lectures: 28 },
//     ],
//     view: 0,
//     editCourseIndex: -1,
//   };

//   handlecourses = (course) => {
//     let s1 = { ...this.state };
//     s1.editCourseIndex >= 0
//       ? (s1.courses[s1.editCourseIndex] = course)
//       : s1.courses.push(course);
//     s1.view = 0;
//     s1.editCourseIndex = -1;
//     this.setState(s1);
//   };

//   showForm = () => {
//     let s1 = { ...this.state };
//     s1.view = 1;
//     this.setState(s1);
//   };

//   editCourse = (index) => {
//     let s1 = { ...this.state };
//     s1.view = 1;
//     s1.editCourseIndex = index;
//     this.setState(s1);
//   };

//   deleteCourse = (index) => {
//     let s1 = { ...this.state };
//     s1.courses.splice(index, 1);
//     this.setState(s1);
//   };

//   render() {
//     let course = { courseName: "", faculty: "", lectures: "" };
//     let { courses, view, editCourseIndex } = this.state;
//     return view === 0 ? (
//       <div className="container">
//         {courses.map((course, index) => (
//           <div className="row" key={index}>
//             <div className="col-3 border">{course.courseName}</div>
//             <div className="col-3 border">{course.faculty}</div>
//             <div className="col-2 border">{course.lectures}</div>
//             <div className="col-4 border">
//               <button
//                 className="btn btn-warning btn-sm mr-2"
//                 onClick={() => this.editCourse(index)}
//               >
//                 Edit
//               </button>
//               <button
//                 className="btn btn-danger btn-sm ml-2"
//                 onClick={() => this.deleteCourse(index)}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//         <button className="btn btn-primary" onClick={() => this.showForm()}>
//           Add New Course
//         </button>
//       </div>
//     ) : (
//       <CourseForm
//         course={editCourseIndex >= 0 ? courses[editCourseIndex] : course}
//         onSubmit={this.handlecourses}
//         edit={editCourseIndex >= 0}
//       />
//     );
//   }
// }

// export default CourseComponent;
