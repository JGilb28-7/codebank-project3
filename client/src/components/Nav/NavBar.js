import React from 'react';
import './NavBar.css'
class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><span className="logo">jjwa</span></a>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link navbar-text-size inline" href="/about">About</a>
              <a className="nav-link navbar-text-size inline" href="/login">Login</a>
              <a className="nav-link navbar-text-size inline" href="/signup">Sign Up</a>  
            </div>
            <div className='navbar-nav ml-auto'>
              <a className="nav-link navbar-text-size inline" href="/admin/home">Admin</a>
            </div>
          </div>
        </div>
      </nav>
    )
    
    
  }
}

export default Nav;

