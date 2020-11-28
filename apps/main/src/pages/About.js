import React, { useEffect } from 'react';

import { makeRouteEvent } from '../utils';

const RouteEvent = makeRouteEvent('About');
const ClearRouteEvent = makeRouteEvent();

export const AboutPage = () => {
  useEffect(() => {
      window.dispatchEvent(RouteEvent)

    return () => {
        window.dispatchEvent(ClearRouteEvent)
    }
  }, [])

  return <div>
    <h2>About page</h2>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consectetur culpa cum debitis doloremque dolores ducimus, et excepturi impedit laudantium libero modi neque nisi obcaecati porro praesentium quasi quia reprehenderit repudiandae sunt tempora ullam, unde.
  </div>
}

