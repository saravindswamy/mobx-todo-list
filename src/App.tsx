import React from 'react'
import logo from './logo.svg'
import './App.css'
import { TodoList } from './TodoList'
import { TodoStore } from './TodoStore'

function App() {
  return (
    <div className="mob">
      <div className="App">
        <TodoList todoStore={TodoStore} />
      </div>
    </div>
  )
}

export default App
