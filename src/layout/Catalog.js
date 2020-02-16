import React, { Component } from 'react';
import Breadcrumb from '../common/Breadcrumb';
import Categories from '../common/Categories';
import PageName from '../common/PageName';
import ProductCard from '../common/ProductCard';
import Pagination from '../common/Pagination';
import './Catalog.css';

class Catalog extends Component{
    render(){
        return(
            <div className="Catalog">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-12 col-sm-12">
                            <Breadcrumb currentPage="Catalog"/>
                            <PageName currentPage="Catalog"/>
                            <div className="Clearfix">
                                <span>Showing 6 of 50 products</span>
                            </div>
                            <div className="row ProductList">
                                <div className="col-sm-12 col-md-12 col-lg-4">
                                    <ProductCard ProductName={"The Autumn Leaves"} ProductPrice={"250.00"} ProductImgSrc={require('../assets/img/flower1.jpg')}/>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-4">
                                    <ProductCard ProductName={"The Autumn Leaves"} ProductPrice={"250.00"} ProductImgSrc={require('../assets/img/flower1.jpg')}/>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-4">
                                    <ProductCard ProductName={"The Autumn Leaves"} ProductPrice={"250.00"} ProductImgSrc={require('../assets/img/flower1.jpg')}/>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-4">
                                    <ProductCard ProductName={"The Autumn Leaves"} ProductPrice={"250.00"} ProductImgSrc={require('../assets/img/flower1.jpg')}/>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-4">
                                    <ProductCard ProductName={"The Autumn Leaves"} ProductPrice={"250.00"} ProductImgSrc={require('../assets/img/flower1.jpg')}/>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-4">
                                    <ProductCard ProductName={"The Autumn Leaves"} ProductPrice={"250.00"} ProductImgSrc={require('../assets/img/flower1.jpg')}/>
                                </div>
                            </div>
                            <Pagination />
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12">
                            <Categories />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Catalog;