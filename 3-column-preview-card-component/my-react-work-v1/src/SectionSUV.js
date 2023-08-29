import './App.css';
import SUV_Image from "./assets/icon-suvs.svg"

function SectionSUV() {
    return (
        <>
            <div className="sm:w-1/3 sm:h-full w-full h-1/3 bg-theme-dark-cyan">
                <div className="m-10">
                    <img src={SUV_Image} alt="suv_image" />
                    <h2 className="mt-5 mb-5 uppercase text-[42px] text-theme-very-light-gray font-theme-shoulders font-bold">SUV</h2>
                    <p className="text-[15px] text-theme-transparent-white font-theme-lexend">
                        Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation
                        and off-road adventures.
                    </p>
                    <button className="mt-[72px] px-8 py-3 rounded-full text-[15px] font-theme-lexend border-none text-theme-dark cyan bg-theme-very-light-gray hover:text-theme-very-light-gray hover:bg-theme-dark-cyan hover:border-2 hover:border-theme-very-light-gray hover:border-solid">Learn More</button>
                </div>
            </div>
        </>
    );
}

export default SectionSUV;