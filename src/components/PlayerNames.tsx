import { useParams, useNavigate} from 'react-router'
import { Box, Button, TextField } from '@mui/material'
import { useState } from 'react'

function PlayerNames() {
    const navigate = useNavigate()
    const params = useParams()
    const playerTextFields = []
    const [names, setNames] = useState({
        "player1": "Player 1",
        "player2": "Player 2",
        "player3": "Player 3",
        "player4": "Player 4",
    })

    const handleNameChange = (event, playerNum) => {
        setNames({
            ...names,
            [`player${playerNum}`]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(names)
        console.log("Submitted")
    }

    for(let i = 1; i <= Number(params.numPlayers); i++) {
        playerTextFields.push(
            <TextField 
                key={`Player ${i}`} 
                value={names[`player${i}`]}
                label={`Player ${i}`} 
                variant="outlined" 
                onChange={() => handleNameChange(event, i)} 
            />)
    }

    return (
        <Box
            sx={{
                height: '70vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Box
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                width: 300,
            }}
            onSubmit={() => {handleSubmit(event)}}
            >
                {playerTextFields}

                <Button variant="contained" type="submit">
                    Let's Play!
                </Button>
            </Box>
            <Button variant="outlined" onClick={() => {navigate('/')}} sx={{marginTop: 2, width: 300}}>
                Go Back
            </Button>
        </Box>
    )
}

export default PlayerNames
