import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  todoCancel = (id) => {
    const originalLocalStorage = JSON.parse(localStorage.getItem("todo"));
    const index = originalLocalStorage.map((item) => item.id).indexOf(id);
    originalLocalStorage.splice(index, 1);
    localStorage.setItem("todo", JSON.stringify(originalLocalStorage));
    this.setState({
      todos: JSON.parse(localStorage.getItem("todo")), 
    })
  };
  
  todoDone = (id) => console.log("This is inside TodoList, Done ", id);

  state = {
    todos: JSON.parse(localStorage.getItem("todo")),
  };

  render() {
    const todoItems = JSON.parse(localStorage.getItem("todo"));
    const todos = todoItems?.map((content) => (
      <Todo
        key={content.id}
        content={content}
        todoCancel={this.todoCancel}
        todoDone={this.todoDone}
      />
    ));
    return <div>{todos}</div>;
  }
}

export default TodoList;
