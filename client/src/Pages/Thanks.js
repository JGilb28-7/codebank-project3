import React from "react";
import Nav from "../components/Nav/NavBar";
import Footer from '../components/Footer/index'

function Thanks () {
    return (
    
    <div>
        
        <Nav />

        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h1 className="mb-3 heading">Thank you for signing up!</h1>
                    <p className="nowLogIn">You can now log in <a href="/login">here</a>.</p>
                </div>
            </div>
        </div>

        <Footer />

    </div>
    )
}

export default Thanks;