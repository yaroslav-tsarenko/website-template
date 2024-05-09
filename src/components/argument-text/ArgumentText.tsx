import React, {FC} from 'react';
import './ArgumentText.css';

interface ArgumentTextProps {
    title?: string;
    text?: string;
}

const ArgumentText: FC<ArgumentTextProps> = ({title, text}) => {
    return (
        <div className="argument-text-container">
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    );
};

export default ArgumentText;