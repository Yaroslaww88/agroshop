import React, { Component, useState, useEffect } from 'react'
import LoginPage from './LoginPage'
import AdminPage from './AdminPage'
import { useCookies } from 'react-cookie'
import { fetchAdminLogin, fetchAdminLogout } from '../utils'

const types = {
    SUCCESS: 1,
    UNSUCCESS: 0
}

const MainAdmin = ({ history }) => {

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
            {status ? 
                <AdminPage hangleLogout={hangleLogout}/>
            : <LoginPage hangleLogin={hangleLogin}/>}
            
        </>
    );
}

export default MainAdmin;