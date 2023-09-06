import './App.css';
import BottomLeftSection from "./BottomLeftSection";
import BottomRightSection from "./BottomRightSection";


function BottomSection() {
  return (
    <>
      <div className="w-full sm:h-[55%] h-[64%] flex sm:flex-row flex-col ">
        <BottomLeftSection />
        <BottomRightSection />
      </div>
    </>
  )
}

export default BottomSection;