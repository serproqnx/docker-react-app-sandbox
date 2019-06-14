import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'

class App extends React.Component {
  state = { images: [] }

  onSearchSubmit = async term => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID acc8dc32f27ff1c82a9f4fd9d4ff21a4b56b93a547df769d3ed10bcdcb2fba24'
      }
    })
    this.setState({ images: response.data.results })
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    )
  }
}

export default App