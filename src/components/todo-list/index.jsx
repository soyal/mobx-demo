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
    </div>
  )
})

export default TodoList
