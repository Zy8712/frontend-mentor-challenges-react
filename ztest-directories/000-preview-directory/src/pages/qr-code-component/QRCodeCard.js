import React from 'react';

import qrcode from './image-qr-code.png';
import './App.css';

function QRCodeCard() {
  return (
    <>
      <div className="w-80 rounded-2xl qr-code-custom-card-background shadow-xl">
        
        <div className="m-4">
          <div className="rounded-lg overflow-hidden">
            <img src={qrcode} alt="qr_code" />
          </div>
          <div className="mt-5 ml-3 mr-3 mb-8 text-center">
            <h1 className="qr-code-custom-text-color-dark-blue font-bold">Improve your front-end skills by building projects</h1>
            <p className="mt-3 qr-code-custom-text-color-grayish-blue font-normal">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
          </div>
        </div>

      </div>
    </>
  );
}

export default QRCodeCard;
