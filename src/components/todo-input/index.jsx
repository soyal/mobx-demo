import React from 'react'

const TodoInput = ({ onEnter }) => {
  return (
    <input
      type="text"
      onKeyUp={e => {
        if (e.keyCode === 13) {
          onEnter(e)
        }
      }}
    />
  )
}

export default TodoInput
