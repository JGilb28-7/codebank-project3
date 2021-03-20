import React, { useState, useEffect, useContext} from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Navbar  from "react-bootstrap/Navbar";
import "./style.css";

function Statement() {
    const [statement, setStatement] = useState(
        {
         balance: 10540,
         transactions: {
             date1 : [
                 {
                     name: "Burger King",
                     amount: -17.30,
                     date: "02/01"
                 },

                 {
                     name: "INST XFER PAYPAL WEB",
                     amount: -14.99,
                     date: "02/01"
                 }
             ],

             date2 : [
                 {
                    name: "check #6567823: Deposit",
                     amount: +540.00,
                     date: "02/05"
                 }

             ],

             date3 : [
                 {
                    name: "Cumberland Farm",
                    amount: -27.00,
                    date: "02/12"
                 }
             ],
             date4 : [
              {
                 name: "Deposit",
                 amount: +2627.00,
                 date: "02/23"
              }
          ]
         }
        }
      )

      return (
          <>
          <Navbar expand="lg" className="color">
    <Navbar.Brand href="#" className="center-navbar">
      <b>Checking Account Statement</b>
      </Navbar.Brand>
</Navbar>
<br/>
        <Container>
          <div class="row">
          <div class="userInfo col-md-4">
          <p> Joy N Banking </p>
         <p> Main street
          Westbrook, ME 04092 </p>
          </div>
          <div class="right col-md-5">
          <strong>Account Type: </strong>
          <strong>Account Number: </strong>
          <strong>Balance:</strong>
          <br/>
          <br/>
          <p>Statement Period:</p>
          </div>
          <div class="right col-md-3" >
         <p> Checking
           0029867542
         ${statement.balance}</p>
     
        <p>02/01/2021
        to
         02/28/2021</p>
          </div>
          </div>
         
            <Table>
      <thead>
      <tr>
          <th class="header">Date</th>
          <th class="header">Description</th>
          <th class="header">Deposit</th>
          <th class="header">Withdrawal</th>
        </tr>
        <tr>
        <th>{statement.transactions.date1[0].date}</th>
          <th>{statement.transactions.date1[0].name}</th>
          <th>{statement.transactions.date1[0].amount}</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      <tr>
        <td>{statement.transactions.date1[1].date}</td>
          <td>{statement.transactions.date1[1].name}</td>
          <td>{statement.transactions.date1[1].amount}</td>
          <td></td>
        </tr>
          
          <tr>
          <td>{statement.transactions.date2[0].date}</td>
          <td>{statement.transactions.date2[0].name}</td>
          <td></td>
          <td>{statement.transactions.date2[0].amount}</td>
        </tr>
        <tr>
        <td>{statement.transactions.date3[0].date}</td>
          <td>{statement.transactions.date3[0].name}</td>
          <td>{statement.transactions.date3[0].amount}</td>
          <td></td>
        </tr>
        <tr>
        <td>{statement.transactions.date4[0].date}</td>
          <td>{statement.transactions.date4[0].name}</td>
          <td></td>
          <td>{statement.transactions.date4[0].amount}</td>
        </tr>
      </tbody>
    </Table>
    </Container>
    </>
        )
}

export default Statement