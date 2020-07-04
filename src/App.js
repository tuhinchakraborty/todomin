import React, { Component } from 'react';
import './App.css';
import AddTodo from './AddTodo'
import TodoList from './TodoList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo/>
        <TodoList/>
      </div>
    );
  }
}

export default App;
