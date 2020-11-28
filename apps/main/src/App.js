import React from 'react';
import { Provider } from 'react-redux';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

import { history } from "./history";
import { Header } from './components';
import { NewsListPage, AboutPage } from "./pages";
import { store } from './store/configureStore';
import { ROUTES } from './constants';

export const App = () =>
  <Provider store={store}>
    <Router history={history}>
        <Header />
        <Switch>
            <Route path={ROUTES.news} exact component={NewsListPage}>
                <NewsListPage />
            </Route>
            <Route path={ROUTES.about}>
                <AboutPage />
            </Route>
            <Redirect to={ROUTES.news} />
        </Switch>
    </Router>
  </Provider>
