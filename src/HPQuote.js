import React, { useState } from 'react';
import { emojisplosion } from "emojisplosion";
import Footer from './Footer';
// M-UI
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// Images
import SS from './Images/SS.jpg';
import CS from './Images/CS.jpg';
import PA from './Images/PA.jpg';
import GF from './Images/GF.jpg';
import OP from './Images/OP.jpg';
import HBP from './Images/HBP.jpg';
import DH from './Images/DH.jpg';
import HWMNBN from './Images/HWMNBN.jpg';
// Audio
import wizard from './audio/wizard.mp3';
import Scary from './audio/Scary.mp3';
import Priorities from './audio/Priorities.mp3';
import future from './audio/future.mp3';
import Expecto from './audio/Expecto.mp3';
import fool from './audio/fool.mp3';
import tonight from './audio/tonight.mp3';
import destroy from './audio/destroy.mp3';
import Speak from './audio/Speak only.mp3';

export default function HP({ hpQuote, showBook, setShowBook, showStreak, setShowStreak }){

    const w1 = new Audio(wizard);
    const w2 = new Audio(Scary);
    const w3 = new Audio(Priorities);
    const w4 = new Audio(future);
    const w5 = new Audio(Expecto);
    const l1 = new Audio(fool);
    const l2 = new Audio(tonight);
    const l3 = new Audio(destroy);
    const l4 = new Audio(Speak);
    const [rotateLoser, setRotateLoser] = useState(0);
    const [rotateWinner, setRotateWinner] = useState(0);

    const bookAnswer = (answer) => {
        if(answer === hpQuote.book){
            setShowBook(answer);
            setShowStreak('hp')
            handleRotateWinner();
            emojisplosion({
                emojiCount: 151,
                emojis: ["🧙‍♂️", "🍺", "🍷", "✨"],
            });
            emojisplosion({
                emojiCount: 151,
                emojis: ["🦉", "⚡", "🏰", "🧹"],
            });
            emojisplosion({
                emojiCount: 151,
                emojis: ["🚂", "🎆", "👻", "🧪"],
            }); 
        } else {
            setShowBook('Loser');
            setShowStreak('loser');
            handleRotateLoser();
        }
    }

    const handleRotateWinner = () => {
        setRotateWinner(rotateWinner + 1);
        switch (rotateWinner) {
            case 0:
                w1.play();
                break;
            case 1:
                w2.play();
                break;
            case 2:
                w3.play();
                break;
            case 3:
                w4.play();
                break;
            case 4:
                w5.play();
                setRotateWinner(0);
                break;
        }
    }

    const handleRotateLoser = () => {
        setRotateLoser(rotateLoser + 1)
        switch (rotateLoser) {
            case 0:
                l1.play();
                break;
            case 1:
                l2.play();
                break;
            case 2:
                l3.play();
                break;
            case 3:
                l4.play();
                setRotateLoser(0);
                break;
        }
    }

    return (
        <div className='quote'>
            {hpQuote && 
            <>
                <div className='hpQuote'>
                    <p>"{hpQuote.quote}"</p>
                    <p>{hpQuote.char}</p>
                </div>
            
                { showBook === null &&
                    <>
                        <Box ml={115}>
                            <h4 className='QA'>Which book has this quote?</h4>
                        </Box>
                        <Stack direction="row" spacing={3} justifyContent="center">
                            <Button style={{ borderRadius: 3, boxShadow: '0px 0px 8px rgba(0, 136, 255, 0.8)' }} variant="outlined" size="large" color="info" onClick={() => bookAnswer("The Sorcerer's Stone")}>The Sorcerer's Stone</Button>
                            <Button style={{ borderRadius: 3, boxShadow: '0px 0px 8px rgba(0, 136, 255, 0.8)' }} variant="outlined" size="large" color="info" onClick={() => bookAnswer("The Chamber of Secrets")}>The Chamber of Secrets</Button>
                            <Button style={{ borderRadius: 3, boxShadow: '0px 0px 8px rgba(0, 136, 255, 0.8)' }} variant="outlined" size="large" color="info" onClick={() => bookAnswer("The Prisoner of Azkaban")}>The Prisoner of Azkaban</Button>
                            <Button style={{ borderRadius: 3, boxShadow: '0px 0px 8px rgba(0, 136, 255, 0.8)' }} variant="outlined" size="large" color="info" onClick={() => bookAnswer("The Goblet of Fire")}>The Goblet of Fire</Button>
                            <Button style={{ borderRadius: 3, boxShadow: '0px 0px 8px rgba(0, 136, 255, 0.8)' }} variant="outlined" size="large" color="info" onClick={() => bookAnswer("The Order of the Phoenix")}>The Order of the Phoenix</Button>
                            <Button style={{ borderRadius: 3, boxShadow: '0px 0px 8px rgba(0, 136, 255, 0.8)' }} variant="outlined" size="large" color="info" onClick={() => bookAnswer("The Half-Blood Prince")}>The Half-Blood Prince</Button>
                            <Button style={{ borderRadius: 3, boxShadow: '0px 0px 8px rgba(0, 136, 255, 0.8)' }} variant="outlined" size="large" color="info" onClick={() => bookAnswer("The Deathly Hallows")}>The Deathly Hallows</Button>
                        </Stack>
                    </>
                }
                <Box ml={110}>
                    { showBook !== null &&
                        <h4>{hpQuote.book}</h4>
                    }
                    { showBook === "Loser" && 
                        <img src={HWMNBN} style={{ height: '16vmin', borderRadius: '5px', border: '2px red solid', boxShadow: '0px 0px 16px rgba(251, 0, 0, 0.8)' }} alt="VDMT" />
                    }
                    { showBook === "The Sorcerer's Stone" && 
                        <img src={SS} className="book" alt="SS" />
                    }
                    { showBook === "The Chamber of Secrets" && 
                        <img src={CS} className="book" alt="CS" />
                    }
                    { showBook === "The Prisoner of Azkaban" && 
                        <img src={PA} className="book" alt="PA" />
                    }
                    { showBook === "The Goblet of Fire" && 
                        <img src={GF} className="book" alt="GF" />
                    }
                    { showBook === "The Order of the Phoenix" && 
                        <img src={OP} className="book" alt="OP" />
                    }
                    { showBook === "The Half-Blood Prince" && 
                        <img src={HBP} className="book" alt="HBP" />
                    }
                    { showBook === "The Deathly Hallows" && 
                        <img src={DH} className="book" alt="DH" />
                    }
                </Box>
                {showBook !== null &&
                    <Footer showStreak={showStreak} setShowStreak={setShowStreak} />
                }
            </>
            }
        </div>
    )
}