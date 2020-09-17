import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Image from './Image';

class App extends Component {
  render() {
    return (
      <div>
        <Image url={'https://via.placeholder.com/400'} />
      </div>
    )
  }
}

export default App;
