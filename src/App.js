import ye from './ye.png';
import ring from './ring.png';
import fotr from './fotr.jpg';
import './App.css';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Theater from '@material-ui/icons/Theaters';
import Mic from '@material-ui/icons/MicNone';
import Check from '@material-ui/icons/CheckCircle';
import Ex from '@material-ui/icons/HighlightOff';
import { green, red } from '@material-ui/core/colors';
import { emojisplosion } from "emojisplosion";
import gollum from './gollum.mp3'
import CrazyQuote from './CrazyQuote';

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

  const movieAnswer = (answer) => {
    if (answer == lotrQuote[0].movie) {
      setShowMovie('winner');
      emojisplosion({
        emojiCount: 201,
        emojis: ["🍻", "🍺", "🍷", "🍗", "🍖", "🍇"],
      });
      emojisplosion({
        emojiCount: 201,
        emojis: ["🪓", "🏹", "🗡️", "⚔️", "🛡️", "👑"],
      });
      emojisplosion({
        emojiCount: 201,
        emojis: ["🪓", "🏹", "🗡️", "⚔️", "🛡️", "👑"],
      });
    } else {
      setShowMovie('loser');
      gollum.play();
    }
  }

  return (
    <div className="App">

      <header className="App-header">
        <h1>What quote would you like today?</h1>
      </header>

      <div className='container'>
        <Stack direction="row" spacing={16} justifyContent="center" divider={<Divider orientation="vertical" flexItem color="white"/>}>
          <Stack direction="column" spacing={4} alignItems="center">
            <img src={ye} className="App-logo" alt="ye" />
            <Button style={{borderRadius: 45}} variant="outlined" size="large" color="error" endIcon={<Mic />} onClick={fetchCrazy}>Crazy Quote</Button>
          </Stack>
          <Stack direction="column" spacing={4} alignItems="center">
            <img src={ring} className="App-logo" alt="ring" />
            <Button style={{borderRadius: 45}} variant="outlined" size="large" color="warning" endIcon={<Theater />} onClick={fetchLotr}> Lotr Quote</Button>
          </Stack>
        </Stack>
      </div>
  
     < CrazyQuote yeQuote={yeQuote} trumpQuote={trumpQuote} showCrazy={showCrazy} setShowCrazy={setShowCrazy}/>
        
      { lotrQuote?.map(quote => 
        <div className='quote'>
          <div className='lotrQuote'>
            <p>"{quote.dialog}"</p>
            <p>- {quote.char}</p>
          </div>
          {/* <img src={fotr} className="movie" alt="fotr" onClick={() => setShowMovie(true)}/> */}
          { showMovie === null &&
            <>
            <p>Which film has this quote?</p>
            <Stack  direction="row" spacing={3} justifyContent="center">
              <Button style={{borderRadius: 45}} variant="outlined" size="large" color="success" onClick={() => movieAnswer('The Fellowship of the Ring ')}>Fellowship of the Ring</Button>
              <Button style={{borderRadius: 45}} variant="outlined" size="large" color="error" onClick={() => movieAnswer('The Two Towers ')}>The Two Towers</Button>
              <Button style={{borderRadius: 45}} variant="outlined" size="large" color="primary" onClick={() => movieAnswer('The Return of the King ')}>Return of the King</Button>
            </Stack>
            </>
          }
          { showMovie === 'winner' &&
            <>
            <p>{quote.movie}</p>
            <Check size="large" style={{ color: green[500], fontSize: 50 }}/>
            </>
          }
          { showMovie === 'loser' &&
          <>
            <p>{quote.movie}</p>
            <Ex size="large" style={{ color: red[500], fontSize: 50 }}/>
          </>
          }
        </div>
      )}

    </div>
  );
}

export default App;
