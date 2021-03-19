//import React, { Component } from 'react'
//import { Redirect } from 'react-router-dom'
//import axios from 'axios'
import React, { useState, useEffect, useContext } from "react";
//import NumberFormat from 'react-number-format';
import UserContext from '../utils/userContext'
//import { useParams } from "react-router-dom";
import Card from "../components/Card";
//import user from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Button from "../components/Button";
import Nav from '../components/LogoutNav/index'
//import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Footer from "../components/Footer";
import TransModal from "../components/TransModal/TransModal";
//import Signup from "../components/Signup"



function Host() {
  const user = useContext(UserContext);
  
  const [users, setUsers] = useState(
    {
      _id: ""
    }
  )

  useEffect(() => {
       fetchUsers();
   }, [user])
 
   const _id = users
   function fetchUsers() {
    fetch(`/user/host/${_id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
    })
      .then((res) => res.json())
      .then((userData) => {
        setUsers( userData);
      });
  }
  return (
      <Container fluid>
        <Nav>
        </Nav>
        <Row>
          <Col size="md-12">
            <Card>
              <h1>
              Welcome {users.firstName} to JJWA Online Banking
              </h1>

                <p> <strong>Account Type: </strong> {users.accountType} </p>
               
                <p> <strong>Intial Deposit:</strong> {users.initialDep} </p> 
                
                <p> <strong>Current Balance: </strong></p>
    
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card>
                <TransModal/>    
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <div class='host-bttm'>
            <Card>
              <h1>
                Statement Here
              </h1>
              <Button>Get Statement</Button>
            </Card>
            </div>
          </Col>
        </Row>
        <Footer></Footer>
      </Container>
    );
  }

export default Host;