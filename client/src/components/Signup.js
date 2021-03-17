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
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('/user/', {
			username: this.state.username,
			password: this.state.password,
			confirmPassword: this.state.confirmPassword
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg && (this.state.password === this.state.confirmPassword)) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/login'
					})
				} else {
					console.log('username already taken')
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

					<div class="container">
               			<div class="row">
                     		<div class="col-md-7 col-md-offset-3">
                        		<h1 class="choosing-to-bank">Thanks for choosing to bank with us!</h1>
                         		<p class="details-font-size">We'll just need a few more details:</p>
                        
								
								<div class="form-group form-margin">
									<input
										type="text"
										class="form-control"
										id="firstName"
										placeholder="First Name"
										name='firstName'
										value={this.state.firstName}
										onChange={this.handleChange}
									/>
								</div>

								<div class="form-group form-margin">
									<input
										type="text"
										class="form-control"
										id="lastName"
										placeholder="Last Name"
										name='lastName'
										value={this.state.lastName}
										onChange={this.handleChange}
									/>
								</div>
								
								<div class="form-group form-margin">
									<input
										type="text"
										class="form-control"
										id="email"
										placeholder="Email"
										name='email'
										value={this.state.email}
										onChange={this.handleChange}
									/>
								</div>
								
								<div class="form-group form-margin">
									<input
										type="text"
										class="form-control"
										id="age"
										placeholder="Age"
										name='age'
										value={this.state.age}
										onChange={this.handleChange}
									/>
								</div>
								
								<div class="form-group form-margin">
									<input
										type="text"
										class="form-control"
										id="address1-input"
										placeholder="Address 1"
										name='address1'
										value={this.state.address1}
										onChange={this.handleChange}
									/>
								</div>
								
								<div class="form-group form-margin">
									<input
										type="text"
										class="form-control"
										id="address2-input"
										placeholder="Address 2"
										name='address2'
										value={this.state.address2}
										onChange={this.handleChange}
									/>
								</div>

								<div class="form-group form-margin">
									<input
										type="text"
										class="form-control"
										id="city-input"
										placeholder="City"
										name='city'
										value={this.state.city}
										onChange={this.handleChange}
									/>
								</div>
								 
								<div class="form-group form-margin">
									<input
										type="text"
										class="form-control"
										id="state-input"
										placeholder="State"
										name='state'
										value={this.state.state}
										onChange={this.handleChange}
									/>
								</div>

								<div class="form-group form-margin">
									<input
										type="text"
										class="form-control"
										id="zip-input"
										placeholder="Zip Code"
										name='zip'
										value={this.state.zip}
										onChange={this.handleChange}
									/>
								</div>

								<div class="form-group form-margin">
									<input
										type="text"
										class="form-control"
										id="phone-input"
										placeholder="Phone (Numbers Only)"
										name='phone'
										value={this.state.phone}
										onChange={this.handleChange}
									/>
								</div>

								<div class="form-group form-margin">
									<select 
										class="custom-select" 
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

								 <div class="form-group form-margin">
									<input
										type="text"
										class="form-control"
										id="initialDep-input"
										placeholder="Initial Deposit Amount"
										name='initialDep'
										value={this.state.initialDep}
										onChange={this.handleChange}
									/>
								</div>

								<div class="form-group form-margin">
									<input
										type="text"
										class="form-control"
										id="username-input"
										placeholder="Username"
										name='username'
										value={this.state.username}
										onChange={this.handleChange}
									/>
								</div>

								<div class="form-group form-margin">
									<input
										type="password"
										class="form-control"
										id="password-input"
										placeholder="Password"
										name='password'
										value={this.state.password}
										onChange={this.handleChange}
									/>
								</div>

								<div class="form-group form-margin">
									<input
										type="password"
										class="form-control"
										id="confirm-password-input"
										placeholder="Confirm Password"
										name='password'
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