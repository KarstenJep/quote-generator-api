import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Check from '@material-ui/icons/CheckCircle';
import Ex from '@material-ui/icons/HighlightOff';
import { green, red } from '@material-ui/core/colors';
import { emojisplosion } from "emojisplosion";

export default function crazyQuote({ yeQuote, trumpQuote, showCrazy, setShowCrazy }) {

    const crazyAnswer = (answer) => {
        if (answer === 'ye') {
            setShowCrazy('winner')
            emojisplosion({
                emojiCount: 201,
                emojis: ["💩", "📿", "🧻", "💣", "🎆", "🎉"],
            });
            emojisplosion({
                emojiCount: 201,
                emojis: ["🎤", "🎧", "🧣", "👟", "🕶", "💥"],
            });
        } else if (answer === 'trump') {
            setShowCrazy('winner')
            emojisplosion({
                emojiCount: 201,
                emojis: ["💩", "🚽", "🧻", "💣", "🎆", "🎉"],
            });
            emojisplosion({
                emojiCount: 201,
                emojis: ["🏌", "🐷", "🐖", "💥", "🍊", "🤡"],
            });
        } else if (answer === 'loser') {
            setShowCrazy('loser');
        }
    }

    return (
        <div className="App">
            {yeQuote?.map(quote =>
                <div className='quote'>
                    <div className='yeQuote'>
                        <p>"{quote.quote}"</p>
                    </div>
                    {showCrazy === null &&
                        <>
                            <p>Which crazy has this quote?</p>
                            <Stack direction="row" spacing={3} justifyContent="center">
                                <Button style={{ borderRadius: 45 }} variant="outlined" size="large" color="success" onClick={() => crazyAnswer('ye')}>Ye</Button>
                                <Button style={{ borderRadius: 45 }} variant="outlined" size="large" color="error" onClick={() => crazyAnswer('loser')}>Donald Trump</Button>
                            </Stack>
                        </>
                    }
                    {showCrazy === 'winner' &&
                        <>
                            <p>Ye</p>
                            <Check size="large" style={{ color: green[500], fontSize: 50 }} />
                        </>
                    }
                    {showCrazy === 'loser' &&
                        <>
                            <p>Ye</p>
                            <Ex size="large" style={{ color: red[500], fontSize: 50 }} />
                        </>
                    }
                </div>
            )}

            {trumpQuote?.map(quote =>
                <div className='quote'>
                    <div className='yeQuote'>
                        <p>"{trumpQuote}"</p>
                    </div>
                    {showCrazy === null &&
                        <>
                            <p>Which crazy has this quote?</p>
                            <Stack direction="row" spacing={3} justifyContent="center">
                                <Button style={{ borderRadius: 45 }} variant="outlined" size="large" color="success" onClick={() => crazyAnswer('loser')}>Ye</Button>
                                <Button style={{ borderRadius: 45 }} variant="outlined" size="large" color="error" onClick={() => crazyAnswer('trump')}>Donald Trump</Button>
                            </Stack>
                        </>
                    }
                    {showCrazy === 'winner' &&
                        <>
                            <p>Donald Trump</p>
                            <Check size="large" style={{ color: green[500], fontSize: 50 }} />
                        </>
                    }
                    {showCrazy === 'loser' &&
                        <>
                            <p>Donald Trump</p>
                            <Ex size="large" style={{ color: red[500], fontSize: 50 }} />
                        </>
                    }
                </div>
            )}
        </div>
    )
}