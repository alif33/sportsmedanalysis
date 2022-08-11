import React, { useState } from 'react';
import AccordionItem from './AccordionItem';

const faqQuestion = [
    { question: "1. WHAT INFORMATION DO WE COLLECT?", answer: "alskdjfl;" },
    { question: "2. HOW DO WE USE YOUR INFORMATION?", answer: "alskdjfl;" },
    { question: "3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?", answer: "alskdjfl;" },
]

const Accordion = () => {
    const [clicked, setClicked] = useState("0");

    const handleToggle = (index) => {
        if (clicked === index) {
            return setClicked("0");
        }
        setClicked(index);
    };

    return (
        <div>
            {faqQuestion.map((faq, i) => <AccordionItem key={i}
                onToggle={() => handleToggle(i)}
                active={clicked === i}
                faq={faq}
            />)}

        </div>
    );
};

export default Accordion;