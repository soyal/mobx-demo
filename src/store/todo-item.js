/**
 * todo-item store
 */
import {
  observable,
  action,
  runInAction
} from 'mobx'

import { toggleType } from '../api/toggle-type'

export default class TodoItemStore {
  @observable
  type = ''  // todo complete

  text = ''
  id = ''

  constructor(originData) {
    const TYPE_TABLE = {
      0: 'todo',
      1: 'complete'
    }

    this.id = originData.id
    this.text = originData.text
    this.type = TYPE_TABLE[originData.type]
  }

  @action.bound
  async toggleType() {
    const tType = this.type === 'complete' ? 'todo': 'complete'
    const success = await toggleType(tType)
    if(success) {
      runInAction('toggle todo item type complete', () => {
        this.type = tType
      })
    }
  }
}