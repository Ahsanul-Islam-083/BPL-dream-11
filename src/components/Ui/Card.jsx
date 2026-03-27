import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { FaFlag } from 'react-icons/fa6';

const Card = ({ player, setCoin, coin }) => {
    const [isSelected, setIsSelected] = useState(false)
    let newCoin = coin - player.price;
    const handleChoosePlayer = () => {
        if (newCoin >= 0) {
            setCoin(coin - player.price);
        } else {
            alert(`Not enough coin to purchase ${player.playerName}`);
            return;
        }
        alert(`${player.playerName} is selected!`)
        setIsSelected(true);
    }
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure className="p-6">
                <img
                    src={player.playerImg}
                    alt="Player Image" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title"><FaUser />{player.playerName}</h2>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2 items-center'>
                        <FaFlag />
                        <p>{player.playerCountry}</p>
                    </div>
                    <button className='btn'>All-Rounder</button>
                </div>
                <div className='divider'></div>
                <h2 className='font-bold'>Rating ({player.rating})</h2>
                <div className='flex justify-between'>
                    <p>{player.battingStyle}</p>
                    <p className='text-right'>{player.bowlingStyle}</p>
                </div>
                <div className='flex justify-between items-center'>
                    <p className='font-semibold'>Price: ${player.price} </p>
                    <button onClick={handleChoosePlayer} disabled={isSelected} className='btn btn-outline border-gray-400'>{isSelected ? "Selected" : "Choose Player"}</button>
                </div>
            </div>
        </div>
    );
};

export default Card;