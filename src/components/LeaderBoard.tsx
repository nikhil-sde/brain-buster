import { Box } from '@mui/material';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

interface LeaderBoardProps {
    turn: {
        player1: boolean;
        player2: boolean;
        player3: boolean;
        player4: boolean;
    };
    score: {
        player1: number;
        player2: number;
        player3: number;
        player4: number;
    };
}

function LeaderBoard({ turn, score }: LeaderBoardProps) {
    const playerNames = JSON.parse(localStorage.getItem('playerNames') || '{}');
    const numPlayers = Number(localStorage.getItem('numPlayers') || '0');
    const [players, setPlayers] = useState<JSX.Element[]>([]);
    const listStyle = {
        backgroundColor: 'grey',
        color: 'white',
        borderRadius: '10px',
    };

    useEffect(() => {
        setPlayers(() => {
            const playerList = [];
            for (let i = 1; i <= numPlayers; i++) {
                playerList.push(
                    <ListItem key={`player-${i}`} sx={{ ...(turn[`player${i}`] ? listStyle : {}) }}>
                        <ListItemText
                            primary={playerNames[`player${i}`]}
                            secondary={`Score: ${score[`player${i}`]}`}
                        />
                    </ListItem>,
                );
            }
            return playerList;
        });
    }, [turn]);

    return (
        <Box>
            <Typography variant="h3">Score Board</Typography>
            <List>{players}</List>
        </Box>
    );
}

export default LeaderBoard;
