import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  
  constructor() {
    super(props)
    
    this.state = { lat: }
  }

  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    )
    return <div>Latitude: </div>
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)