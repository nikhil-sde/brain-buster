import { Grid, Paper } from '@mui/material';
import { useLocation } from 'react-router';

function Board() {
    const location = useLocation();
    const { type, size } = location.state;
    const numOfSymbols = (size * size) / 2;
    const symbols = [];

    const shuffle = (array: any[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

    switch (type) {
        case 'Numbers':
            for (let i = 1; i <= numOfSymbols; i++) {
                symbols.push(i);
                symbols.push(i);
            }
            shuffle(symbols);
            break;
        case 'Alphabets':
            for (let i = 0; i < numOfSymbols; i++) {
                const letter = String.fromCharCode(65 + i);
                symbols.push(letter);
                symbols.push(letter);
            }
            shuffle(symbols);
            break;
        case 'Shapes':
            for (let i = 0; i < numOfSymbols; i++) {
                const shape = String.fromCharCode(65 + i);
                symbols.push(shape);
                symbols.push(shape);
            }
            shuffle(symbols);
            break;
        case 'Emojis':
            for (let i = 0; i < numOfSymbols; i++) {
                const emoji = String.fromCharCode(65 + i);
                symbols.push(emoji);
                symbols.push(emoji);
            }
            shuffle(symbols);
            break;
        default:
            break;
    }

    return (
        <Grid
            container
            sx={{
                width: 360,
                display: 'grid',
                gridTemplateColumns: `repeat(${size}, 80px)`,
                gap: 1,
            }}
        >
            {[...Array(size * size)].map((_, index) => (
                <Grid item xs={2} key={index}>
                    <Paper
                        sx={{
                            height: '80px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: '40px',
                        }}
                    >
                        {symbols[index]}
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
}

export default Board;
