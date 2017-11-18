import React, { Component } from 'react'
import {
  useStrict,
  observable,
  action,
  runInAction
} from 'mobx'
import { observer } from 'mobx-react'

useStrict(true)

@observer
class App extends Component {
  @observable
  store = {
    count: 0,
    test: 1
  }

  countUp() {
    setTimeout(() => {
      runInAction(() => {
        this.store.count++
        this.store.test ++
      })
    }, 1000)
  }

  render() {
    const { store } = this
    console.log('render run')
    return (
      <div className="counter">
        count: {store.count}
        test: {store.test}
        <div>
          <button onClick={this.countUp.bind(this)}>count up</button>
        </div>
      </div>
    )
  }
}

export default App