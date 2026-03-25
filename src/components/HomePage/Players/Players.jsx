import React, { use } from 'react';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';

const Players = ({playerPromise}) => {
    const players = use(playerPromise)
    console.log(players);
    return (
        <div className='container mx-auto my-6'>
            <p>players: {players.length}</p>
            <AvailablePlayers players={players}/>
        </div>
    );
};

export default Players;