import React from 'react';
import HeaderComponent from "../../components/header/HeaderComponent";
import FooterComponent from "../../components/footer/FooterComponent";
import ProductsListing from "../../components/products-listing/ProductsListing";

const ProductListingPage = () => {
    return (
        <>
         <HeaderComponent/>
            <ProductsListing/>
         <FooterComponent/>
        </>
    );
};

export default ProductListingPage;