import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import ToDo from './ToDo';

class App extends Component {
  constructor(){
    super();

    this.state = {
      list: [],
      item: ''
    }

    this.updateList = this.updateList.bind(this)
  }

  addItem(input){
    this.setState({item: input})
  }

  updateList(){
    this.setState({
      list: [...this.state.list, this.state.item],
      item: ''
    })
  }
  
  render(){
    let list = this.state.list.map((el, i) => {
      return <ToDo key={i} task={el} />
    })

    return (
      <div>
        <h1>My To-do List</h1>
        <div>
          <input 
            value={this.state.item}
            placeholder='Enter Task'
            onChange={e => this.addItem(e.target.value)}/>
          <button onClick={this.updateList}>Add Task</button>
        </div>

        <br />

        {list}
      </div>
    )
  }
}

export default App;
