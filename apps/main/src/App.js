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
            <Route path={ROUTES.news} exact component={NewsListPage} />
            <Route path={ROUTES.about} component={AboutPage} />
            <Redirect to={ROUTES.news} />
        </Switch>
    </Router>
  </Provider>
