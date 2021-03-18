import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import './Sign-Up-New/Sign-Up-New.css'
import Nav from './Nav/NavBar'
import Footer from './Footer'


class EmployeeSignup extends Component {
	constructor() {
		super()
		this.state = {
			firstName: '',
			lastName: '',
            role: '',
            phoneNumber: null,
			email: '',
			age: '',
            gender: '',
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
		axios.post('/user/admin/signup', {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
            role: this.state.role,
            phoneNumber: this.state.phoneNumber,
			email: this.state.email,
			age: this.state.age,
			gender: this.state.gender,
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

					<div class="container">
               			<div class="row">
                     		<div class="col-md-7 col-md-offset-3">
                        		<h1 class="choosing-to-bank">Employee signup page!</h1>
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
									<select 
										class="custom-select" 
										id='role-input'
										name='role'
										value={this.state.role}
										onChange={this.handleChange}>
											<option selected>Choose your role</option>
											<option value="manager">Manager</option>
											<option value="employee">Employee</option>
									</select>
								 </div>

                                <div class="form-group form-margin">
									<input
										type="text"
										class="form-control"
										id="phone-input"
										placeholder="Phone (Numbers Only)"
										name='phone'
										value={this.state.phoneNumber}
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
										id="gender-input"
										placeholder="Gender"
										name='gender'
										value={this.state.gender}
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

export default EmployeeSignup;