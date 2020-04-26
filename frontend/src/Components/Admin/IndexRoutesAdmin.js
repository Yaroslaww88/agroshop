import { Switch, Route, withRouter, useRouteMatch } from 'react-router-dom'
import React, { Component, useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { fetchAdminLogin, fetchAdminLogout } from '../utils'
import AdminEditProduct from './AdminEditProduct'
import AdminPage from './AdminPage'
import LoginPage from './LoginPage'
import { ProtectedRoute } from './ProtectedRoute'

const types = {
    SUCCESS: 1,
    UNSUCCESS: 0
}

const Main = (props) => {

    const [cookies, setCookie, removeCookie] = useCookies('')
    const [status, setStatus] = useState(cookies.user ? types.SUCCESS : types.UNSUCCESS)

    let { path } = useRouteMatch();

    const hangleLogin = async (login, password) => {
        try {
            await fetchAdminLogin(login, password)
            setStatus(types.SUCCESS)
        } catch(err) {
            setStatus(types.UNSUCCESS)
        }
    } 

    const hangleLogout = async () => {
        try {
            await fetchAdminLogout()
            setStatus(types.UNSUCCESS)
        } catch(err) {
            setStatus(types.UNSUCCESS)
        }
    } 

    return (
        <>
            <Switch>
                <ProtectedRoute 
                    exact path={path}
                    render={(props) => 
                        <AdminPage hangleLogout={hangleLogout} {...props}/>
                    }
                />
                <Route 
                    path="/login"
                    render={(props) => {
                        console.log('dasdas')
                        return (
                        <LoginPage hangleLogin={hangleLogin} {...props}/>)}
                    }
                />
                <ProtectedRoute 
                    path="/edit/:id"
                    render={(props) => 
                        <AdminEditProduct {...props}/>
                    }
                />
            </Switch>
        </>
    );
}

export default withRouter(Main);