import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../services/auth';

export default ({ children, ...rest }) => {
    let logged = isAuthenticated();
    let authorized = (rest.private && !logged) ? false : true;

    return (
        <Route
            {...rest}
            render={()=>
                authorized ? children : <Redirect to="/signin" />
            }
        />
    );
}