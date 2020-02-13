import React, { Component } from 'react';
import SearchOverlay from '../common/SearchOverlay';
import './Header.css';
import logo from '../assets/img/logo.png';
import {
    NavLink,
    withRouter
} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faBars } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import $ from 'jquery';
window.$ = $;

class Header extends Component {
    constructor(props) {
        super(props);
        this._toggleDiv = this._toggleDiv.bind(this);
    }

    _toggleDiv() {
        $(this.refs['toggle-div']).toggle("slow");
    }

    render() {
        var settings = {
            infinite: true,
            arrows: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: true
        };

        function ShowSearchOverlay(e) {
            e.preventDefault();
            let SearchOverlay = document.getElementsByClassName("Search-overlay")[0];
            SearchOverlay.style.display = "flex";
        }

        $(".Sub-menu a").click(function () {
            $(".Sub-menu").hide("slow");
        });

        /* function ShowSubMenu() {
            let subMenu = document.getElementsByClassName("Sub-menu")[0];
            subMenu.style.transition = ".3s ease";
            subMenu.classList.toggle("d-block");
        } */

        return (
            <div className="Header">
                <SearchOverlay />
                <header className="Pc-nav">
                    <div className="container">
                        <div className="Header-top">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-12 logo-container">
                                    <NavLink to={"/home"}>
                                        <img src={logo} alt="Milijonas Roziu" />
                                    </NavLink>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 Media">
                                    <div>
                                        <img src={require('../assets/img/delivery.png')} alt="" />
                                    </div>
                                    <div className="Media-text">
                                        <h6>Delivery</h6>
                                        <p>Completely free within the <br />city</p>
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
                                        <NavLink to={"/home"} activeClassName="active-nav-element" className="Nav-element">Main Page</NavLink>
                                    </li>
                                    {/* <li>
                                            <NavLink to={"/catalog"} activeClassName="active-nav-element" className="Nav-element">Catalog</NavLink>
                                        </li> */}
                                    <li>
                                        <NavLink to={"/contact"} activeClassName="active-nav-element" className="Nav-element">Contact</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"/giftwrapping"} activeClassName="active-nav-element" className="Nav-element">Gift Wrapping</NavLink>
                                    </li>
                                    <li className="Dropdown-toggle">
                                        <NavLink to={"/catalog"} activeClassName="active-nav-element" className="Catalog-btn Nav-element">Catalog
                                                <FontAwesomeIcon icon={faChevronDown} />
                                        </NavLink>
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
                                        <img id="NavSearchBtn" onClick={ShowSearchOverlay} src={require('../assets/img/search.png')} alt="" />
                                    </div>
                                    <div className="User">
                                        <img src={require('../assets/img/user.png')} alt="" />
                                        <ul className="Dropdown-user">
                                            <li><NavLink to={"/login"}>Login</NavLink></li>
                                            <li><NavLink to={"/login"}>Register</NavLink></li>
                                            <li><NavLink to={"/wishlist"}>Wishlist</NavLink></li>
                                        </ul>
                                    </div>
                                    <div className="Basket">
                                        <img src={require('../assets/img/bag.png')} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>

                <header className="Tab-nav">
                    <div className="container">
                        <div className="row Header-top d-flex align-items-center">
                            <div className="col-4">
                                <NavLink to={"/home"} >
                                    <img style={{ width: "100%" }} src={logo} alt="Milijonas Roziu" />
                                </NavLink>
                            </div>
                            <div className="col-2"></div>
                            <div className="col-6 pt-3">
                                <Slider {...settings}>
                                    <div className="Media d-flex justify-content-center align-items-center">
                                        <div>
                                            <img src={require('../assets/img/delivery.png')} alt="" />
                                        </div>
                                        <div className="Media-text ml-2">
                                            <h6>Delivery</h6>
                                            <p>Completely free within the <br />city</p>
                                        </div>
                                    </div>
                                    <div className="Media d-flex justify-content-center align-items-center">
                                        <div>
                                            <img src={require('../assets/img/lotus.png')} alt="" />
                                        </div>
                                        <div className="Media-text ml-2">
                                            <h6>Ideal Gift</h6>
                                            <p>Bouquets and gifts</p>
                                        </div>
                                    </div>
                                    <div className="Media d-flex justify-content-center align-items-center">
                                        <div>
                                            <img src={require('../assets/img/operator.png')} alt="" />
                                        </div>
                                        <div className="Media-text ml-2">
                                            <h6>Order by phone</h6>
                                            <p>+994(50)680 08 00</p>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                    <nav className="Header-bottom">
                        <div className="container clearfix">
                            <div className="Left-nav">
                                <ul>
                                    <li>
                                        <NavLink to={"/home"} activeClassName="active-nav-element" className="Nav-element">Main Page</NavLink>
                                    </li>
                                    {/* <li>
                                            <NavLink to={"/catalog"} activeClassName="active-nav-element" className="Nav-element">Catalog</NavLink>
                                        </li> */}
                                    <li>
                                        <NavLink to={"/contact"} activeClassName="active-nav-element" className="Nav-element">Contact</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"/giftwrapping"} activeClassName="active-nav-element" className="Nav-element">Gift Wrapping</NavLink>
                                    </li>
                                    <li className="Dropdown-toggle">
                                        <NavLink to={"/catalog"} activeClassName="active-nav-element" className="Catalog-btn Nav-element">Catalog
                                                <FontAwesomeIcon icon={faChevronDown} />
                                        </NavLink>
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
                                        <img id="NavSearchBtn" onClick={ShowSearchOverlay} src={require('../assets/img/search.png')} alt="" />
                                    </div>
                                    <div className="User">
                                        <img src={require('../assets/img/user.png')} alt="" />
                                        <ul className="Dropdown-user">
                                            <li><a href="#">Login</a></li>
                                            <li><a href="#">Register</a></li>
                                            <li><a href="#">Wishlist</a></li>
                                        </ul>
                                    </div>
                                    <div className="Basket">
                                        <img src={require('../assets/img/bag.png')} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>

                <header className="Mobile-nav">
                    <div className="container">
                        <div className="row Header-top d-flex align-items-center">
                            <div className="col-5">
                                <NavLink to={"/home"}>
                                    <img style={{ width: "100%" }} src={logo} alt="Milijonas Roziu" />
                                </NavLink>
                            </div>
                            <div className="col-1"></div>
                            <div className="col-5 pt-3">
                                <Slider {...settings}>
                                    <div className="Media d-flex justify-content-center align-items-center">
                                        <div className="Media-text text-center">
                                            <h6>Delivery</h6>
                                            <p>Completely free within the city</p>
                                        </div>
                                    </div>
                                    <div className="Media d-flex justify-content-center align-items-center">
                                        <div className="Media-text text-center">
                                            <h6>Ideal Gift</h6>
                                            <p>Bouquets and gifts</p>
                                        </div>
                                    </div>
                                    <div className="Media d-flex justify-content-center align-items-center">
                                        <div className="Media-text text-center">
                                            <h6>Order by phone</h6>
                                            <p>+994(50)680 08 00</p>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                    <nav className="Header-bottom">
                        <div className="container clearfix">
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
                                        <img id="NavSearchBtn" onClick={ShowSearchOverlay} src={require('../assets/img/search.png')} alt="" />
                                    </div>
                                    <div className="User">
                                        <img src={require('../assets/img/user.png')} alt="" />
                                        <ul className="Dropdown-user">
                                            <li><a href="#">Login</a></li>
                                            <li><a href="#">Register</a></li>
                                            <li><a href="#">Wishlist</a></li>
                                        </ul>
                                    </div>
                                    <div className="Basket">
                                        <img src={require('../assets/img/bag.png')} alt="" />
                                    </div>
                                    <div onClick={this._toggleDiv} className="Toggle-menu">
                                        <FontAwesomeIcon style={{ color: "white" }} icon={faBars} />
                                    </div>
                                </div>
                                <div className="Sub-menu" ref="toggle-div">
                                    <ul>
                                        <li>
                                            <NavLink to={"/home"} activeClassName="active-nav-element" className="Nav-element">Main Page</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={"/contact"} activeClassName="active-nav-element" className="Nav-element">Contact</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={"/giftwrapping"} activeClassName="active-nav-element" className="Nav-element">Gift Wrapping</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={"/catalog"} activeClassName="active-nav-element" className="Nav-element">Catalog</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default withRouter(Header);