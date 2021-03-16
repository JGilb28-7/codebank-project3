import React from "react";
import { Redirect } from "react-router-dom";
import Nav from "../components/Nav/NavBar";
import Footer from '../components/Footer/index'

class Logout extends React.Component {
    state = {
        redirect: false,
        seconds: 5
      }
    
      componentDidMount() {
        this.id = setTimeout(() => this.setState({ redirect: true }), 5000)
        this.myInterval = setInterval(() => {
            this.setState(({ seconds }) => ({
              seconds: seconds - 1
            }))
          }, 1000)
      }
    
      componentWillUnmount() {
        clearTimeout(this.id)
      }
    
      render() {
        const {seconds} = this.state

        return this.state.redirect
          ? <Redirect to="/home" />
          : <div>
                <Nav />
         
                <div class="container">
                    <div class="row">
                        <div class="col text-center">
                            <h1 class="mb-3 heading">You have been logged out!</h1>
                            <p>You will be redirected to the home page in <span>{seconds}</span> second(s)</p>
                        </div>
                    </div>
                </div>
 
                <Footer />
          </div>
      }
}

export default Logout;