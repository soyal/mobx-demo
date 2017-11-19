/**
 * todo筛选项
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import './index.less'

const TodoFilter = ({ data = [], onFilter, viewType }) => {
  return (
    <div className="todo_filter">
      {data.map((item) => (
        <a className={classnames("todo_filter-item", item.value === viewType ? 'active' : '')}
          key={item.value}
          onClick={() => {
            onFilter(item.value)
          }}>{item.text}</a>
      ))}
    </div>
  )
}

TodoFilter.propTypes = {
  // 当前的viewType
  viewType: PropTypes.string,
  //[{text: 'todo', value: 'click 后回调的value'}]
  data: PropTypes.array,
  // (value: string): void  回传被点击的value
  onFilter: PropTypes.func
}

export default TodoFilter