import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Check from '@material-ui/icons/CheckCircle';
import Ex from '@material-ui/icons/HighlightOff';
import { green, red } from '@material-ui/core/colors';
import { emojisplosion } from "emojisplosion";
import Box from '@mui/material/Box';
import trumpL from './Images/trumpL.png';
import trumpW from './Images/trumpW.png';
import ye from './Images/ye.png';
import yeW from './Images/yeW.png';

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
        <div >
            {yeQuote?.map(quote =>
                <div className='quote'>
                    <div className='yeQuote'>
                        <p>"{quote.quote}"</p>
                    </div>
                    <Box mr={105}>
                    {showCrazy === null &&
                        <>
                            <p>Which crazy said this?</p>
                            <Stack direction="row" spacing={3} justifyContent="center">
                                <Button style={{ borderRadius: 45 }} variant="outlined" size="large" color="error" onClick={() => crazyAnswer('ye')}>KanYe</Button>
                                <Button style={{ borderRadius: 45 }} variant="outlined" size="large" color="error" onClick={() => crazyAnswer('loser')}>Donald Trump</Button>
                            </Stack>
                        </>
                    }
                    {showCrazy === 'winner' &&
                        <>
                            <p>- KanYe</p>
                            <Check size="large" style={{ color: green[500], fontSize: 70 }} />
                            <img src={yeW} style={{height: '15vmin' }} alt="ye" />
                        </>
                    }
                    {showCrazy === 'loser' &&
                        <>
                            <p>- KanYe</p>
                            <Ex size="large" style={{ color: red[500], fontSize: 70 }} />
                            <img src={ye} style={{height: '15vmin' }} alt="ye" />
                        </>
                    }
                    </Box>
                </div>
            )}

            {trumpQuote?.map(quote =>
                <div className='quote'>
                    <div className='yeQuote'>
                        <p>"{quote}"</p>
                    </div>
                    <Box mr={105}>
                    {showCrazy === null &&
                        <>
                            <p>Which crazy has this quote?</p>
                            <Stack direction="row" spacing={3} justifyContent="center">
                                <Button style={{ borderRadius: 45 }} variant="outlined" size="large" color="error" onClick={() => crazyAnswer('loser')}>KanYe</Button>
                                <Button style={{ borderRadius: 45 }} variant="outlined" size="large" color="error" onClick={() => crazyAnswer('trump')}>Donald Trump</Button>
                            </Stack>
                        </>
                    }
                    {showCrazy === 'winner' &&
                        <>
                            <p>- Donald Trump</p>                            
                            <Check size="large" style={{ color: green[500], fontSize: 70 }} />
                            <img src={trumpW} style={{height: '15vmin' }} alt="trump" />  
                        </>
                    }
                    {showCrazy === 'loser' &&
                        <>
                            <p>- Donald Trump</p>
                            <Ex size="large" style={{ color: red[500], fontSize: 70 }} />
                            <img src={trumpL} style={{height: '15vmin' }} alt="trump" />  
                        </>
                    }
                    </Box>
                </div>
            )}
        </div>
    )
}