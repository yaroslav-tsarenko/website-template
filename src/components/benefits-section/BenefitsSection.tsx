import React, {FC} from 'react';
import './BenefitsSection.css';
import { IoMdCheckmark } from "react-icons/io";

interface BenefitsSectionProps {
    firstBenefit: string;
    secondBenefit: string;
    thirdBenefit: string;
}

const BenefitsSection: FC<BenefitsSectionProps> = ({ firstBenefit, secondBenefit, thirdBenefit }) => {
    return (
        <div className="benefits-section-wrapper">
            <div className="benefits-section">
                <p><IoMdCheckmark className="benefits-section-icon" size={38}/>{firstBenefit}</p>
                <p><IoMdCheckmark className="benefits-section-icon" size={38}/>{secondBenefit}</p>
                <p><IoMdCheckmark className="benefits-section-icon" size={38}/>{thirdBenefit}</p>
            </div>
        </div>
    );
};

export default BenefitsSection;