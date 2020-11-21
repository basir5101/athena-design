import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <div className="navbar-wrapper container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="/"><img src="https://i.ibb.co/s1Ct6nR/Group-86.png" alt="" /></a>
                    <button className="navbar-toggler toggle-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link mr-2" href="#home">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mr-2" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mr-2" href="#service">Service</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mr-2" href="#pricing">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mr-2" href="#team">Our Team</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mr-2 px-4 text-white btn btn-custom" href="#contact">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;