import React from "react";
import "./TestLetter.css";

const TestLetter = ({ individualLetter }) => {
    const { status } = individualLetter;

    const statusClass = {
        correct: "test-letter-correct",
        incorrect: "test-letter-incorrect",
        notAttempted: "test-letter-not-attempted"
    }[status];

    return (
        <span className={`test-letter ${statusClass}`}>
            {individualLetter.testLetter}
        </span>
    );
};

export default TestLetter;