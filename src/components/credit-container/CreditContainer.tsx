import React, {FC} from 'react';
import "./CreditContainer.css";

interface CreditContainerProps {
    credits: number;
}

const CreditContainer: FC<CreditContainerProps> = ({credits}) => {
    return (
        <div className="credit-container-wrapper">
            <div className="credit-container-frame">
                <h1>{credits}</h1>
            </div>
            <div className="credit-container-credentials">
                <h2>{credits} Credits</h2>
                <h4>${credits}</h4>
                <button>Buy Now</button>
            </div>
        </div>
    );
};

export default CreditContainer;