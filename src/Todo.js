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
        <Card
          className={this.props.content.isDone ? "Todo-card-done" : "Todo-card"}
        >
          <Card.Body>
            <Card.Text>{this.props.content.todoText}</Card.Text>
            <div>
              <Button
                variant={
                  this.props.content.isDone
                    ? "outline-secondary"
                    : "outline-success"
                }
                onClick={() => this.props.todoDone(this.props.content.id)}
              >
                {this.props.content.isDone ? "Undo" : "Done"}
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
