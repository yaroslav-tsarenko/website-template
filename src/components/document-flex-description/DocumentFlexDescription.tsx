import React, {FC} from 'react';
import "./DocumentFlexDescription.css"

interface SubItem {
    subheading?: string;
    description: string;
}

interface FlexibleComponentProps {
    title?: string;
    titleDescription?: string;
    subItems?: SubItem[];
}

const DocumentFlexDescription: FC<FlexibleComponentProps> =
    ({
         title,
         titleDescription,
         subItems
     }) => {
        return (
            <div className="document-flex-description-wrapper">
                <h1 className="document-flex-description-title">{title}</h1>
                {titleDescription && <p>{titleDescription}</p>}
                {subItems && subItems.map((item, index) => (
                    <div className="subheading-container" key={index}>
                        <h2>{item.subheading}</h2>
                        {item.description && <p>{item.description}</p>}
                    </div>
                ))}
            </div>
        );
    };

export default DocumentFlexDescription;