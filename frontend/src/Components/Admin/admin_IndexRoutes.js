import { Switch, withRouter } from 'react-router-dom'
import React, { Component, useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { fetchAdminLogin, fetchAdminLogout } from './utils/adminUtils'
import { RouteWithSubRoutes } from '../utils/myRoutes'

const types = {
    SUCCESS: 1,
    UNSUCCESS: 0
}

const Index = ({ routes }) => {

    const [cookies, setCookie, removeCookie] = useCookies('')
    const [status, setStatus] = useState(cookies.user ? types.SUCCESS : types.UNSUCCESS)

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
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Switch>
            
        </>
    );
}

export default withRouter(Index);