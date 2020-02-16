import React, { Component } from 'react';
import './Product.css';
import Breadcrumb from '../common/Breadcrumb';
import { GlassMagnifier } from "react-image-magnifiers";
import ProductCard from "../common/ProductCard";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 1,
            show: true
        };
    }

    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
    }

    DecreaseItem = () => {
        this.setState({ clicks: this.state.clicks - 1 });
        if (this.state.clicks == 1) {
            this.setState({
                clicks: 1
            });
        }
    }

    render() {
        function changeImg(e) {
            let mainImg = document.querySelector("img[alt='Product-main-img']");;
            let thumbSrc = e.target.getAttribute("src");
            mainImg.setAttribute("src", thumbSrc);
        }
        function openAbout(e){
            var productDesc = document.getElementById("Description");
            var productAbout = document.getElementById("About");
            e.preventDefault();
            productAbout.setAttribute("class", "d-block");
            productDesc.setAttribute("class", "d-none");
        }
        function openDesc(e){
            var productDesc = document.getElementById("Description");
            var productAbout = document.getElementById("About");
            e.preventDefault();
            productAbout.setAttribute("class", "d-none");
            productDesc.setAttribute("class", "d-block");
        }
        return (
            <div className="Product">
                <div className="container">
                    <Breadcrumb currentPage="Catalog > Gifts > Accessory" />
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-5">
                            {/* <img src={require("../assets/img/gift.jpg")} alt="Gift" className="Product-img"/> */}
                            <GlassMagnifier square={true} magnifierSize={"40%"} imageSrc={require("../assets/img/gift.jpg")} imageAlt="Product-main-img" className="Product-img" />
                            <div className="Product-images">
                                <div className="Product-thumbnail">
                                    <img src={require("../assets/img/gift.jpg")} alt="Gift" className="Product-thumbnail-img" onClick={changeImg} />
                                </div>
                                <div className="Product-thumbnail">
                                    <img src={require("../assets/img/gift2.jpg")} alt="Gift" className="Product-thumbnail-img" onClick={changeImg} />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-7 pl-5 pt-3">
                            <h4 className="Product-name">Accessory</h4>
                            <p className="Product-price">3.00 <span>AZN</span></p>
                            <div className="Buy-options d-flex align-items-center">
                                <div className="Counter mr-3">
                                    <div className="Decrement Ctrl-btn" onClick={this.DecreaseItem}>-</div>
                                    <div className="Count">
                                        <div className="Count-num">{this.state.show ? <span>{this.state.clicks}</span> : ''}</div>
                                    </div>
                                    <div className="Increment Ctrl-btn" onClick={this.IncrementItem}>+</div>
                                </div>
                                <button className="Buy-btn mr-3">Buy</button>
                                <span>in stock</span>
                            </div>
                        </div>
                    </div>
                    <div className="Product-info">
                        <ul className="Nav-pills">
                            <div className="Line"></div>
                            <li>
                                <a href="#" id="Open-desc" onClick={openDesc}>Description</a>
                            </li>
                            <li>
                                <a href="#" id="Open-about" onClick={openAbout}>About</a>
                            </li>
                        </ul>
                        <div className="Product-info-content">
                            <div id="Description">
                                <span>Price: 3.00 AZN</span>
                            </div>
                            <div id="About" className="d-none">
                                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque laboriosam accusamus dolores quidem necessitatibus ab. At eos quis architecto ad exercitationem voluptatibus quibusdam dolor asperiores nobis? Temporibus quas nihil dignissimos.</span>
                            </div>
                        </div>
                    </div>
                    <div className="Recently-product">
                        <div className="Recently-product-header">
                            <h5>Best Seller</h5>
                            <div className="Header-wrapper"></div>
                        </div>
                        <div className="row ProductList">
                                <div className="col-sm-12 col-md-12 col-lg-3">
                                    <ProductCard ProductName={"The Autumn Leaves"} ProductPrice={"250.00"} ProductImgSrc={require('../assets/img/flower1.jpg')}/>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-3">
                                    <ProductCard ProductName={"The Autumn Leaves"} ProductPrice={"250.00"} ProductImgSrc={require('../assets/img/flower1.jpg')}/>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-3">
                                    <ProductCard ProductName={"The Autumn Leaves"} ProductPrice={"250.00"} ProductImgSrc={require('../assets/img/flower1.jpg')}/>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-3">
                                    <ProductCard ProductName={"The Autumn Leaves"} ProductPrice={"250.00"} ProductImgSrc={require('../assets/img/flower1.jpg')}/>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;