import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import LinkShare from './components/LinkShare';
import Explore from './components/Explore';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/linkshare" component={LinkShare} />
        <Route path="/explore" component={Explore} />
      </Switch>
    </Router>
  );
};

export default App;