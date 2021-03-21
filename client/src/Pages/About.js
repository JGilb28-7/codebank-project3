import React from "react";
import Nav from "../components/Nav/NavBar";
import Footer from '../components/Footer/index'
import moneyPic from '../assets/Screenshot 2021-03-19 235532.png'
import '../components/Style/About.css'

function About () {
    return (
    
    <div>
         <Nav />

            <div className='containter'>
                <div className='row'>
                    <div className='col-md-6 animate__animated animate__slideInUp'>
                        <img 
                            className="img-fluid padding-btm" 
                            src={moneyPic} 
                            alt="money"
                        />  
                    </div>
                    <div className='col-md-6 animate__animated animate__slideInDown'>
                       <h1 className='welcome'>Welcome!</h1>
                       <p className='about'>
                            <span><a href='team'>JJWA </a></span>
                        
                           Was started by a group of amazingly brillant, 
                            and wicked smart financial pros and future full stack developers. 
                            <br></br><br></br>
             
                            Our goal is to provide customers with the simpilest way to 

                            bank, save $$$, and transact in a way that makes 
                            life easier for everyone!
                            <br></br><br></br>

                            This is where banking is joyful!
                        </p> 
                    </div>
                </div>
            </div>
        <Footer />
    </div>
    )
}
export default About;