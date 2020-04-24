import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import IndexRoutesClient from './Client/IndexRoutesClient'
import MainAdmin from './Admin/MainAdmin'
import { CookiesProvider } from 'react-cookie'

const App = () => {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/admin" component={MainAdmin}/>
          <Route path="/" component={IndexRoutesClient}/>
        </Switch>
      </BrowserRouter>
    </CookiesProvider>
  );
}

export default App;
