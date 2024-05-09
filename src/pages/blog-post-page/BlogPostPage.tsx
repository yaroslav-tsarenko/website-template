import React from 'react';
import HeaderComponent from "../../components/header/HeaderComponent";
import FooterComponent from "../../components/footer/FooterComponent";
import BlogPostDetails from "../../components/blog-post-details/BlogPostDetails";
import BlogsListing from "../../components/blog-listing-container/BlogsListing";

const BlogPostPage = () => {
    return (
        <>
            <HeaderComponent/>
            <BlogPostDetails/>
            <BlogsListing/>
            <FooterComponent/>
        </>
    );
};

export default BlogPostPage;