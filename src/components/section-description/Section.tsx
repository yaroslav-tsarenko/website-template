import React from 'react';

interface SectionProps {
    title: string;
    children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
    return (
        <div>
            <h2>{title}</h2>
            {children}
        </div>
    );
};

interface PointProps {
    description: string;
    children?: React.ReactNode;
}

const Point: React.FC<PointProps> = ({ description, children }) => {
    return (
        <div>
            <h3>{description}</h3>
            {children}
        </div>
    );
};

interface SubPointProps {
    title: string;
    description: string;
}

const SubPoint: React.FC<SubPointProps> = ({ title, description }) => {
    return (
        <div>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    );
};

export { Section, Point, SubPoint };
