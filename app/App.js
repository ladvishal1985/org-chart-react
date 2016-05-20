import React, { Component } from 'react';
import {render} from 'react-dom';
import TreeContainer from './tree/TreeContainer';

class App extends Component {
  render() {
    return (
      	<TreeContainer />
    );
  }
}

render(<App />, document.getElementById('tree'));
