import React from 'react';
import './ProductDetailsContainer.css';
import GradientContainer from "../../assets/images/gradient-rectangle.svg";
import ProductDetailsText from "../product-details-text/ProductDetailsText";

const ProductDetailsContainer = () => {
    return (
        <div className="product-details-container-wrapper">
            <div className="product-details-container">
                <h2>Full Server Specification</h2>
                <section>
                    <div className="product-details-text">
                        <ProductDetailsText title="Processor (CPU):" description={[
                            "Dual Intel Xeon Scalable processors or equivalent",
                            "High core count for parallel processing",
                            "Clock speeds tailored to workload requirements"
                        ]}/>
                        <ProductDetailsText title="Memory (RAM):" description={[
                            "Minimum 64GB ECC DDR4 RAM, expandable to meet specific needs",
                            "Error-correcting code (ECC) for data integrity",
                            "Support for high-speed RAM configurations"
                        ]}/>
                        <ProductDetailsText title="Storage:" description={[
                            "Multiple drive bays for flexible storage options",
                            "Minimum 1TB SSD or HDD storage, customizable for capacity and redundancy",
                            "RAID support for data protection and performance"
                        ]}/>
                        <ProductDetailsText title="Network Interface:" description={[
                            "Dual Gigabit Ethernet or higher-speed network interfaces",
                            "Optional 10GbE or 25GbE for high-speed data transfer",
                            "Redundant network connections for reliability"
                        ]}/>
                    </div>

                    <div className="vl"></div>

                    <div className="product-details-text">
                        <ProductDetailsText title="Expansion Slots:" description={[
                            "PCIe slots for additional connectivity or GPU acceleration",
                            "Support for various expansion cards, including graphics cards, network adapters, and storage controllers"
                        ]}/>
                        <ProductDetailsText title="Operating System:" description={[
                            "Choice of operating systems, including Windows Server, Linux distributions, or custom configurations",
                            "Compatibility with virtualization platforms for efficient resource allocation",
                        ]}/>
                        <ProductDetailsText title="Remote Management:" description={[
                            "Integrated remote management controller (e.g., IPMI or iDRAC) for out-of-band server management",
                            "Remote console access and system monitoring capabilities",
                        ]}/>
                        <ProductDetailsText title="Cooling:" description={[
                            "High-efficiency cooling systems to maintain optimal operating temperatures",
                            "Redundant cooling fans for reliability",
                        ]}/>
                    </div>
                    <img src={GradientContainer} alt="closed"/>
                </section>
                <button>Expand Full List</button>
            </div>
        </div>
    );
};

export default ProductDetailsContainer;