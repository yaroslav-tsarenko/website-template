import React from 'react';
import "./MainBlogContainer.css";
import CryptoImageBlog from "../../assets/images/crypto-image-blog.svg";
import {Link} from "react-router-dom";

const MainBlogContainer = () => {
    return (
        <Link to={"/blog-page"} className="main-blog-container-wrapper">
            <h1>Blogs</h1>
            <div className="main-blog-container">
                <section>
                    <h3>Featured</h3>
                    <h4>October 6, 2023</h4>
                    <h1>Cryptocurrency Market Analysis and Mining Opportunities</h1>
                    <h2>James Hathaway</h2>
                    <Link className="main-blog-container-button" to={"/blog-page"}>Read Now</Link>
                </section>
                <img src={CryptoImageBlog} alt="Blog Image"/>
            </div>
        </Link>
    );
};

export default MainBlogContainer;