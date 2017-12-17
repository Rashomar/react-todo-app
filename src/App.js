import React, { Component } from 'react';
import SingleTodo from "./SingleTodo";

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos: [],
      currentTodo: ""
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onInputChange(e) {
    this.setState({currentTodo: e.target.value})
  }

  onClick(e){
    if(this.state.currentTodo){
    let todosCopy = this.state.todos.slice();
    todosCopy.push(this.state.currentTodo);
    if(todosCopy){
    this.setState({
      todos: todosCopy,
      currentTodo: ""
    }) 
    }
    }
    e.preventDefault();
  }

  deleteTodo(i){
    let todosCopy = this.state.todos.slice();
    todosCopy.splice(i, 1);
    this.setState({
      todos:todosCopy
    });
  }

  render() {
    let listOfTodos = this.state.todos.map((e,i) =>{
      return (
        <SingleTodo todo={e} delete={()=>this.deleteTodo(i)} />
      )
    })
    return (
      <div className="container text-center">
      <div className="row">
      <div className=" col-6-offset-5">
      <form className="form-inline">
      <h1>To-Do App</h1>
        <div className="form-group">
        <input className="form-control"  placeholder="Enter todo" value={this.state.currentTodo}  onChange={this.onInputChange} />
        <button className="btn btn-success" onClick={this.onClick}>Add task!</button>
        <br />
      </div>
        </form>
        {this.state.todos.length === 0 ? "No todos yet!" : <ul className="list-group col-xs-10 col-md-6 col-md-offset-3 col-xs-offset-1 mt-5">{listOfTodos}</ul>}
        </div>
      </div>
      </div>
    );
  }
}

export default App;
