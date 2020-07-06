import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class Todo extends Component {
  render() {
    return (
      <div
        className="Todo"
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Card
          className="Todo-card"
          style={{ width: "75%", backgroundColor: "#1e272c", color: "white" }}
        >
          <Card.Body>
            <Card.Text>{this.props.content.todoText}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Todo;
