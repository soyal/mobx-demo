import React, { Component } from 'react'

function test(target) {
  console.log(target)
}

@test
class App extends Component {
  render() {
    return (
      <div className="test">todo list</div>
    )
  }
}

export default App