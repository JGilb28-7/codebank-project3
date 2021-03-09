import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/Nav/navbar.js';
import FormComp from './components/Sign-Up/sign-up.js'

ReactDOM.render(<NavBar />, document.getElementById('NavBar'));
ReactDOM.render(<FormComp />, document.getElementById('form-comp'))
