import React from 'react';
import dollarImg from "../../assets/dollar_1.png"

const Navber = () => {
    return (
        <div className="container mb-6 mx-auto navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <button className="btn font-bold text-xl">
                    0 Coins
                    <img src={dollarImg} alt="" />
                </button>
            </div>
        </div>
    );
};

export default Navber;