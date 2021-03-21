import React from "react";
import BlueButton from "../components/BlueButton/BlueButton";
import Nav from "../components/Nav/NavBar";
import HomePic from '../assets/open-banking-financial-technology-finance-financial-services-lays-dd7d5386abc311f2ccf635a4f5480906.png';
import Footer from '../components/Footer/index'

function Home () {
    return (
    
    <div>
         <Nav />

         <div className="container">
            <div className="row">
                <div className="col-md-6 text-center">
                    <p className="heading slide-right">Welcome to easy to use online banking!</p>
                
                    <BlueButton text='Sign Up!' link='signup' />
                </div>

                <div className="col-md-6">
                    <img 
                        className="img-fluid img-margin" 
                        src={HomePic} 
                        alt="bank-collage"
                    />
                </div>
            </div>
        </div>

        <Footer />

    </div>


    )
}

export default Home;