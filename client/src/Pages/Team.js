import React from "react";
import Nav from "../components/Nav/NavBar";
import Footer from '../components/Footer/index'
import MoneyPic from '../assets/SeekPng.com_cash-icon-png_1358929-2.png'

function Team () {
    return (
    
    <div>
        
        <Nav />

        <div className="container">
        
            <div className="row">
                <div className='text-center header-margin'>
                    <h1>Hello there! We're: </h1>
                </div>  
            </div>
            <div className='row'>
                
                <div className="col-md-7 offset-md-1 ">
                   
                    <div className='row about1'>
                        <div className='col-md-2 text-center'>
                            <p className='about-logo'>j</p> 
                        </div>
                        <div className='col-md-10'>
                        <p className='about-text'>James Coughlin: <span className='email-text'><a href="https://github.com/mrjacoughlin" target="_blank" rel='noreferrer'>Git Hub Profile</a></span></p>
                        </div>
                    </div>

                    <div className='row about2'>
                        <div className='col-md-2 text-center'>
                            <p className='about-logo'>j</p> 
                        </div>
                        <div className='col-md-10'>
                        <p className='about-text'>Jon Gilbert: <span className='email-text'><a href="https://github.com/JGilb28-7" target="_blank" rel='noreferrer'>Git Hub Profile</a></span></p>
                        </div>
                    </div>

                    <div className='row about3'>
                        <div className='col-md-2 text-center'>
                            <p className='about-logo'>w</p> 
                        </div>
                        <div className='col-md-10'>
                            <p className='about-text'>William Appleton: <span className='email-text'><a href="https://github.com/william-appleton" target="_blank" rel='noreferrer'>Git Hub Profile</a></span></p>
                        </div>
                    </div>

                    <div className='row about4'>
                        <div className='col-md-2 text-center'>
                            <p className='about-logo'>a</p> 
                        </div>
                        <div className='col-md-10'>
                        <p className='about-text'>Ala DeCoste: <span className='email-text'><a href="https://github.com/decoste" target="_blank" rel='noreferrer'>Git Hub Profile</a></span></p>
                        </div>
                    </div>

                </div>

                <div className='col-md-4 d-flex align-items-center'>
                    <img 
                            className="img-fluid img-margin" 
                            src={MoneyPic} 
                            alt="dollar-bills"
                        />
                    </div>
            </div>

            <div className="row">
                <div className='text-center about-bttm-margin'>
                    <h1>And welcome to our <br></br> <span className='motto'>j</span>oltingly <span className='motto'>j</span>ubilant <span className='motto'>w</span>ealth <span className='motto'>a</span>pp!</h1>
                    <br></br>
                    <h3 className='italic'>Where banking is joyful.</h3>
                </div>  
            </div>

        </div>

        <Footer />

    </div>


    )
}

export default Team;