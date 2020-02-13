import React, { Component } from 'react';
import './LoginReg.css';
import Breadcrumb from '../common/Breadcrumb';

class LoginReg extends Component{
    render(){
        return(
            <div>
                <div className="container">
                    <Breadcrumb currentPage="Login and register"/>
                </div>
            </div>
        );
    }
}

export default LoginReg;