import React, { useState } from 'react';
import './App.css';
import SuccessCheck from "./assets/icon-success.svg";

function SuccessBox({ toggleSuccessBox, email }) {

    return (
        <>
            <div className="w-[420px] h-[420px] bg-theme-white rounded-[30px]">
                <div className="mx-12 my-8">
                    <img
                        src={SuccessCheck}
                        alt="success_check_icon"
                        className="w-12 h-12 mb-8" />
                    <h2 className="text-5xl text-theme-dark-slate-grey font-bold mb-5">Thanks for subscribing!</h2>
                    <p className="text-sm text-theme-dark-slate-grey mb-8">A confirmation email has been sent to
                        <span className="font-bold"> {email}</span>.
                        Please open it and click the button inside to confirm your subscription.</p>
                    <button
                        onClick={toggleSuccessBox}
                        className="bg-theme-dark-slate-grey text-theme-white font-bold text-sm w-full py-4 rounded-md hover:bg-gradient-to-r from-custom-red to-custom-orange">
                            Dismiss message
                        </button>
                </div>
            </div>
        </>
    );
}

export default SuccessBox;
