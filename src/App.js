import React, { Component } from "react";
import "./App.css";
import List from "./List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: []
    };
  }

  onChange = event => {
    this.setState({
      term: event.target.value
    });
  };

  onSubmit = (event, index) => {
    event.preventDefault();
    this.setState({
      term: "",
      items: [...this.state.items, { value: this.state.term, isEditing: false }]
    });
    console.log(this.state.items[index]);
  };

  deleteItem = index => {
    const items = this.state.items;
    items.splice(index, 1);
    this.setState({
      items: items
    });
  };

  saveItem = (index, tempValue, toggleEditing) => {
    const items = this.state.items;
    items.splice(index, 1, { value: tempValue, isEditing: false });
    this.setState({
      term: "",
      items: items
    });
    console.log(tempValue);
  };

  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <List
          items={this.state.items}
          deleteItem={this.deleteItem}
          editItem={this.editItem}
          onChange={this.onChange}
          saveItem={this.saveItem}
          toggleEditing={this.toggleEditing}
          isEditing={this.state.isEditing}
        />
      </div>
    );
  }
}

export default App;
