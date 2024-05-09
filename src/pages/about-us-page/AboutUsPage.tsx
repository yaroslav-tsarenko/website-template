import React from 'react';
import HeaderComponent from "../../components/header/HeaderComponent";
import FooterComponent from "../../components/footer/FooterComponent";
import ContactUsContainer from "../../components/contact-us-container/ContactUsContainer";
import AboutUsContainer from "../../components/about-us-container/AboutUsContainer";
import ProjectMetaContainer from "../../components/project-meta-container/ProjectMetaContainer";
import WhyChooseUsContainer from "../../components/why-choose-us-container/WhyChooseUsContainer";
import JoinUsContainer from "../../components/join-us-container/JoinUsContainer";

const AboutUsPage = () => {
    return (
        <>
            <HeaderComponent/>
            <AboutUsContainer/>
            <ProjectMetaContainer/>
            <WhyChooseUsContainer/>
            <JoinUsContainer/>
            <FooterComponent/>
        </>
    );
};

export default AboutUsPage;