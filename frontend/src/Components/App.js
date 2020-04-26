import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import IndexRoutesClient from './Client/IndexRoutesClient'
import MainAdmin from './Admin/MainAdmin'
import { CookiesProvider } from 'react-cookie'
import IndexRoutesAdmin from './Admin/IndexRoutesAdmin'
import NotFound from './NotFound'

const App = () => {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/admin" component={IndexRoutesAdmin}/>
          <Route path="/" component={IndexRoutesClient}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </CookiesProvider>
  );
}

export default App;
