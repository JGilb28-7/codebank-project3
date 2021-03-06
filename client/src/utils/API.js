import axios from "axios";

export default {
  // Gets all employees
  getEmployees: function () {
    return axios.get("/api/employees");
  },
  // Gets the book with the given id
  getEmployee: function (id) {
    return axios.get("/api/employees/" + id);
  },
  // Deletes the book with the given id
  deleteEmployee: function (id) {
    return axios.delete("/api/employees/" + id);
  },
  // Saves a book to the database
  saveEmployee: function (employeeData) {
    return axios.post("/api/employees", employeeData);
  },
};
