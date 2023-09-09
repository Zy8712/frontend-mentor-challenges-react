import React, { useState } from 'react';
import './App.css';
import CheckMark from "./assets/icon-list.svg";

function InfoDiv({ toggleSuccessBox, handleEmailChange }) {
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);

    const handleInputChange = (e) => {
        const inputEmail = e.target.value;
        setEmail(inputEmail);
    };

    const handleSubscribeClick = () => {
        // Check if the email is valid (you can use a regex or any other validation method)
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const isValid = emailRegex.test(email);
        setIsEmailValid(isValid);

        if (isValid) {
            toggleSuccessBox();
            handleEmailChange(email);
        }
    };

    return (
        <>
            <div className="w-full h-full flex flex-col justify-center">
                <div className="sm:ml-8 mx-4 flex flex-col">
                    <h1 className="text-5xl font-bold text-newsletter-sign-up-theme-dark-slate-grey mb-5">Stay updated!</h1>
                    <p className="text-newsletter-sign-up-theme-dark-slate-grey mb-5"> Join 60,000+ product managers receiving monthly updates on:</p>
                    <p className="text-newsletter-sign-up-theme-dark-slate-grey flex items-center mb-2">
                        <img src={CheckMark} alt="checkmark_icon" className="mr-3" />
                        Product discovery and building what matters
                    </p>
                    <p className="text-newsletter-sign-up-theme-dark-slate-grey flex items-center mb-2">
                        <img src={CheckMark} alt="checkmark_icon" className="mr-3" />
                        Measuring to ensure updates are a success
                    </p>
                    <p className="text-newsletter-sign-up-theme-dark-slate-grey flex items-center mb-8">
                        <img src={CheckMark} alt="checkmark_icon" className="mr-3" />
                        And much more!
                    </p>

                    <p className="text-newsletter-sign-up-theme-dark-slate-grey text-xs font-bold flex justify-between">
                        <span className={`${!isEmailValid ? 'text-newsletter-sign-up-theme-tomato' : ''}`}>Email address</span>
                        {!isEmailValid && <span className="text-newsletter-sign-up-theme-tomato">Valid email required</span>}
                    </p>
                    <input
                        type="email"
                        name="email"
                        placeholder="email@company.com"
                        className={`border-newsletter-sign-up-theme-grey border-[1px] border-solid rounded-md mb-6 mt-2 pl-6 py-[14px] ${!isEmailValid ? '!border-newsletter-sign-up-theme-tomato text-newsletter-sign-up-theme-tomato bg-newsletter-sign-up-translucent-red' : ''}`}
                        value={email}
                        onChange={handleInputChange} />
                    <button
                        className="text-newsletter-sign-up-theme-white text-base font-bold px-12 py-4 bg-newsletter-sign-up-theme-dark-slate-grey rounded-lg hover:bg-gradient-to-r from-newsletter-sign-up-custom-red to-newsletter-sign-up-custom-orange"
                        onClick={handleSubscribeClick}>
                        Subscribe to monthly newsletter
                    </button>
                </div>
            </div>
        </>
    )
}

export default InfoDiv;
