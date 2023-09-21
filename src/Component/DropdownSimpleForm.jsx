import React, { Component } from "react";

class DropdownSimpleForm extends Component {
  state = {
    person: this.props.person,
     countries: ["United State of America", "Canada", "India", "United Kingdom"],
    countryList: [
      {
        country: "United State of America",
        cities: ["New York", "Los Angles", "seattle", "New jersay"],
      },
      {
        country: "Canada",
        cities: ["Toronto", "Montreal", "Vancouar"],
      },
      {
        country: "India",
        cities: ["New Delhi", "Noida", "Pune", "Bangaluru"],
      },
      {
        country: "United Kingdom",
        cities: ["Londan", "Menchester", "Bristol"],
      },
    ],
    designations: ["Devloper", "Senior Developer", "Team Lead", "Manager"],
    techs: ["React", "Node.js", "JavaScript", "HTML", "CSS"],
  };

  handleInputChange = (e) => {
    const { currentTarget: input } = e,
      s1 = { ...this.state };
    input.type === "checkbox"
      ? input.name === "techsknown"
        ? (s1.person.techsknown = this.updateCBs(
            input.checked,
            input.value,
            s1.person.techsknown
          ))
        : (s1.person[input.name] = input.checked)
      : (s1.person[input.name] = input.value);
    if (input.name === "country") s1.person.city = "";
    if (!s1.person.passport) s1.person.passportNumber = "";
    this.setState(s1);
  };

  updateCBs = (checked, value, arr) => {
    if (checked) arr.push(value);
    else {
      let index = arr.findIndex((ele) => ele === value);
      if (index >= 0) arr.splice(index, 1);
    }
    return arr;
  };
  ha;
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.person);
  };

  render() {
    let {
      name,
      age,
      country,
      gender,
      passport,
      licence,
      city,
      passportNumber,
      designation,
      techsknown=[],
    } = this.state.person;
    const { countries, countryList, designations, techs } = this.state;
    const cities = country
      ? countryList.find((c1) => c1.country === country).cities
      : [];
    return (
      <div className="container">
        <h5>Enter New Details</h5>
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
        <div className="form-group mt-2">
          <label>Country</label>
          <select
            className="form-control"
            name="country"
            value={country}
            onChange={this.handleInputChange}
          >
            <option disabled value="">
              Selct the Country
            </option>
            {countries.map((c1) => (
              <option>{c1}</option>
            ))}
          </select>
        </div>
        {country ? (
          <div className="form-group mt-2">
            <label>City</label>
            <select
              className="form-control"
              name="city"
              value={city}
              onChange={this.handleInputChange}
            >
              <option disabled value="">
                Selct the City
              </option>
              {cities.map((c1) => (
                <option>{c1}</option>
              ))}
            </select>
          </div>
        ) : (
          ""
        )}
        <div className="form-group mt-2 form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="Male"
            checked={gender === "Male"}
            onChange={this.handleInputChange}
          />
          <label className="form-check-label">Male</label>
        </div>
        <div className="form-group mt-2 form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="Female"
            checked={gender === "Female"}
            onChange={this.handleInputChange}
          />
          <label className="form-check-label">Female</label>
        </div>
        <div className="form-checkp mt-2">
          <input
            className="form-check-input"
            type="checkbox"
            name="passport"
            value={passport}
            checked={passport}
            onChange={this.handleInputChange}
          />
          <label className="form-check-label">Passport</label>
        </div>
        {passport ? (
          <div className="form-group">
            <label>Passport Number</label>
            <input
              type="text"
              className="form-control"
              id="passport"
              name="passportNumber"
              value={passportNumber}
              placeholder="Enter Passport Number"
              onChange={this.handleInputChange}
            />
          </div>
        ) : (
          ""
        )}
        <div className="form-checkp mt-2">
          <input
            className="form-check-input"
            type="checkbox"
            name="licence"
            value={licence}
            checked={licence}
            onChange={this.handleInputChange}
          />

          <label className="form-check-label">Licence</label>
        </div>

        <label className="form-check-label">
          <strong>Choose the Designation</strong>
        </label>

        {designations.map((d1) => (
          <div className="form-group mt-2 form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="designation"
              value={d1}
              checked={designation === d1}
              onChange={this.handleInputChange}
            />
            <label className="form-check-label">{d1}</label>
          </div>
        ))}
        <label className="form-check-label">
          <strong>Choose the techsknown</strong>
        </label>
        {techs.map((t1) => (
          <div className="form-checkp mt-2">
            <input
              className="form-check-input"
              type="checkbox"
              name="techsknown"
              value={t1}
              checked={techsknown.findIndex((tech) => tech === t1) >= 0}
              onChange={this.handleInputChange}
            />
            <label className="form-check-label">{t1}</label>
          </div>
        ))}
        <br />
        <button className="btn btn-primary mt-3" onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    );
  }
}

export default DropdownSimpleForm;
