import { Box } from '@mui/material';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

function LeaderBoard() {
    const playerNames = JSON.parse(localStorage.getItem('playerNames') || '{}');
    const players = [];

    for (let i = 1; i <= 4; i++) {
        players.push(
            <ListItem key={`player-${i}`}>
                <ListItemText primary={playerNames[`player${i}`]} secondary={`Score: 1`} />
            </ListItem>,
        );
    }

    return (
        <Box>
            <Typography variant="h5">Score Board</Typography>
            <List>{players}</List>
        </Box>
    );
}

export default LeaderBoard;
