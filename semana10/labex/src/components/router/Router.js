import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreateTripPage from '../CreateTripPage';
import ErrorPage from '../ErrorPage';
import HomePage from '../HomePage';
import ListTripsPage from '../ListTripsPage';
import LoginPage from '../LoginPage';

function  Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/trips/list">
          <ListTripsPage />
        </Route>
        <Route exact path="/trips/create">
          <CreateTripPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;