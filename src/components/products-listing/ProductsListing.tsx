import React from 'react';
import './ProductsListing.css';
import serverImage1 from "../../assets/images/server-image-1.svg"
import ProductListingSidebar from "../product-listing-sidebar/ProductListingSidebar";
import ProductContainer from "../product-container/ProductContainer";
import {Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, styled} from "@mui/material";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import Pagination from "../pagination-component/Pagination";

const CustomSelect = styled(Select)(({ theme }) => ({
    width: '190px',
    backgroundColor: '#0c1620',
    color: 'white',
    borderColor: 'white',

    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'white',
    },

    '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'white',
    },

    '& .MuiSvgIcon-root': {
        color: 'white',
    }
}));

const ProductsListing = () => {
    const [state, setState] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setState(event.target.value as string);
    };

    return (
        <div className="product-listing-wrapper">
            <h1>Explore All Servers</h1>
            <div className="product-listing-content">
                <ProductListingSidebar/>
                <div className="product-listing-content-wrapper">
                    <div className="product-listing-header">
                        <h3>Hosting Packages</h3>
                        <section>
                            <p>Sort By</p>
                            <CustomSelect
                                value={state}
                                displayEmpty
                            >
                                <MenuItem value="">
                                    <a>Default Sorting</a>
                                </MenuItem>
                                <MenuItem value="1">Option 1</MenuItem>
                                <MenuItem value="2">Option 2</MenuItem>
                                <MenuItem value="3">Option 3</MenuItem>
                            </CustomSelect>
                        </section>
                    </div>
                    <div className="products-listing">

                        <ProductContainer productLabel="Hosting Package"
                                          productImage={serverImage1}
                                          productTitle="Hosting Package for Server 500-1000W"
                                          productSubtitle="20% VAT applicable on UK based orders"
                                          productPrice="$120.00 - $1500.00"/>
                        <ProductContainer productLabel="Hosting Package"
                                          productImage={serverImage1}
                                          productTitle="Hosting Package for Server 500-1000W"
                                          productSubtitle="20% VAT applicable on UK based orders"
                                          productPrice="$120.00 - $1500.00"/>
                        <ProductContainer productLabel="Hosting Package"
                                          productImage={serverImage1}
                                          productTitle="Hosting Package for Server 500-1000W"
                                          productSubtitle="20% VAT applicable on UK based orders"
                                          productPrice="$120.00 - $1500.00"/>
                        <ProductContainer productLabel="Hosting Package"
                                          productImage={serverImage1}
                                          productTitle="Hosting Package for Server 500-1000W"
                                          productSubtitle="20% VAT applicable on UK based orders"
                                          productPrice="$120.00 - $1500.00"/>
                        <ProductContainer productLabel="Hosting Package"
                                          productImage={serverImage1}
                                          productTitle="Hosting Package for Server 500-1000W"
                                          productSubtitle="20% VAT applicable on UK based orders"
                                          productPrice="$120.00 - $1500.00"/>
                        <ProductContainer productLabel="Hosting Package"
                                          productImage={serverImage1}
                                          productTitle="Hosting Package for Server 500-1000W"
                                          productSubtitle="20% VAT applicable on UK based orders"
                                          productPrice="$120.00 - $1500.00"/>
                        <ProductContainer productLabel="Hosting Package"
                                          productImage={serverImage1}
                                          productTitle="Hosting Package for Server 500-1000W"
                                          productSubtitle="20% VAT applicable on UK based orders"
                                          productPrice="$120.00 - $1500.00"/>
                        <ProductContainer productLabel="Hosting Package"
                                          productImage={serverImage1}
                                          productTitle="Hosting Package for Server 500-1000W"
                                          productSubtitle="20% VAT applicable on UK based orders"
                                          productPrice="$120.00 - $1500.00"/>
                        <ProductContainer productLabel="Hosting Package"
                                          productImage={serverImage1}
                                          productTitle="Hosting Package for Server 500-1000W"
                                          productSubtitle="20% VAT applicable on UK based orders"
                                          productPrice="$120.00 - $1500.00"/>

                    </div>
                </div>
            </div>
            <Pagination/>
        </div>
    );
};

export default ProductsListing;