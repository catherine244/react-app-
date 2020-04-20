import React, { Component } from 'react';
import Message from './Message';
import Welcome from './Welcome';
class App extends Component {
  render() {
    return (
      <div>
        <Welcome />
        <Message text= "Hello to React World"/>
      </div>
    );
  }
}
export default App;