import React, {FC} from 'react';
import './ProductContainer.css';
import {Link} from "react-router-dom";

interface ProductContainerProps {
    productLabel: string;
    productImage: string;
    productTitle: string;
    productSubtitle: string;
    productPrice: string;
}

const ProductContainer: FC<ProductContainerProps> = ({
                                                         productLabel,
                                                         productTitle,
                                                         productSubtitle,
                                                         productPrice,
                                                         productImage,
                                                     }) => {
    return (
        <Link to={"/product-details"} className="product-container-wrapper">
            <img src={productImage} alt="Product Image"/>
            <section>
                <h6>{productLabel}</h6>
                <h2>{productTitle}</h2>
                <p>{productSubtitle}</p>
                <h3>{productPrice}</h3>
            </section>
        </Link>
    );
};

export default ProductContainer;