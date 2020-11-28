import React from 'react';

export const List = ({ items, renderer: Renderer }) =>
  <ul>
    { items.map((item) => <Renderer key={item.id} {...item} />) }
  </ul>
