import './App.css';
import { useState } from 'react';
import CrazyQuote from './CrazyQuote';
import LotrQuote from './LotrQuote';
import Dashboard from './Dashboard';
import Header from './Header';

function App() {

  const [yeQuote, setYeQuote] = useState(null);
  const [trumpQuote, setTrumpQuote] = useState(null);
  const [showCrazy, setShowCrazy] = useState(null);
  const rndmLotrQuote = require('random-lotr-movie-quote');
  const [lotrQuote, setLotrQuote] = useState(null);
  const [showMovie, setShowMovie] = useState(null);
  
  const fetchLotr = () => {
    setLotrQuote([rndmLotrQuote()]);
    setYeQuote(null);
    setTrumpQuote(null);
    setShowMovie(null);
  }

  const fetchCrazy = async () => {
    setLotrQuote(null)
    setShowCrazy(null);
    {Math.random() > .5 ?
    fetchYe()
    :
    fetchTrump()
    }
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

  return (
    <div className="App">
      <Header />
      <Dashboard fetchCrazy={fetchCrazy} fetchLotr={fetchLotr} />
      <LotrQuote lotrQuote={lotrQuote} showMovie={showMovie} setShowMovie={setShowMovie}/>
      <CrazyQuote yeQuote={yeQuote} trumpQuote={trumpQuote} showCrazy={showCrazy} setShowCrazy={setShowCrazy}/>
    </div>
  );
}

export default App;
