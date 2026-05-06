import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router'
import { useState } from 'react'

function SelectPlayers() {
    const [numPlayers, setNumPlayers] = useState(0);
    const navigate = useNavigate()

    return (
        <Box sx={{
            height: '70vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }}>
            <Typography variant="h2" align="center" gutterBottom>
                Brain Buster
            </Typography>
            <Typography variant="h6" align="center" gutterBottom>
                Select Number of Players
            </Typography>
            <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 200px)',
                gridTemplateRows: 'repeat(2, 30px)',
                justifyContent: 'center',
                marginTop: 2,
                // alignContent: 'center',
                // height: '75vh',
                gap: 2,
            }}
            >
                <Button variant="outlined" onClick={() => {setNumPlayers(1)}}>One Player</Button>
                <Button variant="outlined" onClick={() => {setNumPlayers(2)}}>Two Players</Button>
                <Button variant="outlined" onClick={() => {setNumPlayers(3)}}>Three Players</Button>
                <Button variant="outlined" onClick={() => {setNumPlayers(4)}}>Four Players</Button>
            </Box>
            <Button 
            variant='contained'
            sx={{
                marginTop: 4,
                width: '416px',
                alignSelf: 'center',
                fontSize: 'large',
            }}
            onClick={() => {navigate(`/input-names/${numPlayers}`)}}
            >Next</Button>
        </Box>
    )
}

export default SelectPlayers
