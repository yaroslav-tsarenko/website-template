import React, {FC} from 'react';
import './InfoRightContainer.css';

interface InfoContainerRightProps {
    text: string[];
    image: string;
}

const InfoContainerRight: FC<InfoContainerRightProps> = ({text, image}) => {
    return (
        <div className="info-container-right-wrapper">
            <div className="info-container-right-content">
                <section>
                    {text.map((paragraph, index) => <p key={index}>{paragraph}</p>)} {/* map over the text array */}
                </section>
                <img src={image} alt="Info Image"/>
            </div>
        </div>
    );
};

export default InfoContainerRight;