import React from 'react';
import {
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';

import ListIndex from './list_index.jsx';

const App = () => (
    <Switch>
      <Route exact path="/" component={ListIndex} />
    </Switch>
);

export default App;
