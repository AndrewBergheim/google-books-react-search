import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';
import Table from './components/Table';
import SavedTable from "./components/SavedTable";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
          <Route path = "/saved">
            <SavedTable/>
          </Route>
          <Route path = "/">
            <Table/>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
