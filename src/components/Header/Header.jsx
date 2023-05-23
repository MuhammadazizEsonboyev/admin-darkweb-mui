import { Grid } from '@mui/material'
import React from 'react'

export default function Order () {
  return (
    <div>
      <Grid
        container
        // spacing={2}
        direction='row'
        justifyContent='center'
        alignItems='center'
      >
        <Grid item xs={8} sx={{marginTop: "100px"}}> 
            <h1>Hello Header Page</h1>
        </Grid>
      </Grid>
    </div>
  )
}
