/**
 * todo item
 */
import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import classnames from 'classnames'

import './index.less'

const TodoItem = observer(({ data }) => {
  return (
    <li className={classnames("todo_list-item", data.type)}
        onClick={data.toggleType}>{data.text}</li>
  )
})

TodoItem.propTypes = {
  // Array<TodoItem>  store/todo-item
  data: PropTypes.object
}

export default TodoItem