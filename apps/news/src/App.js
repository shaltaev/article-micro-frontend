import React from 'react';
import { Provider } from 'react-redux';

import { NewsList } from "./components";
import { store } from './store/configureStore';

export const App = () =>
  <Provider store={store}>
    <NewsList />
  </Provider>

export default App
