import React, { Component } from 'react';
import './App.css';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: [],
      id: ''
    };
  }

  onChange = (event) => {
    this.setState({
      term: event.target.value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }


  deleteItem = (event, index) => {
    const items = this.state.items;
    items.splice(index, 1);
    this.setState({
      items: items
    });
  }

  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <List items={this.state.items} deleteItem={this.deleteItem} />
       {/*Need to pass this.state as a prop to the List Component*/}
      </div>
    );
  }
}

export default App;
