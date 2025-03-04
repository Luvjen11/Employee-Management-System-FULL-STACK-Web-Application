import React , {useEffect, useState}from 'react'
import { listEmployees, deleteEmployee } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployee = () => {

    // step 1: create dummy data
    // const dummyData = [
    //     {
    //         id: 1,
    //         firstName: 'John',
    //         lastName: 'Doe',
    //         email: 'john.doe@example.com',
    //     },
    //     {   
    //         id: 2,  
    //         firstName: 'Jane',
    //         lastName: 'Smith',
    //         email: 'jane.smith@example.com',
    //     },
    //     {
    //         id: 3,  
    //         firstName: 'Michael',
    //         lastName: 'Johnson',
    //         email: 'michael.johnson@example.com',
    //     },
    // ]

    // step 2: create a state to store the data
    const [employees, setEmployees]= useState([])

    const navigator = useNavigate()

    // step 3: create a function to fetch the data from the API
    useEffect(() => {
        getAllEmployees();
    }, [])

    function getAllEmployees() {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
                console.log(error);
        })
    }

    // step 4: create a function to navigate to the add employee page
    function addNewEmployee() {
        navigator('/add-employee')
    }

    function updateEmployee(id) {
        navigator(`/update-employee/${id}`)
    }

    function removeEmployee(id) {
        console.log(id);

        deleteEmployee(id).then((response) => {
            getAllEmployees();
        }).catch(error => {
            console.error(error);
        })
    }

  return (
    <div className='container'>
      <h2 className='text-center my-5'>Employee List</h2>
      <button className='btn btn-primary mb-2' onClick={(addNewEmployee)}>Add Employee</button>
      <table className='table table-bordered table-striped'>
        <thead className='table-dark'>
            <tr>
                <th>Employee ID</th>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {employees.map(employee => 
                <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>
                    <td>
                        <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                        <button className='btn btn-danger' onClick={() => removeEmployee(employee.id)} style={{marginLeft: '10px'}}>Delete</button>
                    </td>
                </tr>
            )}
        </tbody>
        
      </table>
    </div>
  )
}

export default ListEmployee

