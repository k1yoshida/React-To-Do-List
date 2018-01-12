import React, { Component } from "react";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      tempValue: props.value
    };
  }
  toggleEditing = () => {
    this.setState({
      isEditing: !this.state.isEditing
    });
  };

  handleValueChange = event => {
    this.setState({
      tempValue: event.target.value
    });
  };

  handleItemSave = () => {
    this.props.saveItem(this.props.index, this.state.tempValue);
    this.toggleEditing();
  };

  render() {
    const isEditing = this.state.isEditing;
    if (isEditing) {
      return (
        <li>
          <input
            type="text"
            value={this.state.tempValue}
            onChange={this.handleValueChange}
            autoFocus
          />
          <button onClick={this.handleItemSave}>Save</button>
        </li>
      );
    } else if (!isEditing) {
      return (
        <li>
          {this.props.value}
          <button onClick={() => this.props.deleteItem(this.props.index)}>
            Remove
          </button>
          <button onClick={this.toggleEditing}>Edit</button>
        </li>
      );
    }
  }
}
export default ListItem;
