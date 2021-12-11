import { Grid } from '@mui/material'
import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos, onVideoSelect }) => {
  const list = videos.map((video, id) => <VideoItem onVideoSelect={onVideoSelect} key={id} video={video} />)
  return (
    <Grid container spacing={10}>
      {list}
    </Grid>
  )
}

export default VideoList