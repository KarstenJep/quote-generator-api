import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Check from '@material-ui/icons/CheckCircle';
import Ex from '@material-ui/icons/HighlightOff';
import { green, red } from '@material-ui/core/colors';
import { emojisplosion } from "emojisplosion";
import aragorn from './Images/aragorn.jpg'
import frodo from './Images/frodo.png'
import gandalf from './Images/gandalf.jpg'
import gollum from './Images/gollum.jpg';
import letsDrink from './audio/letsDrink.mp3';
import gollumAudio from './audio/gollum.mp3';
import frodoAudio from './audio/frodo.mp3';
import {useState, useEffect} from 'react';
import caradhras from './audio/caradhras.mp3';


export default function LotrQuote({ lotrQuote, showMovie, setShowMovie }) {

    const rotk = new Audio(letsDrink);
    const loser1 = new Audio(gollumAudio);
    const loser2 = new Audio(frodoAudio);
    const fotk = new Audio(caradhras);
    const [toggleLoser, setToggleLoser] = useState(false);

    const movieAnswer = (answer) => {
        if (answer == lotrQuote[0].movie) {
            setShowMovie(answer);
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
            if(answer === 'The Fellowship of the Ring '){
                fotk.play();
            } else if(answer === 'The Return of the King '){
                rotk.play();
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
                                <Button style={{ borderRadius: 15, boxShadow: '0px 0px 8px rgba(220, 0, 0, 0.8)' }} variant="outlined" size="large" color="warning" onClick={() => movieAnswer('The Fellowship of the Ring ')}>Fellowship of the Ring</Button>
                                <Button style={{ borderRadius: 15, boxShadow: '0px 0px 8px rgba(220, 0, 0, 0.8)' }} variant="outlined" size="large" color="warning" onClick={() => movieAnswer('The Two Towers ')}>The Two Towers</Button>
                                <Button style={{ borderRadius: 15, boxShadow: '0px 0px 8px rgba(220, 0, 0, 0.8)' }} variant="outlined" size="large" color="warning" onClick={() => movieAnswer('The Return of the King ')}>Return of the King</Button>
                            </Stack>
                        </>
                    }
                    {showMovie !== null &&

                        <h4>{quote.movie}</h4>
                    }
                    {showMovie === 'loser' &&
                        <>
                            <img src={gollum} style={{ height: '12vmin', borderRadius: '15px', border: '1px red solid', boxShadow: '0px 0px 8px rgba(251, 0, 0, 0.8)' }} alt="fotr" />
                            <br />
                            <Ex size="large" style={{ color: red[500], fontSize: 70 }} />
                        </>
                    }
                    {showMovie === 'The Fellowship of the Ring ' &&

                        <img src={gandalf} style={{ height: '12vmin', borderRadius: '15px', border: '1px orange solid', boxShadow: '0px 0px 8px rgba(251, 0, 0, 0.8)' }} alt="fotr" />
                    }
                    {showMovie === 'The Two Towers ' &&

                        <img src={frodo} style={{ height: '12vmin', borderRadius: '15px', border: '1px orange solid', boxShadow: '0px 0px 8px rgba(251, 0, 0, 0.8)' }} alt="fotr" />
                    }
                    {showMovie === 'The Return of the King ' &&
                        
                        <img src={aragorn} style={{ height: '12vmin', borderRadius: '15px', border: '1px orange solid', boxShadow: '0px 0px 8px rgba(251, 0, 0, 0.8)' }} alt="fotr" />
                    }
                    <br />
                    {showMovie !== null && showMovie !== 'loser' &&

                        <Check size="large" style={{ color: green[500], fontSize: 60 }} />
                    }
                </>
            )}
        </div>
    )
}