import React, { Component } from 'react';
import './ProductCard.css';
import {
    NavLink
} from 'react-router-dom';

class ProductCard extends Component{
    render(){
        return(
            <div className="Product-card">
                <NavLink to={"/product"}>
                    <div className="Product-img-container">
                        <div className="New-badge">New</div>
                        <img src={this.props.ProductImgSrc} alt="Cherry Lady"/>
                        <div className="Product-card-overlay">
                            <button className="Like-btn"><img src={require("../assets/img/heart.png")} alt="Love It"/></button>
                            <button className="Add-btn"><img src={require("../assets/img/bucket-black.png")} alt="Add to basket"/></button>
                        </div>
                    </div>
                    <div className="Product-details">
                        <div className="Product-name-container">
                            <h5 className="text-center">{this.props.ProductName}</h5>
                        </div>
                        <div className="Product-buy-ops">
                            <span className="Product-price">{this.props.ProductPrice} AZN</span>
                            <button><img src={require("../assets/img/bag.png")} alt="Add to basket"/></button>
                        </div>
                    </div>
                </NavLink>
            </div>
        );
    }
}

export default ProductCard;