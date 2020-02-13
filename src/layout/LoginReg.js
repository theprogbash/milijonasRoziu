import React, { Component } from 'react';
import './LoginReg.css';
import Breadcrumb from '../common/Breadcrumb';
import $ from 'jquery';
window.$ = $;

class LoginReg extends Component {
    render() {
        function MinimizeLabel(event){
            $(event.target).parent().css("border-bottom", "2px solid #f99");
            $(event.target).parent().find("label").css("font-size", ".7em").css("top", "-15px").css("transition", ".3s ease-out");
        }
        return (
            <div>
                <div className="container">
                    <Breadcrumb currentPage="Login and register" />
                    <div className="Loginreg-container">
                        <div className="row">
                            <div className="Login-section col-lg-6 col-md-12 col-12">
                                <div className="custom-container">
                                    <div>
                                        <h5>Log in</h5>
                                    </div>
                                    <div className="Reg-fields">
                                        <input type="email" onClick={MinimizeLabel}/>
                                        <label>Email</label>
                                    </div>
                                    <div className="Reg-fields">
                                        <input type="password" onClick={MinimizeLabel}/>
                                        <label>Password</label>
                                    </div>
                                    <div className="float-right">
                                        <button className="Login-btn">Log in</button>
                                    </div>
                                </div>
                            </div>
                            <div className="Register-section col-lg-6 col-md-12 col-12">
                                <div className="custom-container">
                                    <div>
                                        <h5>Register</h5>
                                    </div>
                                    <div className="Reg-fields">
                                        <input type="email" onClick={MinimizeLabel}/>
                                        <label>Email</label>
                                    </div>
                                    <div className="Reg-fields">
                                        <input type="password" onClick={MinimizeLabel}/>
                                        <label>Password</label>
                                    </div>
                                    <div className="Reg-fields">
                                        <input type="password" onClick={MinimizeLabel}/>
                                        <label>Confirm Password</label>
                                    </div>
                                    <div className="float-right">
                                        <button className="Login-btn">Register</button>
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

export default LoginReg;