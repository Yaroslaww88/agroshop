import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './Main'
import MainAdmin from '../Admin/MainAdmin'
import ItemPageComponent from './ItemPageComponent' 

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/admin" component={MainAdmin} />
        <Route path="/:id" component={ItemPageComponent} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
