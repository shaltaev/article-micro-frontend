import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { List, News } from './index';

import { makeRouteEvent } from '../utils';

const RouteEvent = makeRouteEvent('News');
const ClearRouteEvent = makeRouteEvent();

export const NewsList = () => {
  useEffect(() => {
      window.dispatchEvent(RouteEvent)

    return () => {
        window.dispatchEvent(ClearRouteEvent)
    }
  }, [])

  const news = useSelector(state => state.news || []);

  return <List items={news} renderer={News} />;
}

export default NewsList;
