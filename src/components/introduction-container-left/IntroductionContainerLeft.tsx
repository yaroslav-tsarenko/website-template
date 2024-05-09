import React, { FC } from 'react';
import './IntroductionContainerLeft.css';

interface IntroductionContainerLeftProps {
    title: string;
    introductionText: string[]; // Changed to array of strings
    buttonText: string;
    image: string;
}

const IntroductionContainerRight: FC<IntroductionContainerLeftProps> = ({ title, introductionText, buttonText, image }) => {
    return (
        <div className="introduction-left-container-wrapper">
            <div className="introduction-left-container">
                <img src={image} alt={title}/>
                <section>
                    <h1>{title}</h1>
                    {introductionText.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                    <button>{buttonText}</button>
                </section>
            </div>
        </div>
    );
};

export default IntroductionContainerRight;
