import React from 'react';
import HeaderComponent from "../../components/header/HeaderComponent";
import DocumentContainer from "../../components/document-container/DocumentContainer";
import DocumentFlexDescription from "../../components/document-flex-description/DocumentFlexDescription";
import FooterComponent from "../../components/footer/FooterComponent";

const CancellationPolicyPage = () => {
    return (
        <>
            <HeaderComponent/>
            <DocumentContainer
                headline="Cancellation"
                childComponents={[
                    <DocumentFlexDescription
                        title="1. Cancellation of Server Hardware Orders"
                        titleDescription="Orders for server hardware can be canceled within 30 days of
                        the original purchase date. To initiate a cancellation request, please contact
                        our customer support team by email or through the support portal."
                    />,
                    <DocumentFlexDescription
                        title="2. Cancellation of Service Plans"
                        titleDescription="Service plans, including hosting, support, or any other
                        subscription-based service, may have their own specific terms and conditions
                        regarding cancellation. Please refer to the terms of your specific service plan
                        for eligibility and procedures."
                    />,
                    <DocumentFlexDescription
                        title="3. Cancellation Process"
                        titleDescription="To request a cancellation, please follow these steps:"
                        subItems={[
                            {
                                description: "Contact our customer support team to initiate the cancellation request."
                            },
                            {
                                description: "Provide a detailed explanation for the reason for your cancellation."
                            },
                        ]}
                    />,
                    <DocumentFlexDescription
                        title="4.  Eligibility for Refund"
                        titleDescription="Depending on the circumstances and the terms of your specific service plan, a refund may be available for eligible cancellations. Please refer to our Refund Policy for details."
                    />,
                    <DocumentFlexDescription
                        title="5.  Refund Method"
                        titleDescription="If a refund is applicable for your canceled service,
                        it will be issued using the same payment method used for the original purchase.
                        If this is not possible due to technical limitations, an alternative method will
                         be arranged in consultation with you."
                    />,
                    <DocumentFlexDescription
                        title="6. Non-Eligibility for Cancellation"
                        titleDescription="Some services may not be eligible for cancellation,
                        particularly if they are already activated, exceeding usage limits, or
                         if the cancellation violates our terms of service. Refer to your specific
                          service plan and our terms of service for more details."
                    />,
                    <DocumentFlexDescription
                        title="7. Changes to the Cancellation Policy"
                        titleDescription="We reserve the right to update and modify this cancellation policy.
                        Any changes will be communicated on our website, and the revised policy will apply to
                        all future cancellations."
                    />,
                    <DocumentFlexDescription
                        title="8. Contact Information"
                        titleDescription="For any cancellation-related inquiries or to initiate a cancellation request,
                        please contact our customer support team at [support@email.com] or visit our support portal at
                        [support.website.com]."
                    />,
                ]}
            />
            <FooterComponent/>
        </>
    );
};

export default CancellationPolicyPage;