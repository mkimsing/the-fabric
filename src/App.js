import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import GlobalCSS from './shared/globalCSS'
import Home from './pages/Home/'
import SearchType from './pages/SearchType'
import Header from './components/Header';
import SelectCategory from './pages/SelectCategory';
import LocationSearch from './pages/LocationSearch'
import routes from './shared/routes';
import SearchResults from './pages/SearchResults';
import ResourceDetails from './pages/ResourceDetails';
import { ModalProvider } from 'styled-react-modal'

function App() {
  return (
    <>
      <GlobalCSS />
      <ModalProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path={routes.SEARCH_TYPE} component={SearchType} />
            <Route path={routes.CATEGORY_SELECT} component={SelectCategory} />
            <Route path={routes.LOCATION_SEARCH} component={LocationSearch} />
            <Route path={routes.SEARCH_RESULTS} component={SearchResults} />
            <Route path={`${routes.RESOURCE_DETAILS}/:resourceName`} component={ResourceDetails} />
          </Switch>
        </Router>
      </ModalProvider>
    </>
  );
}

export default App;
