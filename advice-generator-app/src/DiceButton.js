import diceIcon from './assets/icon-dice.svg';
import './App.css';

function DiceButton(){
    return(
        <>
        <div className="w-full absolute -bottom-16 block flex justify-center">
            <button id="random-advice-button" className="flex flex-col justify-center items-center rounded-full p-5 border-none">
                <img src={diceIcon} alt="dice_icon" />
            </button>
        </div>
        </>
    );
}

export default DiceButton;