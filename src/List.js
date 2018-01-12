import React from 'react';

const List = ({ items, deleteItem, saveItem, onChange, editItem, onClick, testItem, value }) => {

return (
  <ul>
    {
      items.map((item, index) => item.isEditing ? (
        <li key={"edit" + index}><input type="text" value={value} onChange={onChange}/><button onClick={() => saveItem(index)} >Save</button></li>
      ) : (
        <li key={index}>{item.value}<button onClick={() => deleteItem(index)}>Remove</button><button onClick={() =>editItem(index)}>Edit</button></li>
      ))
    }
  </ul>
);
}

export default List;

/* the onClick has a function and we are passing back the index to the App.js page. the onClick is taking in an event, and it is running the deleteItem function while taking in the event (e) and the index which is generated when you generate the li*/
