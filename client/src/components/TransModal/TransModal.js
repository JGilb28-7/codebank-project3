import BlockButton from '../BlockButton/BlockButton';
import React, { useState, useEffect, useContext} from "react";
import TransContext from '../../utils/TransContext'
import { Input, TextArea, FormBtn } from "../../components/Form";
function TransModal() {
    const [deposit, setdeposit] = useState({
        amount: 10000,
        value: 0
      });
    
    
      const [formObject, setFormObject] = useState({})
    
      function handleInputChange(event) {
        const { name, value, } = event.target;
        setFormObject({...formObject, [name]: value,})
        console.log("user input" +event.target.value)
        
      }
    
      function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.deposit) {
            setdeposit({ ...deposit, amount: deposit.amount + 2000})
        }
        if (formObject.withdraw) {
            setdeposit({ ...deposit, amount: deposit.amount - 2000 })
        }
      };

  useEffect(() => {
    //    fetchTransactions();
   }, [])

    
	// handleSubmit(event) {
	// 	event.preventDefault()

    // const _id = transactions
//     function fetchTransactions() {
//      fetch(`/user/transaction`, {
//        method: "GET",
//        headers: {
//          Accept: "application/json",
//          "Content-Type": "application/json"
//        },
//      })
//        .then((res) => res.json())
//        .then((transData) => {
//          setTransactions( transData);
//        });
//    }
        return (
        <div>
            <h1>
                Transations:
            </h1>
              
            <button
            type="submit"
            class="btn blue-btn"
            data-mdb-toggle="modal"
            data-mdb-target="#exampleModal"
            // onClick={this.handleSubmit}
            >
            Start a transaction
           
            </button>

            <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            >     
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="cntr-txt" id="exampleModalLabel">Transactions</h5>

                     {/* <p>   {transactions.map((transactions) => {
                              return (
                                <strong>
                                      {transactions.name}  
                                </strong>
                                  );
                         })}
                         </p> */}
                            <button
                            type="button"
                            class="btn-close"
                            data-mdb-dismiss="modal"
                            aria-label="Close"
                            ></button>
                        </div>
                        <div class="modal-body">
                            <div class='container'>
                                <div class='row'>
                                    <div class='col-md-6'>
                                        <form>
                                            <div class="form-group form-margin">
                                           
                                            <div class="form-group form-margin">
                                                <input
                                                type="text"
                                                class="form-control"
                                                id="trans-amount"
                                                placeholder="Deposit"
                                                onChange={handleInputChange}
                                                name="deposit"
                                                />  
                                                <br/>
                                                   <input
                                                type="text"
                                                class="form-control"
                                                id="trans-amount"
                                                placeholder="Withdrawal"
                                                onChange={handleInputChange}
                                                name="withdraw"
                                                />  
          
                                            </div> 
                                            <button className= "btn blue-btn btn-block btn-margin"
                                            onClick={handleFormSubmit}>
                                                      Submit
                                                      </button>
                                            </div>
                                        </form> 
                                    </div>
                                    <div class='col-md-6 d-flex align-items-center'>
                                        <div class='modal-bal'>
                                            <h4><strong>Current Balance:</strong> ${deposit.amount}</h4>
                                            <p id='modal-bal'></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                  
                    </div>
                </div>
            </div>   
        </div>
        )
    }

export default TransModal;