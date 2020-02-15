import React, { Component } from 'react';
import './Product.css';
import Breadcrumb from '../common/Breadcrumb';

class Product extends Component{
    constructor(props) {
        super(props);
        this.state = {
          clicks:1,
            show:true
        };
    }

    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
    }

    DecreaseItem = () => {
        this.setState({ clicks: this.state.clicks - 1 });
        if(this.state.clicks == 1){
            this.setState({
                clicks:1
            });
        }
    }

    render(){
        return(
            <div className="Product">
                <div className="container">
                    <Breadcrumb currentPage="Catalog > Gifts > Accessory" />
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-5">
                            <img src={require("../assets/img/gift.jpg")} alt="Gift" className="Product-img"/>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-7 pl-5 pt-3">
                            <h4 className="Product-name">Accessory</h4>
                            <p className="Product-price">3.00 <span>AZN</span></p>
                            <div className="Buy-options d-flex align-items-center">
                                <div className="Counter mr-3">
                                    <div className="Decrement Ctrl-btn" onClick={this.DecreaseItem}>-</div>
                                    <div className="Count">
                                        <div className="Count-num">{ this.state.show ? <span>{ this.state.clicks }</span> : '' }</div>
                                    </div>
                                    <div className="Increment Ctrl-btn" onClick={this.IncrementItem}>+</div>
                                </div>
                                <button class="Buy-btn mr-3">Buy</button>
                                <span>in stock</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;