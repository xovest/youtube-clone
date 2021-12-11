import { Grid } from '@mui/material'
import React from 'react'

import youtube from './api/youtube'

class App extends React.Component {
  render () {
    return (
      <Grid justifyContent="center" container spacing={16}>
        <Grid item xs={12}>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              {/* src bar */}
            </Grid>
            <Grid item xs={8}>
              {/* video details */}
            </Grid>
            <Grid item xs={4}>
              {/* video list */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default App