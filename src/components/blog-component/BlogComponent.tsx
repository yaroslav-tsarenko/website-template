import React, {FC} from 'react';
import "./BlogComponent.css";
import {Link} from "react-router-dom";

interface BlogComponentProps {
    image: string;
    title: string;
    authorImage: string;
    authorName: string;
    dateAndReadTime: string;
}

const BlogComponent: FC<BlogComponentProps> = ({image, title, authorImage, authorName, dateAndReadTime}) => {
    return (
        <Link to={"/blog-page"} className="blog-component-wrapper">
            <img className="blog-image" src={image} alt="Blog Image"/>
            <section>
                <h1>{title}</h1>
                <div className="author-info-container">
                    <img className="author-image" src={authorImage} alt="Author Image"/>
                    <div className="author-info">
                        <h2>{authorName}</h2>
                        <h3>{dateAndReadTime}</h3>
                    </div>
                </div>
            </section>
        </Link>
    );
};

export default BlogComponent;