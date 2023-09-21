import React, { Component } from "react";

class CustomerForm extends Component {
  state = {
    name: this.props.customer ? this.props.customer.name : "",
    email: this.props.customer ? this.props.customer.email : "",
    age: this.props.customer ? this.props.customer.age : "",
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, age } = this.state;
    const customer = { name, email, age };
    if (this.props.onEdit) {
      this.props.onEdit(this.props.editIndex, customer);
    } else {
      this.props.onSubmit(customer);
    }
    this.setState({ name: "", email: "", age: "" });
  };

  render() {
    const { name, email, age } = this.state;

    return (
      <div className="">
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
            <label>Age</label>
            <input
              className="form-control"
              type="number"
              name="age"
              value={age}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Email ID</label>
            <input
              className="form-control"
              type="email"
              name="email"
              value={email}
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

export default CustomerForm;

// import React, { Component } from "react";

// class CustomerForm extends Component {
//   state = {
//     name: this.props.customer ? this.props.customer.name : "",
//     email: this.props.customer ? this.props.customer.email : "",
//     age: this.props.customer ? this.props.customer.age : "",
//   };

//   handleInputChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const { name, email, age } = this.state;
//     const customer = { name, email, age };
//     if (this.props.customer) {
//       this.props.edit(this.props.editIndex, customer);
//       console.log("Edit", customer);
//     } else {
//       this.props.onSubmit(customer);
//       console.log("New", customer);
//     }
//     this.setState({ name: "", email: "", age: "" });
//   };

//   render() {
//     const { name, email, age } = this.state;

//     return (
//       <div className="">
//         <h2>{this.props.edit ? "Edit Customer" : "New Customer"}</h2>
//         <form>
//           <div className="form-group">
//             <label>Name</label>
//             <input
//               className="form-control"
//               type="text"
//               name="name"
//               value={name}
//               onChange={this.handleInputChange}
//             />
//           </div>
//           <div className="form-group">
//             <label>Age</label>
//             <input
//               className="form-control"
//               type="number"
//               name="age"
//               value={age}
//               onChange={this.handleInputChange}
//             />
//           </div>
//           <div className="form-group">
//             <label>Email ID</label>
//             <input
//               className="form-control"
//               type="email"
//               name="email"
//               value={email}
//               onChange={this.handleInputChange}
//             />
//           </div>
//           <button className="btn btn-primary mt-2" onClick={this.handleSubmit}>
//            {this.props.edit ? "Update" : "Submit"}
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// export default CustomerForm;

// // import React, { Component } from "react";

// // class CustomerForm extends Component {
// //   state = {
// //     name: this.props.customer ? this.props.customer.name : "",
// //     email: this.props.customer ? this.props.customer.email : "",
// //     age: this.props.customer ? this.props.customer.age : "",
// //   };

// //   handleInputChange = (e) => {
// //     this.setState({ [e.target.name]: e.target.value });
// //   };

//   // handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   const { name, email, age } = this.state;
//   //   const customer = { name, email, age };
//   //   if (this.props.customer) {
//   //     this.props.onEdit(customer);
//       // console.log("Edit", customer);
//   //   } else {
//   //     this.props.onSubmit(customer);
//   //     console.log("New", customer);
//   //   }
//   //   this.setState({ name: "", email: "", age: "" });
//   // };

// //   render() {
// //     const { name, email, age } = this.state;
// //     const isEditForm = this.props.editIndex !== null;

// //     return (
// //       <div className="">
// //         <h2>{isEditForm ? "Edit Customer" : "New Customer"}</h2>
// //         <form>
// //           <div className="form-group">
// //             <label>Name</label>
// //             <input
// //               className="form-control"
// //               type="text"
// //               name="name"
// //               value={name}
// //               onChange={this.handleInputChange}
// //             />
// //           </div>
// //           <div className="form-group">
// //             <label>Age</label>
// //             <input
// //               className="form-control"
// //               type="number"
// //               name="age"
// //               value={age}
// //               onChange={this.handleInputChange}
// //             />
// //           </div>
// //           <div className="form-group">
// //             <label>Email ID</label>
// //             <input
// //               className="form-control"
// //               type="email"
// //               name="email"
// //               value={email}
// //               onChange={this.handleInputChange}
// //             />
// //           </div>
// //           <button className="btn btn-primary mt-2" onClick={this.handleSubmit}>
// //             Submit
// //           </button>
// //         </form>
// //       </div>
// //     );
// //   }
// // }

// // export default CustomerForm;
