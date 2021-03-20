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
                            <span><a href='team'>JJWA </a></span>
                        
                            <span><a>Was started by a group of amazingly brillant, 
                            and wicked smart financial pros and future full stack developers. 
                            <br></br><br></br>
             
                            Our goal is to provide customers with the simpilest way to 
                            bank, to save thier $$$ and transact in a way that makes 
                            life easier. 
                            <br></br><br></br>

                           This is where banking is joyful!
                            </a>
                            </span>
                        </p> 
                    </div>
                </div>
            </div>


        <Footer />

    </div>


    )
}

export default About;