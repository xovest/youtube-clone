import { Grid } from '@mui/material'
import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos }) => {
  const list = videos.map((video, id) => <VideoItem key={id} video={video} />)
  return (
    <Grid container spacing={10}>
      {list}
    </Grid>
  )
}

export default VideoList