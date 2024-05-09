import React from 'react';
import "./BlogsContainer.css";
import BlogComponent from "../blog-component/BlogComponent";
import BlogImage1 from "../../assets/images/blog-image-1.svg";
import BlogImage2 from "../../assets/images/blog-image-2.svg";
import BlogImage3 from "../../assets/images/blog-image-3.svg";
import BlogImage4 from "../../assets/images/blog-image-4.svg";
import BlogImage5 from "../../assets/images/blog-image-5.svg";
import BlogImage6 from "../../assets/images/blog-image-6.svg";
import BlogImage7 from "../../assets/images/blog-image-7.svg";
import BlogImage8 from "../../assets/images/blog-image-8.svg";
import BlogImage9 from "../../assets/images/blog-image-9.svg";
import AuthorImage from "../../assets/images/author-image.svg";

const BlogsContainer = () => {
    return (
        <div className="blogs-container-wrapper">
            <div className="blogs-container-content">
                <BlogComponent image={BlogImage1} title="The Role of Full Nodes in Blockchain: What You Need to Know" authorImage={AuthorImage} authorName="Kennedy Jackson" dateAndReadTime="Oct 10, 2023 · 6 min read"/>
                <BlogComponent image={BlogImage2} title="The Role of Full Nodes in Blockchain: What You Need to Know" authorImage={AuthorImage} authorName="Kennedy Jackson" dateAndReadTime="Oct 10, 2023 · 6 min read"/>
                <BlogComponent image={BlogImage3} title="Choosing the Right Hardware for Cryptocurrency Mining" authorImage={AuthorImage} authorName="Kennedy Jackson" dateAndReadTime="Oct 10, 2023 · 6 min read"/>
                <BlogComponent image={BlogImage4} title="Security Best Practices for Storing and Managing Cryptocurrencies" authorImage={AuthorImage} authorName="Kennedy Jackson" dateAndReadTime="Oct 10, 2023 · 6 min read"/>
                <BlogComponent image={BlogImage5} title="Exploring the World of Crypto Wallets: A Comprehensive Guide" authorImage={AuthorImage} authorName="Kennedy Jackson" dateAndReadTime="Oct 10, 2023 · 6 min read"/>
                <BlogComponent image={BlogImage6} title="Deciphering the Crypto Jargon: Common Terms Explained" authorImage={AuthorImage} authorName="Kennedy Jackson" dateAndReadTime="Oct 10, 2023 · 6 min read"/>
                <BlogComponent image={BlogImage7} title="The Impact of Cryptocurrency on the Future of Finance" authorImage={AuthorImage} authorName="Kennedy Jackson" dateAndReadTime="Oct 10, 2023 · 6 min read"/>
                <BlogComponent image={BlogImage8} title="Ethereum 2.0: The Evolution of the Ethereum Network" authorImage={AuthorImage} authorName="Kennedy Jackson" dateAndReadTime="Oct 10, 2023 · 6 min read"/>
                <BlogComponent image={BlogImage9} title="Cryptocurrency Mining and Sustainability" authorImage={AuthorImage} authorName="Kennedy Jackson" dateAndReadTime="Oct 10, 2023 · 6 min read"/>
            </div>
        </div>
    );
};

export default BlogsContainer;