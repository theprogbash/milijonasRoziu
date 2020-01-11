import React, { Component } from 'react';
import './MainPage.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

class MainPage extends Component{
    render(){
        return(
            <div className="Main-page">
                <header className="Main-page-header">
                    <div className="container">
                        <div className="Slider-box">
                            <div className="Slider-box-content">
                                <h4>Flowers</h4>
                                <h4>Choose from the most beatiful flowers</h4>
                                <button>Go to the catalogue</button>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="Products">
                    <div className="container">
                        <header className="Products-header">
                            <h1>Flowers and Gifts</h1>
                        </header>
                        <nav className="Products-nav">
                            <div className="Left-nav">
                                <h4>New Products</h4>
                                <div className="Header-wrapper"></div>
                            </div>
                            <div className="Right-nav">
                                <span><FontAwesomeIcon icon={faChevronLeft}/></span>
                                <span><FontAwesomeIcon icon={faChevronRight}/></span>
                            </div>
                        </nav>
                        <div className="Products-content-slider">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm12">
                                    <div className="Product-card">
                                        <div className="Product-img-container">
                                            <div className="New-badge">New</div>
                                            <img src={require("../assets/img/flower1.jpg")} alt="Cherry Lady"/>
                                            <div className="Product-card-overlay">
                                                <button className="Like-btn"><img src={require("../assets/img/heart.png")} alt="Love It"/></button>
                                                <button className="Add-btn"><img src={require("../assets/img/bucket-black.png")} alt="Add to basket"/></button>
                                            </div>
                                        </div>
                                        <div className="Product-details">
                                            <div className="Product-name-container">
                                                <h5 className="text-center">Cherry Lady</h5>
                                            </div>
                                            <div className="Product-buy-ops">
                                                <span className="Product-price">250.00 AZN</span>
                                                <button><img src={require("../assets/img/bag.png")} alt="Add to basket"/></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm12">
                                    <div className="Product-card">
                                        <div className="Product-img-container">
                                            <div className="New-badge">New</div>
                                            <img src={require("../assets/img/flower2.jpg")} alt="Cherry Lady"/>
                                            <div className="Product-card-overlay">
                                                <button className="Like-btn"><img src={require("../assets/img/heart.png")} alt="Love It"/></button>
                                                <button className="Add-btn"><img src={require("../assets/img/bucket-black.png")} alt="Add to basket"/></button>
                                            </div>
                                        </div>
                                        <div className="Product-details">
                                            <div className="Product-name-container">
                                                <h5 className="text-center">Constellation</h5>
                                            </div>
                                            <div className="Product-buy-ops">
                                                <span className="Product-price">400.00 AZN</span>
                                                <button><img src={require("../assets/img/bag.png")} alt="Add to basket"/></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm12">
                                    <div className="Product-card">
                                        <div className="Product-img-container">
                                            <div className="New-badge">New</div>
                                            <img src={require("../assets/img/flower3.jpg")} alt="Cherry Lady"/>
                                            <div className="Product-card-overlay">
                                                <button className="Like-btn"><img src={require("../assets/img/heart.png")} alt="Love It"/></button>
                                                <button className="Add-btn"><img src={require("../assets/img/bucket-black.png")} alt="Add to basket"/></button>
                                            </div>
                                        </div>
                                        <div className="Product-details">
                                            <div className="Product-name-container">
                                                <h5 className="text-center">August Birth</h5>
                                            </div>
                                            <div className="Product-buy-ops">
                                                <span className="Product-price">50.00 AZN</span>
                                                <button><img src={require("../assets/img/bag.png")} alt="Add to basket"/></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm12">
                                    <div className="Product-card">
                                        <div className="Product-img-container">
                                            <div className="New-badge">New</div>
                                            <img src={require("../assets/img/flower4.jpg")} alt="Cherry Lady"/>
                                            <div className="Product-card-overlay">
                                                <button className="Like-btn"><img src={require("../assets/img/heart.png")} alt="Love It"/></button>
                                                <button className="Add-btn"><img src={require("../assets/img/bucket-black.png")} alt="Add to basket"/></button>
                                            </div>
                                        </div>
                                        <div className="Product-details">
                                            <div className="Product-name-container">
                                                <h5 className="text-center">Youth</h5>
                                            </div>
                                            <div className="Product-buy-ops">
                                                <span className="Product-price">350.00 AZN</span>
                                                <button><img src={require("../assets/img/bag.png")} alt="Add to basket"/></button>
                                            </div>
                                        </div>
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

export default MainPage;