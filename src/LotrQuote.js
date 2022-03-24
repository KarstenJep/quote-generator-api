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

export default function LotrQuote({ lotrQuote, showMovie, setShowMovie }) {

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
        } else {
            setShowMovie('loser');
            // gollum.play();
        }
    }

    return (

        <div className='quote'>
            {lotrQuote?.map(quote =>
                <>
                    <div className='lotrQuote'>
                        <p>"{quote.dialog}"</p>
                        <p>- {quote.char}</p>
                    </div>
                    {showMovie === null &&
                        <>
                            <p>Which film has this quote?</p>
                            <Stack direction="row" spacing={3} justifyContent="center">
                                <Button style={{ borderRadius: 15 }} variant="outlined" size="large" color="warning" onClick={() => movieAnswer('The Fellowship of the Ring ')}>Fellowship of the Ring</Button>
                                <Button style={{ borderRadius: 15 }} variant="outlined" size="large" color="warning" onClick={() => movieAnswer('The Two Towers ')}>The Two Towers</Button>
                                <Button style={{ borderRadius: 15 }} variant="outlined" size="large" color="warning" onClick={() => movieAnswer('The Return of the King ')}>Return of the King</Button>
                            </Stack>
                        </>
                    }
                    {showMovie !== null &&

                        <p>{quote.movie}</p>
                    }
                    {showMovie === 'loser' &&
                        <>
                            <img src={gollum} style={{ height: '12vmin', borderRadius: '15px', border: '1px red solid' }} alt="fotr" />
                            <br />
                            <Ex size="large" style={{ color: red[500], fontSize: 70 }} />
                        </>
                    }
                    {showMovie === 'The Fellowship of the Ring ' &&

                        <img src={gandalf} style={{ height: '12vmin', borderRadius: '15px', border: '1px orange solid' }} alt="fotr" />
                    }
                    {showMovie === 'The Two Towers ' &&

                        <img src={frodo} style={{ height: '12vmin', borderRadius: '15px', border: '1px orange solid' }} alt="fotr" />
                    }
                    {showMovie === 'The Return of the King ' &&

                        <img src={aragorn} style={{ height: '12vmin', borderRadius: '15px', border: '1px orange solid' }} alt="fotr" />
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