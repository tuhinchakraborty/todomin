import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  componentDidMount = () => {
    console.log("TodoList Mounted");
  };

  todoCancel = (id) => {
    const originalLocalStorage = JSON.parse(localStorage.getItem("todo"));
    const index = originalLocalStorage.map((item) => item.id).indexOf(id);
    originalLocalStorage.splice(index, 1);
    localStorage.setItem("todo", JSON.stringify(originalLocalStorage));
    this.setState({
      todos: JSON.parse(localStorage.getItem("todo")),
    });
  };

  todoDone = (id) => {
    const originalLocalStorage = JSON.parse(localStorage.getItem("todo"));
    let newLocalStorage = originalLocalStorage.map((item) => {
      const obj = Object.assign({}, item);
      if (item.id === id) {
        obj["isDone"] = !obj["isDone"];
      } else {
        obj["isDone"] = obj["isDone"];
      }
      return obj;
    });
    localStorage.setItem("todo", JSON.stringify(newLocalStorage));
    this.setState({
      todos: JSON.parse(localStorage.getItem("todo")),
    });
  };

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
