import React, { useState } from 'react'
import { TodoStoreImpl } from './TodoStore'
import { observer } from 'mobx-react'

interface TodoListProps {
  todoStore: TodoStoreImpl
}

export const TodoList: React.FC<TodoListProps> = observer(({ todoStore }) => {
  const [value, setValue] = useState<string>('')

  return (
    <div>
      <input
        value={value}
        onChange={(event) => {
          setValue(event.target.value)
        }}
        type="text"
      />
      <button
        onClick={() => {
          if (value) {
            todoStore.addTodo(value)
          }
          setValue('')
        }}
      >
        Submit
      </button>
      <div>completed: {todoStore.status.completed}</div>
      <div>Remaining: {todoStore.status.remaining}</div>

      <ul>
        {todoStore.todos.map((todo) => {
          return (
            <li
              onClick={() => {
                todoStore.toggleTodo(todo.id)
              }}
            >
              [{todo.completed ? 'x' : ' '}]{todo.title}
            </li>
          )
        })}
      </ul>
    </div>
  )
})
