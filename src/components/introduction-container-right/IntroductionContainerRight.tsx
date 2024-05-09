import React, { FC } from 'react';
import './IntroductionContainerRight.css';

interface IntroductionContainerRightProps {
    title?: string;
    introductionText: string[]; // Changed to array of strings
    buttonText: string;
    image: string;
}

const IntroductionContainerRight: FC<IntroductionContainerRightProps> = ({ title, introductionText, buttonText, image }) => {
    return (
        <div className="introduction-right-container-wrapper">
            <div className="introduction-right-container">
                <section>
                    <h1>{title}</h1>
                    {introductionText.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                    <button>{buttonText}</button>
                </section>
                <img src={image} alt={title}/>
            </div>
        </div>
    );
};

export default IntroductionContainerRight;
