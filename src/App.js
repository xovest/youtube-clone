import { Grid } from '@mui/material'
import React from 'react'

import youtube from './api/youtube'
import { SearchBar, VideoDetail } from './components/'

class App extends React.Component {
  state = {
    video: [],
    selectedVideo: null,
  }

  handleSubmit = async (searchTerm) => {
    const res = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: process.env.API_KEY,
        q: searchTerm,
      }
    })

    this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] })
  }

  render() {
    const { selectedVideo } = this.state;

    return (
      <Grid justifyContent="center" container spacing={16}>
        <Grid item xs={12}>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo} />
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