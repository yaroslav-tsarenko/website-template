import React, {FC, useState} from 'react';
import { HiPlus } from "react-icons/hi";
import { HiMinus } from "react-icons/hi";
import './FAQ.css';

interface FAQProps {
    question: string;
    answer: string;
}

const FAQ: FC<FAQProps> = ({ question, answer }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="faq-wrapper">
            <div className="faq-question" onClick={toggleOpen}>
                <button>
                    {isOpen ? <HiMinus/> : <HiPlus/>}
                </button>
                <h2>
                    {question}
                </h2>
            </div>
            {isOpen && <div className="faq-answer">{answer}</div>}
        </div>
    );
};

export default FAQ;