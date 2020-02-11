import React, { Component } from 'react';
import SearchOverlay from '../common/SearchOverlay';
import './Header.css';
import logo from '../assets/img/logo.png';
import {
    Link, 
    withRouter
} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
    render() {
        function ShowSearchOverlay(e){
            e.preventDefault();
            let SearchOverlay = document.getElementsByClassName("Search-overlay")[0];
            SearchOverlay.style.display = "flex";
        }
        return (
            <div className="Header">
                <SearchOverlay/>
                <header className="Pc-nav">
                    <div className="container">
                        <div className="Header-top">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-12 logo-container">
                                    <img src={logo} alt="Milijonas Roziu" />
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 Media">
                                    <div>
                                        <img src={require('../assets/img/delivery.png')} alt="" />
                                    </div>
                                    <div className="Media-text">
                                        <h6>Delivery</h6>
                                        <p>Completely free within the <br/>city</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 Media">
                                    <div>
                                        <img src={require('../assets/img/lotus.png')} alt="" />
                                    </div>
                                    <div className="Media-text">
                                        <h6>Ideal Gift</h6>
                                        <p>Bouquets and gifts</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 Media">
                                    <div>
                                        <img src={require('../assets/img/operator.png')} alt="" />
                                    </div>
                                    <div className="Media-text">
                                        <h6>Order by phone</h6>
                                        <p>+994(50)680 08 00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav className="Header-bottom">
                        <div className="container clearfix">
                                <div className="Left-nav">
                                    <ul>
                                        <li>
                                            <Link to={"/"} className="active-nav-element">Main Page</Link>
                                        </li>
                                        <li>
                                            <Link to={"/catalog"}>Catalog</Link>
                                        </li>
                                        <li>
                                            <Link to={"/contact"}>Contact</Link>
                                        </li>
                                        <li>
                                            <Link to={"/giftwrapping"}>Gift Wrapping</Link>
                                        </li>
                                        <li className="Dropdown-toggle">
                                            <Link to={"/catalog"} className="Catalog-btn">Catalog 
                                                <FontAwesomeIcon icon={faChevronDown}/>
                                            </Link>
                                            <div className="Catalog-content">
                                                <ul>
                                                    <li><a href="">Gifts</a></li>
                                                    <li><a href="">Newborns</a></li>
                                                    <li><a href="">Bouquets</a></li>
                                                    <li><a href="">Birth Boxes</a></li>
                                                    <li><a href="">Macaroon</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            <div className="Right-nav">
                                <div className="container">
                                    <div className="Language">
                                            <a href="#" className="Current-lang">En</a>
                                            <ul className="Dropdown-language">
                                                <li><a href="#">Az</a></li>
                                                <li><a href="#">Ru</a></li>
                                            </ul>
                                        </div>
                                    <div className="Search">
                                            <img id="NavSearchBtn" onClick={ShowSearchOverlay} src={require('../assets/img/search.png')} alt=""/>
                                        </div>
                                    <div className="User">
                                            <img src={require('../assets/img/user.png')} alt=""/>
                                            <ul className="Dropdown-user">
                                                <li><a href="#">Login</a></li>
                                                <li><a href="#">Register</a></li>
                                                <li><a href="#">Wishlist</a></li>
                                            </ul>
                                        </div>
                                    <div className="Basket">
                                            <img src={require('../assets/img/bag.png')} alt=""/>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
                
                <header className="Tab-nav">

                </header>
                <header className="Mobile-nav">

                </header>
            </div>
        );
    }
}

export default withRouter(Header);