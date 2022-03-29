import React, { useState } from 'react';
import { emojisplosion } from "emojisplosion";
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


export default function HP({ hpQuote, showBook, setShowBook }){


    const bookAnswer = (answer) => {
        if(answer === hpQuote.book){
            setShowBook(answer);
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
                            <h4>Which book has this quote?</h4>
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
                <Box ml={112}>
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
            </>
            }
        </div>
    )
}