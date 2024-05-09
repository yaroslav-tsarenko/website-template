import React from 'react';
import HeaderComponent from "../../components/header/HeaderComponent";
import ContactUsContainer from "../../components/contact-us-container/ContactUsContainer";
import FooterComponent from "../../components/footer/FooterComponent";

const ContactPage = () => {
    return (
        <>
            <HeaderComponent/>
            <ContactUsContainer/>
            <FooterComponent/>
        </>
    );
};

export default ContactPage;