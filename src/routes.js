import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';

// IndexRoute is root path we want user to go to.
// All components will passed in as children to app component
export default (
    <Route path='/' component={App}>
        <IndexRoute component={HomePage} />
        <Route path='about' component={AboutPage} />
    </Route>
);