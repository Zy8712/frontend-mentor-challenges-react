import React, { useRef } from 'react';
import diceIcon from './assets/icon-dice.svg';
import './App.css';

function DiceButton({ onClick, disabled }) {
    const buttonRef = useRef(null); // Create a useRef for the button element
    const diceIconRef = useRef(null); // Create a useRef for the dice icon

    return (
        <div className="w-full absolute -bottom-16 flex justify-center">
            <button
                id="react-gen-random-advice-button"
                className="flex flex-col justify-center items-center rounded-full p-5 border-none"
                onClick={onClick}
                disabled={disabled}
                ref={buttonRef} // Attach the ref to the button element
            >
                <img ref={diceIconRef} src={diceIcon} alt="dice_icon" />
            </button>
        </div>
    );
}

export default DiceButton;