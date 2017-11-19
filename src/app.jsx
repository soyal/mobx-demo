import React, { Component } from 'react'
import {
  useStrict
} from 'mobx'
import { observer } from 'mobx-react'

import TodoList from './components/todo-list'
import TodoInput from './components/todo-input'
import TodoFilter from './components/todo-filter'

useStrict(true)

@observer
class App extends Component {

  render() {
    return (
      <div className="todo">
        <h1 className="todo_title">todo list</h1>

        {/*输入部分*/}
        <TodoInput></TodoInput>

        {/*todo列表*/}
        <TodoList></TodoList>

        {/*筛选*/}
        <TodoFilter></TodoFilter>
      </div>
    )
  }
}

export default App