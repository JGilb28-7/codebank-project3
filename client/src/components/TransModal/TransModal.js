import BlockButton from '../BlockButton/BlockButton';
import React, { useState, useEffect, useContext} from "react";
import TransContext from '../../utils/TransContext'
function TransModal() {
//   const transaction = useContext(TransContext);
//   const [transactions, setTransactions] = useState(
//    []
//   )

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
                                            <select 
                                                class="custom-select" 
                                                id='transactionTypes'
                                                name='transTypes'
                                                // value={this.state.transTypes}
                                                // onChange={this.changeHandler}
                                                >
                                                <option selected>Transaction Type:</option>
                                                <option value="deposit">Deposit</option>
                                                <option value="send-money">Send Money</option>
                                            </select>
                                            <div class="form-group form-margin">
                                                <input
                                                type="text"
                                                class="form-control"
                                                id="trans-amount"
                                                placeholder="Amount"
                                                name='transAmount'
                                                // value={this.state.transAmount}
                                                // onChange={this.changeHandler}
                                                />           
                                            </div> 
                                            <BlockButton>Deposit</BlockButton>
                                            <BlockButton>Send Money</BlockButton>
                                            </div>
                                        </form> 
                                    </div>
                                    <div class='col-md-6 d-flex align-items-center'>
                                        <div class='modal-bal'>
                                            <h2>Current Balance:</h2>
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