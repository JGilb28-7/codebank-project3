import React, { useState, useEffect, useContext } from "react";
import UserContext from '../utils/userContext'
import Card from "../components/Card";
import { Col, Row, Container } from "../components/Grid";
import Nav from '../components/LogoutNav/index'
import Footer from "../components/Footer";
import TransModal from "../components/TransModal/TransModal"
import Statement from "../components/Statements/Statement";

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
                Welcome {users.firstName} {users.lastName} to JJWA Bank!
              </h1>
               <p> <strong>Account Id: </strong> {users._id}</p>
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
            <div className='host-bttm'>
            <Card>
            <div>
 
            <button
            type="submit"
            className="btn blue-btn"
            data-mdb-toggle="modal"
            data-mdb-target="#statementModal"
            // onClick={this.handleSubmit}
            >
            Statement
           
            </button>

            <div
            className="modal fade"
            id="statementModal"
            tabIndex="-1"
            aria-labelledby="statementModalLabel"
            aria-hidden="true"
            >     
                <div className="modal-dialog">
                  
                    <div className="modal-content">
                    <button
                            type="button"
                            className="btn-close"
                            data-mdb-dismiss="modal"
                            aria-label="Close"
                            ></button>
                        <div className="modal-header">
                          
                            <h5 className="cntr-txt" id="statementModal">Month Ended February, 28, 2021</h5>
                            <p><strong className="logo">JJWA</strong></p>

                        </div>
                        <div className="modal-body">
                            <div className='container'>
                                <div className='row'>
                                    <div >
                                    <form>
                                            <div className="form-group form-margin">
                                            <div className="form-group form-margin">
                                           <Statement></Statement>
                                            </div> 
                                         
                                            </div>
                                        </form> 
                                    </div>
                                    <div className='col-md-6 d-flex align-items-center'>
                                        <div className='modal-bal'>
                                           
                                          
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