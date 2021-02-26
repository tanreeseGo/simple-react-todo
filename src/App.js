import React, { Component } from 'react';
import Todos from './todos'
import AddTodo from './addForm'

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ]
  }
  deleteTodo = (id) => {
    const deletingTodo = this.state.todos.filter(eachtodo => {
      return eachtodo.id !== id
    });
    this.setState({
      todos: deletingTodo
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let newTodos = [...this.state.todos, todo]
    this.setState({
      todos: newTodos
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={ this.addTodo }/>
      </div>
    )
  }
}

export default App;
