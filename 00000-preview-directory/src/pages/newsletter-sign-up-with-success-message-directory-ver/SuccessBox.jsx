import React, { useState } from 'react';
import './App.css';
import SuccessCheck from "./assets/icon-success.svg";

function SuccessBox({ toggleSuccessBox, email }) {

    return (
        <>
            <div className="sm:w-[420px] sm:h-[420px] w-full h-full bg-newsletter-sign-up-theme-white sm:rounded-[30px]">
                <div className="mx-12 sm:my-10 my-28">
                    <img
                        src={SuccessCheck}
                        alt="success_check_icon"
                        className="w-12 h-12 mb-7" />
                    <h2 className="text-5xl text-newsletter-sign-up-theme-dark-slate-grey font-bold mb-5">Thanks for subscribing!</h2>
                    <p className="text-sm text-newsletter-sign-up-theme-dark-slate-grey sm:mb-8 mb-32">A confirmation email has been sent to
                        <span className="font-bold"> {email}</span>.
                        Please open it and click the button inside to confirm your subscription.</p>
                    <button
                        onClick={toggleSuccessBox}
                        className="bg-newsletter-sign-up-theme-dark-slate-grey text-newsletter-sign-up-theme-white font-bold text-sm w-full py-4 rounded-md hover:bg-gradient-to-r from-newsletter-sign-up-custom-red to-newsletter-sign-up-custom-orange">
                            Dismiss message
                        </button>
                </div>
            </div>
        </>
    );
}

export default SuccessBox;
