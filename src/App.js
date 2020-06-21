import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import GlobalCSS from './shared/globalCSS'
import Home from './pages/Home/'
function App() {
  return (
    <>
      <GlobalCSS />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
