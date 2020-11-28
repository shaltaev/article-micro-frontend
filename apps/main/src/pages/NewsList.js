import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { List, News } from '../components';

import { makeRouteEvent } from '../utils';

const RouteEvent = makeRouteEvent('News');
const ClearRouteEvent = makeRouteEvent();

export const NewsListPage = () => {
  useEffect(() => {
      window.dispatchEvent(RouteEvent)

    return () => {
        window.dispatchEvent(ClearRouteEvent)
    }
  }, [])

  const news = useSelector(state => state.news || []);

  return <List items={news} renderer={News} />;
}

