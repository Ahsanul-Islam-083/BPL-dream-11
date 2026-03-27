
import { Suspense, useState } from 'react';
import './App.css'
import Banner from './components/HomePage/Banner/Banner'
import Players from './components/HomePage/Players/Players';
import Navber from './components/Navber/Navber'
import { ToastContainer } from 'react-toastify';

const fetchPlayer = async () => {
  const res = await fetch('/data.json');
  return res.json();
}

function App() {
const playerPromise = fetchPlayer();
const [coin,setCoin] =useState(50000);

  return (
    <>
      <Navber coin={coin}/>
      <Banner/>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>} >
      <Players coin={coin} setCoin={setCoin} playerPromise={playerPromise}/>
      </Suspense>
      <ToastContainer/>
    </>
  )
}

export default App
