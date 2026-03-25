import React from 'react';
import Card from '../../../Ui/Card';

const AvailablePlayers = ({ players }) => {
    console.log(players);

    return (
        <div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    players.map((player, index) => <Card player = { player } key = { index } />)
                }
            </div>

        </div>
    );
};

export default AvailablePlayers;