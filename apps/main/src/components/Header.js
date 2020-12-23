import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../constants';

export const Header = () => {
  const [title, setTitle] = useState('');

  const handleRouteEvent = (ev) => {
    setTitle(ev.detail || '')
  }

  useEffect(() => {
      window.addEventListener('route', handleRouteEvent);

    return () => {
        window.removeEventListener('route', handleRouteEvent);
    }
  }, [setTitle])

  return (<div>
    <h1>{title.length > 0 ? `Route ${title}`: 'No title'}</h1>
    <nav>
      <Link to={ROUTES.news}>News</Link>{' '}
      <Link to={ROUTES.about}>About</Link>
    </nav>
  </div>)
}
