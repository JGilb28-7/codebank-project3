import React from "react";
import FormComp from '../components/Sign-Up-New/Sign-Up-New'
import Nav from "../components/Nav/NavBar";
import Footer from '../components/Footer/index';

function SignUpForm() {
    return (
        <div>

            <Nav />

            <div className="container">
                <div className="row">
                     <div className="col-md-7 col-md-offset-3">
                        <h1 className="choosing-to-bank">Thanks for choosing to bank with us!</h1>
                         <p className="details-font-size">We'll just need a few more details:</p>
                        
                        <FormComp />
                    </div>
                </div>
            </div>

            <Footer />

        </div>

    )
}

export default SignUpForm;
