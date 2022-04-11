import React from "react";
import TestContainer from "../TestContainer/TestContainer";
import "./ChallengeSection.css";

const ChallengeSection = ({
    selectedParagraph,
    words,
    characters,
    wpm,
    timerStarted,
    timerRemaining,
    testInfo,
    onInputChange,
    startAgain
}) => {
    return (
        <div className="challenge-section-container">
            <h1 data-aos="fade-down" className="challenge-section-header">
                Take a Speed Test Now!
            </h1>
            <TestContainer
                words={words}
                characters={characters}
                wpm={wpm}
                selectedParagraph={selectedParagraph}
                timerRemaining={timerRemaining}
                timerStarted={timerStarted}
                testInfo={testInfo}
                onInputChange={onInputChange}
                startAgain={startAgain}
            />
        </div>
    );
}

export default ChallengeSection;