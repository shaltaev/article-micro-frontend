import React from 'react';
import { useSelector } from 'react-redux'

import { List, News } from '../components'

export const NewsListPage = () => {
  const news = useSelector(state => state.news || []);

  return <List items={news} renderer={News} />;
}

