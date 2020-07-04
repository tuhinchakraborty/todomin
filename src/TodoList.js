import React, { Component } from 'react'

class TodoList extends Component {
    render() {
        return <h3>{this.props.todoItem}</h3>
    }
}

export default TodoList
