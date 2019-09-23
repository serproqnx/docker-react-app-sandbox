import React, { Component } from 'react'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'
import GraphTest from 'components/BarChartV1'
import Test from 'components/Test'
// import ChartWrapper from 'components/ChartWrapper.js'
import ChartWrapper from 'components/D3StreamGraphWrapper'

class App extends Component {
  render() {
    return (
      <div>
        <ChartWrapper />
        {/* <CommentBox /> */}
        {/* <CommentList /> */}
      </div>
    )
  }
}

export default App