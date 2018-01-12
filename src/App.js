import React, { Component } from 'react';
import './App.css';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  onChange = (event) => {
    this.setState({
      term: event.target.value
    });
  }

  onSubmit = (event, index) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, { value: this.state.term, isEditing: false }],
    });
  }

  deleteItem = (index) => {
    const items = this.state.items;
    items.splice(index, 1);
    this.setState({
      items: items
    });
  }

  editItem = (index, items, toggleEditing) => {
    this.toggleEditing(index, items);
  }

  saveItem = (index) => {
    const items = this.state.items;
    items.splice(index, 1, {value: this.state.term, isEditing: false});
    this.setState({
      term: '',
      items: items

    });
    console.log(items)

  }

  toggleEditing = (index) => {
    const itemName = this.state.items[index].value;
    this.setState({
      items: this.state.items.map(item => {
        if (item.value===itemName){
          item.isEditing = true
        }
        return item;
      })
    });
  }


  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <List value= {this.state.term} items={this.state.items} deleteItem={this.deleteItem} editItem={this.editItem} onChange={this.onChange} saveItem={this.saveItem} toggleEditing={this.toggleEditing} isEditing={this.state.isEditing}  testItem={this.testItem}/>
      </div>
    );
  }
}

export default App;
