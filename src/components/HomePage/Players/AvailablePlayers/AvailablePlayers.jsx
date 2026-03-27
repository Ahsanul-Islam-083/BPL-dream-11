import React from 'react';
import Card from '../../../Ui/Card';

const AvailablePlayers = ({ players,setCoin,coin,setSelectedPlayers,selectedPlayers }) => {
    // console.log(players);

    return (
        <div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    players.map((player, index) => <Card player = { player } 
                    key = { index } 
                    coin={coin} 
                    setCoin={setCoin} 
                    setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers} />)
                }
            </div>

        </div>
    );
};

export default AvailablePlayers;