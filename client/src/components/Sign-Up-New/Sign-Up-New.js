import React from 'react';
import BlueButton from '../BlueButton/BlueButton'
import './Sign-Up-New.css'

class FormComp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        firstName: '',
        firstNameError: '',
        lastName: '',
        email: '',
        age: null,
        ageError: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: null,
        zipError: '',
        phone: null,
        phoneError: '',
        username: '',
        password: '',
      };
    }
  
  
    changeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({[nam]: val});
      
      let ageErr = '';
      let zipErr = '';
      let phoneErr = '';
  
      if (nam === "age") {
        if (val !=="" && !Number(val)) {
          ageErr = <p>Please enter a number for age.</p>;
        } 
        this.setState({ageError: ageErr});
      }
      
      if (nam === "zip") {
        if (val !=="" && !Number(val)) {
          zipErr = <p>Please enter a 5 digit number for zip.</p>;
        } else if (val !=="" && val.length !==5) {
          zipErr = <p>Please enter a 5 digit number for zip.</p>;
        }
        this.setState({zipError: zipErr});
      }
  
      if (nam === "phone") {
        if (val !=="" && !Number(val)) {
          phoneErr = <p>Please enter a 10 digit number for phone.</p>;
        } else if (val !=="" && val.length !==10) {
          phoneErr = <p>Please enter a 10 digit number for phone.</p>;
        }
        this.setState({phoneError: phoneErr});
      } 
    }  
  
    submitHandler = (event) => {
      event.preventDefault();
  
      let firstNameSubmit = this.state.firstName;
      //let firstNameError = '';
      
      if ((firstNameSubmit) === '') {
        alert("You must enter a name")
      }
    }
  
  
    render() {
      return    (
        <div onSubmit={this.submitHandler}>
          <div class="form-group form-margin">
              <input
                type="text"
                class="form-control"
                id="firstName-input"
                placeholder="First Name"
                name='firstName'
                onChange={this.changeHandler}
              />
            </div>
            {this.state.firstNameError}
            <div class="form-group form-margin">
              <input
                type="text"
                class="form-control"
                id="lastName-input"
                placeholder="Last Name"
                name='lastName'
                onChange={this.changeHandler}
              />
            </div>
            <div class="form-group form-margin">
              <input
                type="email"
                class="form-control"
                id="email-input"
                placeholder="Email"
                name='email'
                onChange={this.changeHandler}
              />
            </div>
            <div class="form-group form-margin">
              <input
                type="text"
                class="form-control"
                id="age-input"
                placeholder="Age"
                name='age'
                onChange={this.changeHandler}
              />
            </div>
            {this.state.ageError}
            <div class="form-group form-margin">
              <input
                type="text"
                class="form-control"
                id="Address1-input"
                placeholder="Address Line 1"
                name='address1'
                onChange={this.changeHandler}
              />
            </div>
            <div class="form-group form-margin">
              <input
                type="text"
                class="form-control"
                id="Address2-input"
                placeholder="Address Line 2 "
                name='address2'
                onChange={this.changeHandler}
              />
            </div>
            <div class="form-group form-margin">
              <input
                type="text"
                class="form-control"
                id="city-input"
                placeholder="City "
                name='city'
                onChange={this.changeHandler}
              />
            </div>
            <div class="form-group form-margin">
              <input
                type="text"
                class="form-control"
                id="state-input"
                placeholder="State "
                name='state'
                onChange={this.changeHandler}
              />
            </div>
            <div class="form-group form-margin">
              <input
                type="text"
                class="form-control"
                id="zip-input"
                placeholder="Zip Code"
                name='zip'
                onChange={this.changeHandler}
              />
            </div>
            {this.state.zipError}
            <div class="form-group form-margin">
              <input
                type="text"
                class="form-control"
                id="phone-input"
                placeholder="Phone Number (numbers only)"
                name='phone'
                onChange={this.changeHandler}
              />
            </div>
            {this.state.phoneError}
            <div class="form-group form-margin">
              <input
                type="text"
                class="form-control"
                id="username-input"
                placeholder="User Name"
                name='username'
                onChange={this.changeHandler}
              />
            </div>
            <div class="form-group form-margin">
              <input
                type="password"
                class="form-control"
                id="password-input"
                placeholder="Password"
                name='password'
                onChange={this.changeHandler}
              />
            </div>
            <div class='signup-submit'>
                <BlueButton link='/login' text='Sign Up' type='submit' />
            </div>
            
        </div>
      ) 
    }
  }
  
  export default FormComp