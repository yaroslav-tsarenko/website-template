import React from 'react';
import './FAQContainer.css';
import FAQ from "../faq-component/FAQ";

const FaqContainer = () => {
    return (
        <div className="faq-container-wrapper">
            <h1>Frequently Asked Questions </h1>
            <h1>(FAQ)</h1>
            <div className="faq-container-content">
                <FAQ question="What is the download time for the mining software on this server?" answer="The download time for mining software can vary based on your
                internet connection and the specific software you choose. Typically, it should take just a few
                minutes."/>
                <FAQ question="What's the mining capacity of this server?" answer="The mining capacity depends on the hardware specifications and the cryptocurrency you plan to mine. Our servers are optimized for high mining efficiency, and you can choose the configuration that matches your desired capacity."/>
                <FAQ question="Is there a minimum threshold for withdrawal with this mining server?" answer="The withdrawal threshold depends on the cryptocurrency you're mining and the mining pool you join. Be sure to check the specific pool's terms and conditions."/>
                <FAQ question="Can I upgrade the server's hardware to increase mining capacity?" answer="Yes, our servers are designed with upgradability in mind. You can increase mining capacity by upgrading components like GPUs or ASICs as your needs evolve."/>
                <FAQ question="What are the power consumption and cooling requirements for this server?" answer="The power consumption and cooling requirements can vary based on your server's hardware. We provide detailed specifications for each server, including power usage, to help you plan your setup accordingly."/>
                <FAQ question="How often should I perform maintenance on the server for optimal performance?" answer="The power consumption and cooling requirements can vary based on your server's hardware. We provide detailed specifications for each server, including power usage, to help you plan your setup accordingly."/>
            </div>
        </div>
    );
};

export default FaqContainer;