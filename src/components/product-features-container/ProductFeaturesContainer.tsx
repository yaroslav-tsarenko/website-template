import React from 'react';
import './ProductFeaturesContainer.css';
import ProductFeaturesText from "../product-features-text/ProductFeaturesText";

const ProductFeaturesContainer = () => {
    return (
        <div className="product-features-container-wrapper">
            <h2>Server Features</h2>
            <div className="product-features-container">
                <ProductFeaturesText title="Uptime Guarantee" text="We ensure maximum uptime for your mining operations by implementing redundancy across our infrastructure. In the event of unexpected downtime, our systems automatically switch to backup resources."/>
                <ProductFeaturesText title="Robust Data Centers" text="Your systems will be hosted in our state-of-the-art data centers, equipped with advanced cooling, redundant power supplies, and cutting-edge security measures to ensure maximum uptime and data protection."/>
                <ProductFeaturesText title="Scalability-Focused Design" text="Easily scale your hosting resources to accommodate growth. Whether you're expanding your operations or need additional capacity for peak demand periods, our flexible solutions have you covered."/>
                <ProductFeaturesText title="Low Latency Connectivity" text="Benefit from low-latency, high-speed connectivity to ensure smooth and responsive access to your servers, critical for latency-sensitive applications and services."/>
                <ProductFeaturesText title="Enhanced Security" text="Our server spaces are equipped with state-of-the-art security measures to safeguard your mining equipment and digital assets with advanced access control, surveillance, etc."/>
                <ProductFeaturesText title="24/7 Technical Support" text="Our expert support team is available around the clock to assist with any server-related issues, ensuring your systems are always running optimally."/>
                <ProductFeaturesText title="Customization Options" text="Tailor your hosting package to match your specific needs. Choose from a range of configurations, including CPU, RAM, storage, and bandwidth, to create a solution that aligns perfectly with your requirements."/>
                <ProductFeaturesText title="High-Powered Infrastructure" text="Our hosting package is optimized for 1000-1500W systems, providing the necessary power and resources to handle demanding workloads and applications."/>
            </div>
        </div>
    );
};

export default ProductFeaturesContainer;