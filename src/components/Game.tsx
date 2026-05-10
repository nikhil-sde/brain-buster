import { Box } from '@mui/material';
import Board from './Board';
import LeaderBoard from './LeaderBoard';
import { useState } from 'react';

function Game() {
    // const turn = { player1: true, player2: false, player3: false, player4: false };
    const [turn, setTurn] = useState({ player1: true, player2: false, player3: false, player4: false });
    const [score, setScore] = useState({ player1: 0, player2: 0, player3: 0, player4: 0 });

    return (
        <Box sx={{ display: 'flex', gap: 20, mt: 5, ml: 20 }}>
            <LeaderBoard turn={turn} score={score} />
            <Board turn={turn} setTurn={setTurn} setScore={setScore} />
        </Box>
    );
}

export default Game;
