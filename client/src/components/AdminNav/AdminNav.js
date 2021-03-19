import React from 'react';
import './AdminNav.css'

class AdminNav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><span class="logo">jjwa</span></a>
          <p class='navbar-text-size admin-margin'>(Admin)</p>
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
              <a className="nav-link navbar-text-size inline" href={this.props.link1}>{this.props.text1}</a>  
            </div>
            <div className='navbar-nav ml-auto'>
            <a className="nav-link navbar-text-size inline" href={this.props.link2}>{this.props.text2}</a>
            </div>
          </div>
        </div>
      </nav>
    )
    
    
  }
}

export default AdminNav;

