import React from 'react';

import "./style2.css";
import { ROUTES } from './constants';

export const App2 = () => {
  return <div className='app2'>
    <h1>App2</h1>
    <a href={ROUTES.news}>News</a>{' '}
    <a href={ROUTES.about}>About</a>
  </div>
}

