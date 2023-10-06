import React, { useState, useRef } from 'react';

import pattern_mobile_divider from "../assets/pattern-divider-mobile.svg";
import pattern_desktop_divider from "../assets/pattern-divider-desktop.svg";

import DiceButton from "./DiceButton";

function Container() {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [adviceID, setAdviceID] = useState('');
    const [adviceText, setAdviceText] = useState('');
    const diceIconRef = useRef(null);

    const generateAdvice = async () => {
        // ... advice generation logic ...
        const apiURL = "https://api.adviceslip.com/advice";

        try {
            const response = await fetch(apiURL);
            const data = await response.json();
            const adviceJson = data["slip"];

            // Update state with advice data
            setAdviceID(adviceJson["id"]);
            setAdviceText(adviceJson["advice"]);
        } catch (error) {
            console.error('Error accessing the API:', error.message);
        }
    };

    const handleDiceButtonClick = () => {
        console.log("Dice button clicked");
        handleClick();

        // Generate advice when dice button is clicked
        generateAdvice();
    };

    const handleClick = () => {
        setIsButtonDisabled(true); // Disable the button

        setTimeout(() => {
            setIsButtonDisabled(false); // Enable the button after a few seconds (e.g., 3 seconds)
        }, 3000); // 3000 milliseconds = 3 seconds
    };

    return (
        <>
            <div className="w-[520px] h-80 bg-dark-grayish-blue rounded-2xl flex flex-col justify-center items-center">
                <div className="block h-full mt-6 relative">
                    <h2 className="text-xs text-neon-green tracking-[2px] mt-3 uppercase advice-header-custom">Advice #{adviceID}</h2>
                    <h1 className="h-1/2 text-2xl text-light-cyan mt-5 mb-5 advice-quote-custom">"{adviceText}"</h1>
                    <picture>
                        <source media="(max-width:420px)" srcSet={pattern_mobile_divider} />
                        <img src={pattern_desktop_divider} alt="divider_img" />
                    </picture>
                    <DiceButton onClick={handleDiceButtonClick} disabled={isButtonDisabled} />
                </div>
            </div>
        </>
    )
}

export default Container;
