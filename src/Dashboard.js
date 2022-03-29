import ye from './Images/ye.png';
import ring from './Images/ring.png';
import hp from './Images/hp.png';
import './App.css';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Theater from '@material-ui/icons/Theaters';
import Book from '@material-ui/icons/MenuBook';
import Mic from '@material-ui/icons/MicNone';

export default function Dashboard({fetchCrazy, fetchLotr, fetchHP}){

    return (

      <div className='container'>
        <Stack direction="row" spacing={16} justifyContent="center" divider={<Divider orientation="vertical" flexItem color="white"/>}>
          <Stack direction="column" spacing={3} alignItems="center">
            <img src={ye} className="App-logo" alt="ye" />
            <Button style={{borderRadius: 45, boxShadow: '0px 0px 8px rgba(250, 0, 0, 0.8)'}} variant="outlined" size="large" color="error" endIcon={<Mic />} onClick={fetchCrazy}>Crazy Quote</Button>
          </Stack>
          <Stack direction="column" spacing={3} alignItems="center">
            <img src={ring} className="App-logo" alt="ring" />
            <Button style={{borderRadius: 15, boxShadow: '0px 0px 8px rgba(255, 71, 0, 0.8)'}} variant="outlined" size="large" color="warning" endIcon={<Theater />} onClick={fetchLotr}> Lotr Quote</Button>
          </Stack>
          <Stack direction="column" spacing={3} alignItems="center">
            <img src={hp} className="App-logo" alt="ring" />
            <Button style={{borderRadius: 3, boxShadow: '0px 0px 8px rgba(0, 136, 255, 0.8)'}} variant="outlined" size="large" color="info" endIcon={<Book />} onClick={fetchHP}> HP Quote</Button>
          </Stack>
        </Stack>
      </div>
    )
}