import React, { Component } from 'react';
import './MainPage.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

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
                                <h5>New Products</h5>
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
                                <div className="Product-bottom-img1"></div>
                            </div>
                            <div>
                                <div className="Product-bottom-img2"></div>
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
                                        <span><FontAwesomeIcon icon={faChevronLeft}/></span>
                                        <span><FontAwesomeIcon icon={faChevronRight}/></span>
                                    </div>
                                </nav>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm12">
                                    <div className="Product-card">
                                        <div className="Product-img-container">
                                            <div className="New-badge">New</div>
                                            <img src={require("../assets/img/flower5.jpg")} alt="Cherry Lady"/>
                                            <div className="Product-card-overlay">
                                                <button className="Like-btn"><img src={require("../assets/img/heart.png")} alt="Love It"/></button>
                                                <button className="Add-btn"><img src={require("../assets/img/bucket-black.png")} alt="Add to basket"/></button>
                                            </div>
                                        </div>
                                        <div className="Product-details">
                                            <div className="Product-name-container">
                                                <h5 className="text-center">Giselle</h5>
                                            </div>
                                            <div className="Product-buy-ops">
                                                <span className="Product-price">408.00 AZN</span>
                                                <button><img src={require("../assets/img/bag.png")} alt="Add to basket"/></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    <div className="col-lg-6 col-md-6 col-sm12">
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
                                                <h5 className="text-center">Royal Composition</h5>
                                            </div>
                                            <div className="Product-buy-ops">
                                                <span className="Product-price">750.00 AZN</span>
                                                <button><img src={require("../assets/img/bag.png")} alt="Add to basket"/></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="Best-seller"></div>
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
                        <img src={require("../assets/img/cover.png")} alt="Image not found :/"/>
                    </div>
                </div>
                <div className="Subscribe-section">
                    <div className="Subscribe-box">
                        <div className="Left-subscribe-box">
                            <h5>Subscribe to newsletters</h5>
                            <div className="Subscribe-box-inputs">
                                <input type="email" placeholder="Email"/>
                                <button className="Email-sub-button">
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </button>
                            </div>
                        </div>
                        <div className="Right-subscribe-box">
                            <div className="Deliver-img-container">
                                <img src={require("../assets/img/deliver.png")} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPage;