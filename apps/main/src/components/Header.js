import React, { useState, useEffect } from 'react';
import { ROUTES } from '../constants';

export const Header = () => {
  const [title, setTitle] = useState('');

  const handleRouteEvent = (ev) => {
    console.log(ev);
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
      <a href={ROUTES.news}>News</a>{' '}
      <a href={ROUTES.about}>About</a>
    </nav>
  </div>)
}
