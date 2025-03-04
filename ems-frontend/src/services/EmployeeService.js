import axios from 'axios'

// step 1: create a base URL
const REST_API_BASE_URL = 'http://localhost:8080/api/employees';


// step 2: create an arrow function that will return the data from the API
// step 3: export the function
// get all employees
export const listEmployees = () => axios.get(REST_API_BASE_URL);
export const createEmployee = (employee) => axios.post(REST_API_BASE_URL, employee);
export const getEmployee = (employeeId) => axios.get(REST_API_BASE_URL + '/' + employeeId);
export const updateEmployee = (employeeId, employee) => axios.put(REST_API_BASE_URL + '/' + employeeId, employee);

