import { Grid, Paper, Button } from '@mui/material';
import { useLocation } from 'react-router';
import { useState, useEffect } from 'react';

function Board() {
    const location = useLocation();
    const { type, size } = location.state;
    const numOfSymbols = (size * size) / 2;
    const [visible, setVisible] = useState(false);
    const [isOpened, setIsOpened] = useState(false);
    const [id, setId] = useState('');
    const [symbols, setSymbols] = useState([]);
    const grids = [];

    const shuffle = (array: any[]) => {
        // console.log('shuffle', symbols);
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        // console.log('shuffle', array);
    };

    const match = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log('match', isOpened);
        if (isOpened) {
            const prevButton = grids.filter((btn) => {
                return btn.props.id === id;
            });
            console.log('match', 'if');
            const firstValue = prevButton[0].props.children;
            const secondValue = e.target.textContent;
            if (firstValue !== secondValue) {
                setTimeout(() => {
                    prevButton[0].props.sx.color = 'transparent';
                    e.target.style.color = 'transparent';
                }, 1000);
            }
            setId('');
            setIsOpened(false);
        } else {
            console.log('match', 'else');
            setIsOpened(true);
            setId(e.target.id);
        }
    };

    const handleVisible = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement;
        target.style.color = 'black';
        match(e);
    };

    useEffect(() => {
        const tempSymbols = [];
        switch (type) {
            case 'Numbers':
                for (let i = 1; i <= numOfSymbols; i++) {
                    tempSymbols.push(i);
                    tempSymbols.push(i);
                }
                break;
            case 'Alphabets':
                for (let i = 0; i < numOfSymbols; i++) {
                    const letter = String.fromCharCode(65 + i);
                    tempSymbols.push(letter);
                    tempSymbols.push(letter);
                }
                break;
            case 'Shapes':
                for (let i = 0; i < numOfSymbols; i++) {
                    const shape = String.fromCharCode(65 + i);
                    tempSymbols.push(shape);
                    tempSymbols.push(shape);
                }
                break;
            case 'Emojis':
                for (let i = 0; i < numOfSymbols; i++) {
                    const emoji = String.fromCharCode(65 + i);
                    tempSymbols.push(emoji);
                    tempSymbols.push(emoji);
                }
                break;
            default:
                break;
        }

        shuffle(tempSymbols);

        setSymbols(tempSymbols);
    }, []);

    symbols.map((symbol, i) => {
        grids.push(
            <Button
                xs={2}
                key={i}
                id={i.toString()}
                sx={{
                    height: '80px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '40px',
                    border: '1px solid black',
                    color: 'transparent',
                }}
                onClick={handleVisible}
            >
                {symbol}
            </Button>,
        );
    });

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
            {grids}
        </Grid>
    );
}

export default Board;
