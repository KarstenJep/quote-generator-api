import { useState } from 'react';
import { emojisplosion } from "emojisplosion";
// M-UI
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
// Images
import trumpL from './Images/trumpL.png';
import trumpW from './Images/trumpW.png';
import ye from './Images/ye.png';
import yeW from './Images/yeW.png';
// Audio
import yeW1 from './audio/Good.mp3'
import yeW2 from './audio/Nominated.mp3'
import yeL1 from './audio/No.mp3';
import yeL2 from './audio/robot.mp3';
import special from './audio/youreVerySpecial.mp3';
import ivanka from './audio/ivanka.mp3';
import wrong from './audio/Wrong3.mp3';
import fakenews from './audio/fakenews.mp3';

export default function CrazyQuote({ yeQuote, trumpQuote, showCrazy, setShowCrazy }) {

    const yW1 = new Audio(yeW1);
    const yW2 = new Audio(yeW2);
    const yl1 = new Audio(yeL1);
    const yl2 = new Audio(yeL2);
    const tW1 = new Audio(special);
    const tW2 = new Audio(ivanka);
    const tL1 = new Audio(fakenews);
    const tL2 = new Audio(wrong);
    const [toggleLoser, setToggleLoser] = useState(false);
    const [toggleWinner, setToggleWinner] = useState(false);

    const crazyAnswer = (answer) => {
        if (answer === 'yeW') {
            setShowCrazy('winner');
            setToggleWinner(!toggleWinner);
            emojisplosion({
                emojiCount: 151,
                emojis: ["💩", "📿", "🧻", "💣"],
            });
            emojisplosion({
                emojiCount: 151,
                emojis: ["🎤", "🎧", "🧣", "👟"],
            });
            emojisplosion({
                emojiCount: 151,
                emojis: [ "🕶", "💥", "🎆", "🎉"],
            });
            {toggleWinner ?
                yW1.play()
                :
                yW2.play()
            }
        } else if (answer === 'trumpW') {
            setShowCrazy('winner');
            setToggleWinner(!toggleWinner);
            emojisplosion({
                emojiCount: 151,
                emojis: ["💩", "🚽", "🧻", "💣"],
            });
            emojisplosion({
                emojiCount: 151,
                emojis: ["🏌", "🐷", "🐖", "💥"],
            });
            emojisplosion({
                emojiCount: 151,
                emojis: ["🍊", "🤡", "🎆", "🎉"],
            });
            {toggleWinner ?
                tW1.play()
                :
                tW2.play()
            }
        } else if (answer === 'yeL') {
            setShowCrazy('loser');
            setToggleLoser(!toggleLoser);
            {toggleLoser ? 
                yl1.play()
                :
                yl2.play()
            }
        } else if (answer === 'trumpL') {
            setShowCrazy('loser');
            setToggleLoser(!toggleLoser);
            {toggleLoser ? 
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
                        <p style={{marginTop: '-2%'}}>{showCrazy ? '— KanYe' : '— ??' }</p>
                    </div>
                    <Box mr={110}>
                        {showCrazy === null &&
                            <>
                            <h4>Which crazy said this?</h4>
                            <Stack direction="row" spacing={3} justifyContent="center">
                                <Button style={{ borderRadius: 45, boxShadow: '0px 0px 8px rgba(0, 169, 0, 0.8)' }} variant="outlined" size="large" color="success" onClick={() => crazyAnswer('yeW')}>KanYe</Button>
                                <Button style={{ borderRadius: 45, boxShadow: '0px 0px 8px rgba(0,169, 0, 0.8)' }} variant="outlined" size="large" color="success" onClick={() => crazyAnswer('yeL')}>Donald Trump</Button>
                            </Stack>
                            </>
                        }
                        {showCrazy !== null &&
                            <h4>KanYe</h4>
                        }
                        {showCrazy === 'winner' &&
                            <img src={yeW} style={{height: '18vmin', filter:'drop-shadow(0px 0px 18px rgba(0, 169, 0, 1))'  }} alt="ye" />
                        }
                        {showCrazy === 'loser' &&
                            <img src={ye} style={{height: '18vmin', filter:'drop-shadow(0px 0px 18px rgba(220, 0, 0, 1))' }} alt="ye" />
                        }
                    </Box>
                </div>
            )}

            {trumpQuote?.map(quote =>
                <div className='quote'>
                    <div className='yeQuote'>
                        <p>"{quote}"</p>
                        <p style={{marginTop: '-2%'}}>{showCrazy ? '— Donald Trump' : '— ??' }</p>
                    </div>
                    <Box mr={110} >
                        {showCrazy === null &&
                            <>
                            <h4>Which crazy has this quote?</h4>
                            <Stack direction="row" spacing={3} justifyContent="center">
                                <Button style={{ borderRadius: 45, boxShadow: '0px 0px 8px rgba(0, 169, 0, 0.8)' }} variant="outlined" size="large" color="success" onClick={() => crazyAnswer('trumpL')}>KanYe</Button>
                                <Button style={{ borderRadius: 45, boxShadow: '0px 0px 8px rgba(0, 169, 0, 0.8)' }} variant="outlined" size="large" color="success" onClick={() => crazyAnswer('trumpW')}>Donald Trump</Button>
                            </Stack>
                            </>
                        }
                        {showCrazy !== null &&
                            <h4>Donald Trump</h4>
                        }
                        {showCrazy === 'winner' &&                      
                                <img src={trumpW} style={{height: '18vmin', filter:'drop-shadow(0px 0px 18px rgba(0, 169, 0, 1))' }} alt="trump" />  
                        }
                        {showCrazy === 'loser' &&
                                <img src={trumpL} style={{height: '18vmin', filter:'drop-shadow(0px 0px 18px rgba(220, 0, 0, 1))' }} alt="trump" />  
                        }
                    </Box>
                </div>
            )}
        </div>
    )
}