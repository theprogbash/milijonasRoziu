import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import './MainPage.css';
import '../common/ProductCard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import ProductCard from '../common/ProductCard';
import PageName from '../common/PageName';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class MainPage extends Component {
    render() {
        var settings = {
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000
        };
        return (
            <div className="Main-page">
                <header className="Main-page-header">
                    <div className="container">
                        <ScrollAnimation className="Slider-box" animateIn="slideInLeft">
                            <Slider {...settings}>
                                <div className="Slider-box-content">
                                    <h4>Flowers</h4>
                                    <h4>Choose from the most beatiful flowers</h4>
                                    <button>Go to the catalogue</button>
                                </div>
                                <div className="Slider-box-content">
                                    <h4>Gifts</h4>
                                    <h4>Choose from the most beatiful gifts</h4>
                                    <button>Go to the catalogue</button>
                                </div>
                            </Slider>
                        </ScrollAnimation>
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
                                <ScrollAnimation className="col-lg-6 col-md-12 col-12" animateIn="fadeInLeft">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-6">
                                            <ProductCard ProductName={"Cherry Lady"} ProductPrice={"250.00"} ProductImgSrc={require('../assets/img/flower1.jpg')} />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-6">
                                            <ProductCard ProductName={"Constellation"} ProductPrice={"400.00"} ProductImgSrc={require('../assets/img/flower2.jpg')} />
                                        </div>
                                    </div>
                                </ScrollAnimation>
                                <ScrollAnimation className="col-lg-6 col-md-12 col-12" animateIn="fadeInRight">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-6">
                                            <ProductCard ProductName={"Constellation"} ProductPrice={"400.00"} ProductImgSrc={require('../assets/img/flower2.jpg')} />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-6">
                                            <ProductCard ProductName={"August Birth"} ProductPrice={"410.00"} ProductImgSrc={require('../assets/img/flower3.jpg')} />
                                        </div>
                                    </div>
                                </ScrollAnimation>
                                <ScrollAnimation className="col-lg-6 col-md-12 col-12" animateIn="fadeInLeft">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-6">
                                            <ProductCard ProductName={"Cherry Lady"} ProductPrice={"250.00"} ProductImgSrc={require('../assets/img/flower1.jpg')} />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-6">
                                            <ProductCard ProductName={"Constellation"} ProductPrice={"400.00"} ProductImgSrc={require('../assets/img/flower2.jpg')} />
                                        </div>
                                    </div>
                                </ScrollAnimation>
                                <ScrollAnimation className="col-lg-6 col-md-12 col-12" animateIn="fadeInRight">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-6">
                                            <ProductCard ProductName={"Constellation"} ProductPrice={"400.00"} ProductImgSrc={require('../assets/img/flower2.jpg')} />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-6">
                                            <ProductCard ProductName={"August Birth"} ProductPrice={"410.00"} ProductImgSrc={require('../assets/img/flower3.jpg')} />
                                        </div>
                                    </div>
                                </ScrollAnimation>
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
                            <ScrollAnimation animateIn="flipInX">
                                <div className="Product-bottom-img1"></div>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="flipInX">
                                <div className="Product-bottom-img2"></div>
                            </ScrollAnimation>
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
                                <Slider {...settings}>
                                    <ScrollAnimation  animateIn="slideInLeft">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-6">
                                                <ProductCard ProductImgSrc={require("../assets/img/flower5.jpg")} ProductName={"Giselle"} ProductPrice={"408.00"} />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-6">
                                                <ProductCard ProductImgSrc={require("../assets/img/flower6.jpg")} ProductName={"Royal"} ProductPrice={"750.00"} />
                                            </div>
                                        </div>  
                                    </ScrollAnimation>
                                    <ScrollAnimation  animateIn="slideInLeft">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-6">
                                                <ProductCard ProductImgSrc={require("../assets/img/flower5.jpg")} ProductName={"Giselle"} ProductPrice={"408.00"} />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-6">
                                                <ProductCard ProductImgSrc={require("../assets/img/flower6.jpg")} ProductName={"Royal"} ProductPrice={"750.00"} />
                                            </div>
                                        </div>  
                                    </ScrollAnimation>
                                </Slider>
                            </div>
                            <ScrollAnimation className="col-lg-6 col-md-12 col-sm-12" animateIn="slideInRight">
                                <div className="Best-seller ml-5"></div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
                <div className="Follow-section">
                    <div className="Follow-section-header text-center">
                        <ScrollAnimation animateIn="fadeIn"><p>Follow us on Instagram</p></ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn"><p>@milijonasroziu</p></ScrollAnimation>
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
            </div>
        );
    }
}

export default MainPage;