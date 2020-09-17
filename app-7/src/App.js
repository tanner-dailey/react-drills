import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import NewTask from "./NewTask";
import List from "./List";

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: []
    };

    this.updateList = this.updateList.bind(this);
  }

  updateList(task) {
    this.setState({ list: [...this.state.list, task] });
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask add={this.updateList} />
        <List tasks={this.state.list} />
      </div>
    );
  }
}

export default App;
