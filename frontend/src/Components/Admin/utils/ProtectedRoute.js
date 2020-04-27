import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useCookies } from 'react-cookie'

export const ProtectedRoute = ({component: Component, redirect, ...rest}) => {

    const [cookies, setCookie, removeCookie] = useCookies('')

    console.log(cookies.user)

    return (
        <Route
        {...rest}
        render={props => {
            if (cookies.user) {
                console.log('access get')
                return <Component {...props} />;
            } else {
                console.log('access denied')
                return (
                    <Redirect to={{pathname: redirect, state: {from: props.location}}}/>
                );
            }
        }}
        />
    );
};