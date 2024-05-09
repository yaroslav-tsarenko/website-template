import React from 'react';
import "./WhyChooseUsContainer.css";
import ArgumentText from "../argument-text/ArgumentText";

const WhyChooseUsContainer = () => {
    return (
        <div className="why-choose-us-container-wrapper">
            <h1>Why Choose Mining Nest?</h1>
            <div className="why-choose-us-container">
                <ArgumentText title="Uncompromising Quality" text="We have built our reputation on uncompromising quality. Our server spaces are equipped with state-of-the-art hardware, providing exceptional performance and reliability, ensuring that your mining operations are never interrupted."/>
                <ArgumentText title="Robust Security" text="We understand the importance of safeguarding your assets. Our servers are housed in secure facilities with multi-layered security measures, including biometric access control and 24/7 surveillance."/>
                <ArgumentText title="24/7 Support" text="Our dedicated support team is available around the clock to assist you. Whether you have technical questions or need help with any aspect of your mining operations, we are here to provide timely and effective solutions."/>
                <ArgumentText title="Cost-Effective Solutions" text="We offer competitive pricing models designed to maximize your return on investment while minimizing operational costs, ensuring that you get the most out of your mining efforts."/>
                <ArgumentText title="Scalability" text="As your mining needs grow, we are ready to scale your infrastructure seamlessly, accommodating increased mining power and helping you achieve your goals."/>
                <ArgumentText title="Diverse Cryptocurrency Support" text="We embrace the diversity of the cryptocurrency world. Our servers support a wide range of cryptocurrencies, allowing you to mine the coins that align best with your objectives."/>
            </div>
        </div>
    );
};

export default WhyChooseUsContainer;