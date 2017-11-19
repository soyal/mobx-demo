/**
 * todo筛选项
 */
import React from 'react'
import PropTypes from 'prop-types'

import './index.less'

const TodoFilter = ({ data, onFilter }) => {
  return (
    <div className="todo_filter">
      <a className="todo_filter-item">todo</a>
      <a className="todo_filter-item">undo</a>
      <a className="todo_filter-item active">complete</a>
    </div>
  )
}

TodoFilter.propTypes = {
  //[{text: 'todo', value: 'click 后回调的value'}]
  data: PropTypes.array,
  // (value: string): void  回传被点击的value
  onFilter: PropTypes.func  
}

export default TodoFilter