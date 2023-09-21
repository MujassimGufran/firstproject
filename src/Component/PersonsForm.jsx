import React, { Component } from "react";

class SimpleForm extends Component {
  state = {
    person: this.props.person,
  };

  handleInputChange = (e) => {
    let s1 = { ...this.state };
    s1.person[e.currentTarget.name] = e.currentTarget.value;
    this.setState(s1);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", this.state.person);
    this.props.onSubmit(this.state.person);
  };

  render() {
    let { name, age } = this.state.person;
    return (
      <div className="container">
        <h5>{this.props.edit ? "edit Details" : "Enter Details of Person"}</h5>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            placeholder="Enter Name"
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group mt-2">
          <label>Age</label>
          <input
            type="text"
            className="form-control"
            id="age"
            name="age"
            value={age}
            placeholder="Enter Age"
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

export default SimpleForm;
