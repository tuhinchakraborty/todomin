import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import "./App.css";

class AddTodo extends Component {
  constructor() {
    super();
    this.textInput = React.createRef();
  }

  handleKeyPress = (target) => {
    var todoList = JSON.parse(localStorage.getItem("todo")) || []
    if (target.key === "Enter") {
      const todoText = this.textInput.current.value;
      this.props.todoText(todoText);
      const todo = {
        todoText: todoText,
        isDone: false,
      };
      todoList.push(todo)
      localStorage.setItem("todo", JSON.stringify(todoList));
    }
  };

  render() {
    return (
      <>
        <Jumbotron className="Todo-text-section">
          <InputGroup>
            <FormControl
              className="Todo-form-control"
              aria-describedby="inputGroup-sizing-sm"
              ref={this.textInput}
              type="text"
              onKeyPress={this.handleKeyPress}
            />
          </InputGroup>
        </Jumbotron>
      </>
    );
  }
}

export default AddTodo;
