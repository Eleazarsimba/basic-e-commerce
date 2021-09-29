import './App.css';
import React from "react";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Webhome from './components/Body/Webhome';
import Subscribe from './components/Dashboard/Footer/Subscribe';
import Table2 from './components/Body/Table2';
import Tables1 from './components/Body/Tables1';

function App() {
  return (
    <Router>
      <Switch>
      {/* <Route exact path="/" component={Tables1} /> */}
        {/* <Route exact path="/" component={Table2} /> */}
          <Route exact path="/" component={Webhome} />
          <Route exact path="/subscribe/:email" component={Subscribe} />
      </Switch>
  </Router>
  );
}

export default App;
