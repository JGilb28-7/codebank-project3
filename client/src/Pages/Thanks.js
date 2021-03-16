import React from "react";
import Nav from "../components/Nav/NavBar";
import Footer from '../components/Footer/index'

function Thanks () {
    return (
    
    <div>
        
        <Nav />

        <div class="container">
            <div class="row">
                <div class="col text-center">
                    <h1 class="mb-3 heading">Thank you for signing up!</h1>
                    <p class="nowLogIn">You can now log in <a href="/login">here</a>.</p>
                </div>
            </div>
        </div>

        <Footer />

    </div>
    )
}

export default Thanks;