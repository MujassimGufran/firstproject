import React, { Component } from "react";
import CustomerForm from "./CustomerForm";

class HomeScreen extends Component {
  state = {
    customers: [],
    currentView: "welcome",
    editIndex: -1,
  };

  handleViewChange = (view) => {
    this.setState({ currentView: view });

  };
  handleEditSubmit = (index) => {
    let s1 = { ...this.state };
    s1.currentView = "new";
    s1.editIndex = index;
    this.setState(s1);
  };


  handleCustomer = (customer) => {
    let s1 = { ...this.state };
    if (s1.editIndex >= 0) {
      s1.customers[s1.editIndex] = customer;
    } else {
      s1.customers.push(customer);
    }
    s1.currentView = "list";
    s1.editIndex = -1;
    this.setState(s1);
  };

  render() {
    let customer = { name: "", age: "", email: "" };
    let { customers, currentView, editIndex } = this.state;

    return (
      <div>
        <h1>Customer App</h1>
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
          List of Customers
        </button>
        {currentView === "welcome" ? (
          <p>Welcome to the Customer System</p>
        ) : currentView === "list" ? (
          <div>
            {customers.length === 0 ? (
              <div>
                <p>There are zero customers</p>
              </div>
            ) : (
              <div>
                <h2>List of Customers</h2>
                <div className="col-6 ">
                  <div className="row bg-dark text-light">
                    <div className="col-3">Name</div>
                    <div className="col-3">Age</div>
                    <div className="col-4">Email</div>
                    <div className="col-2"></div>
                  </div>
                </div>
                {customers.map((customer, index) => (
                  <div className="col-6" key={customer.email}>
                    <div className="row">
                      <div className="col-3 border">{customer.name}</div>
                      <div className="col-3 border">{customer.age}</div>
                      <div className="col-4 border">{customer.email}</div>
                      <div className="col-2 border">
                        <button
                          className="btn btn-info"
                          onClick={() => this.handleEditSubmit(index)}
                        >
                          Edit
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <CustomerForm
            customer={editIndex >= 0 ? customers[editIndex] : customer}
            onSubmit={this.handleCustomer}
            edit={editIndex >= 0}
          />
        )}
      </div>
    );
  }
}

export default HomeScreen;
