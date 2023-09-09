import './App.css';
import React from 'react';
import TopSection from "./TopSection";
import BottomSection from "./BottomSection";
import Footer from './Footer';

function App() {
  return (
    <>
      <main className="w-full h-full flex flex-col justify-center items-center bg-price-grid-theme-light-gray font-price-grid-theme-karla">
        <div className="sm:w-[700px] sm:h-[520px] w-[360px] h-[840px] flex flex-col bg-white rounded-lg text-left overflow-hidden sm:mt-0 mt-8 sm:mb-0 mb-8">
          <TopSection />
          <BottomSection />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App;
