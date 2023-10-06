import diceIcon from "../assets/icon-dice.svg";

function DiceButton() {
    return (
        <>
            <div className="w-full absolute -bottom-8 flex justify-center">
                <button id="random-advice-button" className="flex flex-col justify-center items-center rounded-full p-5 border-none bg-neon-green hover:shadow-random-button-shadow">
                    <img src={diceIcon} alt="dice_icon" />
                </button>
            </div>
        </>
    );
}

export default DiceButton;