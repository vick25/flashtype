import React from "react";
import TestLetter from "../TestLetter/TestLetter";
import "./TypingChallenge.css";

const TypingChallenge = ({
    timerStarted,
    timerRemaining,
    selectedParagraph,
    testInfo,
    onInputChange
}) => {
    // console.log("Inside typing challenge", testInfo);
    return (
        <div className="typing-challenge">
            <div className="timer-container">
                <p className="timer">00:{timerRemaining >= 10 ? timerRemaining : `0${timerRemaining}`}</p>
                {!timerStarted && <p className="timer-info">Start typing to start the test</p>}
            </div>

            <div className="textarea-container">
                <div className="textarea-left">
                    <div className="textarea test-paragraph">
                        {/* {selectedParagraph} */}
                        {
                            testInfo.map((individualLetter, i) => {
                                return (
                                    <TestLetter key={i}
                                        individualLetter={individualLetter} />
                                );
                            })
                        }
                    </div>
                </div>
                <div className="textarea-right">
                    <textarea className="textarea" placeholder="Start typing here"
                        onChange={(e) => { onInputChange(e.target.value) }}>
                    </textarea>
                </div>
            </div>
        </div>
    );
}

export default TypingChallenge;