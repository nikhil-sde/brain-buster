import { Box } from '@mui/material';
import Board from './Board';
import LeaderBoard from './LeaderBoard';

function Game() {
    return (
        <Box sx={{ display: 'flex', height: '90vh', alignItems: 'center', justifyContent: 'center', gap: 20}}>
            <LeaderBoard />
            <Board />
        </Box>
    );
}

export default Game;
