import React, { useState, useEffect, useContext} from "react";

function TransModal() {
    const [deposit, setdeposit] = useState({
        amount: 10000,
        value: 0
      });
    
    
      const [formObject, setFormObject] = useState({})
    
      function handleInputChange(event) {
        const { name, value, } = event.target;
        setFormObject({...formObject, [name]: value,})
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
            className="btn blue-btn"
            data-mdb-toggle="modal"
            data-mdb-target="#exampleModal"
            // onClick={this.handleSubmit}
            >
            Start a transaction
           
            </button>

            <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            >     
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="cntr-txt" id="exampleModalLabel">Transactions</h5>

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
                            className="btn-close"
                            data-mdb-dismiss="modal"
                            aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <form>
                                            <div className="form-group form-margin">
                                           
                                            <div className="form-group form-margin">
                                                <input
                                                type="text"
                                                className="form-control"
                                                id="trans-amount"
                                                placeholder="Deposit"
                                                onChange={handleInputChange}
                                                name="deposit"
                                                />  
                                                <br/>
                                                   <input
                                                type="text"
                                                className="form-control"
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
                                    <div className='col-md-6 d-flex align-items-center'>
                                        <div className='modal-bal'>
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