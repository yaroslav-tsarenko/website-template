import React from 'react';
import "./ProductListingSidebar.css";
import {FaMinus} from "react-icons/fa6";
import {Checkbox, FormControlLabel} from "@mui/material";

const ProductListingSidebar = () => {
    const checkboxStyles = {
        color: '#FFF',
        '&.Mui-checked': {
            color: '#1FAD72',
        },
    };

    return (
        <div className="product-listing-sidebar-wrapper">
            <div className="product-filter-container">
                <section className="product-sidebar-header">
                    <h3>Product Categories</h3>
                    <FaMinus/>
                </section>
                <p>
                    Accessories (100)
                </p>
                <p>
                    Alt Coin Buy and Host (50)
                </p>
                <p>
                    Brands (15)
                </p>
                <p>
                    GPU Miner (20)
                </p>
                <p>
                    Hosting Packages (25)
                </p>
                <p>
                    MMU (10)
                </p>
                <p>
                    GPU Miner (20)
                </p>
                <p>
                    Uncategorized (40)
                </p>
            </div>
            <div className="product-filter-container">
                <section className="product-sidebar-header">
                    <h3>Price Range</h3>
                    <FaMinus/>
                </section>
                <span>
                    $10 - $50
                     <Checkbox
                         defaultChecked
                         sx={checkboxStyles}/>
                </span>
                <span>
                    $50 - $100
                     <Checkbox
                         defaultChecked
                         sx={checkboxStyles}/>
                </span>
                <span>
                    $100 - $200
                     <Checkbox
                         defaultChecked
                         sx={checkboxStyles}/>
                </span>
                <span>
                   $200 - $400
                     <Checkbox
                         defaultChecked
                         sx={checkboxStyles}/>
                </span>
                <span>
                    $400 - $600
                     <Checkbox
                         defaultChecked
                         sx={checkboxStyles}/>
                </span>
                <span>
                    $600+
                    <Checkbox
                        defaultChecked
                        sx={checkboxStyles}/>
                </span>
            </div>
            <div className="product-filter-container-buttons">
                <button>Filter</button>
                <button>Clear</button>
            </div>
        </div>
    );
};

export default ProductListingSidebar;