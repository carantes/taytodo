import React, { Component } from 'react';
import './App.css';
import TodoList from './molecules/TodoList'

// Todo: Redux
const todos = [
  { id: 1, text: 'Clean the house' },
  { id: 2, text: 'Study English'}
]

class App extends Component {
  render() {
    return (
      <TodoList todos={todos} onTodoClick={(id) => console.log(id)} />
    );
  }
}

export default App;
