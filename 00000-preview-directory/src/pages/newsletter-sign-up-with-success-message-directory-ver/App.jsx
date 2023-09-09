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
      <main className={`w-screen h-screen flex flex-col justify-center md:items-center m-0 bg-newsletter-sign-up-theme-charcoal-grey font-newsletter-sign-up-theme-roboto ${showContainer ? 'items-start' : 'items-center' }`}>
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
