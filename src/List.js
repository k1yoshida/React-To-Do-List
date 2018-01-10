import React from 'react';

const List = ({ items }) => (
  <ul>
    {
      items.map((item, index) => <li key={index}>{item} <button onChange={this.delete}>Remove</button> </li>)
    }
  </ul>
);

export default List;
