import React, { Component } from 'react';
import List from './List'
import Form from './Form'

class App extends Component {
  state = { 
      todos: []
   }

   addItem = (name) => {
     const id = Math.floor(( 1 + Math.random()) * 0x1000 )
     const { todos } = this.state
     const todo = { name: name, id: id, complete: false }
     this.setState({ todos: [...todos, todo]})
   }

  render() {
    return (
      <div>
       <Form addTodo={this.addItem} />
       <List 
         name="Ninja Missions"
         todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
