import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
import { ProtectedRoute } from '../Admin/utils/ProtectedRoute';


// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
export function RouteWithSubRoutes(route) {
    if (route.private) {
        return (
            <ProtectedRoute
                path={route.path}
                redirect={route.redirect || '/'}
            />
        )
    } 
    return (
        <Route
            path={route.path}
            render={props => (
            // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}