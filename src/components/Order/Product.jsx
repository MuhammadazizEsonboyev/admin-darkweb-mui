import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'

export default function Product () {
  return (
    <div>
      <Grid
        container
        // spacing={2}
        direction='row'
        justifyContent='center'
        alignItems='center'
      >
        <Grid item xs={6} sx={{ marginTop: '100px' }}>
          <Box
            component='form'
            sx={{
              '& > :not(style)': { m: 1, width: '100%' }
            }}
            noValidate
            autoComplete='off'
          >
            <TextField id='outlined-basic' label='Name' variant='outlined' />
            <TextField id='outlined-basic' label='Price' variant='outlined' />
            <TextField id='outlined-basic' label='Sale' variant='outlined' />
            <TextField id='outlined-basic' label='Image' variant='outlined' />
            <Button color='secondary'>Secondary</Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}
