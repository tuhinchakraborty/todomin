import React, { Component } from 'react';
import './App.css';
import AddTodo from './AddTodo'
import TodoList from './TodoList'

class App extends Component {

  state = {
    todoText: ""
  }

  getTodoText = (todoText) => {
    this.setState({
      todoText: todoText
    })
  }

  render() {
    return (
      <div className="App">
        <AddTodo todoText={this.getTodoText}/>
        <TodoList todoItem={this.state.todoText}/>
      </div>
    );
  }
}

export default App;
