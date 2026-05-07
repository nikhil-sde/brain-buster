import { Box } from '@mui/material';
import Board from './Board';
import LeaderBoard from './LeaderBoard';

function Game() {
    return (
        <Box sx={{ display: 'flex', gap: 20, mt: 5, ml: 20 }}>
            <LeaderBoard />
            <Board />
        </Box>
    );
}

export default Game;
