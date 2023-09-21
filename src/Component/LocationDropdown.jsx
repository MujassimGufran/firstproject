import React, { Component } from 'react';

class LocationDropdown extends Component {
  state = {
    locs: [
      { country: 'India', cities: ['New Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Pune'] },
      { country: 'USA', cities: ['Los Angeles', 'Chicago', 'New York', 'Seattle', 'Washington DC'] },
      { country: 'France', cities: ['Paris', 'Nice', 'Lyon', 'Cannes'] },
      { country: 'Japan', cities: ['Tokyo', 'Kyoto'] },
      { country: 'China', cities: ['Shanghai', 'Beijing', 'Shenzhen'] },
    ],
    selectedCountry: '',
    selectedCity: '',
  };

  handleCountryChange = (event) => {
    this.setState({
      selectedCountry: event.target.value,
      selectedCity: '', 
    });
  };

  handleCityChange = (event) => {
    this.setState({
      selectedCity: event.target.value,
    });
  };

  handleSubmit = () => {
    alert(`Selected Country: ${this.state.selectedCountry}\nSelected City: ${this.state.selectedCity}`);
  };

  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <label htmlFor="countryDropdown" className="form-label">Select a country:</label>
            <select
              id="countryDropdown"
              className="form-select"
              onChange={this.handleCountryChange}
              value={this.state.selectedCountry}
            >
              <option value="">Choose a Country</option>
              {this.state.locs.map((location, index) => (
                <option key={index} value={location.country}>
                  {location.country}
                </option>
              ))}
            </select>
          </div>
          <div className="col-12">
            <label htmlFor="cityDropdown" className="form-label">Select a city:</label>
            <select
              id="cityDropdown"
              className="form-select"
              onChange={this.handleCityChange}
              value={this.state.selectedCity}
            >
              <option value="">Choose a city</option>
              {this.state.locs
                .find((location) => location.country === this.state.selectedCountry)
                ?.cities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
            </select>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-6">
            <button onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default LocationDropdown;
