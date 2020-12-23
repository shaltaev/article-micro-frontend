import React from 'react';

export const News = ({ id, title, text }) =>
  <div id={id}>
    <h3>{ title }</h3>
    <div>
      <span>
        { text }
      </span>
    </div>
  </div>
