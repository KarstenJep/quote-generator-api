import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Check from '@material-ui/icons/CheckCircle';
import Ex from '@material-ui/icons/HighlightOff';
import { green, red } from '@material-ui/core/colors';
import { emojisplosion } from "emojisplosion";

export default function LotrQuote({lotrQuote, showMovie, setShowMovie}) {

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
                    {showMovie === 'winner' &&
                        <>
                            <p>{quote.movie}</p>
                            <Check size="large" style={{ color: green[500], fontSize: 50 }} />
                        </>
                    }
                    {showMovie === 'loser' &&
                        <>
                            <p>{quote.movie}</p>
                            <Ex size="large" style={{ color: red[500], fontSize: 50 }} />
                        </>
                    }
                </>
            )}
        </div>
    )
}