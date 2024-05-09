import React from 'react';
import HeaderComponent from "../../components/header/HeaderComponent";
import IntroductionContainerRight from "../../components/introduction-container-right/IntroductionContainerRight";
import serverImage from "../..//assets/images/server-image.svg";
import introductionImage1 from "../..//assets/images/introduction-image1.svg";
import introductionImage2 from "../..//assets/images/introduction-image2.svg";
import introductionImage3 from "../..//assets/images/introduction-image3.svg";
import BenefitsSection from "../../components/benefits-section/BenefitsSection";
import ProductPreviewShortListing from "../../components/product-preview-short-listing/ProductPreviewShortListing";
import IntroductionContainerLeft from "../../components/introduction-container-left/IntroductionContainerLeft";
import MainBenefits from "../../components/main-benefits-section/MainBenefits";
import SubscribeNewsletter from "../../components/subscribe-newsletter/SubscribeNewsletter";
import FooterComponent from "../../components/footer/FooterComponent";

const HomePage = () => {
    return (
        <>
            <HeaderComponent/>
            <IntroductionContainerRight
                title="Elevate Your Mining Game with Us"
                introductionText={[
                    "Experience next-level crypto mining like never before. Our dedicated server spaces provide the perfect environment to maximize your profits. Join the crypto revolution with us today. "
                ]}
                buttonText="Get Started Now"
                image={serverImage}/>
            <BenefitsSection
                firstBenefit="Crypto Server Sales"
                secondBenefit="Server Configuration"
                thirdBenefit="Consultation and Support"/>
            <ProductPreviewShortListing title="Our Featured Servers" buttonsEnabled={true}/>
            <IntroductionContainerRight
                title="Our Outstanding Features Set Us Apart"
                introductionText={[
                    "At Mining Nest, we take pride in offering a comprehensive suite of features that set us apart as a leader in the crypto mining industry. Our commitment to excellence and innovation ensures that you have all the tools you need to succeed in the world of cryptocurrency mining.",
                    "Our high-performance servers are at the heart of our service. They are equipped with cutting-edge hardware, boasting impressive hash rates and power efficiency. This means you can mine your favorite cryptocurrencies with confidence, knowing that you are using the most advanced infrastructure available."
                ]}
                buttonText="Get Started"
                image={introductionImage1}
            />
            <IntroductionContainerLeft
                title="Unwavering Security and Reliability You Can Trust"
                introductionText={[
                    "At Mining Nest, we prioritize the security and reliability of our servers above all else. We understand that in the world of cryptocurrency mining, safeguarding your assets and ensuring uninterrupted operations are paramount.",
                    "Our commitment to security begins with our state-of-the-art facilities. Our servers are housed in secure environments with multiple layers of protection. We employ the latest in physical security measures, including biometric access control and 24/7 surveillance to prevent unauthorized access.",
                    "Reliability is equally crucial to us. We've invested in redundant power and cooling systems to ensure that your mining operations continue without interruption. Even in the face of unexpected challenges, our infrastructure is designed to keep your mining hardware running smoothly."
                ]}
                buttonText="Get Started"
                image={introductionImage2}
            />
            <IntroductionContainerRight
                title="Unparalleled Robustness for Consistent Mining Performance"
                introductionText={[
                    "At Mining Nest, we take pride in the exceptional robustness of our servers, ensuring consistent and unwavering mining performance for our clients. We understand that in the world of cryptocurrency mining, even a momentary lapse in performance can translate to missed opportunities and potential financial losses.",
                    "Our servers are built to withstand the most demanding mining operations. Equipped with cutting-edge hardware and meticulous design, they offer the highest levels of reliability and resilience. Our robust infrastructure minimizes the risk of downtime, even in the face of heavy workloads or unforeseen challenges.",
                    "With us, you can count on the continuous, stable operation of your mining hardware. Our commitment to robustness means you can focus on growing your mining portfolio and maximizing your profits with confidence. When you choose us, you're choosing a partner dedicated to providing you with the dependable server solutions needed for long-term success in the cryptocurrency mining industry."
                ]}
                buttonText="Get Started"
                image={introductionImage3}
            />
            <MainBenefits firstBenefitTitle="3000+"
                          firstBenefitText="Serving thousands of satisfiedusers in 67 countries worldwide"
                          secondBenefitTitle="99,9%"
                          secondBenefitText="server Uptime of our Crypto Servers"
                          thirdBenefitTitle="500M+"
                          thirdBenefitText="worth of assets secured by our crypto servers"
                          fourthBenefitTitle="100%"
                          fourthBenefitText="Our user satisfaction rate for Quality Services"
            />
            <SubscribeNewsletter
                newsLetterTitle="Stay Informed with Our Newsletter"
                newsLetterSubTitle="Don't miss out on the latest updates, insights, and news from Mining Nest.
                Subscribe to our newsletter and stay connected with the ever-evolving world of cryptocurrency mining.
                 By subscribing, you'll receive exclusive content, expert tips, and industry trends right in your inbox."/>
            <FooterComponent/>
        </>
    );
};

export default HomePage;