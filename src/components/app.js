import React from 'react';
import List from './list';
import Form from './form';
import { loadState, saveState } from '../localStorage';

class App extends React.Component {
  state = {
    list: []
  }

  componentDidMount() {
    const list = loadState() ? loadState() : [];
    this.setState({
      list
    });
    document.addEventListener('onbeforeunload', saveState.bind(this));
  }

  componentWillUnmount() {
    // saveState(this.state.list);
    window.removeEventListener('onbeforeunload', saveState.bind(this))
  }

  onSubmit = (e, text) => {
    // console.log(e.target, text);
    const id = this.getUniqueId();
    const newTodo = { id, text };
    e.preventDefault();
    const list = [...this.state.list, newTodo];
    this.setState({
      list
    })
  }

  render() {
    return (
      <>
        <h2>hello!</h2>
        <List list={this.state.list} />
        <Form onSubmit={this.onSubmit} />
      </>
    );
  }
  getUniqueId = () => {
    const allId = this.state.list.map( ({ id }) => id);
    // console.log(allId);
    return this.state.list.length ? this.state.list.length : 0;
  }
}

export default App;
