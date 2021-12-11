import { Paper, TextField } from '@mui/material'
import React from 'react'

class SearchBar extends React.Component {
  //we could also use useState, same shit
  state = {
    searchTerm: '',
  }

  handleChange = (e) => this.setState({ searchTerm: e.target.value })

  handleSubmit = (e) => {
    e.preventDefault()

    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;

    onFormSubmit(searchTerm)
  }

  render() {
    return (
      <Paper elevation={6} style={{ padding: '25px' }}>
        <form onSubmit={this.handleSubmit}>
          <TextField fullWidth label="Search..." onChange={this.handleChange} />
        </form>
      </Paper>
    )
  }
}

export default SearchBar