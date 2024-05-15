import React from 'react';
import {ReactComponent as LogoWhite} from "../..//assets/icons/Logo-white.svg";
import {ReactComponent as FacebookIcon} from "../..//assets/icons/facebook-icon.svg";
import {ReactComponent as TwitterIcon} from "../..//assets/icons/twitter-icon.svg";
import {ReactComponent as YoutubeIcon} from "../..//assets/icons/youtube-icon.svg";
import {ReactComponent as LinkedinIcon} from "../..//assets/icons/linkedin-icon.svg";
import './FooterComponent.css';

const FooterComponent = () => {
    return (
        <div className="footer-container-wrapper">
            <div className="footer-container">
                <div className="footer-upper-section">
                    <div className="footer-credentials">
                        <LogoWhite/>
                        <p>©2023 Mining Nest. All Rights Reserved.</p>
                    </div>
                    <div className="footer-links-wrapper">
                        <section>
                            <h2>Resources</h2>
                            <a href="/blogs">Crypto Development</a>
                            <a href="/server-spaces">Our Servers</a>
                            <a href="/server-spaces">Our Products</a>
                            <a href="/terms-and-conditions">User Strategy</a>
                        </section>
                        <section>
                            <h2>Company</h2>
                            <a href="/about-us-page">About Coin Forge</a>
                            <a href="/contact">Contact & Support</a>
                            <a href="/blog-page">Success History</a>
                            <a href="/terms-and-conditions">Setting & Privacy</a>
                        </section>
                        <section>
                            <h2>Quick Links</h2>
                            <a href="/">Home</a>
                            <a href="/credit">Our Services</a>
                            <a href="/blogs-listing-page">Blog</a>
                            <a href="/about-us">About Us</a>
                        </section>
                    </div>
                </div>
                <hr/>
                <div className="footer-bottom-section">
                        <section>
                            <a href="/terms-and-conditions">Legal</a>
                            <a href="/privacy-policy">Privacy Policy</a>
                            <a href="/refund-policy-page">Cookies Policy</a>
                        </section>
                        <section>
                            <FacebookIcon/>
                            <TwitterIcon/>
                            <YoutubeIcon/>
                            <LinkedinIcon/>
                        </section>
                </div>
            </div>
        </div>
    );
};

export default FooterComponent;