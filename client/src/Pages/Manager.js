
import React, { useState, useEffect, useContext } from "react";
import Card from "../components/Card";
import { Col, Row, Container } from "../components/Grid";
import Button from "../components/Button";
import Nav from '../components/LogoutNav/index'
import Footer from "../components/Footer";
 import { List, ListItem } from "../components/List";
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
                Employees data
              </h2>
           
              <List>
              {employees.map((employees) => {
                return (
                      <strong>
                        First Name: {employees.firstName}
                      </strong>
                  
                
                );
              })}
            </List>

              
            </Card>
          </Col>
        </Row>
       
       
        <Footer></Footer>
      </Container>
    );
  }

export default Manager;