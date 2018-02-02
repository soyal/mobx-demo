import React, { Component } from 'react'
import {
  useStrict
} from 'mobx'
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'

import RootStore from './store'

import TodoList from './components/todo-list'
import TodoInput from './components/todo-input'
import TodoFilter from './components/todo-filter'

useStrict(true)

@observer
class App extends Component {

  store = new RootStore()

  componentDidMount() {
    this.store.fetchList()
  }

  render() {
    const store = this.store

    return (
      <div className="todo">
        <DevTools></DevTools>
        <h1 className="todo_title">todo list</h1>

        {/*输入部分*/}
        <TodoInput onEnter={(e) => {
          store.addItem(e.target.value)
        }}></TodoInput>

        {/*todo列表*/}
        <TodoList data={store.list}
              viewType={store.viewType}></TodoList>

        {/*筛选*/}
        <TodoFilter data={store.filters}
          viewType={store.viewType}
          onFilter={(viewType) => {
            store.changeFilter(viewType)
          }}></TodoFilter>
      </div>
    )
  }
}

export default App