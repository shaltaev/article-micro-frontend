import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Header } from './components';
import { AboutPage } from "./pages";
import { ROUTES } from './constants';

const NewsAppPageLazy = lazy(() => import('app2/NewsApp'));

const NewsAppPage = () => <Suspense fallback={null}><NewsAppPageLazy /></Suspense>

export const App = () =>
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path={ROUTES.news} exact component={NewsAppPage} />
            <Route path={ROUTES.about} component={AboutPage} />
            <Redirect to={ROUTES.news} />
        </Switch>
    </BrowserRouter>

