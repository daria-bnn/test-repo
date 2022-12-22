import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './components/Main/Main';
import StartPage from './components/StartPage/StartPage';

import './App.css';

const App: FC = () => (
  <Router>
    <Switch>
      <Route path="/main" exact={true}>
        <Main text="Hello World" />
      </Route>
      <Route path="/" exact={true}>
        <StartPage />
      </Route>
      <Route path="*">
        <div>Not Found</div>
      </Route>
    </Switch>
  </Router>
);

export default App;
