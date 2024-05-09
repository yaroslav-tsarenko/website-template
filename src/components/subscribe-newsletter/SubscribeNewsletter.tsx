import React, {FC} from 'react';
import "./SubscribeNewsletter.css";

interface SubscribeNewsletterProps {
    newsLetterTitle: string;
    newsLetterSubTitle: string;
}

const SubscribeNewsletter: FC<SubscribeNewsletterProps> = ({newsLetterTitle, newsLetterSubTitle}) => {
    return (
        <div className="newsletter-wrapper">
            <div className="newsletter-container">
                <h2>{newsLetterTitle}</h2>
                <p>{newsLetterSubTitle}</p>
                <section>
                    <input type="email" placeholder="Enter your email"/>
                    <button>Subscribe</button>
                </section>
            </div>
        </div>
    );
};

export default SubscribeNewsletter;