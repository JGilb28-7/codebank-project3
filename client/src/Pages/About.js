import React from "react";
import Nav from "../components/Nav/NavBar";
import Footer from '../components/Footer/index'
import moneyPic from '../assets/Screenshot 2021-03-19 235532.png'
import '../components/Style/About.css'

function About () {
    return (
    
    <div>
         <Nav />

            <div class='containter'>
                <div class='row'>
                    <div class='col-md-6 animate__animated animate__slideInUp'>
                        <img 
                            class="img-fluid padding-btm" 
                            src={moneyPic} 
                            alt="money"
                        />  
                    </div>
                    <div class='col-md-6 animate__animated animate__slideInDown'>
                       <h1 class='welcome'>Welcome!</h1>
                       <p class='about'>
                            <span><a href='team'>JJWA </a></span>was started by amazing, brillant, and wicked smart 
                            financial pros and full stack developers. <br></br><br></br>
             
                            Our goal is to provide customers with the simpilest way to 
                            bank, save thier $$$ and transact in a way that makes 
                            life easier for everyone!
                        </p> 
                    </div>
                </div>
            </div>


        <Footer />

    </div>


    )
}

export default About;