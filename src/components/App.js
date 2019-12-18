import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import HomePage from '../pages/HomePage';
import MoviePage from '../pages/MoviePage';
import MovieDetailsPage from '../pages/MovieDetailsPage';

import routes from '../routes';

const App = () => (
    <BrowserRouter>
    <Navigation />

    <div>
        <Switch>
            <Route exact path={routes.HOME} component={HomePage} />
            <Route path={routes.MOVIES_DETAILS} component={MovieDetailsPage} />
            <Route path={routes.MOVIES} component={MoviePage} />
            <Redirect to={routes.HOME} />
        </Switch>
    </div>
    
    </BrowserRouter>
);

export default App;