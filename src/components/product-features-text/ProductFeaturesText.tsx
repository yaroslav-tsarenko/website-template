import React, {FC} from 'react';
import './ProductFeaturesText.css';

interface ProductFeaturesTextProps {
    title?: string;
    text?: string;
}

const ProductFeaturesText: FC<ProductFeaturesTextProps> = ({title, text}) => {
    return (
        <div className="product-features-container-text">
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    );
};

export default ProductFeaturesText;