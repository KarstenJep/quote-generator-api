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
import yeW1 from './audio/Thank you.mp3'
import yeW2 from './audio/Nominated.mp3'
import yeL1 from './audio/No.mp3';
import yeL2 from './audio/robot.mp3';
import special from './audio/youreVerySpecial.mp3';
import ivanka from './audio/ivanka.mp3';
import wrong from './audio/Wrong3.mp3';
import fakenews from './audio/fakenews.mp3';
import { useState } from 'react';
import { filter } from 'random-lotr-movie-quote/quotes';

export default function CrazyQuote({ yeQuote, trumpQuote, showCrazy, setShowCrazy }) {

    const yW1 = new Audio(yeW1);
    const yW2 = new Audio(yeW2);
    const yl1 = new Audio(yeL1);
    const yl2 = new Audio(yeL2);
    const tW1 = new Audio(special);
    const tW2 = new Audio(ivanka);
    const tL1 = new Audio(fakenews);
    const tL2 = new Audio(wrong);
    const [toggleYeLoser, setToggleYeLoser] = useState(false);
    const [toggleYeWinner, setToggleYeWinner] = useState(false);
    const [toggleTrLoser, setToggleYTrLoser] = useState(false);
    const [toggleTrWinner, setToggleTrWinner] = useState(false);

    const crazyAnswer = (answer) => {
        if (answer === 'yeW') {
            setShowCrazy('winner');
            setToggleYeWinner(!toggleYeWinner);
            emojisplosion({
                emojiCount: 201,
                emojis: ["💩", "📿", "🧻", "💣", "🎆", "🎉"],
            });
            emojisplosion({
                emojiCount: 201,
                emojis: ["🎤", "🎧", "🧣", "👟", "🕶", "💥"],
            });
            {toggleYeWinner ?
                yW1.play()
                :
                yW2.play()
            }
        } else if (answer === 'trumpW') {
            setShowCrazy('winner');
            setToggleTrWinner(!toggleTrWinner);
            emojisplosion({
                emojiCount: 201,
                emojis: ["💩", "🚽", "🧻", "💣", "🎆", "🎉"],
            });
            emojisplosion({
                emojiCount: 201,
                emojis: ["🏌", "🐷", "🐖", "💥", "🍊", "🤡"],
            });
            {toggleTrWinner ?
                tW1.play()
                :
                tW2.play()
            }
        } else if (answer === 'yeL') {
            setShowCrazy('loser');
            setToggleYeLoser(!toggleYeLoser);
            {toggleYeLoser ? 
                yl1.play()
                :
                yl2.play()
            }
        } else if (answer === 'trumpL') {
            setShowCrazy('loser');
            setToggleYTrLoser(!toggleTrLoser);
            {toggleTrLoser ? 
                tL1.play()
                :
                tL2.play()
            }
        }
    }

    return (
        <div >
            {yeQuote?.map(quote =>
                <div className='quote'>
                    <div className='yeQuote'>
                        <p>"{quote.quote}"</p>
                    </div>
                    <Box mr={110}>
                    {showCrazy === null &&
                        <>
                            <h4>Which crazy said this?</h4>
                            <Stack direction="row" spacing={3} justifyContent="center">
                                <Button style={{ borderRadius: 45, boxShadow: '0px 0px 8px rgba(220, 0, 0, 0.8)' }} variant="outlined" size="large" color="error" onClick={() => crazyAnswer('yeW')}>KanYe</Button>
                                <Button style={{ borderRadius: 45, boxShadow: '0px 0px 8px rgba(220, 0, 0, 0.8)' }} variant="outlined" size="large" color="error" onClick={() => crazyAnswer('yeL')}>Donald Trump</Button>
                            </Stack>
                        </>
                    }
                    {showCrazy === 'winner' &&
                        <>
                            <h4>— KanYe</h4>
                            <Check size="large" style={{ color: green[500], fontSize: 70 }} />
                            <img src={yeW} style={{height: '15vmin' }} alt="ye" />
                        </>
                    }
                    {showCrazy === 'loser' &&
                        <>
                            <h4>— KanYe</h4>
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
                    <Box mr={110} >
                    {showCrazy === null &&
                        <>
                            <h4>Which crazy has this quote?</h4>
                            <Stack direction="row" spacing={3} justifyContent="center">
                                <Button style={{ borderRadius: 45, boxShadow: '0px 0px 8px rgba(220, 0, 0, 0.8)' }} variant="outlined" size="large" color="error" onClick={() => crazyAnswer('trumpL')}>KanYe</Button>
                                <Button style={{ borderRadius: 45, boxShadow: '0px 0px 8px rgba(220, 0, 0, 0.8)' }} variant="outlined" size="large" color="error" onClick={() => crazyAnswer('trumpW')}>Donald Trump</Button>
                            </Stack>
                        </>
                    }
                    {showCrazy === 'winner' &&
                        <>
                            <h4>— Donald Trump</h4>                            
                            <Check size="large" style={{ color: green[500], fontSize: 70 }} />
                            <img src={trumpW} style={{height: '15vmin' }} alt="trump" />  
                        </>
                    }
                    {showCrazy === 'loser' &&
                        <>
                            <h4>— Donald Trump</h4>
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