import React from 'react';
import logo from '../images/port-logo.png';


const Header = () => (
    
  <div>
  <header>
        <div className="container">
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="javascript:void(0)"><img src={logo} alt=""/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            {/* <div className="search-mobile">
                <a href="javascript:void(0)"><img className="search" src="img/search-icon.png" alt=""/></a>
            </div> */}
    
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#0">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#0">About Me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#0">Experience</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#0">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#0">Blogs</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#0">Contact Me</a>
                    </li>
                </ul>
            </div>
        </nav>
       </div>
    </header>
  </div>


);




export default Header;
