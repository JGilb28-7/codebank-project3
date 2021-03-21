// Keep file for future Dev

// import React, { useEffect, useState } from "react";
// // import Jumbotron from "../../components/Jumbotron/";
// import DeleteBtn from "../components/DeleteBtn";
// import API from "../utils/API";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { index, Input, TextArea, FormBtn } from "../components/Form";

// function Employees() {
//   // Setting our component's initial state
//   const [user, setUser] = useState({});
//   const [formObject, setFormObject] = useState({
//     firstName: "",
//     lastName: "",
//     role: "",
//     phoneNumber: "",
//     email: "",
//     age: "",
//     gender: "",
//     userName: "",
//     password: "",
//   });

//   // Load all books and store them with setEmployees
//   useEffect(() => {
//     loadEmployees();
//   }, []);

//   // Loads all books and sets them to books
//   function loadEmployees() {
//     API.getUser()
//       .then((res) => setUser(res.data))
//       .catch((err) => console.log(err));
//   }

//   // Deletes an employee from the database with a given id, then reloads employees from the db
//   function deleteEmployee(id) {
//     API.deleteUser(id)
//       .then((res) => loadEmployees())
//       .catch((err) => console.log(err));
//   }

//   // Handles updating component state when the user types into the input field
//   function handleInputChange(event) {
//     const { name, value } = event.target;
//     setFormObject({ ...formObject, [name]: value });
//   }

//   // When the form is submitted, use the API.saveEmployee method to save the employee data
//   // Then reload employees from the database
//   function handleFormSubmit(event) {
//     event.preventDefault();
//     if (formObject.firstName && formObject.lastName) {
//       API.saveUser({
//         firstName: formObject.firstName,
//         lastName: formObject.lastName,
//         role: formObject.role,
//         phoneNumber: formObject.phoneNumber,
//         email: formObject.email,
//         age: formObject.age,
//         gender: formObject.gender,
//         userName: formObject.userName,
//         password: formObject.password,
//       })
//         .then(() =>
//           setFormObject({
//             firstName: "",
//             lastName: "",
//             role: "",
//             phoneNumber: "",
//             email: "",
//             age: "",
//             gender: "",
//             userName: "",
//             password: "",
//           })
//         )
//         .then(() => loadEmployees())
//         .catch((err) => console.log(err));
//     }
//   }

//   return (
//     <Container fluid>
//       <Row>
//         <Col size="md-6">
//           {/* <Jumbotron>
//             <h1>What Employees Should I Read?</h1>
//           </Jumbotron> */}
//           <form>
//             <Input
//               onChange={handleInputChange}
//               name="firstName"
//               placeholder="First Name (required)"
//               value={formObject.firstName}
//             />
//             <Input
//               onChange={handleInputChange}
//               name="lastName"
//               placeholder="Last Name (required)"
//               value={formObject.lastName}
//             />
//             <Input
//               onChange={handleInputChange}
//               name="role"
//               placeholder="Role (required)"
//               value={formObject.role}
//             />
//             <Input
//               onChange={handleInputChange}
//               name="phoneNumber"
//               placeholder="phone Number (required)"
//               value={formObject.phoneNumber}
//             />
//             <Input
//               onChange={handleInputChange}
//               name="email"
//               placeholder="Email(required)"
//               value={formObject.email}
//             />
//             <Input
//               onChange={handleInputChange}
//               name="age"
//               placeholder="Age (required)"
//               value={formObject.age}
//             />
//             <Input
//               onChange={handleInputChange}
//               name="gender"
//               placeholder="gender (required)"
//               value={formObject.gender}
//             />
//             <Input
//               onChange={handleInputChange}
//               name="userName"
//               placeholder="UserName (required)"
//               value={formObject.userName}
//             />
//             <Input
//               onChange={handleInputChange}
//               name="password"
//               placeholder="Password (required)"
//               value={formObject.password}
//             />
//             <FormBtn
//               disabled={!(formObject.lastName && formObject.firstName)}
//               onClick={handleFormSubmit}
//             >
//               Submit Employee
//             </FormBtn>
//           </form>
//         </Col>
//         <Col size="md-6 sm-12">
//           {/* <Jumbotron>
//             <h1>Employees On My List</h1>
//           </Jumbotron> */}
//           {user.length ? (
//             <List>
//               {user.map((user) => {
//                 return (
//                   <ListItem key={user._id}>
//                     <a href={"/employees/" + user._id}>
//                       <strong>
//                         {user.firstName} by {user.lastName}
//                       </strong>
//                     </a>
//                     <DeleteBtn onClick={() => deleteEmployee(user._id)} />
//                   </ListItem>
//                 );
//               })}
//             </List>
//           ) : (
//             <h3>No Results to Display</h3>
//           )}
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Employees;
