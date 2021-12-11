import { Grid } from '@mui/material'
import React from 'react'

import youtube from './api/youtube'
import { SearchBar, VideoDetail } from './components/'

class App extends React.Component {
  render() {
    return (
      <Grid justifyContent="center" container spacing={16}>
        <Grid item xs={12}>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <SearchBar />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail />
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