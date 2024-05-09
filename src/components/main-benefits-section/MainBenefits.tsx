import React, {FC} from 'react';
import './MainBenefits.css';

interface MainBenefitsProps {
    firstBenefitTitle: string;
    firstBenefitText: string;
    secondBenefitText: string;
    secondBenefitTitle: string;
    thirdBenefitText: string;
    thirdBenefitTitle: string;
    fourthBenefitText: string;
    fourthBenefitTitle: string;
}

const MainBenefits: FC<MainBenefitsProps> = ({firstBenefitTitle,  firstBenefitText, secondBenefitTitle, secondBenefitText, thirdBenefitTitle, thirdBenefitText, fourthBenefitTitle, fourthBenefitText}) => {
    return (
        <div className="main-benefits-wrapper">
            <div className="main-benefits">
                <section className="benefit-section">
                    <h1>{firstBenefitTitle}</h1>
                     <p>{firstBenefitText}</p>
                </section>
                <section className="benefit-section">
                    <h1>{secondBenefitTitle}</h1>
                     <p>{secondBenefitText}</p>
                </section>
                <section className="benefit-section">
                    <h1>{thirdBenefitTitle}</h1>
                     <p>{thirdBenefitText}</p>
                </section>
                <section className="benefit-section">
                    <h1>{fourthBenefitTitle}</h1>
                     <p>{fourthBenefitText}</p>
                </section>
            </div>
        </div>
    );
};

export default MainBenefits;