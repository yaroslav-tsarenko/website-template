import React from 'react';
import {Point, Section, SubPoint} from "../../components/section-description/Section";
import HeaderComponent from "../../components/header/HeaderComponent";
import FooterComponent from "../../components/footer/FooterComponent";
import Pagination from "../../components/pagination-component/Pagination";
import MainBlogContainer from "../../components/main-blog-container/MainBlogContainer";
import BlogsContainer from "../../components/blogs-container/BlogsContainer";

const BlogsListingPage = () => {
    return (
        <>
            <HeaderComponent/>
            <MainBlogContainer/>
            <BlogsContainer/>
            <Pagination/>
            <FooterComponent/>
        </>
    );
};

export default BlogsListingPage;