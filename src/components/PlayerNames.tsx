import { useParams, useNavigate } from 'react-router';
import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

type PlayerNamesType = {
    player1: string;
    player2: string;
    player3: string;
    player4: string;
};

function PlayerNames() {
    const navigate = useNavigate();
    const params = useParams();

    const playerTextFields = [];

    const [names, setNames] = useState<PlayerNamesType>({
        player1: 'Player 1',
        player2: 'Player 2',
        player3: 'Player 3',
        player4: 'Player 4',
    });

    const handleNameChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        playerNum: number,
    ) => {
        setNames({
            ...names,
            [`player${playerNum}`]: event.target.value,
        } as PlayerNamesType);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        localStorage.setItem('playerNames', JSON.stringify(names));
        navigate('/grid-type');
    };

    for (let i = 1; i <= Number(params.numPlayers); i++) {
        const key = `player${i}` as keyof PlayerNamesType;

        playerTextFields.push(
            <TextField
                key={`Player ${i}`}
                value={names[key]}
                label={`Player ${i}`}
                variant="outlined"
                onChange={(event) => handleNameChange(event, i)}
            />,
        );
    }

    return (
        <Box
            sx={{
                height: '70vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    width: 300,
                }}
                onSubmit={handleSubmit}
            >
                {playerTextFields}

                <Button variant="contained" type="submit">
                    Next
                </Button>
            </Box>

            <Button
                variant="outlined"
                onClick={() => navigate('/')}
                sx={{ marginTop: 2, width: 300 }}
            >
                Go Back
            </Button>
        </Box>
    );
}

export default PlayerNames;
