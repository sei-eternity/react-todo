import React, { Component } from 'react';
import ToDoList from './ToDoList';

class MyList extends Component {
  constructor(props) {
    super();

    this.state = {
      toDoItems: props.theList,
      newItem: "Hi Mick!"
    };
  }

  clearList = (e) => {
    this.setState({
      toDoItems: []
    });
  }

  addItem = (e) => {
    e.preventDefault();

    // const someObj = {name:"q", age: 0};

    // const newObject = Object.assign(
    //   {}, // results in a new merged object
    //   someObj, // takes the old obj
    //   { alive: false } // takes new/other obj
    // );

    // const currentToDoItems = this.state.toDoItems;
    // currentToDoItems.push(this.state.newItem);
    // this.setState({
    //   toDoItems: currentToDoItems,
    //   newItem: ""
    // });

    const { toDoItems, newItem } = this.state;

    this.setState({
      toDoItems: [...toDoItems, newItem],
      newItem: ""
    });
  }

  newItemChange = (e) => {
    this.setState({
      newItem: e.target.value
    });
  }

  render() {
    // const allTasks = this.state.toDoItems.map((task, index) => {
    //   return <ListItem task={task} key={index} />;
    // });

    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <ToDoList todoItems={this.state.toDoItems} />
        <br />
        
        <form>
          <input type="text"
            placeholder="Type a task here!"
            onChange={this.newItemChange}
            value={this.state.newItem}
            />
          <button onClick={this.addItem}>Add Task!</button>
        </form>

        <hr />
        <button 
          onClick={this.clearList}>
            I Finished Everything!
        </button>
      </div>
    );
  }
}

export default MyList;