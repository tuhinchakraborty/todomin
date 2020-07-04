import React, { Component } from 'react';
import './App.css';
import Search from './Search'
import TodoList from './TodoList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search/>
        <TodoList/>
      </div>
    );
  }
}

export default App;
