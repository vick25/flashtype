import React from "react";
import TryAgain from "../TryAgain/TryAgain";
import TypingChallengeContainer from "../TypingChallengeContainer/TypingChallengeContainer";
import "./TestContainer.css";

const TestContainer = ({
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
        <div className="test-container">
            {
                timerRemaining > 0 ?
                    (
                        <div data-aos="fade-up" className="typing-challenge-cont">
                            <TypingChallengeContainer
                                words={words}
                                characters={characters}
                                wpm={wpm}
                                selectedParagraph={selectedParagraph}
                                timerRemaining={timerRemaining}
                                timerStarted={timerStarted}
                                testInfo={testInfo}
                                onInputChange={onInputChange}
                            />
                        </div>
                    ) : (
                        <div className="try-again-container">
                            <TryAgain
                                words={words}
                                characters={characters}
                                wpm={wpm}
                                startAgain={startAgain} />
                        </div>
                    )
            }
        </div>
    )
}

export default TestContainer;