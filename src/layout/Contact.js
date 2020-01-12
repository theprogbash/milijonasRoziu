import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component{
    render(){
        return(
            <div className="Contact">
                <div className="container">
                    <nav className="Contact-breadcrumb">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li> > </li>
                            <li className="Current-page">Contact</li>
                        </ul>
                    </nav>
                    <div className="Contact-map-container">
                        <div className="mapouter"><div className="gmap_canvas"><iframe width="100%" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe></div></div>
                    </div>
                    <div className="Contact-container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="Contact-left-row">
                                    <label>Address</label> <br/>
                                    <span>Parlament pr. 52F</span>
                                </div>
                                <div className="Div-wrapper"></div>
                                <div className="Contact-left-row">
                                    <label>Phone</label> <br/>
                                    <span>+994(55)437 15 70</span>
                                </div>
                                <div className="Div-wrapper"></div>
                                <div className="Contact-left-row">
                                    <label>Email</label> <br/>
                                    <span>kamranmzam@code.edu.az</span>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="Contact-right-row">
                                    <label>Contact form</label>
                                    <div className="Contact-user-credentials">
                                        <input type="text" placeholder="Name"/>
                                        <input type="text" placeholder="Surname"/>
                                        <input type="number" placeholder="Phone"/>
                                        <input type="email" placeholder="Email"/>
                                    </div>
                                    <div className="Contact-user-message">
                                        <textarea rows="5" placeholder="Message"></textarea>
                                    </div>
                                    <div className="Contact-button-container">
                                        <button>Send</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;