import ye from './ye.png';
import ring from './ring.png';
import './App.css';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Theater from '@material-ui/icons/Theaters';
import Mic from '@material-ui/icons/MicNone';

export default function Dashboard({fetchCrazy, fetchLotr}){

    return (
      <div className='container'>
        <Stack direction="row" spacing={16} justifyContent="center" divider={<Divider orientation="vertical" flexItem color="white"/>}>
          <Stack direction="column" spacing={4} alignItems="center">
            <img src={ye} className="App-logo" alt="ye" />
            <Button style={{borderRadius: 45}} variant="outlined" size="large" color="error" endIcon={<Mic />} onClick={fetchCrazy}>Crazy Quote</Button>
          </Stack>
          <Stack direction="column" spacing={4} alignItems="center">
            <img src={ring} className="App-logo" alt="ring" />
            <Button style={{borderRadius: 45}} variant="outlined" size="large" color="warning" endIcon={<Theater />} onClick={fetchLotr}> Lotr Quote</Button>
          </Stack>
        </Stack>
      </div>
    )
}