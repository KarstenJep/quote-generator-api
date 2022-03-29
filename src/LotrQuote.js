import {useState, useEffect} from 'react';
// M-UI
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Check from '@material-ui/icons/CheckCircle';
import Ex from '@material-ui/icons/HighlightOff';
import { green, red } from '@material-ui/core/colors';
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

export default function LotrQuote({ lotrQuote, showMovie, setShowMovie }) {

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

    const movieAnswer = (answer) => {
        if (answer == lotrQuote[0].movie) {
            setShowMovie(answer);
            if(answer === 'The Fellowship of the Ring '){
                setToggleFOTR(!toggleFOTR);
                {toggleFOTR ? 
                    fotk1.play()
                    :
                    fotk2.play()
                }
            } else if(answer === 'The Two Towers '){
                setToggleTTT(!toggleTTT);
                {toggleTTT ? 
                    ttt1.play()
                    :
                    ttt2.play()
                }
            } else if(answer === 'The Return of the King '){
                setToggleROTK(!toggleROTK);
                {toggleROTK ? 
                    rotk1.play()
                    :
                    rotk2.play()
                }
            }
        } else {
            setShowMovie('loser');
            setToggleLoser(!toggleLoser);
            {toggleLoser ? 
                loser1.play()
                :
                loser2.play();
            }
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
                    {showMovie === null &&
                        <>
                            <h4>Which film has this quote?</h4>
                            <Stack direction="row" spacing={3} justifyContent="center">
                                <Button style={{ borderRadius: 15, boxShadow: '0px 0px 8px rgba(255, 71, 0, 0.8)' }} variant="outlined" size="large" color="warning" onClick={() => movieAnswer('The Fellowship of the Ring ')}>Fellowship of the Ring</Button>
                                <Button style={{ borderRadius: 15, boxShadow: '0px 0px 8px rgba(255, 71, 0, 0.8)' }} variant="outlined" size="large" color="warning" onClick={() => movieAnswer('The Two Towers ')}>The Two Towers</Button>
                                <Button style={{ borderRadius: 15, boxShadow: '0px 0px 8px rgba(255, 71, 0, 0.8)' }} variant="outlined" size="large" color="warning" onClick={() => movieAnswer('The Return of the King ')}>Return of the King</Button>
                            </Stack>
                        </>
                    }
                    {showMovie !== null &&

                        <h4>{quote.movie}</h4>
                    }
                    {showMovie === 'loser' &&
                        <>
                            <img src={gollum} style={{ height: '14vmin', borderRadius: '15px', border: '1px red solid', boxShadow: '0px 0px 8px rgba(251, 0, 0, 0.8)' }} alt="fotr" />
                            {' '}&nbsp;
                            <img src={orc} style={{ height: '14vmin', borderRadius: '15px', border: '1px red solid', boxShadow: '0px 0px 8px rgba(251, 0, 0, 0.8)' }} alt="fotr" />
                            <br />
                            <Ex size="large" style={{ color: red[500], fontSize: 70 }} />
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
                    {/* <br /> */}
                    {/* {showMovie !== null && showMovie !== 'loser' &&

                        <Check size="large" style={{ color: green[500], fontSize: 60 }} />
                    } */}
                </>
            )}
        </div>
    )
}

/*  emojisplosion({
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
            }); */