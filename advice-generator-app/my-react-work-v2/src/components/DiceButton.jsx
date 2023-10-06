import React, { useState } from 'react';
import diceIcon from "../assets/icon-dice.svg";
import { motion } from "framer-motion";

function DiceButton({ handleDiceButtonClick }) {
  const [isRotated, setIsRotated] = useState(false);

  const handleButtonClick = () => {
    setIsRotated(!isRotated);
    handleDiceButtonClick();
  };

  const buttonVariants = {
    rotated: {
      rotate: 360,
      transition: {
        duration: 0.5,
      },
    },
    initial: {
      rotate: 0,
    },
  };

  return (
    <>
      <div className="w-full absolute -bottom-8 flex justify-center">
        <motion.button 
          id="random-advice-button" 
          className={`flex flex-col justify-center items-center rounded-full p-5 border-none bg-neon-green hover:shadow-random-button-shadow ${isRotated ? 'rotated' : ''}`}
          onClick={handleButtonClick}
          
          variants={buttonVariants}
          initial="initial"
          animate={isRotated ? 'rotated' : 'initial'}
        >
          <img src={diceIcon} alt="dice_icon" />
        </motion.button>
      </div>
    </>
  );
}

export default DiceButton;
