import React, {FC} from 'react';
import './ProductDetailsText.css';

interface ProductDetailsTextProps {
    title: string;
    description: string[];
}

const ProductDetailsText: FC<ProductDetailsTextProps> = ({title, description}) => {
    return (
        <div className="product-details-container-text">
            <h3>{title}</h3>
            {description.map((description, index) => (
                <li key={index}>{description}</li>
            ))}
        </div>
    );
};

export default ProductDetailsText;