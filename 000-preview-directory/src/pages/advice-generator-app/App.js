import React from 'react';

import './App.css';
import GenerateAdviceBlock from './GenerateAdviceBlock';
import Footer from './Footer';

function App() {
  return (
    <>
      <main className="react-gen-custom-page-background w-screen h-screen overflow-hidden flex flex-col justify-center items-center">
        <GenerateAdviceBlock />
      </main>
    </>
  );
}

export default App;
