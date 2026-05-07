import { Box } from '@mui/material';
import Board from './Board';
import LeaderBoard from './LeaderBoard';

function Game() {
    return (
        <Box>
            <LeaderBoard />
            <Board />
        </Box>
    );
}

export default Game;
