import React, {FC, useState} from 'react';
import './ProductPreviewShortListing.css';
import ProductContainer from "../product-container/ProductContainer";
import serverImage1 from "../../assets/images/server-image-1.svg";
import serverImage2 from "../../assets/images/server-image-2.svg";
import serverImage3 from "../../assets/images/server-image-3.svg";

interface ProductPreviewShortListingProps {
    title: string;
    buttonsEnabled?: boolean;
}

const ProductPreviewShortListing: FC<ProductPreviewShortListingProps> = ({title, buttonsEnabled}) => {

    return (
        <div className="product-preview-listing-wrapper">
            <div className="product-preview-listing-content">
                <h3>Our Featured Servers</h3>
                {buttonsEnabled && (
                    <>
                        <section className="nav-product-listing-buttons">
                            <button>All</button>
                            <button>Hourly</button>
                            <button>Daily</button>
                            <button>Weekly</button>
                            <button>Monthly</button>
                        </section>
                    </>
                )}
                <div className="product-listing-preview">
                    <ProductContainer productLabel="Hosting Package"
                                      productTitle="Hosting Package for Server 500-1000W"
                                      productSubtitle="20% VAT applicable on UK based orders"
                                      productImage={serverImage1}
                                      productPrice="$120.00 - $1500.00"
                    />
                    <ProductContainer productLabel="Hosting Package"
                                      productTitle="Hosting Package for Server 500-1000W"
                                      productSubtitle="20% VAT applicable on UK based orders"
                                      productImage={serverImage2}
                                      productPrice="$120.00 - $1500.00"
                    />
                    <ProductContainer productLabel="Hosting Package"
                                      productTitle="Hosting Package for Server 500-1000W"
                                      productSubtitle="20% VAT applicable on UK based orders"
                                      productImage={serverImage3}
                                      productPrice="$120.00 - $1500.00"
                    />
                    <ProductContainer productLabel="Hosting Package"
                                      productTitle="Hosting Package for Server 500-1000W"
                                      productSubtitle="20% VAT applicable on UK based orders"
                                      productImage={serverImage3}
                                      productPrice="$120.00 - $1500.00"
                    />
                </div>
                {buttonsEnabled && (
                    <>
                        <button className="view-all-button">
                            View All
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default ProductPreviewShortListing;