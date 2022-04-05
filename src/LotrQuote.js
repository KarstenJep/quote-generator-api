import { useState } from 'react';
import Footer from './Footer.js'
// M-UI
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
// Images
import FOTR from './Images/FOTR.jpg';
import TTT from './Images/TTT.jpg';
import ROTK from './Images/ROTK.jpg';
import gollum from './Images/gollum.jpg';
import orc from './Images/orc.jpg';
// Audio
import letsDrink from './audio/letsDrink.mp3';
import gollumAudio from './audio/gollum.mp3';
import meat from './audio/meat.mp3';
import caradhras from './audio/caradhras.mp3';
import bow from './audio/bow.mp3';
import distances from './audio/distances.mp3';
import task from './audio/task.mp3';
import late from './audio/late.mp3';

export default function LotrQuote({ lotrQuote, showMovie, setShowMovie, showStreak, setShowStreak, streak, setStreak, wins, setWins, total, setTotal }) {

    const fotk1 = new Audio(task);
    const fotk2 = new Audio(late);
    const ttt1 = new Audio(distances);
    const ttt2 = new Audio(letsDrink);
    const rotk1 = new Audio(bow);
    const rotk2 = new Audio(caradhras);
    const loser1 = new Audio(gollumAudio);
    const loser2 = new Audio(meat);
    const [toggleLoser, setToggleLoser] = useState(false);
    const [toggleFOTR, setToggleFOTR] = useState(false);
    const [toggleTTT, setToggleTTT] = useState(false);
    const [toggleROTK, setToggleROTK] = useState(false);
    const [correct, setCorrect] = useState(null);
    const [incorrect, setIncorrect] = useState(null);

    const movieAnswer = (answer) => {
        setTotal(total + 1);
        if (answer === lotrQuote[0].movie) {
            setShowMovie(answer);
            setShowStreak('lotr');
            setStreak(streak + 1);
            setWins(wins + 1);
            setCorrect(correct + 1);
            if(answer === 'The Fellowship of the Ring '){
                setToggleFOTR(!toggleFOTR);
                toggleFOTR ? 
                    fotk1.play()
                    :
                    fotk2.play()
            } else if(answer === 'The Two Towers '){
                setToggleTTT(!toggleTTT);
                toggleTTT ? 
                    ttt1.play()
                    :
                    ttt2.play()
            } else if(answer === 'The Return of the King '){
                setToggleROTK(!toggleROTK);
                toggleROTK ? 
                    rotk1.play()
                    :
                    rotk2.play()
            }
        } else {
            setShowMovie('loser');
            setShowStreak('loser');
            setStreak(0);
            setIncorrect(incorrect + 1);
            setToggleLoser(!toggleLoser);
            toggleLoser ? 
                loser1.play()
                :
                loser2.play()
            
        }
    }

    return (
        <div className='quote'>
            {lotrQuote?.map(quote =>
                <>
                    <div className='lotrQuote'>
                        <p>"{quote.dialog}"</p>
                        <p>— {quote.char}</p>
                    </div>
                    <Box ml={2}>
                    {showMovie === null &&
                        <>
                            <h4 className='QA'>Which film has this quote?</h4>
                            <Stack direction="row" spacing={3} justifyContent="center">
                                <Button style={{ borderRadius: 15, boxShadow: '0px 0px 8px rgba(255, 71, 0, 0.8)' }} variant="outlined" size="large" color="warning" onClick={() => movieAnswer('The Fellowship of the Ring ')}>Fellowship of the Ring</Button>
                                <Button style={{ borderRadius: 15, boxShadow: '0px 0px 8px rgba(255, 71, 0, 0.8)' }} variant="outlined" size="large" color="warning" onClick={() => movieAnswer('The Two Towers ')}>The Two Towers</Button>
                                <Button style={{ borderRadius: 15, boxShadow: '0px 0px 8px rgba(255, 71, 0, 0.8)' }} variant="outlined" size="large" color="warning" onClick={() => movieAnswer('The Return of the King ')}>Return of the King</Button>
                            </Stack>
                        </>
                    }
                    {showMovie !== null &&
                        <h4 style={{ marginTop: '3vh', marginBottom: '3vh' }}>{quote.movie}</h4>
                    }
                    {showMovie === 'loser' &&
                        <>
                        { toggleLoser ?
                                <img src={orc} style={{ height: '18vmin', borderRadius: '15px', border: '2px red solid', boxShadow: '0px 0px 16px rgba(251, 0, 0, 0.8)' }} alt="fotr" />
                                :
                                <img src={gollum} style={{ height: '18vmin', borderRadius: '15px', border: '2px red solid', boxShadow: '0px 0px 16px rgba(251, 0, 0, 0.8)' }} alt="fotr" />
                        }    
                        </>
                    }
                    {showMovie === 'The Fellowship of the Ring ' &&
                        <img src={FOTR} className="movie" alt="fotr" />
                    }
                    {showMovie === 'The Two Towers ' &&
                        <img src={TTT} className="movie" alt="ttt" />
                    }
                    {showMovie === 'The Return of the King ' &&
                        <img src={ROTK} className="movie" alt="rotk" />
                    }
                    </Box>
                </>
            )}
            {showMovie !== null &&
                <Box mr={102}>
                    <Footer showStreak={showStreak} setShowStreak={setShowStreak} streak={streak} wins={wins} total={total}/>
                </Box>
            }
        </div>
    )
}