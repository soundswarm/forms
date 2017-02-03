import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './components/App';
import Personal from './components/Personal';
import Home from './components/Home';
import Image from './components/Image';


const Routes = (props) => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/personal" component={Personal} />
      <Route path="/image" component={Image} />
    </Route>
  </Router>
);

export default Routes;