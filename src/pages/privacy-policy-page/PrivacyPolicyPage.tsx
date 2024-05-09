import React from 'react';
import HeaderComponent from "../../components/header/HeaderComponent";
import FooterComponent from "../../components/footer/FooterComponent";
import DocumentContainer from "../../components/document-container/DocumentContainer";
import DocumentFlexDescription from "../../components/document-flex-description/DocumentFlexDescription";

const PrivacyPolicyPage = () => {
    return (
        <>
            <HeaderComponent/>
            <DocumentContainer
                headline="Privacy Policy"
                subHeadline="Mining Nest (we, us, or our) values your privacy
                 and is committed to protecting your personal information.
                 This Privacy Policy explains how we collect, use, disclose,
                 and protect your information when you use our website,
                 products, and services."
                childComponents={[
                    <DocumentFlexDescription
                        title="1. Information We Collect"
                        subItems={[
                            {
                                subheading: "1.1 Personal Information",
                                description: "We may collect personal information, such as your name, email address, " +
                                    "contact details, and payment information, when you register for an account or use our services."
                            },
                            {
                                subheading: "1.2 Usage Information",
                                description: "We automatically collect information about your usage of our website and " +
                                    "services, including your IP address, device type, browser type, pages visited, and interactions with our platform."
                            },
                        ]}
                    />,
                    <DocumentFlexDescription
                        title="2. How We Use Your Information"
                        subItems={[
                            {
                                subheading: "2.1 Providing Services",
                                description: "We use your information to provide, maintain, and improve our services," +
                                    " including server hosting, customer support, and technical assistance."
                            },
                            {
                                subheading: "2.2 Communication",
                                description: "We may use your contact information to send you important updates, " +
                                    "notifications, and information related to your account or our services."
                            },
                            {
                                subheading: "2.3 Analytics",
                                description: "We use analytics tools to analyze usage patterns and trends, " +
                                    "allowing us to enhance the performance and user experience of our services."
                            },
                        ]}
                    />,
                    <DocumentFlexDescription
                        title="3. Data Security"
                        titleDescription="We take reasonable measures to protect your
                        information from unauthorized access, disclosure, alteration, or destruction.
                        However, no data transmission or storage can be guaranteed to be completely secure.
                        Please use caution when sharing personal information online."
                    />,
                    <DocumentFlexDescription
                        title="4. Third-Party Services"
                        titleDescription="We may use third-party service providers to assist us in delivering our
                        services. These providers may have access to your information for specific purposes,
                        but they are obligated to maintain the confidentiality and security of your data."
                    />,
                    <DocumentFlexDescription
                        title="5. Cookies and Tracking Technologies"
                        titleDescription="We use cookies and similar tracking technologies to collect and store
                        information about your interactions with our website. You can manage your cookie preferences
                        through your browser settings."
                    />,
                    <DocumentFlexDescription
                        title="6. Your Choices"
                        titleDescription="You have the right to access, update, or delete your personal information.
                        You can also unsubscribe from marketing communications at any time. To exercise these
                        rights or for any privacy-related inquiries, please contact us at Mining Nest."
                    />,
                    <DocumentFlexDescription
                        title="7. Changes to this Privacy Policy"
                        titleDescription="We may update this Privacy Policy to reflect changes in our data practices.
                         Any updates will be posted on this page with an updated effective date.
                         Please review this Privacy Policy periodically to stay informed about our privacy practices."
                    />,
                    <DocumentFlexDescription
                        title="8. Contact Us"
                        titleDescription="If you have any questions, concerns, or requests
                        related to this Privacy Policy or our data practices, please contact us at Mining Nest. By using our website, products, and services, you agree to the terms outlined in this Privacy Policy. We are committed to protecting your privacy and ensuring the security of your information."
                    />,
                ]}
            />
            <FooterComponent/>
        </>
    );
};

export default PrivacyPolicyPage;