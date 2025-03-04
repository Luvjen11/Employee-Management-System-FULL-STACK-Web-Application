import React, { useState } from "react";
import { createEmployee } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const Employee = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  // const [employee, setEmployee] = useState({
  //     firstName: '',
  //     lastName: '',
  //     email: ''
  // })
  const navigator = useNavigate();

  function saveEmployee(e) {
    // prevent the default behavior of the form
    e.preventDefault();
    // create an employee object
    const employee = { firstName, lastName, email };
    console.log(employee);
    // call the createEmployee function from the EmployeeService and pass the employee object
    createEmployee(employee).then((reponse) => {
            
        console.log(reponse.data);
        // navigate to the employees page after the employee is created
        navigator("/employees");
    });
  }

  return (
    <div className="container ">
      <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <br />
          <h2 className="text-center">Add Employee</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-3">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  placeholder="Enter Employee First Name"
                  name="firstName"
                  value={firstName}
                  className="form-control"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form-group mb-3">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Employee Last Name"
                  name="lastName"
                  value={lastName}
                  className="form-control"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="form-group mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  placeholder="Enter Employee Email"
                  name="email"
                  value={email}
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="btn btn-success"
                onClick={saveEmployee}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
