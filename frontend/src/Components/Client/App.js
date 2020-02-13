import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './Main'
import MainAdmin from '../Admin/MainAdmin'
import AboutComponent from './AboutComponent'
import { CookiesProvider } from 'react-cookie'

const App = () => {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/admin" component={MainAdmin}/>
          <Route path="/" component={Main}/>
        </Switch>
      </BrowserRouter>
    </CookiesProvider>
  );
}

export default App;
