import React, { Component } from "react";

class LeftPanelForm extends Component {
  handleChange = (e) => {
    let s1 = { ...this.props.optionsSel };
    let { currentTarget: input } = e;
   
       input.name === "processor"
      ? (s1.processor = this.updateCBs(
          input.checked,
          input.value,
          s1.processor
        ))
      : input.name === "rating"
      ? (s1.rating = this.updateCBs(input.checked, input.value, s1.rating))
      : input.name === "hardDisk"
      ? (s1.hardDisk = this.updateCBs(input.checked, input.value, s1.hardDisk))
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
  
  valueChange = (e) => {
    const { name, value } = e.target;
    let updatedOptionsSel = { ...this.props.optionsSel, [name]: value };
    this.props.onChangeOption(updatedOptionsSel);
  };

  render() {
    const { optionsArray, optionsSel } = this.props;
    return (
      <div className="container">
        <h6>Choose Options</h6>
        <button className="btn btn-warning btn-sm" onClick={this.props.onClear}>
          Clear All
        </button>
        <br />
        <div className="form-group">
          <label className="font-weight-bold">Brand</label>
          <select
            className="form-control"
            name="brand"
            value={optionsSel.brand}
            onChange={this.valueChange}
          >
            <option value="">Select Brand</option>
            {optionsArray.brand.map((opt, index) => (
              <option
                key={index}
                value={opt}
                selected={opt === optionsSel.brand}
              >
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label className="font-weight-bold">Ram</label>
          <select
            className="form-control"
            name="ram"
            value={optionsSel.ram}
            onChange={this.valueChange}
          >
            <option value="">Select RAM</option>
            {optionsArray.ram.map((opt, index) => (
              <option
                key={index}
                value={opt}
                selected={opt === optionsSel.brand}
              >
                {opt}
              </option>
            ))}
          </select>
        </div>


        {this.showCheckboxes(
          "Processor",
          optionsArray.processor,
          "processor",
          optionsSel.processor
        )}

        {this.showCheckboxes(
          "Rating",
          optionsArray.rating,
          "rating",
          optionsSel.rating
        )}

        {this.showCheckboxes(
          "HardDisk",
          optionsArray.hardDisk,
          "hardDisk",
          optionsSel.hardDisk
        )}
      </div>
    );
  }
}

export default LeftPanelForm;

// import React, { Component } from "react";

// class LeftPanelForm extends Component {
//   handleChange = (e) => {
//     let s1 = { ...this.props.optionsSel };
//     let { currentTarget: input } = e;

//     // Check if selArr is an array
//     let selArr = Array.isArray(s1[input.name]) ? s1[input.name] : [];

//     input.name === "brand"
//       ? (s1.brand = this.updateCBs(input.checked, input.value, selArr))
//       : input.name === "ram"
//       ? (s1.ram = this.updateCBs(input.checked, input.value, selArr))
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

//   render() {
//     const { optionsArray, optionsSel } = this.props;

//     return (
//       <div className="container">
//         <h6>Choose Options</h6>
//         <button
//           className="btn btn-warning btn-sm"
//           onClick={this.props.onClear}
//         >
//           Clear All
//         </button>
//         <br />
//         <div className="form-group">
//           <label className="font-weight-bold">Brand</label>
//           <select
//             className="form-control"
//             name="brand"
//             value={optionsSel.brand}
//             onChange={this.handleChange}
//           >
//             <option value="">Select Brand</option>
//             {optionsArray.brand.map((opt, index) => (
//               <option key={index} value={opt}>
//                 {opt}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="form-group">
//           <label className="font-weight-bold">RAM</label>
//           <select
//             className="form-control"
//             name="ram"
//             value={optionsSel.ram}
//             onChange={this.handleChange}
//           >
//             <option value="">Select RAM</option>
//             {optionsArray.ram.map((opt, index) => (
//               <option key={index} value={opt}>
//                 {opt}
//               </option>
//             ))}
//           </select>
//         </div>

//         {this.showCheckboxes(
//           "Processor",
//           optionsArray.processor,
//           "processor",
//           optionsSel.processor || [] // Ensure optionsSel.processor is an array
//         )}
//         {this.showCheckboxes(
//           "Rating",
//           optionsArray.rating,
//           "rating",
//           optionsSel.rating || [] // Ensure optionsSel.rating is an array
//         )}
//       </div>
//     );
//   }
// }

// export default LeftPanelForm;

// import React, { Component } from "react";

// class LeftPanelForm extends Component {
//   handleChange = (e) => {
//     let s1 = { ...this.props.optionsSel };
//     let { currentTarget: input } = e;
//     input.name === "brand"
//       ? (s1.brand = this.updateCBs(input.checked, input.value, s1.brand))
//       : input.name === "ram"
//       ? (s1.ram = this.updateCBs(input.checked, input.value, s1.ram))
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

//    showCheckboxes = (label, arr, name, selArr) => {
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

//   render() {
//     const { optionsArray, optionsSel } = this.props;

//     return (
//       <div className="container">
//         <h6>Choose Options</h6>
//         <button className="btn btn-warning btn-sm" onClick={this.props.onClear}>
//           Clear All
//         </button>
//         <br />
//         <div className="form-group">
//           <label className="font-weight-bold">Brand</label>
//           <select
//             className="form-control"
//             name="brand"
//             value={optionsSel.brand}
//             onChange={this.handleChange}
//           >
//             <option value="">Select Brand</option>
//             {optionsArray.brand.map((opt, index) => (
//               <option key={index} value={opt}>
//                 {opt}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="form-group">
//           <label className="font-weight-bold">RAM</label>
//           <select
//             className="form-control"
//             name="ram"
//             value={optionsSel.ram}
//             onChange={this.handleChange}
//           >
//             <option value="">Select RAM</option>
//             {optionsArray.ram.map((opt, index) => (
//               <option key={index} value={opt}>
//                 {opt}
//               </option>
//             ))}
//           </select>
//         </div>

//         {this.showCheckboxes(
//           "Processor",
//           optionsArray.processor,
//           "processor",
//           optionsSel.processor
//         )}
//         {this.showCheckboxes(
//           "Rating",
//           optionsArray.rating,
//           "rating",
//           optionsSel.rating
//         )}
//       </div>
//     );
//   }
// }

// export default LeftPanelForm;

// import React, { Component } from "react";

// class LeftPanelForm extends Component {
//   handleChange = (e) => {
//     let s1 = { ...this.props.optionsSel };
//     let { currentTarget: input } = e;
//     input.name === "brand"
//       ? (s1.brand = this.updateCBs(input.checked, input.value, s1.brand))
//       : input.name === "ram"
//       ? (s1.ram = this.updateCBs(input.checked, input.value, s1.ram))
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

//   showRadios = (label, arr, name, selVal) => {
//     return (
//       <React.Fragment>
//         <label className="form-check-label font-weight-bold">{label}</label>
//         {arr.map((opt, index) => (
//           <div className="form-check" key={index}>
//             <input
//               className="form-check-input"
//               type="radio"
//               value={opt}
//               name={name}
//               checked={selVal === opt}
//               onChange={this.handleChange}
//             />
//             <label className="form-check-label">{opt}</label>
//           </div>
//         ))}
//       </React.Fragment>
//     );
//   };

//   render() {
//     const { optionsArray, optionsSel } = this.props;
//     return (
//       <div className="container">
//         <h6>Choose Options</h6>
//         <button className="btn btn-warning btn-sm" onClick={this.props.onClear}>
//           Clear All
//         </button>
//         <br />
//         {this.showCheckboxes(
//           "Brand",
//           optionsArray.brand,
//           "brand",
//           optionsSel.brand
//         )}
//         {this.showCheckboxes(
//           "RAM",
//            optionsArray.ram,
//             "ram",
//             optionsSel.ram
//             )}
//         {this.showRadios(
//           "Processor",
//           optionsArray.processor,
//           "processor",
//           optionsSel.processor
//         )}
//         {this.showRadios(
//           "Rating",
//           optionsArray.rating,
//           "rating",
//           optionsSel.rating
//         )}
//       </div>
//     );
//   }
// }

// export default LeftPanelForm;
