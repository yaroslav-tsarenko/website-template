import React, {FC} from 'react';
import "./DocumentContainer.css"

interface DocumentContainerProps {
    headline: string;
    subHeadline?: string;
    childComponents?: React.ReactNode[];
}

const DocumentContainer: FC<DocumentContainerProps> = ({headline, subHeadline, childComponents}) => {
    return (
        <div className="document-container-wrapper">
            <div className="document-container-content">
                <section>
                    <h1>{headline}</h1>
                    <p>{subHeadline}</p>
                    {childComponents && childComponents.map((child, index) => (
                        <React.Fragment key={index}>
                            {child}
                        </React.Fragment>
                    ))}
                </section>
            </div>
        </div>
    );
};
export default DocumentContainer;