import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class Todo extends Component {
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
