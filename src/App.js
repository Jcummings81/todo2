import React, { Component } from 'react';
import List from './List'

class App extends Component {
  state = { 
      todos: [
        { id: 1, name: 'Learn Ninja Stuff', complete: true },
        { id: 2, name: 'Get Ninja gear', complete: false },
        { id: 3, name: 'Master Wu Tang', complete: false },
        { id: 4, name: 'Kill the Emperor', complete: false },
      ]
   }

  render() {
    return (
      <div>
       <List 
         name="Todo List"
         todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
