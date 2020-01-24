import React, { Component } from 'react';
import './SearchOverlay.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

class SearchOverlay extends Component{
    render(){
        function CloseOverlay(){
            let SearchOverlay = document.getElementsByClassName("Search-overlay")[0];
            SearchOverlay.style.display = "none";
        }
        return(
            <div className="Search-overlay">
                <div className="Close-overlay-btn">
                    <button className="Close-btn" onClick={CloseOverlay}><FontAwesomeIcon icon={faTimes}/></button>
                </div>
                <form className="Search-form">
                    <input type="text" className="Search-input"/>
                    <button type="submit" className="Search-btn">
                        <FontAwesomeIcon icon={faSearch}/>
                    </button>
                </form>
            </div>
        );
    };
};

export default SearchOverlay;