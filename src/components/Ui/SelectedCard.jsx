import React from 'react';
import { MdDelete } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';

const SelectedCard = ({player, handleDeleteSelectedPlayer}) => {
    return (
        <div>
            <div className='flex items-center gap-6 justify-between p-4 rounded-2xl border'>
                <div className='flex items-center gap-6'>
                    <img className='h-18.75 w-auto rounded-md' src={player.playerImg} alt="Player Image" />
                    <div>
                        <h2 className='flex items-center gap-2 font-bold text-2xl'><FaUser /> {player.playerName}</h2>
                        <p>{player.playerType} </p>
                    </div>
                </div>
                <button onClick={() => { handleDeleteSelectedPlayer(player) }} className='btn text-red-500'><MdDelete /></button>
            </div>
        </div>
    );
};

export default SelectedCard; 