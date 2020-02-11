import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import './MainPage.css';
import '../common/ProductCard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import ProductCard from '../common/ProductCard';
import PageName from '../common/PageName';

import { slideInLeft, slideInRight, flipInX } from 'react-animations';
const styles = {
    slideInLeft: {
        animation: 'x 1s',
        animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
    },
    slideInRight: {
        animation: 'x 1s',
        animationName: Radium.keyframes(slideInRight, 'slideInRight')
    },
    flipInX: {
        animation: 'x 1s',
        animationName: Radium.keyframes(flipInX, 'flipInX')
    }
}

class MainPage extends Component {
    render() {
        return (
            <StyleRoot className="Main-page">
                <header className="Main-page-header">
                    <div className="container">
                        <div className="Slider-box" style={styles.slideInLeft}>
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
                            <PageName currentPage="Flowers and Gifts" />
                        </header>
                        <nav className="Products-nav">
                            <div className="Left-nav">
                                <h5>New Products</h5>
                                <div className="Header-wrapper"></div>
                            </div>
                            <div className="Right-nav">
                                <span><FontAwesomeIcon icon={faChevronLeft} /></span>
                                <span><FontAwesomeIcon icon={faChevronRight} /></span>
                            </div>
                        </nav>
                        <div className="Products-content-slider">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-12" style={styles.slideInLeft}>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-6">
                                            <ProductCard ProductName={"Cherry Lady"} ProductPrice={"250.00"} ProductImgSrc={require('../assets/img/flower1.jpg')} />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-6">
                                            <ProductCard ProductName={"Constellation"} ProductPrice={"400.00"} ProductImgSrc={require('../assets/img/flower2.jpg')} />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-6">
                                            <ProductCard ProductName={"August Birth"} ProductPrice={"260.00"} ProductImgSrc={require('../assets/img/flower3.jpg')} />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-6">
                                            <ProductCard ProductName={"Cherry Lady"} ProductPrice={"250.00"} ProductImgSrc={require('../assets/img/flower1.jpg')} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-12" style={styles.slideInRight}>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-6">
                                            <ProductCard ProductName={"Constellation"} ProductPrice={"400.00"} ProductImgSrc={require('../assets/img/flower2.jpg')} />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-6">
                                            <ProductCard ProductName={"August Birth"} ProductPrice={"410.00"} ProductImgSrc={require('../assets/img/flower3.jpg')} />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-6">
                                            <ProductCard ProductName={"Cherry Lady"} ProductPrice={"250.00"} ProductImgSrc={require('../assets/img/flower1.jpg')} />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-6">
                                            <ProductCard ProductName={"Constellation"} ProductPrice={"400.00"} ProductImgSrc={require('../assets/img/flower2.jpg')} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Products-bottom">
                            <div>
                                <section>
                                    <h5>Flowers</h5>
                                    <p className="Products-bottom-description">The most striking events in life, never do without flowers, compliments and gifts! We present to you our new collection of original presents and stunning gift ideas that will definitely appeal to everyone: mom, grandmother, wife, daughter, sister, girlfriend and beloved half! We guarantee a sea of emotions and delight!</p>
                                    <button className="Read-more">Read More</button>
                                </section>
                            </div>
                            <div>
                                <div className="Product-bottom-img1" style={styles.flipInX}></div>
                            </div>
                            <div>
                                <div className="Product-bottom-img2" style={styles.flipInX}></div>
                            </div>
                            <div>
                                <section>
                                    <h5>Gifts</h5>
                                    <p className="Products-bottom-description">Our gifts are made of stunning and original ideas. Gifts are for you and your family's closest family members: fathers, mothers, grandfathers, grandmothers, sisters, brothers, and your beloved. Our professional team can help you choose gifts.</p>
                                    <button className="Read-more">Read More</button>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Best-sellers">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <nav className="Products-nav">
                                    <div className="Left-nav">
                                        <h5>Best Seller</h5>
                                        <div className="Header-wrapper"></div>
                                    </div>
                                    <div className="Right-nav">
                                        <span><FontAwesomeIcon icon={faChevronLeft} /></span>
                                        <span><FontAwesomeIcon icon={faChevronRight} /></span>
                                    </div>
                                </nav>
                                <div className="row" style={styles.slideInLeft}>
                                    <div className="col-lg-6 col-md-6 col-6">
                                        <ProductCard ProductImgSrc={require("../assets/img/flower5.jpg")} ProductName={"Giselle"} ProductPrice={"408.00"} />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-6">
                                        <ProductCard ProductImgSrc={require("../assets/img/flower6.jpg")} ProductName={"Royal"} ProductPrice={"750.00"} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="Best-seller" style={styles.slideInRight}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Follow-section">
                    <div className="Follow-section-header text-center">
                        <p>Follow us on Instagram</p>
                        <p>@milijonasroziu</p>
                    </div>
                    <div className="Follow-section-cover">
                        <img src={require("../assets/img/cover.png")} alt="Image not found :/" />
                    </div>
                </div>
                <div className="Subscribe-section">
                    <div className="Subscribe-box">
                        <div className="Left-subscribe-box">
                            <h5>Subscribe to newsletters</h5>
                            <div className="Subscribe-box-inputs">
                                <input type="email" placeholder="Email" />
                                <button className="Email-sub-button">
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </button>
                            </div>
                        </div>
                        <div className="Right-subscribe-box">
                            <div className="Deliver-img-container">
                                <img src={require("../assets/img/deliver.png")} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </StyleRoot>
        );
    }
}

export default MainPage;