import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdmUser from '../AdmUser';
import ApplicationFormPage from '../ApplicationFormPage';
import CreateTripPage from '../CreateTripPage';
import ErrorPage from '../ErrorPage';
import HomePage from '../HomePage';
import ListTripsPage from '../ListTripsPage';
import LoginPage from '../LoginPage';
import TripDetailsPage from '../TripDetailsPage';

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
        <Route exact path="/adm-user">
          <AdmUser />
        </Route>
        <Route exact path="/trips/details">
          <TripDetailsPage />
        </Route>
        <Route exact path="/application-form">
          <ApplicationFormPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;