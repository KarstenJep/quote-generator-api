import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function HP({hpQuote}){
    const [showBook, setShowBook] = useState(null)
    
  

    const bookAnswer = (answer) => {
        if(answer === hpQuote.book){
            console.log('winner')
          
        } else {
            console.log('Loser');
        }
    }

    
    
    return (
        <div className='quote'>
            {hpQuote ? 
            <>
            <div className='hpQuote'>
                <p>"{hpQuote.quote}"</p>
                <p>{hpQuote.char}</p>
            </div>
           
            {showBook === null &&
                <>
                 <Box ml={115}>
                    <h4>Which book has this quote?</h4>
                    </Box>
                    <Stack direction="row" spacing={3} justifyContent="center">
                        <Button style={{ borderRadius: 5, boxShadow: '0px 0px 8px rgba(0, 136, 255, 0.8)' }} variant="outlined" size="large" color="info" onClick={() => bookAnswer(1)}>The Sorcerer's Stone</Button>
                        <Button style={{ borderRadius: 5, boxShadow: '0px 0px 8px rgba(0, 136, 255, 0.8)' }} variant="outlined" size="large" color="info" onClick={() => bookAnswer(2)}>The Chamber of Secrets</Button>
                        <Button style={{ borderRadius: 5, boxShadow: '0px 0px 8px rgba(0, 136, 255, 0.8)' }} variant="outlined" size="large" color="info" onClick={() => bookAnswer(3)}>The Prisoner of Azkaban</Button>
                        <Button style={{ borderRadius: 5, boxShadow: '0px 0px 8px rgba(0, 136, 255, 0.8)' }} variant="outlined" size="large" color="info" onClick={() => bookAnswer(4)}>The Goblet of Fire</Button>
                        <Button style={{ borderRadius: 5, boxShadow: '0px 0px 8px rgba(0, 136, 255, 0.8)' }} variant="outlined" size="large" color="info" onClick={() => bookAnswer(5)}>The Order of the Phoenix</Button>
                        <Button style={{ borderRadius: 5, boxShadow: '0px 0px 8px rgba(0, 136, 255, 0.8)' }} variant="outlined" size="large" color="info" onClick={() => bookAnswer(6)}>The Half-Blood Prince</Button>
                        <Button style={{ borderRadius: 5, boxShadow: '0px 0px 8px rgba(0, 136, 255, 0.8)' }} variant="outlined" size="large" color="info" onClick={() => bookAnswer(7)}>The Deathly Hallows</Button>
                    </Stack>
                </>
            }
            </>
            : ''}
        </div>
       
    )
}