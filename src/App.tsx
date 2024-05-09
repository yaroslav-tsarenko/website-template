import React from 'react';
import HomePage from "./pages/home-page/HomePage";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AboutUsPage from "./pages/about-us-page/AboutUsPage";
import BlogsListingPage from "./pages/blogs-listing-page/BlogsListingPage";
import CreditPage from "./pages/credit-page/CreditPage";
import ContactPage from "./pages/contact-us-page/ContactPage";
import ProductListingPage from "./pages/product-listing-page/ProductListingPage";
import PrivacyPolicyPage from "./pages/privacy-policy-page/PrivacyPolicyPage";
import TermsAndConditions from "./pages/terms-and-conditions-page/TermsAndConditions";
import RefundPolicyPage from "./pages/refund-policy-page/RefundPolicyPage";
import CancellationPolicyPage from "./pages/cancellation-policy-page/CancellationPolicyPage";
import ProductDetailPage from "./pages/product-detail-page/ProductDetailPage";
import BlogPostPage from "./pages/blog-post-page/BlogPostPage";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/server-spaces" element={<ProductListingPage/>}/>
                <Route path="/credit" element={<CreditPage/>}/>
                <Route path="/about-us" element={<AboutUsPage/>}/>
                <Route path="/blogs" element={<BlogsListingPage/>}/>
                <Route path="/blog-page" element={<BlogPostPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/privacy-policy" element={<PrivacyPolicyPage/>}/>
                <Route path="/terms-and-conditions" element={<TermsAndConditions/>}/>
                <Route path="/refund-policy" element={<RefundPolicyPage/>}/>
                <Route path="/product-details" element={<ProductDetailPage/>}/>
                <Route path="/cancellation-policy" element={<CancellationPolicyPage/>}/>
            </Routes>
        </Router>
    );
};

export default App;