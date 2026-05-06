import { Box, Button } from '@mui/material'

function SelectPlayers() {
  return (
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 200px)',
          gridTemplateRows: 'repeat(2, 30px)',
          justifyContent: 'center',
          alignContent: 'center',
          height: '75vh',
          gap: 2,
        }}
      >
        <Button variant="contained">One Player</Button>
        <Button variant="contained">Two Player</Button>
        <Button variant="contained">Three Player</Button>
        <Button variant="contained">Four Player</Button>
      </Box>
  )
}

export default SelectPlayers
