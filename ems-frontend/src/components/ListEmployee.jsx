import React from 'react'

const ListEmployee = () => {

    // step 1: create dummy data
    const dummyData = [
        {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
        },
        {   
            id: 2,  
            firstName: 'Jane',
            lastName: 'Smith',
            email: 'jane.smith@example.com',
        },
        {
            id: 3,  
            firstName: 'Michael',
            lastName: 'Johnson',
            email: 'michael.johnson@example.com',
        },
    ]

  return (
    <div className='container'>
      <h2 className='text-center my-5'>Employee List</h2>
      <table className='table table-bordered table-striped'>
        <thead className='table-dark'>
            <tr>
                <th>Employee ID</th>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email</th>
            </tr>
        </thead>
        <tbody>
            {dummyData.map(employee => 
                <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>
                </tr>
            )}
        </tbody>
        
      </table>
    </div>
  )
}

export default ListEmployee

