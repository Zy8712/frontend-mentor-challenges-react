import './App.css';
import Sedan_Image from "./assets/icon-sedans.svg";

function SectionSedan() {
    return (
        <>
            <div className="sm:w-1/3 sm:h-full w-full h-1/3 bg-theme-bright-orange">
                <div className="m-10">
                    <img src={Sedan_Image} alt="sedan_image" />
                    <h2 className="mt-5 mb-5 uppercase text-[42px] text-theme-very-light-gray font-theme-shoulders font-bold">Sedans</h2>
                    <p className="text-[15px] text-theme-transparent-white font-theme-lexend">
                        Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city
                        or on your next road trip.
                    </p>
                    <button className="mt-[72px] px-8 py-3 rounded-full text-[15px] font-theme-lexend border-none text-theme-bright-orange bg-theme-very-light-gray hover:text-theme-very-light-gray hover:bg-theme-bright-orange hover:border-2 hover:border-theme-very-light-gray hover:border-solid">Learn More</button>
                </div>
            </div>
        </>
    );
}

export default SectionSedan;