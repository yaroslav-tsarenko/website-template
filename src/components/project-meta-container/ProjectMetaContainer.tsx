import React from 'react';
import './ProjectMetaContainer.css';
import ProjectMetaText from "../project-meta-text/ProjectMetaText";

const ProjectMetaContainer = () => {
    return (
        <div className="project-meta-container-wrapper">
            <div className="project-meta-container">
                <ProjectMetaText title="Our Mission" description="Our mission is simple yet powerful: we aim to make cryptocurrency mining accessible, profitable, and hassle-free for everyone. We believe in the democratization of this innovative field, enabling individuals to participate and thrive in the blockchain revolution. We are dedicated to offering the highest quality server infrastructure, unbeatable support, and an unmatched user experience. What sets Mining Nest apart is our unwavering commitment to quality. We've cultivated our reputation by refusing to compromise. Our server spaces feature the latest state-of-the-art hardware, delivering exceptional performance to ensure your mining operations are never disrupted."/>
                <ProjectMetaText title="Our Vision" description="At Mining Nest, our vision is firmly rooted in the relentless pursuit of innovation, democratization, and the empowerment of individuals in the cryptocurrency mining space. We envision a world where cryptocurrency mining is accessible to all, where blockchain technology transforms the financial landscape, and where every miner can realize their full potential. Our mission is to lead the way in making this vision a reality by providing state-of-the-art server spaces, unparalleled support, and educational resources. We believe that the future of crypto mining is bright, and we're committed to illuminating that path for all who share our vision."/>
            </div>
        </div>
    );
};

export default ProjectMetaContainer;