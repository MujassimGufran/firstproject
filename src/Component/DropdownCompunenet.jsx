import React, { Component } from "react";
import DropdownSimpleForm from "./DropdownSimpleForm";
class DropdownCompunent extends Component {
  state = {
    persons: [
      {
        name: "Jack",
        age: 23,
        gender: "Male",
        passport: true,
        licence: "",
        country: "",
        passportNumber: "TEJ983618",
        city: "",
        designatiomn: "",
        techsknown: [],
      },
      {
        name: "Mary",
        age: 30,
        gender: "Female",
        passport: false,
        licence: "",
        country: "",
        passportNumber: "TEJ944618",
        city: "",
        designatiomn: "",
        techsknown: [],
      },
    ],
    view: 0,
    editPersonIndex: -1,
  };

  handlePersons = (person) => {
    console.log("In Handle persons", person);
    let s1 = { ...this.state };
    s1.editPersonIndex >= 0
      ? (s1.persons[s1.editPersonIndex] = person)
      : s1.persons.push(person);
    s1.view = 0;
    s1.editPersonIndex = -1;
    this.setState(s1);
  };
  showForm = (index) => {
    let s1 = { ...this.state };
    s1.view = 1;
    s1.editPersonIndex = index;
    this.setState(s1);
  };

  editPerson = (index) => {
    let s1 = { ...this.state };
    s1.view = 1;
    s1.editPersonIndex = index;
    this.setState(s1);
  };
  deletePerson = (index) => {
    const updatedPersons = [...this.state.persons];
    updatedPersons.splice(index, 1);
    this.setState({
      persons: updatedPersons,
    })
  }
  showPersons = () => (
    <React.Fragment>
      <h4>Details of persons</h4>
      {this.state.persons.map((p1, index) => (
        <div className="row ">
          <div className="col-4 border">{p1.name}</div>
          <div className="col-4 border">{p1.age}</div>
          <div className="col-4 border">
            <button
              className="btn btn-danger btn-sm "
              onClick={() => this.deletePerson(index)}
            >
              Delete
            </button>
            <button
              className="btn btn-warning btn-sm"
              onClick={() => this.editPerson(index)}
            >
              Edit
            </button>
          </div>
        </div>
      ))}
      <button className="btn btn-primary mt-2" onClick={() => this.showForm()}>
        Add New Person
      </button>
    </React.Fragment>
  );

  render() {
    const { persons, view, editPersonIndex } = this.state;
    return (
      <div className="container">
        {view === 0 ? (
          this.showPersons()
        ) : (
          <DropdownSimpleForm
            person={editPersonIndex >= 0 ? persons[editPersonIndex] : {}}
            onSubmit={this.handlePersons}
            edit={editPersonIndex >= 0}
          />
        )}
      </div>
    );
  }
}

export default DropdownCompunent;
