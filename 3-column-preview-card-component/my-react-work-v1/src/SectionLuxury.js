import './App.css';
import Luxary_Image from "./assets/icon-luxury.svg";

function SectionLuxury() {
    return (
        <>
            <div className="w-1/3 h-full bg-theme-very-dark-cyan">
                <div className="m-10">
                    <img src={Luxary_Image} alt="luxary_image" />
                    <h2 className="mt-5 mb-5 uppercase text-[42px] text-theme-very-light-gray font-theme-shoulders font-bold">Luxary</h2>
                    <p className="text-[15px] text-theme-transparent-white font-theme-lexend">
                        Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury
                        rental and arrive in style.
                    </p>
                    <button className="mt-[72px] px-8 py-3 rounded-full text-[15px] font-theme-lexend border-none text-theme-very-dark-cyan bg-theme-very-light-gray hover:text-theme-very-light-gray hover:bg-theme-very-dark-cyan hover:border-2 hover:border-theme-very-light-gray hover:border-solid">Learn More</button>
                </div>
            </div>
        </>
    );
}

export default SectionLuxury;