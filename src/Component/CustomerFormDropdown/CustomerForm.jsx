import React, { Component } from "react";

class CustomerForm extends Component {
  handleChange = (e) => {
    let s1 = { ...this.props.optionsSel };
    let { currentTarget: input } = e;

    input.name === "payment"
      ? (s1.payment = this.updateCBs(input.checked, input.value, s1.payment))
      : input.name === "slot"
      ? (s1.slot = this.updateCBs(input.checked, input.value, s1.slot))
      : input.name === "delivery"
      ? (s1.delivery = input.value)
      : (s1[input.name] = input.value);

    this.props.onChangeOption(s1);
  };

  updateCBs = (checked, value, arr) => {
    if (checked) arr.push(value);
    else {
      let index = arr.findIndex((ele) => ele === value);
      if (index >= 0) arr.splice(index, 1);
    }
    return arr;
  };

  showCheckboxes = (label, arr, name, selArr) => {
    return (
      <React.Fragment>
        <label className="form-check-label font-weight-bold">{label}</label>
        {arr.map((opt, index) => (
          <div className="form-check" key={index}>
            <input
              className="form-check-input"
              value={opt}
              type="checkbox"
              name={name}
              checked={selArr.findIndex((sel) => sel === opt) >= 0}
              onChange={this.handleChange}
            />
            <label className="form-check-label">{opt}</label>
          </div>
        ))}
      </React.Fragment>
    );
  };

  showRadio = (label, arr, name, selArr) => {
    return (
      <div>
        <label className="form-check-label font-weight-bold">{label}</label>
        <div className="d-flex">
          {arr.map((opt, index) => (
            <div className="form-check mr-3" key={index}>
              <input
                className="form-check-input"
                value={opt}
                type="radio"
                name={name}
                checked={selArr === opt}
                onChange={this.handleChange}
              />
              <label className="form-check-label">{opt}</label>
            </div>
          ))}
        </div>
      </div>
    );
  };

  valueChange = (e) => {
    const { name, value } = e.target;
    let updatedOptionsSel = { ...this.props.optionsSel, [name]: value };
    this.props.onChangeOption(updatedOptionsSel);
  };
  handleSubmit = () => {
    const newCustomer = {
      name: this.props.optionsSel.name,
      gender: this.props.optionsSel.gender,
      delivery: this.props.optionsSel.delivery,
      payment: this.props.optionsSel.payment,
      slot: this.props.optionsSel.slot,
    };
    this.props.onSubmit(newCustomer);
  };
  componentDidUpdate(prevProps) {
    if (this.props.optionsSel !== prevProps.optionsSel) {
      const { name, gender, delivery, payment, slot } = this.props.optionsSel;
      this.setState({
        name,
        gender,
        delivery,
        payment,
        slot,
      });
    }
  }


  render() {
    const { optionsArray, optionsSel } = this.props;
    return (
      <div className="container">
        <div className="form-group">
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            value={this.props.optionsSel.name}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.props.optionsSel.gender === "male"} 
              onChange={this.handleChange}
            />
            Male
          </label>{" "}
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.props.optionsSel.gender === "female"} 
              onChange={this.handleChange}
            />
            Female
          </label>
        </div>
        {this.showRadio(
          "Choose the Delivery Option",
          optionsArray.delivery,
          "delivery",
          optionsSel.delivery
        )}

        {this.showCheckboxes(
          "Select the Payment Option",
          optionsArray.payment,
          "payment",
          optionsSel.payment
        )}
        <div className="form-group">
          <select
            className="form-control"
            name="slot"
            value={optionsSel.slot}
            onChange={this.valueChange}
          >
            <option value="">Select Slot</option>
            {optionsArray.slot.map((opt, index) => (
              <option
                key={index}
                value={opt}
                selected={opt === optionsSel.slot}
              >
                {opt}
              </option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary mt-2" onClick={this.handleSubmit}>
        Submit
        </button>
      </div>
    );
  }
}

export default CustomerForm;


// import React, { Component } from "react";

// class CustomerForm extends Component {
//   handleChange = (e) => {
//     let s1 = { ...this.props.optionsSel };
//     let { currentTarget: input } = e;

//     input.name === "payment"
//       ? (s1.payment = this.updateCBs(input.checked, input.value, s1.payment))
//       : input.name === "slot"
//       ? (s1.slot = this.updateCBs(input.checked, input.value, s1.slot))
//       : input.name === "delivery"
//       ? (s1.delivery = input.value)
//       : (s1[input.name] = input.value);

//     this.props.onChangeOption(s1);
//   };

//   updateCBs = (checked, value, arr) => {
//     if (checked) arr.push(value);
//     else {
//       let index = arr.findIndex((ele) => ele === value);
//       if (index >= 0) arr.splice(index, 1);
//     }
//     return arr;
//   };

//   showCheckboxes = (label, arr, name, selArr) => {
//     return (
//       <React.Fragment>
//         <label className="form-check-label font-weight-bold">{label}</label>
//         {arr.map((opt, index) => (
//           <div className="form-check" key={index}>
//             <input
//               className="form-check-input"
//               value={opt}
//               type="checkbox"
//               name={name}
//               checked={selArr.findIndex((sel) => sel === opt) >= 0}
//               onChange={this.handleChange}
//             />
//             <label className="form-check-label">{opt}</label>
//           </div>
//         ))}
//       </React.Fragment>
//     );
//   };

//   showRadio = (label, arr, name, selArr) => {
//     return (
//       <div>
//         <label className="form-check-label font-weight-bold">{label}</label>
//         <div className="d-flex">
//           {arr.map((opt, index) => (
//             <div className="form-check mr-3" key={index}>
//               <input
//                 className="form-check-input"
//                 value={opt}
//                 type="radio"
//                 name={name}
//                 checked={selArr === opt}
//                 onChange={this.handleChange}
//               />
//               <label className="form-check-label">{opt}</label>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   valueChange = (e) => {
//     const { name, value } = e.target;
//     let updatedOptionsSel = { ...this.props.optionsSel, [name]: value };
//     this.props.onChangeOption(updatedOptionsSel);
//   };
//   handleSubmit = () => {
//     const newCustomer = {
//       name: this.props.optionsSel.name,
//       gender: this.props.optionsSel.gender,
//       delivery: this.props.optionsSel.delivery,
//       payment: this.props.optionsSel.payment,
//       slot: this.props.optionsSel.slot,
//     };
//     this.props.onSubmit(newCustomer);
//   };

//   render() {
//     const { optionsArray, optionsSel } = this.props;
//     return (
//       <div className="container">
//         <div className="form-group">
//           <label>Name</label>
//           <input
//             className="form-control"
//             type="text"
//             name="name"
//             value={this.props.optionsSel.name}
//             onChange={this.handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label>
//             <input
//               type="radio"
//               name="gender"
//               value="male"
//               checked={this.props.optionsSel.gender === "male"} 
//               onChange={this.handleChange}
//             />
//             Male
//           </label>{" "}
//           <label>
//             <input
//               type="radio"
//               name="gender"
//               value="female"
//               checked={this.props.optionsSel.gender === "female"} 
//               onChange={this.handleChange}
//             />
//             Female
//           </label>
//         </div>
//         {this.showRadio(
//           "Choose the Delivery Option",
//           optionsArray.delivery,
//           "delivery",
//           optionsSel.delivery
//         )}

//         {this.showCheckboxes(
//           "Select the Payment Option",
//           optionsArray.payment,
//           "payment",
//           optionsSel.payment
//         )}
//         <div className="form-group">
//           <select
//             className="form-control"
//             name="slot"
//             value={optionsSel.slot}
//             onChange={this.valueChange}
//           >
//             <option value="">Select Slot</option>
//             {optionsArray.slot.map((opt, index) => (
//               <option
//                 key={index}
//                 value={opt}
//                 selected={opt === optionsSel.slot}
//               >
//                 {opt}
//               </option>
//             ))}
//           </select>
//         </div>
//         <button className="btn btn-primary mt-2" onClick={this.handleSubmit}>
//           Submit
//         </button>
//       </div>
//     );
//   }
// }

// export default CustomerForm;
