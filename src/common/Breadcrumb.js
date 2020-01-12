import React, { Component } from 'react';
import './Breadcrumb.css';

class Breadcrumb extends Component{
    render(){
        return(
            <div className="Breadcrumb">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li> > </li>
                    <li className="Current-page">{this.props.currentPage}</li>
                </ul>
            </div>
        );  
    }
}

export default Breadcrumb;