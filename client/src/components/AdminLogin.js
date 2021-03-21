import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Footer from './Footer'
import './Style/AdminLogin.css'
import AdminNav from './AdminNav/AdminNav'

class AdminLogin extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
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

        axios
            .post('/user/admin/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username
                    })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/admin/signup'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);

            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (

                <div>

                    <AdminNav/>

                    <div className="container">
                        <div className="row">
                            <div className="col d-flex justify-content-center">
                                <div className="width">
                                    <h1 className="login">
                                    Admin Log in
                                    </h1>
                                    <form id="login">  
                                        <div className="form-group">
                                            <input className="form-control form-margin"
                                                type="text"
                                                id="username"
                                                name="username"
                                                placeholder="Username"
                                                value={this.state.username}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control form-margin"
                                                placeholder="Password"
                                                type="password"
                                                name="password"
                                                value={this.state.password}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <button
                                            className="btn blue-btn btn-block"
                                            onClick={this.handleSubmit}
                                            type="submit">Login
                                        </button>
                                        <p className="signUpPrompt">Or sign up <a href="/admin/signup">here</a>.</p>
                                    </form>
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

export default AdminLogin


