import React, { useState } from 'react';
import './App.css';
import Container from './Container';
import SuccessBox from './SuccessBox'; // Import your SuccessBox component

function App() {

  const [showContainer, setShowContainer] = useState(true);

  const toggleSuccessBox = () => {
    setShowContainer(!showContainer);
  };

  const [email, setEmail] = useState('');

  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
  };

  return (
    <>
      <main className={`w-full h-full flex flex-col justify-center md:items-center m-0 ${showContainer ? 'items-start' : 'items-center' }`}>
        {showContainer ? (
          <Container toggleSuccessBox={ toggleSuccessBox } handleEmailChange={ handleEmailChange } />
        ) : (
          <SuccessBox toggleSuccessBox={ toggleSuccessBox } email={ email } />
        )}
      </main>
    </>
  );
}

export default App;
