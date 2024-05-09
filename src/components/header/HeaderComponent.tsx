import React from 'react';
import {ReactComponent as Logo} from "../../assets/icons/Logo.svg";
import { MdOutlineShoppingBag } from "react-icons/md";
import './HeaderComponent.css';
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div className="header-container-wrapper">
            <div className="header-container">
                <Logo/>
                <div className="header-nav">
                    <Link className="header-links" to={"/"}>Home</Link>
                    <Link className="header-links" to={"/server-spaces"}>Serves Spaces</Link>
                    <Link className="header-links" to={"/credit"}>Credit</Link>
                    <Link className="header-links" to={"/about-us"}>About Us</Link>
                    <Link className="header-links" to={"/blogs"}>Blogs</Link>
                    <Link className="header-links" to={"/contact"}>Contact</Link>
                </div>
                <div className="header-buttons">
                    <button className="log-in-button">Log In</button>
                    <button className="sign-up-button">Sign up</button>
                    <MdOutlineShoppingBag className="header-icon" size={23}/>
                </div>
            </div>
        </div>
    );
};

export default HeaderComponent;