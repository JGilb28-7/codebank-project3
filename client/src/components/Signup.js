import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import './Sign-Up-New/Sign-Up-New.css'
import Nav from './Nav/NavBar'
import Footer from './Footer'

class Signup extends Component {
	constructor() {
		super()
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			age: '',
			address1: '',
			address2: '',
			city: '',
			state: '',
			zip: null,
			phoneNumber: null,
			accountType: '',
			initialDep: null,
			username: '',
			password: '',
			confirmPassword: '',
			redirectTo: null
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit(event) {
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('/user/', {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email: this.state.email,
			age: this.state.age,
			address1: this.state.address1,
			address2: this.state.address2,
			city: this.state.city,
			state: this.state.state,
			zip: this.state.zip,
			phoneNumber: this.state.phoneNumber,
			accountType:this.state.accountType,
			initialDep: this.state.initialDep,
			username: this.state.username,
			password: this.state.password,
			confirmPassword: this.state.confirmPassword
		})
			.then(response => {
				if (!response.data.errmsg && (this.state.password === this.state.confirmPassword)) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/login'
					})
				} else {
					console.log('Something went wrong')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}

render() {
	if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
			return (
				
				<div>
					<Nav />

					<div className="container">
               			<div className="row">
                     		<div className="col-md-7 col-md-offset-3">
                        		<h1 className="choosing-to-bank">Thanks for choosing to bank with us!</h1>
                         		<p className="details-font-size">We'll just need a few more details:</p>
                        
								<div className="form-group form-margin">
									<input
										type="text"
										className="form-control"
										id="firstName"
										placeholder="First Name"
										name='firstName'
										value={this.state.firstName}
										onChange={this.handleChange}
									/>
								</div>

								<div className="form-group form-margin">
									<input
										type="text"
										className="form-control"
										id="lastName"
										placeholder="Last Name"
										name='lastName'
										value={this.state.lastName}
										onChange={this.handleChange}
									/>
								</div>
								
								<div className="form-group form-margin">
									<input
										type="text"
										className="form-control"
										id="email"
										placeholder="Email"
										name='email'
										value={this.state.email}
										onChange={this.handleChange}
									/>
								</div>
								
								<div className="form-group form-margin">
									<input
										type="text"
										className="form-control"
										id="age"
										placeholder="Age"
										name='age'
										value={this.state.age}
										onChange={this.handleChange}
									/>
								</div>
								
								<div className="form-group form-margin">
									<input
										type="text"
										className="form-control"
										id="address1-input"
										placeholder="Address"
										name='address'
										value={this.state.address}
										onChange={this.handleChange}
									/>
								</div>
								
								<div className="form-group form-margin">
									<input
										type="text"
										className="form-control"
										id="address2-input"
										placeholder="Address 2"
										name='address2'
										value={this.state.address2}
										onChange={this.handleChange}
									/>
								</div>

								<div className="form-group form-margin">
									<input
										type="text"
										className="form-control"
										id="city-input"
										placeholder="City"
										name='city'
										value={this.state.city}
										onChange={this.handleChange}
									/>
								</div>
								 
								<div className="form-group form-margin">
									<input
										type="text"
										className="form-control"
										id="state-input"
										placeholder="State"
										name='state'
										value={this.state.state}
										onChange={this.handleChange}
									/>
								</div>

								<div className="form-group form-margin">
									<input
										type="text"
										className="form-control"
										id="zip-input"
										placeholder="Zip Code"
										name='zip'
										value={this.state.zip}
										onChange={this.handleChange}
									/>
								</div>

								<div className="form-group form-margin">
									<input
										type="text"
										className="form-control"
										id="phone-input"
										placeholder="Phone (Numbers Only)"
										name='phone'
										value={this.state.phoneNumber}
										onChange={this.handleChange}
									/>
								</div>

								<div className="form-group form-margin">
									<select 
										className="custom-select" 
										id='accountType-input'
										name='accountType'
										value={this.state.accountType}
										onChange={this.handleChange}>
											<option selected>Choose Account Type</option>
											<option value="checking">Checking</option>
											<option value="savings">Savings</option>
											<option value="investment">Investment</option>
									</select>
								 </div>

								 <div className="form-group form-margin">
									<input
										type="text"
										className="form-control"
										id="initialDep-input"
										placeholder="Initial Deposit Amount"
										name='initialDep'
										value={this.state.initialDep}
										onChange={this.handleChange}
									/>
								</div>

								<div className="form-group form-margin">
									<input
										type="text"
										className="form-control"
										id="username-input"
										placeholder="Username"
										name='username'
										value={this.state.username}
										onChange={this.handleChange}
									/>
								</div>

								<div className="form-group form-margin">
									<input
										type="password"
										className="form-control"
										id="password-input"
										placeholder="Password"
										name='password'
										value={this.state.password}
										onChange={this.handleChange}
									/>
								</div>

								<div className="form-group form-margin">
									<input
										type="password"
										className="form-control"
										id="confirm-password-input"
										placeholder="Confirm Password"
										name='confirmPassword'
										value={this.state.confirmpassword}
										onChange={this.handleChange}
									/>

									<button
										className="btn blue-btn btn-block signup-submit"
										onClick={this.handleSubmit}
										type="submit"
										>
										Sign up
									</button>
								
								</div>
						
                    		</div>
                		</div>
            		</div>

					<Footer />

				</div>

			)
		}
	}
}

export default Signup