import React, { Component } from 'react';
import './Breadcrumb.css';
import {
    Link, 
    withRouter
} from 'react-router-dom';

class Breadcrumb extends Component{
    render(){
        return(
            <div className="Breadcrumb">
                <ul>
                    <li><Link to={"/home"}>Home</Link></li>
                    <li> > </li>
                    <li className="Current-page">{this.props.currentPage}</li>
                </ul>
            </div>
        );  
    }
}

export default withRouter(Breadcrumb);