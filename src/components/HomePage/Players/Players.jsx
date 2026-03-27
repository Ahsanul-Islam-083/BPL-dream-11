import React, { use, useState } from 'react';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './SelectedPlayers/SelectedPlayers';

const Players = ({ playerPromise,setCoin,coin }) => {
    const players = use(playerPromise)
    console.log(players);
    const [selectedType, setSelectedType] = useState("Available")
    return (
        <div className='container mx-auto space-y-4 my-6'>
            <div className='flex justify-between items-center'>
                {/* <h2 className='text-3xl font-bold'>{selectedType === "Available"? "Available Players": `Selected Players: ${players.length}`}</h2> */}
                {selectedType === "Available" ? (
                    <h2 className="font-bold text-3xl">Available Players</h2>
                ) : (
                    <h2 className="font-bold text-3xl">
                        Selected Players
                    </h2>
                )}
                <div className=''>
                    <button onClick={() => setSelectedType("Available")} className={`btn ${selectedType == "Available" ? 'bg-[#E7FE29]' : ''} rounded-r-none rounded-l-xl border-none`}>Available</button>
                    <button onClick={() => setSelectedType("Selected")} className={`btn ${selectedType == "Selected" ? 'bg-[#E7FE29]' : ''} rounded-l-none rounded-r-xl border-none`}>Selected</button>
                </div>
            </div>
            {selectedType === "Available" ? <AvailablePlayers coin={coin} setCoin={setCoin} players={players}/> : <SelectedPlayers /> }
        </div>
    );
};

export default Players;