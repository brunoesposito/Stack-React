import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { 
    NativeRouter as Router,
    Switch,
    Redirect,
    Route,
    Link
} from 'react-router-native';

import Login from './pages/guest/Login';
import Signup from './pages/guest/Signup';
import NotFound from './pages/guest/NotFound';
import Dashboard from './pages/auth/Dashboard';

function Routes() {
    const Auth = useSelector(state => state.auth);

    function PrivateRoute({ children, ...rest }) {
        return (
            <Route
                {...rest}
                render={({ location }) =>
                    Auth ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
                }
            />
        );
    }

    return (
        <Router>
            <Switch>
                <PrivateRoute exact path="/">
                    <Dashboard />
                </PrivateRoute>
                
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/signup">
                    <Signup />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    );
}

export default Routes;