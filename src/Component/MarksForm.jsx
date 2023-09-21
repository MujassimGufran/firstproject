import React, { Component } from "react";

class MarksForm extends Component {
  state = {
    maths: "",
    english: "",
    computer: "",
    science: "",
  };

  componentDidMount() {
    const { student, edit } = this.props;

    if (edit && student) {
      this.setState({
        maths: student.maths || "",
        english: student.english || "",
        computer: student.computer || "",
        science: student.science || "",
      });
    }
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { maths, english, computer, science } = this.state;
    const totalMarks =
      parseFloat(maths) +
      parseFloat(english) +
      parseFloat(computer) +
      parseFloat(science);
    this.props.onSubmit(totalMarks);
  };

  render() {
    const { maths, english, computer, science } = this.state;
    const { edit, student } = this.props;

    return (
      <div>
        <h3>
          {this.props.edit ? "Edit" : "Enter"} Marks for{" "}
          {student ? student.name : ""}
        </h3>
        <form>
          <div className="form-group">
            <label>Maths</label>
            <input
              className="form-control"
              type="number"
              name="maths"
              value={maths}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>English</label>
            <input
              className="form-control"
              type="number"
              name="english"
              value={english}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Computer</label>
            <input
              className="form-control"
              type="number"
              name="computer"
              value={computer}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Science</label>
            <input
              className="form-control"
              type="number"
              name="science"
              value={science}
              onChange={this.handleInputChange}
            />
          </div>
          <button className="btn btn-primary mt-2" onClick={this.handleSubmit}>
            Submit{" "}
          </button>
        </form>
      </div>
    );
  }
}

export default MarksForm;

// import React, { Component } from "react";

// class MarksForm extends Component {
//   state = {
//     maths: this.props.student ? this.props.student.maths : "",
//     english: this.props.student ? this.props.student.english : "",
//     computer: this.props.student ? this.props.student.computer : "",
//     science: this.props.student ? this.props.student.science : "",
//     isEditMode: false,
//   };

//   handleInputChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const { maths, english, computer, science } = this.state;
//     const student = {maths,english,computer,science}
//     if(this.props.onEdit){
//       this.props.onEdit((this,this.props.editindex, student))
//     } else {
//       this.props.onSubmit(student);
//     }

//     const totalMarks = parseFloat(maths) + parseFloat(english) + parseFloat(computer) + parseFloat(science);
//     this.props.onSubmit(totalMarks);
//   };

//   render() {
//     const { maths, english,computer, science, isEditMode } = this.state;
//     const { student } = this.props;

//     return (
//       <div>
//         <h2>{isEditMode ? "Edit" : "Enter"} Marks for {student.name}</h2>
//         <form>
//           <div className="form-group">
//             <label>Maths</label>
//             <input
//               className="form-control"
//               type="number"
//               name="maths"
//               value={maths}
//               onChange={this.handleInputChange}
//             />
//           </div>
//           <div className="form-group">
//             <label>English</label>
//             <input
//               className="form-control"
//               type="number"
//               name="english"
//               value={english}
//               onChange={this.handleInputChange}
//             />
//           </div>
//           <div className="form-group">
//             <label>Computer</label>
//             <input
//               className="form-control"
//               type="number"
//               name="computer"
//               value={computer}
//               onChange={this.handleInputChange}
//             />
//           </div>
//           <div className="form-group">
//             <label>Science</label>
//             <input
//               className="form-control"
//               type="number"
//               name="science"
//               value={science}
//               onChange={this.handleInputChange}
//             />
//           </div>
//           <button className="btn btn-primary mt-2" onClick={this.handleSubmit}>
//             Submit
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// export default MarksForm;
