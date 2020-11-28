import React from 'react';
import { ROUTES } from '../constants';

export const Header = () => {
  return (<nav>
    <a href={ROUTES.news}>News</a>{' '}
    <a href={ROUTES.about}>About</a>
  </nav>)
}
