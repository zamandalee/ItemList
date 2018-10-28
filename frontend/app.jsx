import React from 'react';
import {
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';

const App = () => (
    <Switch>
      <Route exact path="/" component={listIndex} />
      <Redirect to="/" />
    </Switch>
);

export default App;
