import './App.css';
import json from './HP.json'
import { useState, useRef, useEffect } from 'react';
import CrazyQuote from './CrazyQuote';
import LotrQuote from './LotrQuote';
import Dashboard from './Dashboard';
import HP from './HPQuote';
import Header from './Header';
import Confetti from 'react-confetti'


function App() {

  const [yeQuote, setYeQuote] = useState(null);
  const [trumpQuote, setTrumpQuote] = useState(null);
  const [showCrazy, setShowCrazy] = useState(null);
  const rndmLotrQuote = require('random-lotr-movie-quote');
  const [lotrQuote, setLotrQuote] = useState(null);
  const [showMovie, setShowMovie] = useState(null);
  const [hpQuote, setHpQuote] = useState(null);
  const [height, setHeight] = useState(null)
  const [width, setWidth] = useState(null)
  const confettiRef = useRef(null);
  
  const fetchLotr = () => {
    setLotrQuote([rndmLotrQuote()]);
    setYeQuote(null);
    setTrumpQuote(null);
    setShowMovie(null);
    setShowCrazy(null);
    setHpQuote(null);
  }

  const fetchCrazy = async () => {
    setLotrQuote(null);
    setShowCrazy(null);
    setHpQuote(null);
    setShowMovie(null);
    {Math.random() > .5 ?
    fetchYe()
    :
    fetchTrump()
    }
  }

  const fetchHP = async () => {
    setLotrQuote(null)
    setYeQuote(null)
    setTrumpQuote(null)
    setHpQuote(json[Math.floor(Math.random() * 38)])
    // await fetch("https://www.stands4.com/services/v2/quotes.php")
    //   .then((response) => response.json())
    //   .then((data) => console.log([data]))
    //   .catch(() => console.log('error'))
  }

  const fetchYe = async () => {
    setYeQuote(null)
    setTrumpQuote(null)
    await fetch("https://api.kanye.rest")
      .then((response) => response.json())
      .then((data) => setYeQuote([data]))
      .catch(() => console.log('error'))
  }

  const fetchTrump = async () => {
    setYeQuote(null)
    setTrumpQuote(null)
    await fetch("https://api.whatdoestrumpthink.com/api/v1/quotes")
      .then((response) => response.json())
      .then((data) => setTrumpQuote([data.messages.non_personalized[Math.floor(Math.random() * 49)]]))
      .catch(() => console.log('error'))
  }

  useEffect(() => {
    setHeight(confettiRef.current.clientHeight);
    setWidth(confettiRef.current.clientWidth);
  })

  return (
    <div className="App" ref={confettiRef}>
      <Header />
      <Dashboard fetchCrazy={fetchCrazy} fetchLotr={fetchLotr} fetchHP={fetchHP} />
      <LotrQuote lotrQuote={lotrQuote} showMovie={showMovie} setShowMovie={setShowMovie}/>
      <CrazyQuote yeQuote={yeQuote} trumpQuote={trumpQuote} showCrazy={showCrazy} setShowCrazy={setShowCrazy}/>
      <HP hpQuote={hpQuote} />

      {showMovie !== null && showMovie !== 'loser' &&
          <Confetti width={width} height={height} />
      }
    </div>
  );
}

export default App;
