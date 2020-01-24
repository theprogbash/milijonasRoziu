import React, { Component } from 'react';
import './Categories.css';

class Categories extends Component{
    render(){
        return(
            <div className="Categories-right">
                <h4 className="Categories-title">Categories</h4>
                <ul className="Category-list">
                    <li><a href="#">Gift Wrapping</a></li>
                    <li><a href="#">Catalog</a></li>
                    <li><a href="#">Gifts</a></li>
                    <li><a href="#">Newborns</a></li>
                    <li><a href="#">Bouquets</a></li>
                    <li><a href="#">Carcass Bouquets</a></li>
                    <li><a href="#">Hand Bags</a></li>
                    <li><a href="#">Spring Festival</a></li>
                </ul>
            </div>
        );
    }
}

export default Categories;