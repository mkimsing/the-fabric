import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import GlobalCSS from './shared/globalCSS'
import Home from './pages/Home/'
import SearchType from './pages/SearchType'
import SelectCategory from './pages/SelectCategory_Need'
import Header from './components/Header';
function App() {
  return (
    <>
      <GlobalCSS />
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search-type" component={SearchType} />
          <Route exact path="/select-category" component={SelectCategory} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
