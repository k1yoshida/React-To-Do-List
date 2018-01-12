import React from "react";
import ListItem from "./ListItem";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
}

const List = ({ items, deleteItem, saveItem, onChange, editItem }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <ListItem
          saveItem={saveItem}
          value={item.value}
          onChange={onChange}
          editItem={editItem}
          index={index}
          deleteItem={deleteItem}
        />
      ))}
    </ul>
  );
};

export default List;

/* the onClick has a function and we are passing back the index to the App.js page. the onClick is taking in an event, and it is running the deleteItem function while taking in the event (e) and the index which is generated when you generate the li*/
