import React, { Component } from "react";
import CustomerForm from "../CustomerFormDropdown/CustomerForm";

class MainCustomerForm extends Component {
  state = {
    currentView: "welcome",
    optionsArray: {
      delivery: ["Home", "Office", "Pickup"],
      payment: ["Credit Card", "Debit Card", "Net Banking"],
      slot: ["Before 10 AM", "2PM - 6PM", "6PM - 10PM"],
    },
    optionsSel: {
      delivery: [],
      slot: [],
      payment: [],
      gender: "",
    },
    customers: [],
    editIndex: -1,
  };

  handleChangeOption = (optionsSel) => {
    this.setState({ optionsSel });
  };

  handleViewChange = (view) => {
    this.setState({ currentView: view });
  };

  handleAddCustomer = (customer) => {
    if (this.state.editIndex !== -1) {
      const updatedCustomers = [...this.state.customers];
      updatedCustomers[this.state.editIndex] = customer;

      this.setState({
        customers: updatedCustomers,
        currentView: "list",
        editIndex: -1,
        optionsSel: {
          delivery: [],
          slot: [],
          payment: [],
          gender: "",
        },
      });
    } else {
      this.setState((prevState) => ({
        customers: [...prevState.customers, customer],
        currentView: "list",
        optionsSel: {
          delivery: [],
          slot: [],
          payment: [],
          gender: "",
        },
      }));
    }
  };

  handleEdit = (index) => {
    const { customers } = this.state;
    const customerToEdit = customers[index];

    this.setState({
      optionsSel: { ...customerToEdit },
      currentView: "new",
      editIndex: index,
    });
  };

 
  render() {
    const { currentView, optionsArray, optionsSel, customers } = this.state;

    return (
      <div className="container">
        <button
          className="btn btn-primary m-2"
          onClick={() => this.handleViewChange("new")}
        >
          New Customer
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={() => this.handleViewChange("list")}
        >
          List of Customer
        </button>

        <div className="welcome-message">
          {currentView === "welcome" && <p>Welcome to the Customer System</p>}
        </div>

        {currentView === "list" && customers.length === 0 ? (
          <p>There are Zero Customer</p>
        ) : null}

        {currentView === "new" ? (
          <div className="row">
            <CustomerForm
              optionsSel={optionsSel}
              optionsArray={optionsArray}
              onChangeOption={this.handleChangeOption}
              onSubmit={this.handleAddCustomer}
              gender={this.state.gender}
            />
          </div>
        ) : null}

        {currentView === "list" && customers.length > 0 ? (
          <div className="row">
            <div className="col-8">
              <div className="row text-light">
                <div className="col-2 bg-dark">Name</div>
                <div className="col-2 bg-dark">Gender</div>
                <div className="col-2 bg-dark">Delivery</div>
                <div className="col-2 bg-dark">Payment</div>
                <div className="col-2 bg-dark">Slot</div>
                <div className="col-2 bg-dark"></div>
              </div>

              {customers.map((customer, index) => (
                <div className="row" key={index}>
                  <div className="col-2 border">{customer.name}</div>
                  <div className="col-2 border">{customer.gender}</div>
                  <div className="col-2 border">{customer.delivery}</div>
                  <div className="col-2 border">{customer.payment}</div>
                  <div className="col-2 border">{customer.slot}</div>
                  <div className="col-2 border"><button className="btn btn-info" onClick={()=>this.handleEdit(index)}>Edit</button></div>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default MainCustomerForm;



// import React, { Component } from "react";
// import CustomerForm from "../CustomerFormDropdown/CustomerForm";

// class MainCustomerForm extends Component {
//   state = {
//     currentView: "welcome",
//     optionsArray: {
//       delivery: ["Home", "Office", "Pickup"],
//       payment: ["Credit Card", "Debit Card", "Net Banking"],
//       slot: ["Before 10 AM", "2PM - 6PM", "6PM - 10PM"],
//     },
//     optionsSel: {
//       delivery: [],
//       slot: [],
//       payment: [],
//       gender: "",
//     },
//     customers: [],
//   };

//   handleChangeOption = (optionsSel) => {
//     this.setState({ optionsSel });
//   };

//   handleViewChange = (view) => {
//     this.setState({ currentView: view });
//   };


//   handleAddCustomer = (customer) => {
//     this.setState((prevState) => ({
//       customers: [...prevState.customers, customer],
//       currentView: "list",
//       // Reset form after submission
//       optionsSel: {
//         delivery: [],
//         slot: [],
//         payment: [],
//         gender: "",
//       },
//     }));
//   };

//   render() {
//     const { currentView, optionsArray, optionsSel, customers } = this.state;

//     return (
//       <div className="container">
//         <button
//           className="btn btn-primary m-2"
//           onClick={() => this.handleViewChange("new")}
//         >
//           New Customer
//         </button>
//         <button
//           className="btn btn-primary m-2"
//           onClick={() => this.handleViewChange("list")}
//         >
//           List of Customer
//         </button>

//         <div className="welcome-message">
//           {currentView === "welcome" && <p>Welcome to the Customer System</p>}
//         </div>

//         {currentView === "list" && customers.length === 0 ? (
//           <p>There are Zero Customer</p>
//         ) : null}

//         {currentView === "new" ? (
//           <div className="row">
//             <CustomerForm
//               optionsSel={optionsSel}
//               optionsArray={optionsArray}
//               onChangeOption={this.handleChangeOption}
//               onSubmit={this.handleAddCustomer}
//               gender={this.state.gender}
//             />
//           </div>
//         ) : null}

//         {currentView === "list" && customers.length > 0 ? (
//           <div className="row">
//             <div className="col-8">
//               <div className="row text-light">
//                 <div className="col-2 bg-dark">Name</div>
//                 <div className="col-2 bg-dark">Gender</div>
//                 <div className="col-2 bg-dark">Delivery</div>
//                 <div className="col-3 bg-dark">Payment</div>
//                 <div className="col-2 bg-dark">Slot</div>
//               </div>

//               {customers.map((customer, index) => (
//                 <div className="row" key={index}>
//                   <div className="col-2 border">{customer.name}</div>
//                   <div className="col-2 border">{customer.gender}</div>
//                   <div className="col-2 border">{customer.delivery}</div>
//                   <div className="col-3 border">{customer.payment}</div>
//                   <div className="col-2 border">{customer.slot}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ) : null}
//       </div>
//     );
//   }
// }

// export default MainCustomerForm;

