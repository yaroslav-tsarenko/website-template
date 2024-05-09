import React from 'react';
import HeaderComponent from "../../components/header/HeaderComponent";
import FooterComponent from "../../components/footer/FooterComponent";
import CreditContainerListing from "../../components/credit-container-listing/CreditContainerListing";

const CreditPage = () => {
    return (
        <>
            <HeaderComponent/>
            <CreditContainerListing/>
            <FooterComponent/>
        </>
    );
};

export default CreditPage;