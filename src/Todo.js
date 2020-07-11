import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class Todo extends Component {
  // todoDone = (id) => {
  //   const originalLocalStorage = JSON.parse(localStorage.getItem("todo"));
  //   let newLocalStorage = originalLocalStorage
  //     .filter((item) => item.id === id)
  //     .map((item) => {
  //       const obj = Object.assign({}, item);
  //       obj["isDone"] = true;
  //       return obj;
  //     });
  //   localStorage.setItem("todo", JSON.stringify(newLocalStorage));
  // };

  // todoCancelled = (id) => {
  //   const originalLocalStorage = JSON.parse(localStorage.getItem("todo"));
  //   const index = originalLocalStorage.map((item) => item.id).indexOf(id);
  //   originalLocalStorage.splice(index, 1);
  //   localStorage.setItem("todo", JSON.stringify(originalLocalStorage));
  // };

  render() {
    return (
      <div
        className="Todo"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card className="Todo-card">
          <Card.Body>
            <Card.Text>{this.props.content.todoText}</Card.Text>
            <div>
              <Button
                variant="outline-success"
                onClick={() => this.props.todoDone(this.props.content.id)}
              >
                Done
              </Button>{" "}
              <Button
                variant="outline-danger"
                onClick={() => this.props.todoCancel(this.props.content.id)}
              >
                Cancel
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Todo;
