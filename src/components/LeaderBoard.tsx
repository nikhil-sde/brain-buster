import { Box } from '@mui/material';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

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
    const players = [];

    for (let i = 1; i <= 4; i++) {
        players.push(
            <ListItem key={`player-${i}`}>
                <ListItemText
                    primary={playerNames[`player${i}`]}
                    secondary={`Score: ${score[`player${i}`]}`}
                />
            </ListItem>,
        );
    }

    return (
        <Box>
            <Typography variant="h3">Score Board</Typography>
            <List>{players}</List>
        </Box>
    );
}

export default LeaderBoard;
