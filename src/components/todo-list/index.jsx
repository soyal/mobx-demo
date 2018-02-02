import React from 'react'
import TodoItem from '../todo-item'
import { observer } from 'mobx-react'

const TodoList = observer(({ data, viewType }) => {
  return (
    <div>
      <ul className="todo_list">
        {data
          .filter(item => {
            return item.type === viewType
          })
          .map(todoItem => {
            return <TodoItem key={todoItem.id} data={todoItem} />
          })}
      </ul>
      <span>length: {data.length}</span>
    </div>
  )
})

export default TodoList
