import React from 'react';

const List = ({ items, deleteItem }) => (
  <ul>
    {
      items.map((item, index) => <li key={index}>{item} <button key={item} onClick={(e) => deleteItem(e, index)}>Remove</button> </li>)
    /* the onClick has a function and we are passing back the index to the App.js page. the onClick is taking in an event, and it is running the deleteItem function while taking in the event (e) and the index which is generated when you generate the li*/
    }
  </ul>
);

export default List;
