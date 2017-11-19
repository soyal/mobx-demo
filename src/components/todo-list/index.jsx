import React from 'react'
import TodoItem from '../todo-item'

const TodoList = ({ data, viewType }) => {
  console.log('list render')
  return (
    <ul className="todo_list">
      {data.filter((item) => {
        return item.type === viewType
      }).map((todoItem) => {
        return (
          <TodoItem key={todoItem.id}
            data={todoItem}></TodoItem>
        )
      })}
    </ul>
  )
}

export default TodoList