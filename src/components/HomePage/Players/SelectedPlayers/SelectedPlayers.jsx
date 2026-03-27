import React from 'react';
import Players from '../Players';
import SelectedCard from '../../../Ui/SelectedCard';


const SelectedPlayers = ({ selectedPlayers,setSelectedPlayers,coin,setCoin }) => {
    // console.log(selectedPlayers);
    const handleDeleteSelectedPlayer =(player)=>{
        // console.log(player);
        const filteredPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.playerName !== player.playerName );
        // console.log(filteredPlayers);
        setSelectedPlayers(filteredPlayers);
        setCoin(coin+player.price);
        
        
    }

    return (
        <div>
            <div className='space-y-4'>
                { !selectedPlayers.length ? <div className='text-center h-100 flex items-center gap-4 justify-center flex-col'>
                    <h2 className='text-xl font-semibold'>No players selected yet</h2>
                    <p>Go to Available tab to select players</p>
                </div> :
                    selectedPlayers.map((player, i) => <SelectedCard key={i} player={player} handleDeleteSelectedPlayer={handleDeleteSelectedPlayer} />)
                }
            </div>
        </div>
    );
};

export default SelectedPlayers;