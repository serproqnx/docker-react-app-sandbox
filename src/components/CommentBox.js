import React, { Component } from 'react'

class CommentBox extends Component {
  state = { comment: '' }

  handleChange = event => {
    this.setState({
      comment: event.target.value 
    })
  }

  render() {
    return (
      <form action="">
        <h4>Add a Comment</h4>
        <textarea onChange={this.handleChange} value={this.state.comment}/>
        <div><button>Submit Comment</button></div>
      </form>
    )
  }
}

export default CommentBox