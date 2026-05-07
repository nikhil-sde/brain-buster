import {
    Box,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    Button,
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router';

function GridType() {
    const [type, setType] = useState('Number');
    const [size, setsize] = useState(4);
    const navigate = useNavigate();

    const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setType(event.target.value);
    };

    const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setsize(Number(event.target.value));
    };

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    height: '50vh',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    gap: 2,
                }}
            >
                <FormControl sx={{ borderRight: '1px solid black', padding: 2 }}>
                    <FormLabel id="demo-radio-buttons-group-label">Grid Type</FormLabel>
                    <RadioGroup
                        value={type}
                        onChange={() => {
                            handleTypeChange(event);
                        }}
                    >
                        <FormControlLabel value="Number" control={<Radio />} label="Number" />
                        <FormControlLabel value="Alphabate" control={<Radio />} label="Alphabate" />
                        <FormControlLabel value="Shapes" control={<Radio />} label="Shapes" />
                        <FormControlLabel value="Emojis" control={<Radio />} label="Emojis" />
                    </RadioGroup>
                </FormControl>
                <FormControl sx={{ padding: 2 }}>
                    <FormLabel id="demo-radio-buttons-group-label">Grid Size</FormLabel>
                    <RadioGroup
                        value={size}
                        onChange={() => {
                            handleSizeChange(event);
                        }}
                    >
                        <FormControlLabel value={4} control={<Radio />} label="4 x 4" />
                        <FormControlLabel value={5} control={<Radio />} label="5 x 5" />
                        <FormControlLabel value={6} control={<Radio />} label="6 x 6" />
                        <FormControlLabel value={7} control={<Radio />} label="7 x 7" />
                    </RadioGroup>
                </FormControl>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                <Button
                    variant="contained"
                    type="submit"
                    onClick={() => navigate('/game', { state: { type, size } })}
                    sx={{ marginTop: 2, width: 300 }}
                >
                    Let's Play!
                </Button>
                <Button
                    variant="outlined"
                    onClick={() => {
                        navigate(-1);
                    }}
                    sx={{ width: 300 }}
                >
                    Go Back
                </Button>
                <Button
                    variant="outlined"
                    onClick={() => {
                        navigate('/');
                    }}
                    sx={{ width: 300 }}
                >
                    Home
                </Button>
            </Box>
        </>
    );
}

export default GridType;
