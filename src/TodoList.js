import React, { Component } from "react";

class TodoList extends Component {
  render() {
    return <h3>{localStorage.getItem('todo')}</h3>;
  }
}

export default TodoList;
