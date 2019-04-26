import React from 'react';
import List from './list';
import Form from './form';

class App extends React.Component {
  state = {
    list: [
      {
        text: 'app todo 1',
        id: 0
      }, {
        text: 'app todo 2',
        id: 1
      }
    ]
  }
  render() {
    return (
      <>
        <h2>hello!</h2>
        <List list={this.state.list} />
        <Form />
      </>
    );
  }
}

export default App;
