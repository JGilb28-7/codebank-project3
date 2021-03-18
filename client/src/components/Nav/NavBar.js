import React from 'react';

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><span class="logo">jjwa</span></a>
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link navbar-text-size inline" href="/login">Login</a>
              <a className="nav-link navbar-text-size inline" href="/signup">Sign Up</a>
              <a className="nav-link navbar-text-size inline" href="admin/login">Admin</a>
            </div>
          </div>
        </div>
      </nav>
    )
    
    
  }
}

export default Nav;

