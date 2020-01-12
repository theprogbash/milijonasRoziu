import React, { Component } from 'react';
import './GiftWrapping.css';
import Breadcrumb from '../common/Breadcrumb';
import PageName from '../common/PageName';
import Pagination from '../common/Pagination';

class GiftWrapping extends Component{
    render(){
        return(
            <div className="Gift-wrapping">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-12 col-sm-12">
                            <Breadcrumb currentPage="Gift Wrapping"/>
                            <PageName currentPage="Gift Wrapping"/>
                            <span>No products found for this category</span>
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GiftWrapping;