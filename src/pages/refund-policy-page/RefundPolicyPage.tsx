import React from 'react';
import HeaderComponent from "../../components/header/HeaderComponent";
import FooterComponent from "../../components/footer/FooterComponent";
import DocumentFlexDescription from "../../components/document-flex-description/DocumentFlexDescription";
import DocumentContainer from "../../components/document-container/DocumentContainer";

const RefundPolicyPage = () => {
    return (
        <>
            <HeaderComponent/>
            <DocumentContainer
                headline="Refund Policy"
                subHeadline="Refunds are available for server hardware purchases within 30 days of the original purchase date.
Services such as hosting and support may have their own specific terms and conditions, and eligibility for refunds may vary. Please refer to the terms of your specific service plan."
                childComponents={[
                    <DocumentFlexDescription
                        title="1. Eligibility for Refund"
                        subItems={[
                            {
                                description: "Refunds are available for server hardware purchases within 30 days " +
                                    "of the original purchase date."
                            },
                            {
                                description: "Services such as hosting and support may have their own specific terms and " +
                                    "conditions, and eligibility for refunds may vary. Please refer to the terms of " +
                                    "your specific service plan"
                            },
                        ]}
                    />,
                    <DocumentFlexDescription
                        title="2. Grounds for Refund"
                        titleDescription="Refunds may be granted under the following circumstances:"
                        subItems={[
                            {
                                subheading: "2.1 Defective or Damaged Hardware",
                                description: "If the server hardware arrives damaged or is found to be defective upon " +
                                    "arrival, you are eligible for a full refund or a replacement, as per your preference."
                            },
                            {
                                subheading: "2.2 Cancellation Before Activation",
                                description: "If you cancel your server order before " +
                                    "it is activated and deployed, you are eligible for a full refund."
                            },
                            {
                                subheading: "2.3 Service Outages",
                                description: "In the event of prolonged and unresolvable service outages that " +
                                    "significantly affect the usability of your server, you may be eligible " +
                                    "for a pro-rated refund based on the remaining service period."
                            },
                        ]}
                    />,
                    <DocumentFlexDescription
                        title="3. Non-Eligibility for Refund"
                        subItems={[
                            {
                                description: "Change of Mind: Refunds will not be granted for change-of-mind or any other personal reasons unrelated to product or service quality."
                            },
                            {
                                description: "Exceeding Usage Terms: If you exceed the terms of use, such as data transfer or server resource limits outlined in your service agreement, you are not eligible for a refund."
                            },
                            {
                                description: "Termination Due to Violation: If your service is terminated due to a violation of our terms of service or any illegal activities, you are not eligible for a refund."
                            },
                        ]}
                    />,
                    <DocumentFlexDescription
                        title="4. How to Request a Refund"
                        subItems={[
                            {
                                description: "Contact our customer support team by email or through the support portal to initiate the refund request."
                            },
                            {
                                description: "Provide a detailed explanation of the reason for your refund request."
                            },
                            {
                                description: "If applicable, return any damaged or defective hardware."
                            },
                        ]}
                        titleDescription="To request a refund, please follow these steps:"
                    />,
                    <DocumentFlexDescription
                        title="5. Processing Time"
                        titleDescription="Refunds will be processed within 10 business days from the date your request is approved."
                    />,
                    <DocumentFlexDescription
                        title="6. Refund Method"
                        titleDescription="Refunds will be issued using the same payment method used for the original
                        purchase. If this is not possible due to technical limitations, an alternative method will be
                        arranged in consultation with you."
                    />,
                    <DocumentFlexDescription
                        title="7. Contact Information"
                        titleDescription="For any refund-related inquiries or to initiate a refund request, please
                        contact our customer support team at [support@email.com] or visit our support portal at
                        [support.website.com]."
                    />,
                    <DocumentFlexDescription
                        title="8. Changes to the Refund Policy"
                        titleDescription="We reserve the right to update and modify this refund policy.
                         Any changes will be communicated on our website, and the revised policy will
                         apply to all future refund requests."
                    />,
                ]}
            />
            <FooterComponent/>
        </>
    );
};

export default RefundPolicyPage;