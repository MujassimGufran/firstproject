import React, { Component } from "react";
import StudentsMainForm from "./StudentsMainForm";
import MarksForm from "./MarksForm";

class StudentsMainComp extends Component {
  state = {
    students: [],
    currentView: "welcome",
    currentStudent: null,
    editIndex: -1,
    view: 0,
  };

  handleViewChange = (view) => {
    this.setState({ currentView: view });
  };

  addStudent = (student) => {
    this.setState((prevState) => ({
      students: [...prevState.students, student],
      currentView: "list",
    }));
  };

  editMarks = (student, index) => {
    this.setState({
      currentView: "marks",
      currentStudent: student,
      editIndex: index,
    });
  };
  // editMarks = (index) => {
  //   let s1 = { ...this.state };
  //   s1.view = 2;
  //   s1.editIndex = index;
  //   this.setState(s1);
  // };

  updateMarks = (marks) => {
    const updatedStudents = this.state.students.map((student) => {
      if (student.id === this.state.currentStudent.id) {
        return { ...student, marks: marks };
      }
      return student;
    });

    this.setState({
      students: updatedStudents,
      currentView: "list",
      currentStudent: null,
    });
  };

  render() {
    const { students, currentView, currentStudent, editIndex } = this.state;

    return (
      <div>
        <h1>Student Management System</h1>
        <button
          className="btn btn-primary m-2"
          onClick={() => this.handleViewChange("new")}
        >
          New Student
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={() => this.handleViewChange("list")}
        >
          List of Students
        </button>
        {currentView === "welcome" ? (
          <p>Welcome to the Student Management System</p>
        ) : currentView === "list" ? (
          <div>
            {students.length === 0 ? (
              <p>There are 0 students</p>
            ) : (
              <div className="">
                <div className="col-8">
                  <div className="row text-light">
                    <div className="col-2 bg-dark">Name</div>
                    <div className="col-2 bg-dark">Course</div>
                    <div className="col-2 bg-dark">Year</div>
                    <div className="col-2 bg-dark">Total Marks</div>
                    <div className="col-2 bg-dark">Actions</div>
                  </div>
                </div>

                {students.map((student, index) => (
                  <div className="col-8" key={student.id}>
                    <div className="row">
                      <div className="col-2 border">{student.name}</div>
                      <div className="col-2 border">{student.course}</div>
                      <div className="col-2 border">{student.year}</div>

                      <div className="col-2 border">
                        {student.marks ? student.marks : "No Data"}
                      </div>

                      <div className="col-2 border">
                        <button
                          className="btn btn-info m-1"
                          onClick={() => this.editMarks(student, index)}
                        >
                          {student.marks ? "Edit" : "Enter"}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : currentView === "marks" ? (
          <MarksForm
            student={editIndex >= 0 ? students[editIndex] : null}
            onSubmit={this.updateMarks}
            edit={editIndex >= 0}
          />
        ) : (
          <StudentsMainForm onSubmit={this.addStudent} />
        )}
      </div>
    );
  }
}

export default StudentsMainComp;

// import React, { Component } from "react";
// import StudentsMainForm from "./StudentsMainForm";
// import MarksForm from "./MarksForm";

// class StudentsMainComp extends Component {
//   state = {
//     students: [],
//     currentView: "welcome",
//     currentStudent: 0,
//     editIndex: -1,

//   };

//   handleViewChange = (view) => {
//     this.setState({ currentView: view });
//   };

//   addStudent = (student) => {
//     this.setState((prevState) => ({
//       students: [...prevState.students, student],
//       currentView: "list",
//     }));
//   };

//   editMarks = (index) => {
//     let s1 = {...this.state};
//     s1.view =1;
//     s1.editIndex = index;
//       this.setState(s1);
//   };

//   updateMarks = (marks) => {
//     const updatedStudents = this.state.students.map((student) => {
//       if (student.id === this.state.currentStudent.id) {
//         return { ...student, marks: marks };
//       }
//       return student;
//     });

//     this.setState({
//       students: updatedStudents,
//       currentView: "list",
//       currentStudent: null,
//     });
//   };

//   render() {
//     const { students, currentView, currentStudent,editIndex } = this.state;

//     return (
//       <div>
//         <h1>Student Management System</h1>
//         <button
//           className="btn btn-primary m-2"
//           onClick={() => this.handleViewChange("new")}
//         >
//           New Student
//         </button>
//         <button
//           className="btn btn-primary m-2"
//           onClick={() => this.handleViewChange("list")}
//         >
//           List of Students
//         </button>
//         {currentView === "welcome" ? (
//           <p>Welcome to the Student Management System</p>
//         ) : currentView === "list" ? (
//           <div>
//             {students.length === 0 ? (
//               <p>There are 0 students</p>
//             ) : (
//               <div className="">
//                 <div className="col-8">
//                   <div className="row text-light">
//                     <div className="col-2 bg-dark">Name</div>
//                     <div className="col-2 bg-dark">Course</div>
//                     <div className="col-2 bg-dark">Year</div>
//                     <div className="col-2 bg-dark">Total Marks</div>
//                     <div className="col-2 bg-dark">Actions</div>
//                   </div>
//                 </div>

//                 {students.map((student, index) => (
//                   <div className="col-8" key={student.id}>
//                     <div className="row">
//                       <div className="col-2 border">{student.name}</div>
//                       <div className="col-2 border">{student.course}</div>
//                       <div className="col-2 border">{student.year}</div>

//                       <div className="col-2 border">
//                         {student.marks ? student.marks : "No Data"}
//                       </div>

//                       <div className="col-2 border">
//                         <button
//                           className="btn btn-info m-1"
//                           onClick={() => this.editMarks(index)}
//                         >
//                           {student.marks ? "Edit" : "Enter"}
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         ) : currentView === "marks" ? (
//           <MarksForm
//             student={editIndex >= 0 ? students[editIndex] : null}
//             onSubmit={this.updateMarks}
//             edit={editIndex >= 0}
//                        />
//          ) : (
//            <StudentsMainForm
//              onSubmit={this.addStudent}
//            />
//          )}
//        </div>
//     );
//   }
// }

// export default StudentsMainComp;

// import React, { Component } from "react";
// import StudentsMainForm from "./StudentsMainForm";
// import MarksForm from "./MarksForm";

// class StudentsMainComp extends Component {
//   state = {
//     students: [],
//     currentView: "welcome",
//     currentStudent: null,
//     editIndex: -1,

//   };

//   handleViewChange = (view) => {
//     this.setState({ currentView: view });
//   };

//   addStudent = (student) => {
//     this.setState((prevState) => ({
//       students: [...prevState.students, student],
//       currentView: "list",
//     }));
//   };

//   editMarks = (student, index) => {
//     this.setState({
//       currentView: "marks",
//       currentStudent: student,
//       editIndex: index,
//     });
//   };

//   updateMarks = (marks) => {
//     const updatedStudents = this.state.students.map((student) => {
//       if (student.id === this.state.currentStudent.id) {
//         return { ...student, marks: marks };
//       }
//       return student;
//     });

//     this.setState({
//       students: updatedStudents,
//       currentView: "list",
//       currentStudent: null,
//     });
//   };

//   render() {
//     const { students, currentView, currentStudent,editIndex } = this.state;

//     return (
//       <div>
//         <h1>Student Management System</h1>
//         <button
//           className="btn btn-primary m-2"
//           onClick={() => this.handleViewChange("new")}
//         >
//           New Student
//         </button>
//         <button
//           className="btn btn-primary m-2"
//           onClick={() => this.handleViewChange("list")}
//         >
//           List of Students
//         </button>
//         {currentView === "welcome" ? (
//           <p>Welcome to the Student Management System</p>
//         ) : currentView === "list" ? (
//           <div>
//             {students.length === 0 ? (
//               <p>There are 0 students</p>
//             ) : (
//               <div className="">
//                 <div className="col-8">
//                   <div className="row text-light">
//                     <div className="col-2 bg-dark">Name</div>
//                     <div className="col-2 bg-dark">Course</div>
//                     <div className="col-2 bg-dark">Year</div>
//                     <div className="col-2 bg-dark">Total Marks</div>
//                     <div className="col-2 bg-dark">Actions</div>
//                   </div>
//                 </div>

//                 {students.map((student, index) => (
//                   <div className="col-8" key={student.id}>
//                     <div className="row">
//                       <div className="col-2 border">{student.name}</div>
//                       <div className="col-2 border">{student.course}</div>
//                       <div className="col-2 border">{student.year}</div>

//                       <div className="col-2 border">
//                         {student.marks ? student.marks : "No Data"}
//                       </div>

//                       <div className="col-2 border">
//                         <button
//                           className="btn btn-info m-1"
//                           onClick={() => this.editMarks(student, index)}
//                         >
//                           {student.marks ? "Edit" : "Enter"}
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         ) : currentView === "marks" ? (
//           <MarksForm
//             student={editIndex >= 0 ? students[editIndex] : null}
//             onSubmit={this.updateMarks}
//             edit={editIndex >= 0}
//                        />
//          ) : (
//            <StudentsMainForm
//              onSubmit={this.addStudent}
//            />
//          )}
//        </div>
//     );
//   }
// }

// export default StudentsMainComp;
