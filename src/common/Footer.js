import React, { Component } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

class Footer extends Component{
    render(){
        return(
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-12 col-sm-12">
                            <ul className="Left-side-footer">
                                <li><img src={require('../assets/img/logo-white.png')} alt="Logo"/></li>
                                <li><a href="tel:+994(12)538 57 84">+994(12)538 57 84</a></li>
                                <li><a href="tel:+994(12)538 57 84">+994(12)538 57 84</a></li>
                                <li><a href="tel:+994(12)538 57 84">+994(12)538 57 84</a></li>
                                <li><p>Parlament pr. 52F</p></li>
                                <li><a href="mailto:kamranmzam@code.edu.az">kamranmzam@code.edu.az</a></li>
                                <li className="Language-dropdown-footer"><p>English</p></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12">
                            <h5>Sections</h5>
                            <ul>
                                <li><a href="#">Main page</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Delivery</a></li>
                                <li><a href="#">Payment</a></li>
                                <li><a href="#">Terms and conditions</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12">
                            <h5>Categories</h5>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12">
                            <div className="Footer-search-container">
                                <h5>Search</h5>
                                <div className="Search-container" placeholder="Search...">
                                    <input type="text" placeholder="Search..."/>
                                    <button><FontAwesomeIcon icon={faSearch}/></button>
                                </div>
                            </div>

                            <div className="Footer-social-container">
                                <h5>Social links</h5>
                                <div className="Footer-social">
                                    <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                                    <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                                    <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;