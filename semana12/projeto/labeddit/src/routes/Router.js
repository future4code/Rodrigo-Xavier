import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FeedPage from '../screens/FeedPage/FeedPage';
import LoginPage from '../screens/LoginPage/LoginPage';
import PostPage from '../screens/PostPage/PostPage';
import RegistrationPage from '../screens/RegistrationPage/RegistrationPage';

function Router() {
    return (
            <Switch>
                <Route exact path={["/", "/login"]}>
                    <LoginPage />
                </Route>
                <Route exact path="/cadastrar">
                    <RegistrationPage />
                </Route>
                <Route exact path="/lista-de-posts">
                    <FeedPage />
                </Route>
                <Route exact path="/post">
                    <PostPage />
                </Route>
                <Route>
                    <div>Erro: 404</div>
                </Route>
            </Switch>
    )
}

export default Router;