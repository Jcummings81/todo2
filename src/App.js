import React, { Component } from 'react';
import List from './List'
import Form from './Form'

class App extends Component {
  state = { 
      todos: []
   }

  render() {
    return (
      <div>
       <Form />
       <List 
         name="Todo List"
         todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
