import './App.css';
import BottomLeftSection from "./BottomLeftSection";
import BottomRightSection from "./BottomRightSection";


function BottomSection() {
  return (
    <>
      <div className="w-full h-[55%] flex flex-row ">
        <BottomLeftSection />
        <BottomRightSection />
      </div>
    </>
  )
}

export default BottomSection;