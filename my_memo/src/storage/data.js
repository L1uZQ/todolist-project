/* eslint-disable no-console */
/* eslint-disable no-undef */

import storage from '@system.storage'
// import { KEYS } from './const'
// import { clearTodoList,clearNoteList } from './utils.js'

export const KEYS = {
  TODO_LIST_KEY: 'todo-list-key',
  NOTE_LIST_KEY: 'note-list-key',
  LOGIN_MSG_KEY: 'login-msg-key'
}


export function getTodoList() {
  return new Promise((resolve, reject) => {
    storage
      .get({ key: KEYS.TODO_LIST_KEY })
      .then(ret => {
        if (ret.data) {
          resolve(JSON.parse(ret.data))
        } else {
          resolve([])
        }
      })
      .catch(err => {
        console.log('get TodoList fail', err)
        reject(err)
      })
  })
}

export function getNoteList() {
  return new Promise((resolve, reject) => {
    storage
      .get({ key: KEYS.NOTE_LIST_KEY })
      .then(ret => {
        if (ret.data) {
          resolve(JSON.parse(ret.data))
        } else {
          resolve([])
        }
      })
      .catch(err => {
        console.log('get NoteList fail', err)
        reject(err)
      })
  })
}

export function setTodoList(list) {
  storage.set({
    key: KEYS.TODO_LIST_KEY,
    value: JSON.stringify(list),
    success: data => {
      console.log('set TodoList success', data)
    },
    fail: err => {
      console.log('set TodoList fail', err)
    }
  })
}

export function setNoteList(list) {
  // clearNoteList();
  storage.set({
    key: KEYS.NOTE_LIST_KEY,
    value: JSON.stringify(list),
    success: data => {
      console.log('set NoteList success', data)
    },
    fail: err => {
      console.log('set NoteList fail', err)
    }
  })
}

export function clearTodoList() {
  storage.delete({
    key: KEYS.TODO_LIST_KEY,
    success: data => {
      console.log('delete TodoList success', data)
    },
    fail: err => {
      console.log('delete TodoList fail', err)
    }
  })
}

export function clearNoteList() {
  storage.delete({
    key: KEYS.NOTE_LIST_KEY,
    success: data => {
      console.log('delete NoteList success', data)
    },
    fail: err => {
      console.log('delete NoteList fail', err)
    }
  })
}