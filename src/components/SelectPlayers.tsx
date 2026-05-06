import { Box, Button, IconButton, Typography } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

function SelectPlayers() {
  return (
      <Box sx={{
        height: '70vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <Typography variant="h2" align="center" gutterBottom>
            Brain Buster
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
            Select Number of Players
        </Typography>
        <Box
        sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 200px)',
            gridTemplateRows: 'repeat(2, 30px)',
            justifyContent: 'center',
            marginTop: 2,
            // alignContent: 'center',
            // height: '75vh',
            gap: 2,
          }}
        >
            <Button variant="outlined">One Player</Button>
            <Button variant="outlined">Two Players</Button>
            <Button variant="outlined">Three Players</Button>
            <Button variant="outlined">Four Players</Button>
        </Box>
        <Button 
        variant='contained'
        sx={{
            marginTop: 4,
            width: '400px',
            alignSelf: 'center',
            fontSize: 'large',
        }}
        >Next</Button>
      </Box>
  )
}

export default SelectPlayers
