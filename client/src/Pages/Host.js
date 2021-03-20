//import React, { Component } from 'react'
//import { Redirect } from 'react-router-dom'
//import axios from 'axios'
import React, { useState, useEffect, useContext } from "react";
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
import TransModal from "../components/TransModal/TransModal"
import Statement from "../components/Statements/Statement";

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
                User Data is going here
              </h1>
               <p> <strong>Account Id: </strong> {users._id}</p>
                <p> <strong>First Name: </strong> {users.firstName}</p>
                <p> <strong>Last Name: </strong> {users.lastName}</p>
                <p> <strong>Account Type: </strong> {users.accountType}</p>
                {/* <p>user.accountNum1</p>
                <p>user.accountBalance1</p> */}
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
            <div>
 
            <button
            type="submit"
            class="btn blue-btn"
            data-mdb-toggle="modal"
            data-mdb-target="#statementModal"
            // onClick={this.handleSubmit}
            >
            Statement
           
            </button>

            <div
            class="modal fade"
            id="statementModal"
            tabindex="-1"
            aria-labelledby="statementModalLabel"
            aria-hidden="true"
            >     
                <div class="modal-dialog">
                  
                    <div class="modal-content">
                    <button
                            type="button"
                            class="btn-close"
                            data-mdb-dismiss="modal"
                            aria-label="Close"
                            ></button>
                        <div class="modal-header">
                          
                            <h5 class="cntr-txt" id="statementModal">Month Ended February, 28, 2021</h5>
                            <p><strong class="logo">JJWA</strong></p>

                        </div>
                        <div class="modal-body">
                            <div class='container'>
                                <div class='row'>
                                    <div >
                                    <form>
                                            <div class="form-group form-margin">
                                           
                                            <div class="form-group form-margin">
                                              

                                           <Statement></Statement>
                                               
          
                                            </div> 
                                         
                                            </div>
                                        </form> 
                                     
                                    </div>
                                    <div class='col-md-6 d-flex align-items-center'>
                                        <div class='modal-bal'>
                                           
                                          
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                  
                    </div>
                </div>
            </div>   
        </div>
            </Card>
            </div>
          </Col>
        </Row>
        <Footer></Footer>
      </Container>
    );
  }

export default Host;