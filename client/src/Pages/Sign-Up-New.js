import React from "react";
import FormComp from '../components/Sign-Up-New/Sign-Up-New'
import Nav from "../components/Nav/NavBar";

function SignUpForm() {
    return (
        <div>

            <Nav />

            <div class="container">
                <div class="row">
                     <div class="col-md-7 col-md-offset-3">
                        <h1 class="choosing-to-bank">Thanks for choosing to bank with us!</h1>
                         <p class="details-font-size">We'll just need a few more details:</p>
                        
                        <FormComp />
                    </div>
                </div>
            </div>

        </div>

    )
}

export default SignUpForm;
