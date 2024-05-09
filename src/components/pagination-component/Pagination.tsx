import React from 'react';
import "./Pagination.css";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";

const Pagination = () => {
    return (
        <div className="product-listing-pagination">
            <section>
                <button><MdKeyboardArrowLeft/></button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button><MdKeyboardArrowRight/></button>
            </section>
        </div>
    );
};

export default Pagination;