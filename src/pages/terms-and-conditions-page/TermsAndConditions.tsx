import React from 'react';
import HeaderComponent from "../../components/header/HeaderComponent";
import DocumentContainer from "../../components/document-container/DocumentContainer";
import DocumentFlexDescription from "../../components/document-flex-description/DocumentFlexDescription";
import FooterComponent from "../../components/footer/FooterComponent";

const TermsAndConditions = () => {
    return (
        <>
            <HeaderComponent/>
            <DocumentContainer
                headline="Terms and Conditions"
                subHeadline="Welcome to Mining Nest! These Terms and Conditions (Terms) govern your use of our website,
                 products, and services. By accessing or using any part of our website or services, you agree to abide
                  by these Terms."
                childComponents={[
                    <DocumentFlexDescription
                        title="1. Acceptance of Terms"
                        titleDescription="Please read these Terms carefully before using our services.
                        Your use of our services indicates your acceptance of these Terms and your agreement to comply
                         with them. If you do not agree with any part of these Terms, you may not use our services."
                    />,
                    <DocumentFlexDescription
                        title="2. Use of Services"
                        titleDescription="Please read these Terms carefully before using our services. Your use of our
                        services indicates your acceptance of these Terms and your agreement to comply with them. If you do not agree with any part of these Terms, you may not use our services."
                        subItems={[
                            {
                                subheading: "2.1 Eligibility",
                                description: "We use your information to provide, maintain, and improve our services," +
                                    " including server hosting, customer support, and technical assistance."
                            },
                            {
                                subheading: "2.2 Account Creation",
                                description: "Some of our services may require you to create an account. " +
                                    "You are responsible for maintaining the confidentiality of " +
                                    "your account information and for all activities that occur under your account." +
                                    " You agree to notify us immediately of any unauthorized use of your account."
                            },
                            {
                                subheading: "2.3 Analytics",
                                description: "We use analytics tools to analyze usage patterns and trends, " +
                                    "allowing us to enhance the performance and user experience of our services."
                            },
                        ]}
                    />,
                    <DocumentFlexDescription
                        title="3. Privacy Policy"
                        titleDescription="Our Privacy Policy governs the collection, use, and sharing of
                        your personal information when you use our services. By using our services, you consent to
                        the practices described in our Privacy Policy."
                    />,
                    <DocumentFlexDescription
                        title="4. Intellectual Property"
                        titleDescription="Please read these Terms carefully before using our services.
                        Your use of our services indicates your acceptance of these Terms and your
                        agreement to comply with them. If you do not agree with any part of these Terms,
                        you may not use our services."
                        subItems={[
                            {
                                subheading: "4.1 Ownership",
                                description: "All content, materials, and intellectual property on our website " +
                                    "and within our services are owned or licensed by Mining Nest. You may not use, " +
                                    "reproduce, or distribute any of our content without our express written permission."
                            },
                            {
                                subheading: "4.2 Trademarks",
                                description: " Any trademarks, logos, or service marks displayed on our website are " +
                                    "the property of [Your Company Name] or their respective owners. You may not use these " +
                                    "marks without our prior written consent or the consent of the respective owners."
                            },
                        ]}
                    />,
                    <DocumentFlexDescription
                        title="5. Service Availability"
                        titleDescription="We strive to provide reliable services,
                        but we do not guarantee uninterrupted or error-free operation of our website or services.
                        We reserve the right to modify or discontinue our services at any time without notice."
                    />,
                    <DocumentFlexDescription
                        title="6. User Conduct"
                        titleDescription="You agree to use our services for lawful purposes and in compliance with these
                        Terms. You may not engage in any activity that violates applicable laws or infringes on the rights of others."
                    />,
                    <DocumentFlexDescription
                        title="7. Termination"
                        titleDescription="We reserve the right to terminate or suspend your access to our services at
                        our discretion, without prior notice, for any violation of these Terms or for any other reason."
                    />,
                    <DocumentFlexDescription
                        title="8. Limitation of Liability"
                        titleDescription="To the fullest extent permitted by law, Mining Nest and its affiliates shall
                        not be liable for any direct, indirect, incidental, consequential, or punitive damages arising
                        from your use of our services."
                    />,
                    <DocumentFlexDescription
                        title="9. Governing Law"
                        titleDescription="These Terms are governed by and construed in accordance with the laws of
                    . Any disputes arising from these Terms or your use of our services shall
                         be subject to the exclusive jurisdiction of the courts of law."
                    />,
                    <DocumentFlexDescription
                        title="10. Contact Us"
                        titleDescription="If you have any questions or concerns about these Terms or our services,
                        please contact us at hello@miningnest.com. Thank you for choosing Mining Nest. We hope you
                        enjoy our services and find them valuable for your crypto endeavors."
                    />,
                ]}
            />
            <FooterComponent/>
        </>
    );
};

export default TermsAndConditions;