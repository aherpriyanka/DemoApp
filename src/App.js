import React from 'react';
import { createBrowserHistory } from 'history';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login, Home, Product } from "./Components"
let history = createBrowserHistory({forceRefresh: true });


function App() {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route
          exact
          path={"/"}
          component={Login}
          history={history}
        />
        <Route
          exact
          path={"/home"}
          component={Home}
        />
        <Route
          exact
          path={"/product"}
          component={Product}
        />
    </Switch>
    </BrowserRouter>
  );
  
}

export default App;
