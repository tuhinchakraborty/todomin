import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  render() {
    const todoItems = JSON.parse(localStorage.getItem("todo"));
    const todos = todoItems.map((content) => <Todo content={content} />);
    return(
      <div>
        {todos}
      </div>
    );
  }
}

export default TodoList;
