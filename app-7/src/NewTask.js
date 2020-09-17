import React, { Component } from "react";

class NewTask extends Component {
  constructor() {
    super();

    this.state = {
      input: ""
    };

    this.addItem = this.addItem.bind(this);
  }

  newItem(val) {
    this.setState({ input: val });
  }

  addItem() {
    this.props.add(this.state.input);
    this.setState({ input: "" });
  }

  render() {
    return (
      <div>
        <input
          value={this.state.input}
          placeholder="Enter new task"
          onChange={e => this.newItem(e.target.value)}
        />

        <button onClick={this.addItem}>Add</button>
      </div>
    );
  }
}

export default NewTask;