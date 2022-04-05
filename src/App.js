import { useState, useRef, useEffect } from 'react';
import Confetti from 'react-confetti'
// Files
import './App.css';
import json from './HP.json'
import CrazyQuote from './CrazyQuote';
import LotrQuote from './LotrQuote';
import Dashboard from './Dashboard';
import HP from './HPQuote';
import Header from './Header';

function App() {

  const [yeQuote, setYeQuote] = useState(null);
  const [trumpQuote, setTrumpQuote] = useState(null);
  const [showCrazy, setShowCrazy] = useState(null);
  const rndmLotrQuote = require('random-lotr-movie-quote');
  const [lotrQuote, setLotrQuote] = useState(null);
  const [showMovie, setShowMovie] = useState(null);
  const [hpQuote, setHpQuote] = useState(null);
  const [showBook, setShowBook] = useState(null);
  const [streak, setStreak] = useState(0);
  const [wins, setWins] = useState(0);
  const [total, setTotal] = useState(0);
  const [showStreak, setShowStreak] = useState(null);
  const [incorrectCRZY, setIncorrectCRZY] = useState(null);
  const [correctCRZY, setCorrectCRZY] = useState(null);
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
    setShowBook(null);
  }

  const fetchCrazy = async () => {
    setLotrQuote(null);
    setShowCrazy(null);
    setHpQuote(null);
    setShowMovie(null);
    setShowBook(null);
    Math.random() > .5 ?
    fetchYe()
    :
    fetchTrump()
  }

  const fetchHP = async () => {
    setLotrQuote(null);
    setYeQuote(null);
    setShowCrazy(null);
    setTrumpQuote(null);
    setShowMovie(null);
    setShowBook(null);
    setHpQuote(json[Math.floor(Math.random() * 38)])
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
  }, [])

  return (
    <div className="App" ref={confettiRef}>
      <Header showStreak={showStreak} wins={wins} total={total} />
      <Dashboard fetchCrazy={fetchCrazy} fetchLotr={fetchLotr} fetchHP={fetchHP} correctCRZY={correctCRZY} setCorrectCRZY={setCorrectCRZY} incorrectCRZY={incorrectCRZY} setIncorrectCRZY={setIncorrectCRZY}/>
      <LotrQuote lotrQuote={lotrQuote} showMovie={showMovie} setShowMovie={setShowMovie} showStreak={showStreak} setShowStreak={setShowStreak} streak={streak} setStreak={setStreak} wins={wins} setWins={setWins} total={total} setTotal={setTotal}/>
      <CrazyQuote yeQuote={yeQuote} trumpQuote={trumpQuote} showCrazy={showCrazy} setShowCrazy={setShowCrazy} showStreak={showStreak} setShowStreak={setShowStreak} streak={streak} setStreak={setStreak} wins={wins} setWins={setWins} total={total} setTotal={setTotal} correctCRZY={correctCRZY} setCorrectCRZY={setCorrectCRZY} incorrectCRZY={incorrectCRZY} setIncorrectCRZY={setIncorrectCRZY}/>
      <HP hpQuote={hpQuote} showBook={showBook} setShowBook={setShowBook} showStreak={showStreak} setShowStreak={setShowStreak} streak={streak} setStreak={setStreak} wins={wins} setWins={setWins} total={total} setTotal={setTotal}/>
      
      {showMovie !== null && showMovie !== 'loser' &&
          <Confetti width={width} height={height} />
      }
    </div>
  );
}

export default App;
