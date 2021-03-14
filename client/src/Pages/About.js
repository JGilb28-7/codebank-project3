import React from "react";
import Nav from "../components/Nav/NavBar";
import Footer from '../components/Footer/index'

function About () {
    return (
    
    <div>
        
        <Nav />

        <div class="container">
        
            <div class="row">
                <div class='text-center header-margin'>
                    <h1>Hello there! We're: </h1>
                </div>  
            </div>
            <div class='row'>
                <div class="col-md-11 offset-md-1 ">
                   
                    <div class='row about1'>
                        <div class='col-md-1 text-center'>
                            <p class='about-logo'>j</p> 
                        </div>
                        <div class='col-md-11'>
                        <p class='about-text'>James Coughlin: <span class='email-text'><a href="https://github.com/mrjacoughlin" target="_blank" rel='noreferrer'>Git Hub Profile</a></span></p>
                        </div>
                    </div>

                    <div class='row about2'>
                        <div class='col-md-1 text-center'>
                            <p class='about-logo'>j</p> 
                        </div>
                        <div class='col-md-11'>
                        <p class='about-text'>Jon Gilbert: <span class='email-text'><a href="https://github.com/JGilb28-7" target="_blank" rel='noreferrer'>Git Hub Profile</a></span></p>
                        </div>
                    </div>

                    <div class='row about3'>
                        <div class='col-md-1 text-center'>
                            <p class='about-logo'>w</p> 
                        </div>
                        <div class='col-md-11'>
                            <p class='about-text'>William Appleton: <span class='email-text'><a href="https://github.com/william-appleton" target="_blank" rel='noreferrer'>Git Hub Profile</a></span></p>
                        </div>
                    </div>

                    <div class='row about4'>
                        <div class='col-md-1 text-center'>
                            <p class='about-logo'>a</p> 
                        </div>
                        <div class='col-md-11'>
                        <p class='about-text'>Ala DeCoste: <span class='email-text'><a href="https://github.com/decoste" target="_blank" rel='noreferrer'>Git Hub Profile</a></span></p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="row">
                <div class='text-center about-bttm-margin'>
                    <h1>And welcome to our <br></br> <span class='motto'>j</span>oltingly <span class='motto'>j</span>ubilant <span class='motto'>b</span>aking <span class='motto'>a</span>pp!</h1>
                    <br></br>
                    <h3 class='italic'>Where banking is joyful.</h3>
                </div>  
            </div>

        </div>

        <Footer />

    </div>


    )
}

export default About;