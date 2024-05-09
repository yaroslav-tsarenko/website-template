import React from 'react';
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";
import "./CreditContainerListing.css"
import CreditContainer from "../credit-container/CreditContainer";
import Pagination from "../pagination-component/Pagination";

const CreditContainerListing = () => {
    return (
        <div className="credit-container-listing-wrapper">
            <h1>Credit</h1>
            <div className="credit-container-listing-content">
                <CreditContainer credits={100}/>
                <CreditContainer credits={200}/>
                <CreditContainer credits={300}/>
                <CreditContainer credits={400}/>
                <CreditContainer credits={500}/>
                <CreditContainer credits={600}/>
                <CreditContainer credits={700}/>
                <CreditContainer credits={800}/>
                <CreditContainer credits={900}/>
                <CreditContainer credits={1000}/>
                <CreditContainer credits={1100}/>
                <CreditContainer credits={1200}/>
            </div>
            <Pagination/>
        </div>
    );
};

export default CreditContainerListing;