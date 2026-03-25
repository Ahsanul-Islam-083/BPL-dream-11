
import { Suspense } from 'react';
import './App.css'
import Banner from './components/HomePage/Banner/Banner'
import Players from './components/HomePage/Players/Players';
import Navber from './components/Navber/Navber'

const fetchPlayer = async () => {
  const res = await fetch('/data.json');
  return res.json();
}

function App() {
const playerPromise = fetchPlayer();

  return (
    <>
      <Navber/>
      <Banner/>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>} >
      <Players playerPromise={playerPromise}/>
      </Suspense>
    </>
  )
}

export default App
