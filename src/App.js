import './App.css';
import React from "react";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Webhome from './components/Body/Webhome';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={Webhome} />
      </Switch>
  </Router>
  );
}

export default App;
