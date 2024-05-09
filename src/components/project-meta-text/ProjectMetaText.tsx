import React, {FC} from 'react';
import "./ProjectMetaText.css";

interface ProjectMetaTextProps{
    title: string,
    description: string,
}

const ProjectMetaText: FC<ProjectMetaTextProps> = ({title, description}) => {
    return (
        <div className="project-meta-text-container">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default ProjectMetaText;