import React from 'react'
import Box from '@mui/material/Box';
import portada  from '../../../assets/img/paisajeFondo.jpg'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Login() {
  return (
    <div  style={{
        display: 'grid',
        width: '100%',
        height: '100vh',
        position: 'absolute',
        top: '0',
        left: '0',
        gridTemplateColumns: 'repeat(12,1fr)'
    }}>
        <Box sx={{
            gridColumn: '1/8',
        }}>
            <img style={{
                width: '100%',
                height: '99.4%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }} src={portada} alt='paisaje'/>
        </Box>
        <Box sx={{
            gridColumn: '8/13',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            padding: '45px'
        }}>
            <Typography variant='h5' align='center' sx={{
                paddingBottom: '30px'
            }}>
                Login
            </Typography>
            <TextField sx={{ margin: '5px 0px' }} fullWidth id="outlined-basic" label="Username" variant="outlined" />
            <TextField sx={{ margin: '10px 0px' }} fullWidth id="outlined-basic" label="Password" variant="outlined" />
            <Button variant="contained" color="success">
                Success
            </Button>
        </Box>
    </div>
  )
}

export default Login