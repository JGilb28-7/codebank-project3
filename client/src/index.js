import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import NavBar from './components/Nav/navbar.js'
import BlueButton from './components/BlueButton/blueButton.js'

import "spectre.css/dist/spectre.min.css";
import "spectre.css/dist/spectre.min.css";

ReactDOM.render(
  <App />,
  document.getElementById("root")
);

ReactDOM.render(
  <NavBar />,
  document.getElementById("NavBar")
);

ReactDOM.render(
  <BlueButton text='Sign Up' link='/sign-up' />, 
  document.getElementById('SignUpBtn')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
