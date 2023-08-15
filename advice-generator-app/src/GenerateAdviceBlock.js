import React, { useState, useRef } from 'react';
import './App.css';
import pattern_mobile_divider from './assets/pattern-divider-mobile.svg';
import pattern_desktop_divider from './assets/pattern-divider-desktop.svg';
import DiceButton from './DiceButton';

const GenerateAdviceBlock = () => {
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
        animateDice(); // You need to implement this function
        handleClick();

        // Generate advice when dice button is clicked
        generateAdvice();
    };

    const animateDice = () => {
        const diceIcon = diceIconRef.current;
        const currentRotation = getRotationAngle(diceIcon);
    
        if (currentRotation === 0) {
          // Rotate the icon to -180 degrees
          diceIcon.style.transform = "rotate(-180deg)";
        } else {
          // Reset the rotation to 0 degrees (original state)
          diceIcon.style.transform = "rotate(0deg)";
        }
    
        diceIcon.style.transition = "transform 0.5s ease";
      };
    
      const getRotationAngle = (element) => {
        const st = window.getComputedStyle(element, null);
        const tr = st.getPropertyValue("transform");
    
        if (tr && tr !== "none") {
          const values = tr.split('(')[1];
          const matrixValues = values.split(')')[0].split(',');
          const a = matrixValues[0];
          const b = matrixValues[1];
          const angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
          return angle < 0 ? angle + 360 : angle;
        }
        return 0;
      };    

    const handleClick = () => {
        setIsButtonDisabled(true); // Disable the button

        setTimeout(() => {
            setIsButtonDisabled(false); // Enable the button after a few seconds (e.g., 3 seconds)
        }, 3000); // 3000 milliseconds = 3 seconds
    };

    return (
        <>
            <div className="custom-container rounded-2xl h-80 flex flex-col justify-center items-center">
                <div className="block h-full mt-6 mr-6 mb-8 ml-6 text-center relative">
                    <h2 className="text-xs mt-3 uppercase advice-header-custom">Advice #{adviceID}</h2>
                    <h1 className="h-2/3 mt-5 advice-quote-custom">"{adviceText}"</h1>
                    <picture>
                        <source media="(max-width:420px)" srcset={pattern_mobile_divider} />
                        <img src={pattern_desktop_divider} alt="divider_img" />
                    </picture>
                    <DiceButton onClick={handleDiceButtonClick}  disabled={isButtonDisabled} />
                </div>
            </div>
        </>
    );
}

export default GenerateAdviceBlock;