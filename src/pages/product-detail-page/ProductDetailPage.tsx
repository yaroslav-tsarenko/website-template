import React from 'react';
import ServerImage from "../../assets/images/server-specification-image.svg";
import HeaderComponent from "../../components/header/HeaderComponent";
import FooterComponent from "../../components/footer/FooterComponent";
import InfoContainerRight from "../../components/info-right-container/InfoContainerRight";
import ProductDetailsContainer from "../../components/product-details-container/ProductDetailsContainer";
import ProductPreviewShortListing from "../../components/product-preview-short-listing/ProductPreviewShortListing";
import ProductFeaturesContainer from "../../components/product-features-container/ProductFeaturesContainer";
import ProductCredentialsContainer from "../../components/product-credentials-container/ProductCredentialsContainer";
import FaqContainer from "../../components/faq-container/FAQContainer";

const ProductDetailPage = () => {
    return (
        <>
         <HeaderComponent/>
            <ProductCredentialsContainer/>
            <ProductDetailsContainer/>
            <ProductFeaturesContainer/>
            <InfoContainerRight
                text={["Designed to meet the diverse needs of crypto miners, traders, and enthusiasts, our server hosting package is the cornerstone of successful cryptocurrency operations. With state-of-the-art technology, optimal performance, and robust security features, our servers are engineered to ensure your crypto endeavors run seamlessly. Whether you're looking to maximize mining efficiency or require low-latency trading capabilities, our hosting solution provides the flexibility and customization options you need. Join a global community of satisfied users who trust Mining Nest for their crypto hosting needs. It's time to elevate your crypto journey with our top-tier hosting package."]}
                image={ServerImage}
            />
            <FaqContainer/>
            <ProductPreviewShortListing title="Related Products" buttonsEnabled={false}/>
         <FooterComponent/>
        </>
    );
};

export default ProductDetailPage;