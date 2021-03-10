//import React, { Component } from 'react'
//import { Redirect } from 'react-router-dom'
//import axios from 'axios'
import React, { useEffect, useState } from "react";
//import { useParams } from "react-router-dom";
import Card from "../components/Card";
//import user from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Button from "../components/Button";
import Nav from "../components/Nav";
//import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Footer from "../components/Footer";

function Host(props) {
  const [user, setUser] = useState({})

  //const {id} = useParams()
  useEffect(() => {
    API.getUser( )
      .then(res => setUser(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
      <Container fluid>
        <Nav>
        </Nav>
        <Row>
          <Col size="md-12">
            <Card>
              <h1>
                User Data is going here
              </h1>
                <p>user.firstName</p>
                <p>user.LastName</p>
                <p>user.account</p>
                <p>user.accountNum1</p>
                <p>user.accountBalance1</p>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card>
              <h1>
                Transations here
              </h1>
                <Button> Make a Transfer</Button>
                
                <Button> Make a deposit</Button>

                <Button> Make a withdrawal</Button>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card>
              <h1>
                Statement Here
              </h1>
              <Button>Get Statement</Button>
            </Card>
          </Col>
        </Row>
        <Footer></Footer>
      </Container>
    );
  }

export default Host;