import React, {useState} from 'react';
import './ProductCredentialsContainer.css';
import ProductImage from "../../assets/images/server-image-big.svg";
import {MenuItem, Select, styled} from "@mui/material";
import { HiPlus } from "react-icons/hi";
import { HiMinus } from "react-icons/hi";

const CustomSelect = styled(Select)(({ theme }) => ({
    width: '190px',
    backgroundColor: '#0c1620',
    borderRadius: '8px',
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

const ProductCredentialsContainer = () => {

    const [state, setState] = React.useState('');
    const [quantity, setQuantity] = useState(0); // initial quantity is 0

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 0) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };
    return (
        <div className="product-credentials-container-wrapper">
            <img src={ProductImage} alt="Product image"/>
            <div className="product-credentials-container">
                <span>
                    <h5>Hosting Package</h5>
                <h1>Hosting Package for Server 1000W-1500W</h1>
                </span>
                <span>
                    <h3>$500 - $1500</h3>
                    <h6>20% VAT applicable on UK based orders</h6>
                </span>
                <p>Introducing our hosting package for 1000-1500W systems, the ideal solution
                    for powering your high-performance servers. With robust infrastructure
                    and exceptional reliability, our package is designed to meet the demands
                    of today's intensive workloads. Enjoy seamless scalability, low-latency access,
                    and 24/7 support, ensuring your systems run at peak efficiency.</p>
                <div className="product-properties-buttons-container">
                    <section>
                        <label>Select Time</label>
                        <span>
                            <button>Hourly</button>
                            <button>Daily</button>
                            <button>Monthly</button>
                        </span>
                    </section>
                    <section>
                        <label>Duration</label>
                        <CustomSelect
                            value={state}
                            displayEmpty
                        >
                            <MenuItem value="">
                                <a>2 Hours</a>
                            </MenuItem>
                            <MenuItem value="1">3 Hours</MenuItem>
                            <MenuItem value="2">4 Hours</MenuItem>
                            <MenuItem value="3">5 Hours</MenuItem>
                        </CustomSelect>
                    </section>
                </div>
                <div className="product-properties-buttons-container">
                    <section>
                        <label>Quantity</label>
                        <div className="input-quantity-wrapper">
                            <button onClick={incrementQuantity}><HiPlus/></button>
                            <input type="number" value={quantity} readOnly/>
                            <button onClick={decrementQuantity}><HiMinus/></button>
                        </div>
                    </section>
                    <button className="add-to-cart-button">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};
{/**/
}
export default ProductCredentialsContainer;