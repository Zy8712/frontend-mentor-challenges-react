import React from 'react';
import './App.css';
import QRCodeCard from './QRCodeCard';
import Footer from './Footer';

function App() {
  return (
    <>
      <main className="qr-code-custom-page-background w-screen h-screen overflow-hidden flex flex-col justify-center items-center">
        <QRCodeCard />
      </main>
    </>
  );
}

export default App;
