import { Grid, Paper } from '@mui/material';
import { useLocation } from 'react-router';

function Board() {
    const location = useLocation();
    const { type, size } = location.state;

    return (
        <Grid container sx={{ width: 360, display: 'grid', gridTemplateColumns: `repeat(${size}, 80px)`, gap: 1}}>
            {[...Array(size*size)].map((_, index) => (
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
                        {index}
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
}

export default Board;
