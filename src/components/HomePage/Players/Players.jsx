import React, { use, useState } from 'react';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';

const Players = ({playerPromise}) => {
    const players = use(playerPromise)
    console.log(players);
    const[selectedType,setSelectedType] =useState("Available")
    return (
        <div className='container mx-auto space-y-4 my-6'>
            <div className='flex justify-between items-center'>
                <h2 className='text-3xl font-bold'>Available Players</h2>
                <div className=''>
                    <button onClick={()=>setSelectedType("Available")} className={`btn ${selectedType=="Available"?'bg-[#E7FE29]':''} rounded-r-none rounded-l-xl border-none`}>Available</button>
                    <button onClick={()=>setSelectedType("Selected")} className={`btn ${selectedType=="Selected"?'bg-[#E7FE29]':''} rounded-l-none rounded-r-xl border-none`}>Selected</button>
                </div>
            </div>
            <AvailablePlayers players={players}/>
        </div>
    );
};

export default Players;