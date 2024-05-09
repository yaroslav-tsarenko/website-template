import React from 'react';
import InfoContainerRight from "../info-right-container/InfoContainerRight";
import ProccesorImage from "../../assets/images/proccesor-image.svg";
import './AboutUsContainer.css';
import ProjectMetaContainer from "../project-meta-container/ProjectMetaContainer";
import WhyChooseUsContainer from "../why-choose-us-container/WhyChooseUsContainer";

const AboutUsContainer = () => {
    return (
        <div className="about-us-wrapper">
            <div className="about-us-content">
                <h1>About Mining Nest</h1>
                <InfoContainerRight
                    text={["At Mining Nest, we are at the forefront of the cryptocurrency mining industry, providing cutting-edge server spaces and comprehensive solutions to crypto enthusiasts, miners, and investors around the world. Our journey began with a vision: to empower individuals and businesses to harness the potential of blockchain technology, secure their financial futures, and be part of the exciting and dynamic world of cryptocurrency mining. Our core mission is simple yet powerful. We're committed to making cryptocurrency mining accessible, profitable, and hassle-free for everyone. We firmly believe in the democratization of this innovative sector, offering individuals the opportunity to participate and thrive in the blockchain revolution. We are dedicated to providing the highest quality server infrastructure, unparalleled support, and an exceptional user experience.",
                        "What sets Mining Nest apart is our unwavering commitment to quality. We've cultivated our reputation by refusing to compromise. Our server spaces feature the latest state-of-the-art hardware, delivering exceptional performance and unwavering reliability to ensure your mining operations are never disrupted.",
                        "Security is paramount in the crypto world, and we take it seriously. Our servers are housed in secure facilities with multi-layered security measures, including biometric access control and 24/7 surveillance, guaranteeing that your assets are safe and protected."]}
                    image={ProccesorImage}/>
            </div>
        </div>
    );
};

export default AboutUsContainer;