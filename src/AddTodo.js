import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

class AddTodo extends Component {
  constructor() {
    super();
    this.textInput = React.createRef();
  }

  state = {
      todoText: ""
  }

  handleKeyPress = (target) => {
    if(target.key === 'Enter') {
        const todoText = this.textInput.current.value
        this.setState({
            todoText: todoText
        })
    }
  }

  render() {
    return (
      <>
        <Jumbotron>
          <InputGroup>
            <FormControl
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
