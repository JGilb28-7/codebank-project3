
import React, { useState, useEffect} from "react";
import Card from "../components/Card";
import { Col, Row, Container } from "../components/Grid";
import Footer from "../components/Footer";
import AdminNav from "../components/AdminNav/AdminNav";

function Manager() {
  const [employees, setEmployees] = useState(
    []
  )

  useEffect(() => {
       fetchEmployees();
   }, [])
 
   function fetchEmployees() {
    fetch(`/user/admin/`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
    })
      .then((res) => res.json())
      .then((employees) => {
        setEmployees( employees);
      });
  }
  return (
      <Container fluid>
        <AdminNav link1='/admin/signup' text1='Employee Sign Up' link2='/logout' text2='Log Out'/>
        <Row>
          <Col size="md-12">
            <Card>
              <h2>
                Employee data
              </h2>

              <div>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">-</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Email</th>
                    <th scope="col">Role</th>
                    <th scope="col">Age</th>
                    
                    
                  </tr>
                </thead>
            
                <tbody>
                  {employees.map((employees) => {
                    return (
                      <tr>
                      <th scope="row">-</th>
                      <td>{employees.firstName}</td>
                      <td>{employees.lastName}</td>
                      <td>{employees.email}</td>
                      <td>{employees.role}</td>
                      <td>{employees.age}</td>
                      <td>{employees.username}</td>
                    </tr>
                    );
                  })}
                </tbody>
              </table>
              </div>
              
              {/*<List>
                {employees.map((employees) => {
                  return (
                        <strong>
                          First Name: {employees.firstName}
                        </strong>
                  );
                })}
              </List>*/}
  
            </Card>
          </Col>
        </Row>
       
       
        <Footer></Footer>
      </Container>
    );
  }

export default Manager;