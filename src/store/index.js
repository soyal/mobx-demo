/**
 * 根store
 */
import {
  observable,
  action,
  runInAction
} from 'mobx'

import TodoItemStore from './todo-item'

import { fetchList } from '../api/list'

export default class RootStore {
  @observable
  viewType = 'todo'  // todo undo complete

  @observable
  list = []  // Array<TodoItem> 所有列表项

  filters = [{
    text: '待完成',
    value: 'todo'
  }, {
    text: '已完成',
    value: 'complete'
  }]

  @action.bound
  async fetchList() {
    const originData = await fetchList()
    const todoList = this._parseList(originData)

    if (todoList.length > 0) {
      runInAction('fetch list complete', () => {
        this.list = todoList
      })
    }
  }

  @action.bound
  changeFilter(viewType) {
    this.viewType = viewType
  }

  _parseList(originData) {
    return originData.map((data) => (
      new TodoItemStore(data)
    ))
  }
}