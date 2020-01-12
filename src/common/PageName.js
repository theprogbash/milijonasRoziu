import React, { Component } from 'react';
import './PageName.css';

class PageName extends Component{
    render(){
        return(
            <div className="Page-name text-center">
                <h1>{this.props.currentPage}</h1>
            </div>
        );  
    }
}

export default PageName;