import React from 'react';
import BlockButton from '../BlockButton/BlockButton';
import Button from '../Button'

class TransModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          transTypes: '',
          transAmount: '',
        };
      }  
    
      changeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    render (){
        return (
        <div>
            <h1>
                Transations:
            </h1>
              
            <button
            type="button"
            class="btn blue-btn"
            data-mdb-toggle="modal"
            data-mdb-target="#exampleModal"
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
                                                value={this.state.transTypes}
                                                onChange={this.changeHandler}>
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
                                                value={this.state.transAmount}
                                                onChange={this.changeHandler}
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
}

export default TransModal;