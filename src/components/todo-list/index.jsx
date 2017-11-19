import React from 'react'
import TodoItem from '../todo-item'

const TodoList = ({ data }) => {
  return (
    <ul className="todo_list">
      <TodoItem></TodoItem>
      <TodoItem></TodoItem>
      <TodoItem></TodoItem>
    </ul>
  )
}

export default TodoList