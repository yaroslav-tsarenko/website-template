import React from 'react';
import "./ContactUsContainer.css";

const ContactUsContainer = () => {
    return (
        <div className="about-us-container-wrapper">
            <div className="about-us-container-content">
                <h1>Contact Us</h1>
                <p>We're here to assist you on every step of your cryptocurrency mining journey. If you have questions,
                    need technical support, or want to explore partnership opportunities, don't hesitate to get in touch
                    with our dedicated team.</p>
                <section>
                    <input type="text" placeholder="First Name"/>
                    <input type="text" placeholder="Last Name"/>
                </section>
                <input type="email" placeholder="Enter your email"/>
                <input type="text" placeholder="Phone"/>
                <textarea placeholder="Message"/>
                <button>Send Message</button>
            </div>
        </div>
    );
};

export default ContactUsContainer;