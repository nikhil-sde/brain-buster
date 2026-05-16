import { Grid, Paper, Button } from '@mui/material';
import { useLocation } from 'react-router';
import { useState, useEffect } from 'react';

interface BoardProps {
    turn: {
        player1: boolean;
        player2: boolean;
        player3: boolean;
        player4: boolean;
    };
    setScore: React.Dispatch<
        React.SetStateAction<{
            player1: number;
            player2: number;
            player3: number;
            player4: number;
        }>
    >;
    setTurn: React.Dispatch<
        React.SetStateAction<{
            player1: boolean;
            player2: boolean;
            player3: boolean;
            player4: boolean;
        }>
    >;
}

function Board({ turn, setScore, setTurn }: BoardProps) {
    const location = useLocation();
    const { type, size } = location.state;
    const numOfSymbols = (size * size) / 2;
    const [visible, setVisible] = useState(false);
    const [isOpened, setIsOpened] = useState(false);
    const [id, setId] = useState('');
    const [prevBtn, setPrevBtn] = useState<HTMLElement | null>(null);
    const [symbols, setSymbols] = useState([]);
    const numPlayers = Number(localStorage.getItem('numPlayers') || '0');
    // const [turn, setTurn] = useState({ player1: true, player2: false, player3: false, player4: false });
    const [count, setCount] = useState(1);
    const grids = [];

    const shuffle = (array: any[]) => {
        // console.log('shuffle', symbols);
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        // console.log('shuffle', array);
    };

    const handleTurn = () => {
        setTurn((prev) => {
            switch (count) {
                case 1:
                    return { player1: false, player2: true, player3: false, player4: false };
                case 2:
                    return { player1: false, player2: false, player3: true, player4: false };
                case 3:
                    return { player1: false, player2: false, player3: false, player4: true };
                case 0:
                    return { player1: true, player2: false, player3: false, player4: false };
                default:
                    return prev;
            }
        });
    };

    const match = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isOpened) {
            // const prevButton = grids.filter((btn) => {
            //     return btn.props.id === id;
            // });
            const firstValue = prevBtn?.textContent;
            const secondValue = e.target.textContent;
            if (firstValue !== secondValue) {
                setTimeout(() => {
                    if (prevBtn) {
                        prevBtn.style.color = 'transparent';
                    }
                    e.target.style.color = 'transparent';
                }, 1000);
                handleTurn();
                setCount((prev) => (prev + 1) % numPlayers);
            } else {
                setScore((prev) => {
                    if (turn.player1) {
                        return { ...prev, player1: prev.player1 + 1 };
                    } else if (turn.player2) {
                        return { ...prev, player2: prev.player2 + 1 };
                    } else if (turn.player3) {
                        return { ...prev, player3: prev.player3 + 1 };
                    } else {
                        return { ...prev, player4: prev.player4 + 1 };
                    }
                });
            }
            setId('');
            setIsOpened(false);
            // console.log('change', turn);
        } else {
            setIsOpened(true);
            setPrevBtn(e.target);
            // console.log('not change', turn);
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
            {(size === 5 || size === 7) && (
                <Button
                    xs={2}
                    sx={{
                        height: '80px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '40px',
                        border: '1px solid black',
                        color: 'black',
                    }}
                >
                    o
                </Button>
            )}
        </Grid>
    );
}

export default Board;
