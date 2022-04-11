import React from "react";
import ChallengeDetailsCard from "../ChallengeDetailsCard/ChallengeDetailsCard";
import TypingChallenge from "../TypingChallenge/TypingChallenge";
import "./TypingChallengeContainer.css";

const TypingChallengeContainer = ({
    words,
    characters,
    wpm,
    selectedParagraph,
    timerStarted,
    timerRemaining,
    testInfo,
    onInputChange
}) => {
    return (
        <div className="typing-challenge-container">
            <div className="details-container">
                <ChallengeDetailsCard cardName="Words" cardValue={words} />
                <ChallengeDetailsCard cardName="Characters" cardValue={characters} />
                <ChallengeDetailsCard cardName="Speed" cardValue={wpm} />
            </div>

            <div className="typewriter-container">
                <TypingChallenge
                    timerStarted={timerStarted}
                    timerRemaining={timerRemaining}
                    selectedParagraph={selectedParagraph}
                    testInfo={testInfo}
                    onInputChange={onInputChange}
                />
            </div>
        </div>
    );
}

export default TypingChallengeContainer;